import { Test, TestingModule } from '@nestjs/testing';
import { TextReorderService } from './TextReorder.service';
import { TextReorders } from './TextReorders';

export class InMemoryTextReorders implements TextReorders {
  async getAll() {
    return [
      {
        id: 1,
        title: 'Article sud-ouest',
        orderedSentences: ['a', 'b'],
        randomizedSentences: ['b', 'a'],
      },
    ];
  }
}

describe('TextReorderService', () => {
  let textReorderService: TextReorderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TextReorderService,
        {
          provide: TextReorders,
          useClass: InMemoryTextReorders,
        },
      ],
    }).compile();

    textReorderService = module.get<TextReorderService>(TextReorderService);
  });

  it('should return text reorders', async () => {
    expect(await textReorderService.getAll()).toEqual(
      expect.arrayContaining([
        {
          id: 1,
          title: 'Article sud-ouest',
          orderedSentences: ['a', 'b'],
          randomizedSentences: ['b', 'a'],
        },
      ]),
    );
  });
});
