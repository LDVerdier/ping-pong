import { useEffect, useState } from 'react';

import { Cell as StyledCell } from '../views/Cell';

export const Cell = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [isActive]);

  return <StyledCell isActive={isActive} onClick={() => setIsActive(true)} />;
};
