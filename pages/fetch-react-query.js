import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";

export default function FetchReactQuery() {
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

  const mutation = useMutation((body) => {
    return postData("http://localhost:8000/api/cards", body);
  });

  console.log(mutation)

  const router = useRouter();

  const propsReactQuery = useQuery(["cards"], () =>
    getData("http://localhost:8000/api/cards")
  );

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
          mutation.mutate({ name: "Card desde react query 1" });
        }}
      >
        ADD SOME CARD
      </button>

      <div>fetch-react-query.js</div>
    </>
  );
}
