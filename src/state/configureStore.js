import { createStore, combineReducers } from 'redux';
import auth from './auth';
import projects from './projects';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle';

const configureStore = () => {
  const persistedState = loadState();
  const app = combineReducers({
    auth,
    projects,
    persistedState
  });

  const store = createStore(
    app
  );

  store.subscribe(throttle(() => {
    saveState({
      store: store.getState().projects
    });
  }, 1000));

  return store;
};

export default configureStore;