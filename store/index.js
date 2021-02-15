import { createStore, applyMiddleware, compose } from 'redux'
import qoreContext from "../qoreContext";
import Thunk from 'redux-thunk'
// import { Alert } from 'react-native'
// import axios from 'axios'

const initicalStore = {
  dataUser: [],
  emailUser: '',
  allDataProduct: [],
  allDataBasket: []
}


export function setUserDataLogin() {
  return((dispatch) => {
    const { data: DataAllMember } = qoreContext.view("allMember").useListRow()
    dispatch({ type: 'SET_USER_LOGIN', payload: DataAllMember })
  })
}

export function setEmailUser(emailUser) {
  return((dispatch) => {
    dispatch({ type: 'SET_EMAIL', payload: emailUser })
  })
}

export function setAllDataProduct() {
  return((dispatch) => {
    const { data: DataAllProduct } = qoreContext.view("allProduct").useListRow()
    dispatch({ type: 'SET_ALL_PRODUCT', payload: DataAllProduct })
  })
}

export function setAllDataBasket() {
  return((dispatch) => {
    const { data: DataAllProduct } = qoreContext.view("allBasket").useListRow()
    dispatch({ type: 'SET_ALL_BASKET', payload: DataAllProduct })
  })
}



function Reducer(state = initicalStore, action) {
  if(action.type === 'SET_USER_LOGIN') {
    const DataUserFind = action.payload.find(findUser => findUser.email === state.emailUser)
    return { ...state, dataUser: DataUserFind }
  }
  if(action.type === 'SET_EMAIL') {
    return { ...state, emailUser: action.payload }
  }
  if(action.type === 'SET_ALL_PRODUCT') {
    return { ...state, allDataProduct: action.payload }
  }
  if(action.type === 'SET_ALL_BASKET') {
    return { ...state, allDataBasket: action.payload }
  }
  return state
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(Thunk)))

export default store