import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { LoggedUserProvider } from './store/LoggedUserContext'
import { Provider } from 'react-redux'
import { store } from './redux'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoggedUserProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LoggedUserProvider>
  </React.StrictMode>,
)
