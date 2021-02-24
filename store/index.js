import { createStore, applyMiddleware, compose } from 'redux'
import qoreContext from "../qoreContext";
import Thunk from 'redux-thunk'
import { Alert } from 'react-native'
import axios from 'axios'

const initicalStore = {
  dataUser: [],
  emailUser: '',
  allDataProduct: [],
  allDataBasket: [],
  Reg_Prov: [],
  Reg_Kab: [],
  Reg_Kec: [],
  Reg_Kel: [],
  KodePossRegister: '',
  ValueSort: '',
  CategoryProductFilter: '',
  userRegisLogin: {
    email: '',
    password: ''
  }
}

export function ReduxFilterCategory(valueCategory) {
  return((dispatch) => {
    dispatch({ type: 'SET_CATEGORY_PRODUCT', payload: valueCategory })
  })
}

export function setRegisProv() {
  return((dispatch) => {
    axios({
      url: 'https://ibnux.github.io/data-indonesia/propinsi.json',
      method: 'GET'
    })
    .then(({ data }) => {
      let tamp = []
      data.forEach((el) => {
        let DataIndex = {
          id: Number(el.id), name: el.nama
        }
        tamp.push(DataIndex)
      })
      dispatch({ type: 'SET_PROV', payload: tamp })
    })
    .catch(console.log)
  })
}

export function ReduxSetValueSort(valueSort) {
  return((dispatch) => {
    dispatch({ type: 'SET_VALUE_SORT', payload: valueSort })
  })
}

export function setRegisKab(idProv) {
  return((dispatch) => {
    axios({
      url: `https://ibnux.github.io/data-indonesia/kabupaten/${idProv}.json`,
      method: 'GET'
    })
    .then(({ data }) => {
      let tamp = []
      data.forEach((el) => {
        let DataIndex = {
          id: Number(el.id), name: el.nama
        }
        tamp.push(DataIndex)
      })
      dispatch({ type: 'SET_KAB', payload: tamp })
    })
    .catch(console.log)
  })
}

export function setRegisKec(idKab) {
  return((dispatch) => {
    axios({
      url: `https://ibnux.github.io/data-indonesia/kecamatan/${idKab}.json`,
      method: 'GET'
    })
    .then(({ data }) => {
      let tamp = []
      data.forEach((el) => {
        let DataIndex = {
          id: Number(el.id), name: el.nama
        }
        tamp.push(DataIndex)
      })
      dispatch({ type: 'SET_KEC', payload: tamp })
    })
    .catch(console.log)
  })
}

export function setRegisKel(idKec) {
  return((dispatch) => [
    axios({
      url: `https://ibnux.github.io/data-indonesia/kelurahan/${idKec}.json`,
      method: 'GET'
    })
    .then(({ data }) => {
      let tamp = []
      data.forEach((el) => {
        let DataIndex = {
          id: Number(el.id), name: el.nama
        }
        tamp.push(DataIndex)
      })
      dispatch({ type: 'SET_KEL', payload: tamp })
    })
    .catch(console.log)
  ])
}

export function setUserDataLogin(dataUser) {
  return((dispatch) => {
    dispatch({ type: 'SET_USER_LOGIN', payload: dataUser })
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

export function submitRegister(datNewUser) {
  return((dispatch) => {
    axios({
      url: 'https://prod-qore-app.qorebase.io/ywboLmpR6nwJm3E/allMember/rows',
      method: 'POST',
      data: {
        fullName: datNewUser.fullName,
        alamat: datNewUser.alamat,
        ktpImage: 'test',
        profession: 'test',
        phone: Number(datNewUser.phone),
        password: datNewUser.password,
        kodePoss: datNewUser.kodePoss || 'fail',
        gender: 'test',
        email: datNewUser.email,
        role: ['M6zdxP1YK2u49zA']
      }
    })
    .then((res) => {
      // Alert.alert('Success Register', datNewUser.fullName)
      dispatch({ type: 'SET_EMAIL_PASS_USER_REGIS', payload: { email: datNewUser.email, password: datNewUser.password }})
    })
    .catch((err) => {
      Alert.alert('Someting Error', 'Sorry Mommy')
      console.log(err)
    })
  })
}

export function getKodePoss(dataAlamat) {
  return((dispatch) => {
    axios({
      url: `https://kodepos.herokuapp.com/search?q=${dataAlamat}`,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({ type: 'SET_KODE_POSS', payload: data.data[0].postalcode })
    })
    .catch(console.log)
  })
}


function Reducer(state = initicalStore, action) {
  if(action.type === 'SET_USER_LOGIN') {
    // const DataUserFind = action.payload.find(findUser => findUser.email === state.emailUser)
    return { ...state, dataUser: action.payload }
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
  if(action.type === 'SET_PROV' ) {
    return { ...state, Reg_Prov: action.payload }
  }
  if(action.type === 'SET_KAB' ) {
    return { ...state, Reg_Kab: action.payload }
  }
  if(action.type === 'SET_KEC' ) {
    return { ...state, Reg_Kec: action.payload }
  }
  if(action.type === 'SET_KEL' ) {
    return { ...state, Reg_Kel: action.payload }
  }
  if(action.type === 'SET_KODE_POSS' ) {
    return { ...state, KodePossRegister: action.payload }
  }
  if(action.type === 'SET_VALUE_SORT' ) {
    return { ...state, ValueSort: action.payload }
  }
  if(action.type === 'SET_CATEGORY_PRODUCT' ) {
    return { ...state, CategoryProductFilter: action.payload }
  }
  if(action.type === 'SET_EMAIL_PASS_USER_REGIS' ) {
    return { ...state, userRegisLogin: { email: action.payload.email, password: action.payload.password }}
  }
  return state
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(Thunk)))

export default store