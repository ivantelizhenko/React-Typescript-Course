import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import { TimersProvider } from './store/timersContext.tsx';

function App() {
  return (
    <TimersProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersProvider>
  );
}

export default App;
