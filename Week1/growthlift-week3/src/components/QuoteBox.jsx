import { useState, useEffect } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then(r => r.json())
      .then(data => {
        setQuote(data.quote);
        setLoading(false);
      });
  }, []);

  return loading ? <p>Loading...</p> : <p>"{quote}"</p>;
}

export default QuoteBox;