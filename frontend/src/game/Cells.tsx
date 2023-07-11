import { Flex } from '../views/Flex';
import { Cell } from './Cell';

const NUMBER_OF_CELLS = 5;

export const Cells = () => {
  return (
    <Flex>
      {Array.from(Array(NUMBER_OF_CELLS).keys()).map(() => (
        <Cell isActive={true} />
      ))}
    </Flex>
  );
};
