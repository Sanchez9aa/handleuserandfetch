import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClientProvider, QueryClient} from "react-query"
import App from "./App";
import { Provider } from 'react-redux'
import store from './redux/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        retry: false
    }
}
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>  
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

