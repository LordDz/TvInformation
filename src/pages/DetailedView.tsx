import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";

import { TvCardExpanded } from "../components/cards/tvCardExpanded";
import { isEmpty, replace } from "lodash";
import { ErrorMessage } from "../components/misc/errorMessage";

export interface IProps {}

const timeout = 1000 * 15;

export const DetailedView: FunctionComponent<IProps> = ({}) => {
  const [searchResult, setSearchResult] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const onFoundShow = (results: any) => {
    setSearchResult(results);
  };

  async function apiSearch(id: string) {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`, { timeout: timeout })
      .then((response: any) => {
        console.log("response: ", response.data);
        console.log("response json: ", response.data);
        onFoundShow(response.data);
      })
      .catch((error: any) => {
        console.error("error: ", error);
        setErrorMsg(error.message ?? "There was an error when fetching the data.");
      });
  }

  const searchId = async (searchText: string) => {
    if (!isEmpty(searchText)) {
      setErrorMsg("");
      apiSearch(searchText);
    }
  };

  useEffect(() => {
    const id = replace(window.location.pathname, "/", "");
    if (id && !isEmpty(id)) {
      searchId(id);
    }
  }, []);

  return (
    <>
      {!isEmpty(errorMsg) && <ErrorMessage message={errorMsg} />}
      {!isEmpty(searchResult) ? <TvCardExpanded show={searchResult} /> : <h1>Show not found</h1>}
    </>
  );
};
