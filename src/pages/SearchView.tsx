import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { TvCardContainer } from '../components/cards/tvCardContainer';
import { HrLine } from '../components/misc/hrLine';
import { SearchContainer } from '../components/search/searchContainer';
import styled from 'styled-components';

export interface IProps {
}

export type TShow = {
    name: string;
    id: number;
    summary: string;
    type: string;
    url: string;
    ended: string;
    image?: {
      medium?: string;
      original?: string;
    }
}

export type TResult = {
  score: number;
  show: TShow;
};

export const SearchView: FunctionComponent<IProps> = ({  }) => {
  const [searchResults, setSearchResults] = useState<any>();

  const onFoundShows = (results: any) => {
    setSearchResults(results);
  }
  
  return (
    <>
      <SearchContainer onFoundShows={onFoundShows} />
      <HrLine />
      <TvCardContainer searchResults={searchResults} />
    </>
  )
}