import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import qoreContext from '../qoreContext'
import { Picker } from 'react-native-picker-dropdown'
import { SetFilterProduct } from '../store'
import { useDispatch } from 'react-redux'
// import SearchableDropdown from "react-native-searchable-dropdown";

export default function FilterPage({ navigation, route }) {
  const { FilterHome } = route.params
  const dispatch = useDispatch()
  const { data: AllCityFromQore } = qoreContext.view("allCity").useListRow()
  const { data: AllCategoryFromQore } = qoreContext.view("allCategory").useListRow()
  const { data: AllBarndFromQore } = qoreContext.view("allBrand").useListRow()

  const [filterValue, setFilterValue] = React.useState({
    Category: '',
    City: '',
    Brand: '',
    RangeHargaA: '',
    RangeHargaB: ''
  })

  function handleChangeCategory(payload) {
    setFilterValue({
      ...filterValue,
      Category: payload
    })
  }

  function handleChangeCity(payload) {
    setFilterValue({
      ...filterValue,
      City: payload
    })
  }

  function handleChangeBrand(payload) {
    setFilterValue({
      ...filterValue,
      Brand: payload
    })
  }

  function handleOnchangeRangeHarga (dataValue) {
    let key = dataValue.name
    let value = dataValue.value
    setFilterValue({
      ...filterValue,
      [key]: value
    })
  }

  const handleSubmitFilter = async () => {
    try {
      if(filterValue.RangeHargaA > filterValue.RangeHargaB) {
        throw err
      } else {
        await dispatch(SetFilterProduct(filterValue))
        navigation.navigate('List', {
          byCategory: filterValue.Category || FilterHome,
          categoryFrom: 'Filter'
        })
      }
    } catch (err) {
      Alert.alert('Hi Moms', 'Sorry Someting Wrong')
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={ styles.sizeText }>Kategori</Text>
        <Picker
          selectedValue={filterValue.Category}
          onValueChange={(item) => handleChangeCategory(item)}
          mode="dialog"
          style={{ backgroundColor: '#F4F4F4', borderRadius: 10}}
        >
          <Picker.Item label='Kategori Lainnya...' value='' />
          {AllCategoryFromQore.map((valueCategory) => (
            <Picker.Item
              key={valueCategory.id} 
              label={valueCategory.name} 
              value={valueCategory.name} 
            />
          ))}
        </Picker>
        <Text style={ styles.sizeText }>Kota</Text>
        <Picker
          selectedValue={filterValue.City}
          onValueChange={(item) => handleChangeCity(item)}
          mode="dialog"
          style={{ backgroundColor: '#F4F4F4', borderRadius: 10}}
        >
          <Picker.Item label='Kota Lainnya...' value='' />
          {AllCityFromQore.map((valueCity) => (
            <Picker.Item 
              key={valueCity.id} 
              label={valueCity.name} 
              value={valueCity.name} 
            />
          ))}
        </Picker>
        <Text style={ styles.sizeText }>Merek</Text>
        <Picker
          selectedValue={filterValue.Brand}
          onValueChange={(item) => handleChangeBrand(item)}
          mode="dialog"
          style={{ backgroundColor: '#F4F4F4', borderRadius: 10}}
        >
          <Picker.Item label='Merek Lainnya...' value='' />
          {AllBarndFromQore.map((valueBrand) => (
            <Picker.Item 
              key={valueBrand.id} 
              label={valueBrand.name} 
              value={valueBrand.name}
            />
          ))}
        </Picker>
        <Text style={ styles.sizeText }>Range Harga</Text>
        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => handleOnchangeRangeHarga({value:text, name:'RangeHargaA'})}
            value={filterValue.RangeHargaA}
            placeholder={'Min Harga'}
            keyboardType={'numeric'}
            editable={false}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => handleOnchangeRangeHarga({value:text, name:'RangeHargaB'})}
            value={filterValue.RangeHargaB}
            placeholder={'Max harga'}
            keyboardType={'numeric'}
            editable={false}
          />
        </View>
        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly' }}>
          <Text style={{ marginRight: 75 }}>Min</Text>
          <Text>Max</Text>
        </View>
      </View>
      <View style={{ marginTop: '45%', marginBottom: 50 }}>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmitFilter()} >
            <Text style={styles.text}>TERAPKAN</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: '#ffff'
  },
  sizeText: {
    fontSize: 18,
    marginVertical: 10
  },
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46CDC6',
    shadowColor: '#F97897',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    marginHorizontal: 20
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  // textInput: {
  //   height: 40,
  //   width: 150,
  //   borderRadius: 5,
  //   backgroundColor: "#F4F4F4",
  //   textAlign: 'center',
  //   marginBottom: 10
  // },
  textInput: {
    height: 40,
    width: 150,
    borderRadius: 5,
    backgroundColor: "#F4F4F4",
    textAlign: 'center',
    marginBottom: 10,
    borderColor: 'red',
    borderWidth: 1
  }
})