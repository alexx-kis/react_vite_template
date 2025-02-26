import { store } from './store';

// ^======================== types ========================^ //

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;