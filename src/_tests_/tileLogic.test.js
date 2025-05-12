import { TILE_EFFECTS } from '../App';

describe('Tile Effects', () => {
  it('should apply correct effects for Blank tile', () => {
    expect(TILE_EFFECTS.Blank).toEqual({ health: 0, moves: -1 });
  });

  it('should apply correct effects for Lava tile', () => {
    expect(TILE_EFFECTS.Lava).toEqual({ health: -50, moves: -10 });
  });
});