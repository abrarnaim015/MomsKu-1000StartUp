import React from 'react'
import qoreContext from "../qoreContext";
import { View, Text, Image } from 'react-native'

const CardBasket = ({ basketId }) => {
  const {  data: dataProduct, status, error  } = qoreContext
  .view('allProduct')
  .useGetRow(basketId)

  // console.log(dataProduct, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

  if(!dataProduct) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
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

  function hargaPerPick(priceD, jumHari) {
    let pricePDay = Math.ceil(priceD/7)
    let output = pricePDay * jumHari
    let finalOutput = converNum(output)
    return finalOutput
  }

  return (
    <>
      <View>
        <View style={{ flexDirection: 'row', padding: 5, marginHorizontal: 15, marginVertical: 20 }}>
          <View style={{ display: 'flex', justifyContent: 'center'}}>
            <Image
              source={{uri: dataProduct.image}}
              style={{ width: 90, height: 90 }}
            />
          </View>
          <View style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{dataProduct.name}</Text>
            <Text>IRD {hargaPerPick(dataProduct.price, dataProduct.total_Hari)}</Text>
            <View style={{ width: 80, height: 30, backgroundColor: '#F4F4F4', marginTop: 10 }}>
              <Text style={{ textAlign: 'center', marginTop: 5 }}>4 Hari</Text>
            </View>
          </View>
        </View>
        <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
      </View> 
    </>
  )
};

export default CardBasket;