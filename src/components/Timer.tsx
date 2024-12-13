import { Timer as TimerProps } from '../store/timersContextTypes.ts';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
