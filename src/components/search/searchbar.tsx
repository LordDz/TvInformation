import * as React from "react";
import styled from "styled-components";
import { FunctionComponent } from "react";
import { debounce } from "lodash";

export interface IProps {
  onSearch: any;
}

const searchDelay = 200;

export const Searchbar: FunctionComponent<IProps> = ({ onSearch }) => {
  const debounceSearch = debounce((value) => {
    onSearch(value);
  }, searchDelay);

  const onChange = (e: any) => {
    debounceSearch(e.target.value);
  };
  return <InputText type="text" placeholder="Search for your favorite tv shows" onChange={onChange} />;
};

const InputText = styled.input`
  width: 100%;
  height: 40px;
  font-size: 32px;
  border: none;
  border-radius: 2px;

  outline: none;
`;
