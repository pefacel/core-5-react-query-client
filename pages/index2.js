import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <button className="p-7 border border-red-300" onClick={() => router.push("/fetch-react-query")}>
      Envíame a  fetch-react-query{" "}
      </button>

      <button className="p-7 border border-red-300" onClick={() => router.push("/normal-fetch")}>
        Envíame a Normal Fetch{" "}
      </button>
    </>
  );
}
