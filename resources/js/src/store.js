import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  addDataSuccess: false,
  updateDataSuccess: false,
  deleteDataSuccess: false,
  refresh: false
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'add_data_success':
      return {...state, ...rest}
    case 'update_data_success':
      return {...state, ...rest}
    case 'delete_data_success':
      return {...state, ...rest}
    case 'refresh':
      return {...state, ...rest}
    default:
      return state
  }
}

const store = createStore(changeState)
export default store