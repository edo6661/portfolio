"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

const SnakeGame = () => {
  const [, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [congratsVisible, setCongratsVisible] = useState(false);

  const gameScreenRef = useRef<HTMLDivElement>(null);
  const snakeRef = useRef<Position[]>([
    { x: 10, y: 12 }, { x: 10, y: 13 }, { x: 10, y: 14 },
    { x: 10, y: 15 }, { x: 10, y: 16 }, { x: 10, y: 17 },
    { x: 10, y: 18 }, { x: 11, y: 18 }, { x: 12, y: 18 },
    { x: 13, y: 18 }, { x: 14, y: 18 }, { x: 15, y: 18 },
    { x: 15, y: 19 }, { x: 15, y: 20 }, { x: 15, y: 21 },
    { x: 15, y: 22 }, { x: 15, y: 23 }, { x: 15, y: 24 }
  ]);
  const foodRef = useRef<Position>({ x: 10, y: 5 });
  const directionRef = useRef('up');
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setCongratsVisible(false);
    gameIntervalRef.current = setInterval(moveSnake, 50);
  };

  const startAgain = () => {
    setGameStarted(false);
    setGameOver(false);
    setCongratsVisible(false);
    setScore(0);
    snakeRef.current = [
      { x: 10, y: 12 }, { x: 10, y: 13 }, { x: 10, y: 14 },
      { x: 10, y: 15 }, { x: 10, y: 16 }, { x: 10, y: 17 },
      { x: 10, y: 18 }, { x: 11, y: 18 }, { x: 12, y: 18 },
      { x: 13, y: 18 }, { x: 14, y: 18 }, { x: 15, y: 18 },
      { x: 15, y: 19 }, { x: 15, y: 20 }, { x: 15, y: 21 },
      { x: 15, y: 22 }, { x: 15, y: 23 }, { x: 15, y: 24 }
    ];
    foodRef.current = { x: 10, y: 5 };
    directionRef.current = 'up';
    if (gameIntervalRef.current) {
      clearInterval(gameIntervalRef.current);
    }
    render();
  };

  const moveSnake = () => {
    const newSnake = [...snakeRef.current];
    const head = { ...newSnake[0] };

    switch (directionRef.current) {
      case 'up': head.y--; break;
      case 'down': head.y++; break;
      case 'left': head.x--; break;
      case 'right': head.x++; break;
    }

    if (
      head.x < 0 || head.x >= 24 ||
      head.y < 0 || head.y >= 40 ||
      newSnake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current);
      }
      setGameOver(true);
      setGameStarted(false);
      return;
    }

    newSnake.unshift(head);

    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      setScore(prev => {
        const newScore = prev + 1;
        if (newScore === 10) {
          if (gameIntervalRef.current) {
            clearInterval(gameIntervalRef.current);
          }
          setCongratsVisible(true);
          setGameStarted(false);
          foodRef.current = { x: -1, y: -1 };
        } else {
          foodRef.current = {
            x: Math.floor(Math.random() * 24),
            y: Math.floor(Math.random() * 40)
          };
        }
        return newScore;
      });
    } else {
      newSnake.pop();
    }

    snakeRef.current = newSnake;
    render();
  };

  const render = () => {
    if (!gameScreenRef.current) return;

    const cellSize = window.innerWidth > 1536 ? 10 : 8;
    gameScreenRef.current.innerHTML = '';

    for (let y = 0; y < 40; y++) {
      for (let x = 0; x < 24; x++) {
        const cell = document.createElement('div');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.className = 'cell black';

        if (x === foodRef.current.x && y === foodRef.current.y) {
          cell.style.backgroundColor = '#43D9AD';
          cell.style.borderRadius = '50%';
          cell.style.boxShadow = '0 0 10px #43D9AD';
        }

        const snakeIndex = snakeRef.current.findIndex(
          pos => pos.x === x && pos.y === y
        );

        if (snakeIndex >= 0) {
          cell.style.backgroundColor = '#43D9AD';
          cell.style.opacity = `${1 - (snakeIndex / snakeRef.current.length)}`;

          if (snakeIndex === 0) {
            const directions: { [key: string]: string } = {
              up: '5px 5px 0 0',
              down: '0 0 5px 5px',
              left: '5px 0 0 5px',
              right: '0 5px 5px 0'
            };
            cell.style.borderRadius = directions[directionRef.current];
          }
        }

        gameScreenRef.current.appendChild(cell);
      }
    }
  };

  const goUp = () => {
    if (directionRef.current !== 'down') directionRef.current = 'up'
  }
  const goDown = () => {
    if (directionRef.current !== 'up') directionRef.current = 'down'
  }
  const goLeft = () => {
    if (directionRef.current !== 'right') directionRef.current = 'left'
  }
  const goRight = () => {
    if (directionRef.current !== 'left') directionRef.current = 'right'
  }

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (gameStarted) {
        switch (e.key) {
          case 'ArrowUp':
            goUp();
            break;
          case 'ArrowDown':
            goDown();
            break;
          case 'ArrowLeft':
            goLeft();
            break;
          case 'ArrowRight':
            goRight();
            break;
        }
      } else if (e.code === 'Space') {
        if (gameOver) {
          startAgain();
        } else {
          startGame();
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted, gameOver]);

  useEffect(() => {
    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render);
  }, []);

  return (
    <div id="console" className='lg:gap-4 gap-2'>
      <Image width={16} height={16} src="icons/console/bolt-up-left.svg" alt="Bolt Up Left" className="absolute top-2 left-2 opacity-70" />
      <Image width={16} height={16} src="icons/console/bolt-up-right.svg" alt="Bolt Up Right" className="absolute top-2 right-2 opacity-70" />
      <Image width={16} height={16} src="icons/console/bolt-down-left.svg" alt="Bolt Down Left" className="absolute bottom-2 left-2 opacity-70" />
      <Image width={16} height={18} src="icons/console/bolt-down-right.svg" alt="Bolt Down Right" className="absolute bottom-2 right-2 opacity-70" />

      <div id="game-screen" ref={gameScreenRef} className='shrink-0' />

      <button
        id="start-button"
        onClick={startGame}
        style={{ display: gameStarted || gameOver ? 'none' : 'block' }}
      >
        Start Game
      </button>

      <div id="game-over" style={{ display: gameOver ? 'block' : 'none' }} className='py-2'>
        <button onClick={startAgain} className='text-secondary'>
          Space to start again
        </button>
      </div>

      <div id="congrats" style={{ display: congratsVisible ? 'block' : 'none' }}>
        <span>Well Done!</span>
        <button onClick={startAgain}>Play Again</button>
      </div>
      <div className=' md:flex flex-col gap-2 items-center justify-center hidden '>
        <div className='bg-[#01142319] text-white py-1 px-2 rounded-md  text-xs'>
          <p>
            Space to start
          </p>
          <p>Arrows to play</p>
        </div>
        <div className='lg:flex hidden flex-col items-center justify-center'>
          <div
            id="buttons"
            className="w-full flex flex-col items-center gap-1"
          >
            <button id="console-button" className="button-up"
              onClick={goUp}
            >
              <Image width={12} height={12} src="icons/console/arrow-button.svg" alt="Arrow Button Up" />
            </button>

            <div className="grid grid-cols-3 gap-1">
              <button
                id="console-button"
                className="button-left"
                onClick={goLeft}


              >
                <Image width={12} height={12}
                  src="icons/console/arrow-button.svg"
                  alt="Arrow Button Left"
                  className="-rotate-90"
                />
              </button>

              <button
                id="console-button"
                className="button-down"
                onClick={goDown}

              >
                <Image width={12} height={12}
                  src="icons/console/arrow-button.svg"
                  alt="Arrow Button Down"
                  className="rotate-180"
                />
              </button>

              <button
                id="console-button"
                className="button-right"
                onClick={goRight}
              >
                <Image width={12} height={12}
                  src="icons/console/arrow-button.svg"
                  alt="Arrow Button Right"
                  className="rotate-90"
                />
              </button>
            </div>
          </div>
        </div>

      </div >


    </div >
  );
};

export default SnakeGame;