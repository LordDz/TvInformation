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

export const SearchRoot: FunctionComponent<IProps> = ({  }) => {
  const [searchResults, setSearchResults] = useState<any>();

  const onFoundShows = (results: any) => {
    console.log("onFoundShows: ", results);
    setSearchResults(results);
  }
  
return (
<MainBody>
<MainSearch>

<SearchContainer onFoundShows={onFoundShows} />
 <HrLine />
  <TvCardContainer searchResults={searchResults} />
</MainSearch>

</MainBody>
) 
}

const MainBody = styled.main`

background-color: rgb(26 26 26);

`;

const MainSearch = styled.section`
  width: 60%;
  margin: auto;
  background-color: #141414;
  padding: 2em;
`;