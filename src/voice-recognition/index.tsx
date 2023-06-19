import { pexelPictures } from './external-services/Pictures';
import { recorder } from './external-services/Recorder';
import { speechSynth } from './external-services/SpeechSynth';
import {
  VoiceRecognitionContext,
  VoiceRecognitionServiceContainer,
} from './service-container/ServiceContainerContext';
import { VoiceRecognition } from './VoiceRecognition';

const context: VoiceRecognitionServiceContainer = {
  speechSynth,
  recorder,
  pictures: pexelPictures,
};

export const VoiceRecognitionTraining = () => {
  return (
    <VoiceRecognitionContext.Provider value={context}>
      <VoiceRecognition words={['voiture', 'bus', 'train']} />
    </VoiceRecognitionContext.Provider>
  );
};
