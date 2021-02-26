import React from 'react'
import qoreContext from "../qoreContext";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { deleteProductInCart } from '../store'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CardBasket = ({ basketId }) => {
  const {  data: dataProduct } = qoreContext.view('allProduct').useGetRow(basketId)
  const { data: AllDataBasket } = qoreContext.view("allBasket").useListRow()

  if(!dataProduct) {
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 10 }}>Loading...</Text>
      </View>
    )
  }

  const submitDelete = async (idProductDelete) => {
    const dataRow = await AllDataBasket.find((idRow) => idRow.nameProduct === idProductDelete)
    await deleteProductInCart(dataRow.id)
  }

  function converNum(num) {
    let numToString = num.toString()
    let output = ''
    let acuan = 1
    for(let i = numToString.length-1; i >= 0; i--) {
      if(acuan !== 3) {
        output += numToString[i]
      } else {
        if(i === 0) {
          acuan = 0
          output += numToString[i]
        } else {
          acuan = 0
          output += numToString[i] + '.'
        }
      }
      acuan++
    }
    let finalOutput = output.split('').reverse().join('')
    
    return finalOutput
  }

  function rendomeDay() {
    const numRendom = Math.floor((Math.random() * 10) + 1);
    return numRendom
  }
  // function hargaPerPick(priceD, jumHari) {
  //   let pricePDay = Math.ceil(priceD/7)
  //   let output = pricePDay * jumHari
  //   let finalOutput = converNum(output)
  //   return finalOutput
  // }

  return (
    <>
      <View style={{ backgroundColor: '#ffff' }}>
        <View style={{ flexDirection: 'row', padding: 5, marginHorizontal: 15, marginVertical: 20 }}>
          <View style={{ display: 'flex', justifyContent: 'center'}}>
            <Image
              source={{uri: dataProduct.image}}
              style={{ width: 90, height: 90 }}
            />
          </View>
          <View style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{dataProduct.name}</Text>
            <Text style={{ color: '#45C78D' }}>IRD {converNum(dataProduct.price)}</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 80, height: 30, backgroundColor: '#F4F4F4', marginTop: 10, borderRadius: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 5 }}>{rendomeDay()} Hari     <AntDesign name="caretdown" size={10} color="black" /></Text>
              </View>
              <TouchableOpacity activeOpacity={ .5 } style={{ justifyContent: 'flex-end' }} onPress={() => submitDelete(dataProduct.id)} >
                  <MaterialCommunityIcons name="delete-circle-outline" style={{ marginLeft: 85 }} size={24} color="#F97897" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
      </View> 
    </>
  )
};

export default CardBasket;