import React, { useEffect } from 'react'
import qoreContext from '../qoreContext'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'

export default function ListProductByCategory({ route, navigation }) {
  const { byCategory } = route.params
  const { data: AllDataProductByCategory } = qoreContext.view("allProduct").useListRow()
  const [datFilterByCategory, setDatFilterByCategory] = React.useState([])

  useEffect(() => {
    if(AllDataProductByCategory !== []) {
      filterData(AllDataProductByCategory)
    } 
  }, [AllDataProductByCategory, byCategory])
  
  const filterData = (async(dataFilter) => {
    try {
      const newData = await dataFilter.filter(indexData => indexData.nameCategory === byCategory)
      setDatFilterByCategory(newData)
    } catch (err) {
      console.log(err)
    }
  })

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

  // function cekDate(start, end) {
  //   const dateStart = new Date(start)
  //   const dateEnd = new Date(end)
  //   const nowDate = new Date()
  //   let output = nowDate > dateStart && nowDate < dateEnd
  //   if(output) {
  //     return 'Tersedia'
  //   } else {
  //     return 'Tidak Tersedia'
  //   }
  // }

  function getDataDetail(dataDetail, harga) {
    navigation.navigate('Detail', { dataDetail, harga })
  }
  

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.boxFilter}>
          <View style={{ borderRightWidth: 1, borderColor: '#DADADA' }}>
            <Text style={{ textAlign: 'center', marginHorizontal: 75, marginTop: 15 }}>Filter</Text>
          </View>
          <View style={{ marginRight: 60, marginTop: 15  }}>
            <Text style={{ textAlign: 'center' }}>Urutkan</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          {datFilterByCategory.map((DataFilter) => (
            <View key={DataFilter.id}>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => getDataDetail(DataFilter, converNum(DataFilter.price))}>
                <View style={{ flexDirection: 'row', padding: 5, marginHorizontal: 15, marginVertical: 20 }}>
                  <View style={{ display: 'flex', justifyContent: 'center'}}>
                    <Image
                      source={{uri: DataFilter.image}}
                      style={{ width: 100, height: 100 }}
                    />
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataFilter.name}</Text>
                    <Text style={{ color: '#45C78D' }}>{DataFilter.statusProduct}</Text>
                    <Text>{DataFilter.address || 'Kosong dari Qore' }</Text>
                    <Text style={{ fontWeight: 'bold', color: '#ECB14C', fontSize: 15 }}>IRD {converNum(DataFilter.price)} / 7 Hari</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>  
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingHorizontal: 20
  },
  imageSize: {
    height: 50,
    width: 50
  },
  Loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  boxFilter: {
    height: 50,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
})