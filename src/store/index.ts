import { combineReducers, createStore } from 'redux';
import firstReducer from '../modules/index'


const reducer = combineReducers<{
  first: ReturnType<typeof firstReducer>
}>({
  first: firstReducer
})

export type State = ReturnType<typeof reducer>

export default () => createStore(reducer)