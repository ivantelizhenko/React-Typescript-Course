import { createContext, useContext, useReducer } from 'react';
import {
  Action,
  TimerContextProviderProps,
  TimerContextValue,
  TimersState,
} from './timersContextTypes';

const TimersContext = createContext<TimerContextValue | null>(null);

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case 'ADD_TIMER': {
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
    }
    case 'REMOVE_TIMER': {
      return {
        ...state,
        timers: state.timers.filter(t => t.id !== action.payload),
      };
    }
    case 'START_TIMERS': {
      return { ...state, isRunning: true };
    }
    case 'STOP_TIMERS': {
      return { ...state, isRunning: false };
    }
    default:
      throw new Error('Unknown action type');
  }
}

function TimersProvider({ children }: TimerContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimerContextValue = {
    ...timersState,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    removeTimer(id) {
      dispatch({ type: 'REMOVE_TIMER', payload: id });
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

function useTimers() {
  const context = useContext(TimersContext);

  if (context === undefined)
    throw new Error(
      'TimerContext was used outside of the TimerContextProvider'
    );

  return context as TimerContextValue;
}

export { TimersProvider, useTimers };
