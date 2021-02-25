import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import { ReduxSetValueSort } from '../store'

export default function SortPage({ navigation }) {
  const dispatch = useDispatch()
  const [valueSort, setValueSort] = React.useState('')

  const reduxValueSort = async () => {
    try {
      await dispatch(ReduxSetValueSort(valueSort))
      navigation.navigate('List', {
        categoryFromUrut: 'Urut'
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ paddingLeft: 15 }}>
        <TouchableOpacity activeOpacity = { .5 } onPress={() => setValueSort('Up')}>
          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start'}}>
            <RadioButton
              value="Up"
              label="Carto Base MAp"
              status={valueSort === 'Up' ? 'checked' : 'unchecked'}
              onPress={() => setValueSort('Up')}
            />
            <Text style={[valueSort === 'Up' ? styles.styleTextOn : styles.styleTextOff]}>Harga Tertinggi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 } onPress={() => setValueSort('Down')}>
          <View  style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start'}}>
          <RadioButton
            value="Down"
            label="Carto Base MAp"
            status={valueSort === 'Down' ? 'checked' : 'unchecked'}
            onPress={() => setValueSort('Down')}
          />
          <Text style={[valueSort === 'Down' ? styles.styleTextOn : styles.styleTextOff]}>Harga Terendah</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '130%' }}>
        <TouchableOpacity style={styles.button} onPress={() => reduxValueSort()}>
            <Text style={styles.text}>TERAPKAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  styleTextOn: {
    color: '#46CDC6',
    marginTop: 6, 
    fontSize: 18
  },
  styleTextOff: {
    color: '#151515',
    marginTop: 5, 
    fontSize: 18
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
})