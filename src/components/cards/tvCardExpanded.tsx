import * as React from "react";
import styled from "styled-components";
import { FunctionComponent } from "react";
import { TShow } from "../../pages/SearchView";
import { isEmpty } from "lodash";

export interface IProps {
  show: TShow;
}

export const TvCardExpanded: FunctionComponent<IProps> = ({ show }) => (
  <Card href={show.url} target="_blank">
    <CardLeft>
      <img src={show.image?.medium ?? ""} alt={show.image?.medium ?? "N/A"} />
    </CardLeft>
    <CardRight>
      <h2>{show.name}</h2>
      <summary>{!isEmpty(show.summary) ? show.summary.replace(/<\/?[^>]+(>|$)/g, "") : "Summary not available."}</summary>
    </CardRight>
  </Card>
);

const Card = styled.a`
  color: white;
  border-radius: 2px;
  border-radius: 15px;
  padding: 1.5rem;
  background: grey;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  text-decoration: none;
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 20px;
`;

const CardLeft = styled.div`
  img {
    width: 210px;
    height: 360px;
    border-radius: 15px;
  }
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;
