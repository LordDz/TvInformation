import * as React from 'react';
import styled from "styled-components";
import { FunctionComponent, ReactNode, useCallback, useMemo} from 'react';
import { Searchbar } from './searchbar';
import  { isEmpty } from 'lodash';

export interface IProps {
  onFoundShows: any;
}




export const SearchContainer: FunctionComponent<IProps> = ({ onFoundShows }) => {

async function apiSearch(searchText: string) {
  console.log("searchText: ", searchText);
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${searchText}`
  );
  const result = await response.json();
  console.log("result: ", result)
  return result;
}

const onSearch = async (searchText: string) => {
  if (!isEmpty(searchText)) {
    const results = await apiSearch(searchText);
    console.log("results: ", results);
    if (!isEmpty(results)) {
      onFoundShows(results);
    }
  }
}

 return (
  <Container>
    <h2>
      Search
    </h2>
  <Searchbar onSearch={onSearch} />
  </Container>
)
}
const Container = styled.div`

`;