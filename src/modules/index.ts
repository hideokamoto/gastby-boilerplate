type Actions = ReturnType<typeof add> |
  ReturnType<typeof reduce> |
  ReturnType<typeof reset>

export type State = {
  count: number;
}

/**
 * Action Types
 */
export const ADD = 'ADD' as const
export const REDUCE = 'REDUCE' as const
export const RESET = 'RESET' as const

/**
 * Actions
 */
export const add = (num: number) => ({
  type: ADD,
  payload: {
    num
  }
})
export const reduce = (num: number) => ({
  type: REDUCE,
  payload: {
    num
  }
})
export const reset = () => ({
  type: RESET
})

/**
 * Reducer
 */
const initialState: State = {
  count: 0
}
export default (state: State = initialState, action: Actions) => {
  switch(action.type) {
    case ADD: {
      return {
        count: state.count + action.payload.num
      }
    }
    case REDUCE: {
      return {
        count: state.count - action.payload.num
      }
    }
    case RESET:
      return initialState
    default:
      return state;
  }
}