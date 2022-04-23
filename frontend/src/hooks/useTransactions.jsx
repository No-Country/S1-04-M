import { useEffect, useState } from "react";


export default function useTransactions(userID) {
  const [transactions, setTransactions] = useState([]);
  const [urlReport, setUrlReport] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("all");
  const [date, setDate] = useState(undefined);
  const urls = {
    urlLocal: "http://localhost:4000",
    urlHeroku: "https://bankforyoufront.herokuapp.com",
  };
  const currentService = urls.urlLocal;

  useEffect(() => {
    if (!userID) return;
    const url =
      mode === "forMonth" && date !== undefined
        ? `${currentService}/api/transactions2/user/byId/${userID}/date/${date}`
        : mode === "all"
        ? `${currentService}/api/transactions2/user/byId/${userID}`
        : "";

    console.log(url);
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
  }, [date, mode, userID]);

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
