import styled from 'styled-components';

export const StyledCell = styled.div<{ isActive: boolean }>`
  width: 40px;
  height: 20px;
  color: red;

  background-color: ${({ isActive }) => (isActive ? 'green' : 'white')};
  ${({ isActive }) => !isActive && `transition: background-color 1s ease`};

  border: 1px grey solid;
`;
