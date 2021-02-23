import React, { useEffect } from 'react'
import qoreContext from '../qoreContext'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
// import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'

export default function ListProductByCategory({ route, navigation }) {
  const { byCategory } = route.params
  const { data: AllDataProductByCategory } = qoreContext.view("allProduct").useListRow()
  const [datFilterByCategory, setDatFilterByCategory] = React.useState([])
  const [urutData, setUrutData] = React.useState(0)
  const [statusUrutUp, setStatusUrutUp] = React.useState(false)
  const [statusUrutDown, setStatusUrutDown] = React.useState(false)
  
  useEffect(() => {
    if(AllDataProductByCategory !== []) {
      filterData(AllDataProductByCategory)
    } 
  }, [AllDataProductByCategory, byCategory, urutData])
  
  const filterData = (async(dataFilter) => {
    try {
      const newData = await dataFilter.filter(indexData => indexData.nameCategory === byCategory)
      if(urutData === 0) {
        setDatFilterByCategory(newData)
      } else if(urutData !== 0 && urutData%2 === 0) {
        await setDatFilterByCategory(newData.sort((a, b) => a.price - b.price))
        setStatusUrutUp(true)
        setStatusUrutDown(false)
      } else if(urutData !== 0 && urutData%2 !== 0) {
        await setDatFilterByCategory(newData.sort((a, b) => b.price - a.price))
        setStatusUrutUp(false)
        setStatusUrutDown(true)
      }
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
          <TouchableOpacity activeOpacity = { .5 } onPress={() => setUrutData(urutData+1)}>
            <View style={{ marginRight: 70, marginTop: 15, flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ marginLeft: 50 }}>Urutkan</Text>
              {statusUrutUp && <AntDesign style={{ marginLeft: 20, marginTop: 4 }} name="caretup" size={15} color="#46CDC6" />}
              {statusUrutDown && <AntDesign style={{ marginLeft: 20 }} name="caretdown" size={15} color="#46CDC6" />}
            </View>
          </TouchableOpacity>
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
                    <Text style={[DataFilter.statusProduct === 'Tersedia'? styles.statusProductTrue : styles.statusProductFalse]}>{DataFilter.statusProduct}</Text>
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
  statusProductTrue: {
    color: '#45C78D'
  },
  statusProductFalse: {
    color: '#F85483'
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