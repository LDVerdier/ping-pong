import { create, StoreApi, UseBoundStore } from 'zustand';

import { TextReorder, Trainings, WordRecognition } from '../domain/Backend';

type TrainingsStoreState = {
  textReorders: TextReorder[];
  wordRecognitions: WordRecognition[];
  setTrainings: (trainings: Trainings) => void;
};

type UseStore = UseBoundStore<StoreApi<TrainingsStoreState>>;

export const createUseStore = (
  args: Partial<TrainingsStoreState> = {},
): UseStore => {
  return create<TrainingsStoreState>((set) => ({
    textReorders: args.textReorders ?? [],
    wordRecognitions: args.wordRecognitions ?? [],
    setTrainings: (trainings: Trainings) =>
      set(() => ({
        textReorders: trainings.textReorders,
        wordRecognitions: trainings.wordRecognitions,
      })),
  }));
};

export type UseTrainingsStore = () => {
  textReorders: TextReorder[];
  wordRecognitions: WordRecognition[];
  setTrainings: (trainings: Trainings) => void;
};

const useStore = createUseStore();
export const useTrainingsStore: UseTrainingsStore = () => {
  const textReorders = useStore((state) => state.textReorders);
  const wordRecognitions = useStore((state) => state.wordRecognitions);
  const setTrainings = useStore((state) => state.setTrainings);

  return {
    textReorders,
    wordRecognitions,
    setTrainings,
  };
};
