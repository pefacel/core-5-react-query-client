import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";

export default function FetchReactQuery() {
  const queryClient = useQueryClient();

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async function postData(url = "", body = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  const mutation = useMutation((body) => postData("api/cards", body), {
    onSuccess: (data) => {
      const oldCards = queryClient.getQueryData(["cards"]);
      queryClient.setQueryData(["cards"], [...oldCards, data]);
    },
  });

  const router = useRouter();

  const propsReactQuery = useQuery(["cards"], () => getData("api/cards"));

  const { isLoading, isError, isSuccess, data } = propsReactQuery;
  return (
    <>
      <button
        className="p-7 border border-red-300"
        onClick={() => router.push("/")}
      >
        Envíame al Index{" "}
      </button>

      {isLoading && <p> Loading...</p>}
      {isError && <p> ERROR!</p>}

      {isSuccess && data.map((card) => <p key={card._id}> {card.name} </p>)}

      {data === null && <p> Sin data aun</p>}

      <button
        onClick={() => {
          mutation.mutate({ name: "Card desde react query 7" });
        }}
      >
        ADD SOME CARD
      </button>

      <div>fetch-react-query.js</div>
    </>
  );
}
