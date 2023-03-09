import React from "react";

const Quote = ({ quote, loading, error, karofel }) => (
  <div>
    <button disabled={loading} onClick={karofel}>
      Pobierz cytat
    </button>
    {quote && (
      <p>
        {quote.quote} / {quote.author}
      </p>
    )}
    {loading && "Ładuję cytat..."}
    {error && error}
  </div>
);

export default Quote;
