import { ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

export type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimerContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export type TimerContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: 'START_TIMERS';
};

type StopTimersAction = {
  type: 'STOP_TIMERS';
};

type AddTimerAction = {
  type: 'ADD_TIMER';
  payload: Timer;
};

export type Action = StartTimersAction | StopTimersAction | AddTimerAction;
