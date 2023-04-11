import * as React from "react";
import styled from "styled-components";
import { FunctionComponent } from "react";
import { TShow } from "../../pages/SearchView";

export interface IProps {
  show: TShow;
}

export const TvCard: FunctionComponent<IProps> = ({ show }) => {
  return (
    <Card href={`/${show.id}`} target="_blank">
      <div>
        <div className="info">
          <h2>{show.name}</h2>
        </div>
        <img src={show.image?.medium ?? ""} alt={show.image?.medium ?? "N/A"} />
      </div>
    </Card>
  );
};

const Card = styled.a`
  width: 210px;
  height: 360px;
  border-radius: 2px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  text-decoration: none;

  :hover {
    transform: translateY(5px);
    :before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
    background: rgb(100 97 97 / 13%);
    padding: 10px;
    border-radius: 2px;

    h2 {
      margin: 0px;
      text-shadow: 1px 1px rgb(16 16 16);
    }
  }
`;
