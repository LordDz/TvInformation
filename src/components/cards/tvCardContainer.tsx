import * as React from "react";
import styled from "styled-components";
import { FunctionComponent } from "react";
import { map } from "lodash";
import { TResult, TShow } from "../../pages/SearchView";
import { TvCard } from "./tvCard";

export interface IProps {
  searchResults: any;
}

export const TvCardContainer: FunctionComponent<IProps> = ({ searchResults }) => {
  return (
    <Wrapper>
      <Container>
        {map(searchResults, (result: TResult, key: string) => (
          <TvCard key={key} show={result.show} />
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2em;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 250px));
  gap: 30px;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
