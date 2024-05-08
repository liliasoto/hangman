import { useWinCount } from './WinCountContext.tsx';

function MyScore() {
  const { winCount } = useWinCount();

  return (
    <div>
      <h2>You've won {winCount} times</h2>
    </div>
  );
}

export default MyScore;
