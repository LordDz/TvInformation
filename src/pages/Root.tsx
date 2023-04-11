import * as React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchView } from "./SearchView";
import { DetailedView } from "./DetailedView";

export interface IProps {}

export type TShow = {
  name: string;
  summary: string;
  type: string;
  url: string;
  ended: string;
  image?: {
    medium?: string;
    original?: string;
  };
};

export type TResult = {
  score: number;
  show: TShow;
};

export const Root: FunctionComponent<IProps> = ({}) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchView />,
    },
    {
      path: "/*",
      element: <DetailedView />,
    },
  ]);

  return (
    <MainBody>
      <MainContainer>
        <RouterProvider router={router} />
      </MainContainer>
    </MainBody>
  );
};

const MainBody = styled.main`
  background-color: rgb(26 26 26);
`;

const MainContainer = styled.section`
  max-width: 1440px;
  margin: auto;
  margin-top: 100px;
  background-color: #141414;
  padding: 2em;
`;
