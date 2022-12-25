/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import {ThemeProvider, BaseStyles} from '@primer/react'
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
    apiKey: 'AIzaSyBcxpWbGYVFvVJM4NZmG8Uk-qKjkbfhBco',
    authDomain: 'mon-pro-web.firebaseapp.com',
    databaseURL: 'https://mon-pro-web-default-rtdb.firebaseio.com',
    projectId: 'mon-pro-web',
    storageBucket: 'mon-pro-web.appspot.com',
    messagingSenderId: '525128482932',
    appId: '1:525128482932:web:eb3de96c568a2ce87b5121',
    measurementId: 'G-4GV65QSVDM',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BaseStyles>
          <React.Suspense fallback={<>Loading...</>}>
            <App />
          </React.Suspense>
        </BaseStyles>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

serviceWorkerRegistration.register()
reportWebVitals()
