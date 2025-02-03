// Chuck Norris Quote component
// loads & displays quotes from https://api.chucknorris.io
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import chuckPic from "../../public/chuckNorris.jpg";
import { fetchQuote } from "../util/fetchQuote";


export default function Quote() {
  // state for quote handling
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // handle quote fetching
  const getQuote = async () => {
    setIsLoading(true);
    setError("");

    try {
      const fetchedQuote = await fetchQuote();
      setQuote(fetchedQuote); // no error, set the quote
    } catch (err) {
      setError(err as string); // error, set the error
    } finally {
      setIsLoading(false); // done loading
    }
  };

  // fetch initial quote
  useEffect(() => {
    getQuote();
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
        {isLoading ? (
            <p className="text-xl italic text-gray-500 animate-pulse">Loading Quote...</p>
          ) : error ? (
            <p className="text-xl italic text-red-500">{error}</p>
          ) : (
            <p className="text-xl italic">{quote}</p>
        )}
        <button
          onClick={getQuote}
          className="mt-4 px-4 py-2 rounded bg-transparent border "
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
