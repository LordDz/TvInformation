import * as React from 'react';
import styled from "styled-components";
import { FunctionComponent} from 'react';
import { Searchbar } from './searchbar';
import  { isEmpty } from 'lodash';

export interface IProps {
  onFoundShows: any;
}

export const SearchContainer: FunctionComponent<IProps> = ({ onFoundShows }) => {

async function apiSearch(searchText: string) {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${searchText}`
  );
  const result = await response.json();
  console.log("result: ", result);
  return result;
}

const onSearch = async (searchText: string) => {
  if (!isEmpty(searchText)) {
    const results = await apiSearch(searchText);
    if (!isEmpty(results)) {
      onFoundShows(results);
    }
  }
}

 return (
  <Container>
    <h2>
      TV Information
    </h2>
  <Searchbar onSearch={onSearch} />
  </Container>
)
}
const Container = styled.div`
 h2 {
  color: orange;
 }
`;