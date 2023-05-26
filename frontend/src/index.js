import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/authContext/authContext';
import { MovieContextProvider } from './context/movieContext/movieContext';
import { ListContextProvider } from './context/listContext/listContext';
import { UserContextProvider } from './context/userContext/userContext';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <MovieContextProvider>
          <ListContextProvider>
            <UserContextProvider>
              <ProSidebarProvider>
                <BrowserRouter>
                  <App />
                  <ToastContainer />
                </BrowserRouter>
              </ProSidebarProvider>
            </UserContextProvider>
          </ListContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </Provider>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
