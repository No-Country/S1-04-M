import { useEffect, useState } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [urlReport, setUrlReport] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("all");
  const [date, setDate] = useState(undefined);

  useEffect(() => {
<<<<<<< HEAD
    if (mode === "forMonth" && date !== undefined) {
      setUrlReport("");
      console.log(`http://localhost:4000/api/transactions/date/${date}`);
      setIsLoading(true);
      fetch(`http://localhost:4000/api/transactions/date/${date}`)
        .then((res) => res.json())
        .then((json) => {
          setTransactions(json[0]);
          setUrlReport(json[1]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
        });
      return;
    }
    if (mode === "all") {
      setUrlReport("");
     /*  console.log("http://localhost:4000/api/transactions/"); */
      setIsLoading(true);
      fetch("http://localhost:4000/api/transactions/")
        .then((res) => res.json())
        .then((json) => {
          setTransactions(json);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
=======
    const url =
      mode === "forMonth" && date !== undefined
        ? `http://localhost:4000/api/transactions/date/${date}`
        : mode === "all"
        ? "http://localhost:4000/api/transactions/"
        : "";

    if (!url) return;

    setUrlReport("");
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setTransactions(json[0]);
        setUrlReport(json[1]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
    return;
>>>>>>> 14b0126a62424d630cbc96bdfc0b6fc8c63bb25b
  }, [date, mode]);

  return {
    transactions,
    isError,
    isLoading,
    urlReport,
    mode,
    setMode,
    setDate,
  };
}
