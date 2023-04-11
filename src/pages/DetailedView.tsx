import * as React from 'react';
import { FunctionComponent, useEffect, useState } from 'react';
import { TvCardContainer } from '../components/cards/tvCardContainer';
import { HrLine } from '../components/misc/hrLine';
import { SearchContainer } from '../components/search/searchContainer';
import styled from 'styled-components';
import { TvCardExpanded } from '../components/cards/tvCardExpanded';
import { useParams } from 'react-router-dom';
import { isEmpty, replace } from 'lodash';

export interface IProps {
}


export const DetailedView: FunctionComponent<IProps> = ({  }) => {
  const [searchResult, setSearchResult] = useState<any>();

   const onFoundShow = (results: any) => {
    setSearchResult(results);
  }

  async function apiSearch(id: string) {
    const response = await fetch(
      `https://api.tvmaze.com/shows/${id}`
    );
    const result = await response.json();
    console.log("tv show result: ", result);
    return result;
  }
  
  const searchId = async (searchText: string) => {
    if (!isEmpty(searchText)) {
      const results = await apiSearch(searchText);
      if (!isEmpty(results)) {
        onFoundShow(results);
      }
    }
  }

  useEffect(() => {
    const id = replace(window.location.pathname, "/", "");
    if (id && !isEmpty(id)) {
        searchId(id);
    }
   }, []);

  return (
  <>
  {!isEmpty(searchResult) ? 
    <TvCardExpanded show={searchResult} /> : <h1>Show not found</h1>
    }
  </>
  )
}

