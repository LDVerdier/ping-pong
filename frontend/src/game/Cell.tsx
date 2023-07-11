import { StyledCell as StyledCell } from '../views/Cell';

export const Cell = ({ isActive }: { isActive: boolean }) => {
  return <StyledCell isActive={isActive} />;
};
