import { useContext, useState } from 'react';
import { ServiceContainerContext } from '../service-container/ServiceContainerContext';

export const VoiceRecognizer = () => {
  const [buttonText, setButtonText] = useState('click me');

  const { voiceRecognition } = useContext(ServiceContainerContext);

  const handleClick = () => {
    if (voiceRecognition.recognize()) {
      setButtonText('it is a match!');
    } else {
      setButtonText('not a match!');
    }
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        {buttonText}
      </button>
    </div>
  );
};
