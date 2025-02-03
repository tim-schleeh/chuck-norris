// Chuck Norris Quote component
// loads & displays quotes from https://api.chucknorris.io
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import chuckPic from "../../public/chuckNorris.jpg";

export default function Quote() {
  const [quote, setQuote] = useState("");

  // fetch quote from API
  // response format is:
  //   {
  //     "categories": [],
  //     "created_at": "2020-01-05 13:42:21.795084",
  //     "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
  //     "id": "Xnt8KedKQ4uUFhVdsZBcvA",
  //     "updated_at": "2020-01-05 13:42:21.795084",
  //     "url": "https://api.chucknorris.io/jokes/Xnt8KedKQ4uUFhVdsZBcvA",
  //     "value": "Chuck Norris doesn't do pushups- Chuck Norris pushes the earth down!"
  // }
  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      const data = await response.json();
      setQuote(data.value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex sm:flex-row flex-col gap-4 w-full text-center h-full">
      <div className="flex flex-col h-1/2 sm:w-1/3 w-full sm:h-full">
        <div className="relative sm:h-full sm:w-full h-full min-h-[100px] sm:min-h-0">
          <Image
            src={chuckPic}
            alt="Yes, Chuck Norris can"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-grow sm:flex-grow-0 flex-col sm:w-2/3 w-full items-center justify-center">
        <p className="text-xl italic">{quote}</p>
        <button
          onClick={fetchQuote}
          className="mt-4 px-4 py-2 rounded bg-transparent border "
        >
          Neues Zitat
        </button>
      </div>
    </div>
  );
}
