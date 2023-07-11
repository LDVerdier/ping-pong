interface GameInterface {
  pressButton: (buttonId: number) => void;
}

export class Game implements GameInterface {
  // should orchestrate the whole game
  // listens to button events
  // has different possible states
  // when a button is pressed, fires matching event of the current state
  pressButton(buttonId: number): string {
    return `button ${buttonId} was pressed`;
  }
}

export class Button {
  constructor(
    private readonly game: GameInterface,
    private readonly id: number,
  ) {}
  // should emit event when is clicked
  press() {
    this.game.pressButton(this.id);
  }
}

export class ScoreTracker {
  private score: Record<number, number>;
  constructor(playerOneId: number, playerTwoId: number) {
    this.score = {
      [playerOneId]: 0,
      [playerTwoId]: 0,
    };
  }

  incrementPlayerScore(playerId: number) {
    this.score[playerId] = this.score[playerId] + 1;
  }

  getScore(): Record<number, number> {
    return this.score;
  }
}
