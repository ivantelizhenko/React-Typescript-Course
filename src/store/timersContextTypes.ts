import { ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
  id: number;
};

export type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimerContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  removeTimer: (id: number) => void;
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

type RemoveTimerAction = {
  type: 'REMOVE_TIMER';
  payload: number;
};

export type Action =
  | StartTimersAction
  | StopTimersAction
  | AddTimerAction
  | RemoveTimerAction;
