import { speechSynth } from './voice-recognition/external-services/SpeechSynth';
import { voiceRecognition } from './voice-recognition/external-services/VoiceRecognition';

import {
  ServiceContainer,
  ServiceContainerContext,
} from './service-container/ServiceContainerContext';

import { VoiceRecognition } from './voice-recognition/VoiceRecognition';

const context: ServiceContainer = {
  voiceRecognition,
  speechSynth,
};

function App() {
  return (
    <ServiceContainerContext.Provider value={context}>
      <VoiceRecognition words={['voiture', 'bus', 'train']} />
    </ServiceContainerContext.Provider>
  );
}

export default App;
