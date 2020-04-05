import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading
})

const config = {
  firebase_config: {
    apiKey: "AIzaSyBnEJ1yycQ8nlVhaI2yx0tnDHndDU3Lbzw",
    authDomain: "woody-eb4b8.firebaseapp.com",
    databaseURL: "https://woody-eb4b8.firebaseio.com",
    projectId: "woody-eb4b8",
    storageBucket: "woody-eb4b8.appspot.com",
    messagingSenderId: "1076143515724",
    appId: "1:1076143515724:web:df8b777190d0e5fd976ce9"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyBUXjYQWkxOKFVJqlR3mNDy2Rv4pH23zeM",
    authDomain: "woody-dev-7e1a8.firebaseapp.com",
    databaseURL: "https://woody-dev-7e1a8.firebaseio.com",
    projectId: "woody-dev-7e1a8",
    storageBucket: "woody-dev-7e1a8.appspot.com",
    messagingSenderId: "353514301441",
    appId: "1:353514301441:web:4c59a762f12ebd12a43800"
  },
  firebase_providers: [
    'google.com',
    // 'facebook.com',
    // 'twitter.com',
    // 'github.com',
    // 'password',
    // 'phone'
  ],
  initial_state: {
    themeSource: {
      isNightModeOn: false,
      source: 'default'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync
}

export default config
