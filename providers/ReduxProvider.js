'use client';
import {store} from '@/redux/store';
import {Provider} from 'react-redux';

// A wrapper component that provides the Redux store to the React component tree
// Also, includes the PersistGate to handle the rehydration of the Redux store from persisted state
export default function ReduxProvider({children}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}
