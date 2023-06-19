import { render, within, screen, waitFor } from '@testing-library/react';
import { Word } from './Word';
import { TestContainer } from '../../tests/utils';

describe('Word', () => {
  it('should display the word name', async () => {
    render(
      <TestContainer>
        <Word word={'chat'} />
      </TestContainer>,
    );
    await waitFor(() => {
      expect(
        within(screen.queryByTestId('chat')!).getByText('chat'),
      ).toBeInTheDocument();
    });
  });

  it('should display a button to hear', async () => {
    render(
      <TestContainer>
        <Word word={'chat'} />
      </TestContainer>,
    );

    await waitFor(() => {
      expect(
        within(screen.queryByTestId('chat')!).queryByTestId('listen-chat'),
      ).toBeInTheDocument();
    });
  });

  it('should display a Picture component', async () => {
    render(
      <TestContainer>
        <Word word={'chat'} />
      </TestContainer>,
    );

    await waitFor(() => {
      expect(
        within(screen.queryByTestId('chat')!).getByTestId('img-chat'),
      ).toBeInTheDocument();
    });
  });

  it('should display VoiceRecognition component', async () => {
    render(
      <TestContainer>
        <Word word={'chat'} />
      </TestContainer>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('chat-speech-recorder')).toBeInTheDocument();
    });
  });
});
