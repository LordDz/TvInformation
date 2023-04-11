import * as React from 'react';
import styled from "styled-components";
import { FunctionComponent} from 'react';

export interface IProps {
  message?: string;
}

export const ErrorMessage: FunctionComponent<IProps> = ({ message }) => <TextError>
  <p>{message}</p>
</TextError>

const TextError = styled.div`
  background: red;
  color: white;
  position: absolute;
  top: 20px;
  width: 50em;
  height: 100px;
  margin: auto;
  padding: 10px;
  border-radius: 2px;
`;