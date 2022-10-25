import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NormalFetch() {
  const router = useRouter();

  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setData(null);

    getData("http://localhost:8000/api/cards")
      .then((dataFetching) => {
        setData(dataFetching);
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

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

  async function addCard(body) {
    await postData("http://localhost:8000/api/cards", body);

// si es exitosa, guarde como último la nueva carta, además de mostrar el loading, error, 




  }
// tarea 
// 1. Terminar el addCard
// 2. Botón -> Input y guarde lo que ingrese



  return (
    <>
      <div>normal-fetch</div>
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
<input         className="p-7 border border-indigo-300"
 type='text' />
      <button
        onClick={() =>
          addCard({
            name: "carta 878",
          })
        }
      >
        ADD SOME CARD
      </button>
    </>
  );
}
