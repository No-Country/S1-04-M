import { useEffect, useState } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [urlReport, setUrlReport] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("all");
  const [date, setDate] = useState(undefined);
  const urls = {
    urlLocal: "http://localhost:4000",
    urlHeroku: "https://bankforyouback.herokuapp.com",
  };

  useEffect(() => {
    const url =
      mode === "forMonth" && date !== undefined
        ? `${urls.urlHeroku}/api/transactions/date/${date}`
        : mode === "all"
        ? `${urls.urlHeroku}/api/transactions/`
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
