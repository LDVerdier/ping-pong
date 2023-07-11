import styled from 'styled-components';

export const Cell = styled.div<{ isActive: boolean }>`
  width: 40px;
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'white')};
  ${({ isActive }) => !isActive && `transition: background-color 1s ease`}
`;
