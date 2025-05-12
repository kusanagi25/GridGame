import React, { useState, useEffect } from 'react';
import './App.css';

const GRID_SIZE = 50;
const START = { x: 0, y: 0 };
const END = { x: 49, y: 49 };

export const TILE_EFFECTS = {
  Blank: { health: 0, moves: -1 },
  Speeder: { health: -5, moves: 0 },
  Lava: { health: -50, moves: -10 },
  Mud: { health: -10, moves: -5 },
};

const getRandomTile = () => {
  const types = ['Blank', 'Speeder', 'Lava', 'Mud'];
  return types[Math.floor(Math.random() * types.length)];
};

function App() {
  const [grid, setGrid] = useState([]);
  const [position, setPosition] = useState(START);
  const [health, setHealth] = useState(200);
  const [moves, setMoves] = useState(450);

  // Initialize the grid on mount
  useEffect(() => {
    const newGrid = Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null).map(() => getRandomTile())
    );
    newGrid[START.y][START.x] = 'Blank';
    newGrid[END.y][END.x] = 'Blank';
    setGrid(newGrid);
    // eslint-disable-next-line
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (health <= 0 || moves <= 0) return;

      let { x, y } = position;
      if (e.key === 'ArrowUp' && y > 0) y--;
      if (e.key === 'ArrowDown' && y < GRID_SIZE - 1) y++;
      if (e.key === 'ArrowLeft' && x > 0) x--;
      if (e.key === 'ArrowRight' && x < GRID_SIZE - 1) x++;

      const tile = grid[y][x];
      const effect = TILE_EFFECTS[tile];

      setHealth((h) => Math.max(h + effect.health, 0));
      setMoves((m) => Math.max(m + effect.moves, 0));
      setPosition({ x, y });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [position, grid, health, moves]);

  return (
    <div className="App">
      <h1>Grid Game</h1>
      <p>Health: {health}</p>
      <p>Moves: {moves}</p>
      <div className="grid">
        {grid.map((row, rowIndex) =>
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => {
              const isPlayer = position.x === colIndex && position.y === rowIndex;
              const isEnd = END.x === colIndex && END.y === rowIndex;
              return (
                <div
                  key={colIndex}
                  className={`cell ${cell.toLowerCase()} ${isPlayer ? 'player' : ''} ${isEnd ? 'end' : ''}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;