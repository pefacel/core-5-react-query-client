import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NormalFetch() {
  const router = useRouter();

  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentCard, setCurrentCard] = useState("");

  const [isError, setIsError] = useState(false);

  const [name, setName] = useState("");

  const [isUpdating, setisUpdating] = useState(false);

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

  async function putData(url = "", body = {}) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  async function addCard(body) {
    await postData("http://localhost:8000/api/cards", body);
  }

  function updateCard(card) {
    setCurrentCard(card), setisUpdating(true);

    setName(card.name);
  }

  async function fetchUpdateCard() {
    let body = {
      _id: currentCard._id,
      name: name,
    };

    let url = "http://localhost:8000/api/cards/" + currentCard._id;
    try {
      await putData(url, body);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(currentCard);
  }, [currentCard]);

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
      {isSuccess &&
        data.map((card) => (
          <div key={card._id}>
            <p> {card.name} </p>

            <button className="text-red-500" onClick={() => updateCard(card)}>
              {" "}
              update {card.name}{" "}
            </button>
          </div>
        ))}
      {data === null && <p> Sin data aun</p>}
      Enter a card name
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-7 border border-indigo-300"
        type="text"
      />
      {isUpdating ? (
        <button onClick={fetchUpdateCard} >UPDATING CARD</button>
      ) : (
        <button
          onClick={() =>
            addCard({
              name: "carta 878",
            })
          }
        >
          ADD SOME CARD
        </button>
      )}
    </>
  );
}
