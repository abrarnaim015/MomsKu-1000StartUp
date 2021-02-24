import React from 'react'
import SearchableDropdown from "react-native-searchable-dropdown";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function FilterPage() {

  const [filCatogory, setFilCategory] = React.useState({
    id: 0,
    name: ''
  })

  function handleCategory(dataCategory) {
    setFilCategory({
      id: dataCategory.id,
      name: dataCategory.name
    })
  }

  const arrcategory = [
    {
      id: 1,
      name: 'Stroller'
    },
    {
      id: 2,
      name: 'Breast Pump'
    },
    {
      id: 3,
      name: 'Food Market'
    },
    {
      id: 4,
      name: 'Toys'
    },
    {
      id: 5,
      name: 'Bath Tub'
    },
    {
      id: 6,
      name: 'Bed'
    },
  ]

  return (
    <View style={styles.container}>
      <View>
        <Text style={ styles.sizeText }>Kategori</Text>
        {/* ================ */}
        <SearchableDropdown
          onItemSelect={(item) => handleCategory(item)}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            height: 40,
            width: 310,
            borderRadius: 5,
            backgroundColor: "#F4F4F4",
            textAlign: 'center',
          }}
          itemStyle={{
            padding: 10,
            backgroundColor: '#F4F4F4',
          }}
          itemTextStyle={{
            color: '#0D1117',
          }}
          itemsContainerStyle={{
            maxHeight: '50%',
          }}
          value={filCatogory.name}
          items={arrcategory}
          placeholder={filCatogory.name || 'Category'}
          resetValue={false}
        />
        {/* ================ */}
        <Text style={ styles.sizeText }>Kota</Text>
        {/* ================ */}
        <SearchableDropdown
          onItemSelect={(item) => handleCategory(item)}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            height: 40,
            width: 310,
            borderRadius: 5,
            backgroundColor: "#F4F4F4",
            textAlign: 'center',
          }}
          itemStyle={{
            padding: 10,
            backgroundColor: '#F4F4F4',
          }}
          itemTextStyle={{
            color: '#0D1117',
          }}
          itemsContainerStyle={{
            maxHeight: '50%',
          }}
          value={filCatogory.name}
          items={arrcategory}
          placeholder={filCatogory.name || 'Category'}
          resetValue={false}
        />
        {/* ================ */}
        <Text style={ styles.sizeText }>Brand</Text>
        {/* ================ */}
        <SearchableDropdown
          onItemSelect={(item) => handleCategory(item)}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            height: 40,
            width: 310,
            borderRadius: 5,
            backgroundColor: "#F4F4F4",
            textAlign: 'center',
          }}
          itemStyle={{
            padding: 10,
            backgroundColor: '#F4F4F4',
          }}
          itemTextStyle={{
            color: '#0D1117',
          }}
          itemsContainerStyle={{
            maxHeight: '50%',
          }}
          value={filCatogory.name}
          items={arrcategory}
          placeholder={filCatogory.name || 'Category'}
          resetValue={false}
        />
        {/* ================ */}
        <Text style={ styles.sizeText }>Range Harga</Text>
        {/* ================ */}
        <SearchableDropdown
          onItemSelect={(item) => handleCategory(item)}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            height: 40,
            width: 310,
            borderRadius: 5,
            backgroundColor: "#F4F4F4",
            textAlign: 'center',
          }}
          itemStyle={{
            padding: 10,
            backgroundColor: '#F4F4F4',
          }}
          itemTextStyle={{
            color: '#0D1117',
          }}
          itemsContainerStyle={{
            maxHeight: '50%',
          }}
          value={filCatogory.name}
          items={arrcategory}
          placeholder={filCatogory.name || 'Category'}
          resetValue={false}
        />
        {/* ================ */}
      </View>
      <View style={{ marginTop: '130%' }}>
        <TouchableOpacity style={styles.button} >
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