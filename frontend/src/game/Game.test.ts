import { Game, ScoreTracker } from './Game';

describe('Game', () => {
  it('should start the game', () => {
    const game = new Game();
  });
});

describe('ScoreTracker', () => {
  it('should increment player score', () => {
    const scoreTracker = new ScoreTracker(0, 1);

    scoreTracker.incrementPlayerScore(0);

    expect(scoreTracker.getScore()).toEqual({ 0: 1, 1: 0 });
  });
});
