import React, { FunctionComponent } from 'react';
import styled from '@themes/styled';

const StyledSvg = styled.svg`
  margin: 10px 0px 0px 16px;
  fill: ${({ theme }) => theme.palette.CLOSE_RED};
`;

const IssueClosedIcon: FunctionComponent = () => (
  <StyledSvg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"
    />
  </StyledSvg>
);

export default IssueClosedIcon;
