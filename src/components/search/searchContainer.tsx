import * as React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { FunctionComponent, useState} from 'react';
import { Searchbar } from './searchbar';
import { isEmpty } from 'lodash';
import { ErrorMessage } from '../misc/errorMessage';


export interface IProps {
  onFoundShows: any;
}

const timeout = 1000 * 15;

export const SearchContainer: FunctionComponent<IProps> = ({ onFoundShows }) => {
  const [errorMsg, setErrorMsg] = useState<string>();
  
  async function apiSearch(searchText: string) {
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`, {timeout: timeout})
      .then((response: any) => {
          console.log("response: ", response.data);
          console.log("response json: ", response.data);
          onFoundShows(response.data);
      })
      .catch((error: any)  => {
          console.error("error: ", error);
          setErrorMsg(error.message ?? "There was an error when fetching the data.");
      });
  }

  const onSearch = async (searchText: string) => {
    if (!isEmpty(searchText)) {
      setErrorMsg("");
      apiSearch(searchText);
    }
  }

 return (
  <Container>
    <h2>
      TV Information
    </h2>
    {!isEmpty(errorMsg) && <ErrorMessage message={errorMsg} /> }
  <Searchbar onSearch={onSearch} />
  </Container>
)
}
const Container = styled.div`
 h2 {
  color: orange;
 }
`;