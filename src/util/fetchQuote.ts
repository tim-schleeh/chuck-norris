// lib/fetchQuote.js
// fetch quote from API
// see docs at https://api.chucknorris.io/
  // response schema:
  //   {
  //     "categories": [],
  //     "created_at": "2020-01-05 13:42:21.795084",
  //     "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
  //     "id": "Xnt8KedKQ4uUFhVdsZBcvA",
  //     "updated_at": "2020-01-05 13:42:21.795084",
  //     "url": "https://api.chucknorris.io/jokes/Xnt8KedKQ4uUFhVdsZBcvA",
  //     "value": "Chuck Norris doesn't do pushups- Chuck Norris pushes the earth down!"
  // }

// lib/fetchQuote.ts
export const fetchQuote = async (): Promise<string> => {
  try {
    // fetch from api
    const res = await fetch("https://api.chucknorris.io/jokes/random?category=dev");

    // check if result is ok
    if (!res.ok) {
      throw new Error(`Error on fetching quote: ${res.statusText}`);
    }

    // read the result and parse to json
    const data: { value: string } = await res.json();

    return data.value;
  } catch (err) {
    throw err instanceof Error ? err.message : "Unknown Error";
  }
};
