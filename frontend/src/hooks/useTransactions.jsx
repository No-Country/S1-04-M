import { useEffect, useState } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [urlReport, setUrlReport] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("all");
  const [date, setDate] = useState(undefined);

  useEffect(() => {
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
