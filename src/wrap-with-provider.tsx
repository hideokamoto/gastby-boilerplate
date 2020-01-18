import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store/index'

const store = createStore()
export default ({element}: {element: JSX.Element | JSX.Element[]}) => <Provider store={store}>{element}</Provider>