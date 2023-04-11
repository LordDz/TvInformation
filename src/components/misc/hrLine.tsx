import * as React from 'react';
import styled from "styled-components";
import { FunctionComponent} from 'react';

export interface IProps {

}

export const HrLine: FunctionComponent<IProps> = ({ }) => <Hr>
</Hr>

const Hr = styled.hr`
  width: 100%;
  color: red;
`;