import React, { useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import qoreContext from '../qoreContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'

export default function ListProductByCategory({ route, navigation }) {
  
  const { data: AllDataProductByCategory } = qoreContext.view("allProduct").useListRow()
  const { byCategory, categoryFrom, categoryFromUrut } = route.params
  
  const urutData = useSelector((state) => state.ValueSort)
  const valueFilter = useSelector((state) => state.DataFilter)
  
  const [datFilterByCategory, setDatFilterByCategory] = React.useState([])
  const [filterCity, setFilterCity] = React.useState('')
  const [filterBrand, setFilterBrand] = React.useState('')
  const [filterFrom, setFilterFrom] = React.useState('')
  const [statusUrutData, setStatusUrutData] = React.useState('')
  const [filterFromUrut, setFilterUrut] = React.useState('')
  // const [filterRangeharga, setFilterRangeHarga] = React.useState({
  //   min: '',
  //   max: ''
  // })
  
  useEffect(() => {
    if(AllDataProductByCategory !== []) {
      setFilterFrom(categoryFrom)
      setFilterUrut(categoryFromUrut)
      filterData(AllDataProductByCategory)
    }
  }, [AllDataProductByCategory, byCategory, urutData, filterCity, filterBrand, valueFilter, categoryFrom, filterFrom, statusUrutData, categoryFromUrut, filterFromUrut])
  
  const filterData = (async(dataFilter) => {
    try {
      const newData = await  dataFilter.filter(indexData => {
        if(filterFrom === 'Home' ) {
          setFilterCity('')
          setFilterBrand('')
          setStatusUrutData('')
          // setFilterRangeHarga({
          //   min: '',
          //   max: ''
          // })
        } else if (filterFrom === 'Filter' ) {
          setFilterCity(valueFilter.City)
          setFilterBrand(valueFilter.Brand)
          // setFilterRangeHarga({
          //   min: valueFilter.RaRangeHargaA,
          //   max: valueFilter.RaRangeHargaB
          // })
        }
        if(filterFromUrut === 'Urut') {
          setStatusUrutData(urutData)
        }
        if(indexData.categoryName === byCategory ) {
          if(!filterCity) {
            if(!filterBrand) {
              return true
            }
            if(indexData.brandName === filterBrand) {
              return true
            }
          } else if(!filterBrand) {
            if(!filterCity) {
              return true
            }
            if(indexData.city.displayField === filterCity) {
              return true
            }
          }
          if(indexData.city.displayField === filterCity) {
            if(!filterBrand) {
              return true
            }
            if(indexData.brandName === filterBrand ) {
              return true
            }
          }

        }
        return false
      })
      if(statusUrutData === '') {
        setDatFilterByCategory(newData)
      } else if(statusUrutData !== 0 && statusUrutData === 'Down') {
        await setDatFilterByCategory(newData.sort((a, b) => a.price - b.price))
      } else if(statusUrutData !== 0 && statusUrutData === 'Up') {
        await setDatFilterByCategory(newData.sort((a, b) => b.price - a.price))
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



  function openFilter() {
    setFilterCity('')
    setFilterBrand('')
    setFilterFrom('')
    // setFilterRangeHarga({
    //   min: '',
    //   max: ''
    // })
    navigation.navigate('Filter' , { 
      FilterHome: byCategory
    })
  }

  function getDataDetail(dataDetail, harga) {
    navigation.navigate('Detail', { dataDetail, harga })
  }
  

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.boxFilter}>
          <TouchableOpacity activeOpacity = { .5 } onPress={() => openFilter()}>
            <View style={{ borderRightWidth: 1, borderColor: '#DADADA', flexDirection: 'row' }}>
              <MaterialCommunityIcons name="filter-outline" style={{ marginTop: 14, marginLeft: 55, marginRight: 5 }} size={22} color="black" />
              <Text style={{ textAlign: 'center', marginTop: 15, marginBottom: 16, marginRight: 70 }}>Filter</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('Sort')}>
            <View style={{ marginRight: 70, marginTop: 15, flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
              {statusUrutData === '' && <MaterialCommunityIcons style={{ marginTop: -1, marginRight: 5 }} name="text-subject" size={20} color="black" />}
              {statusUrutData === 'Down' && <MaterialCommunityIcons style={{ marginTop: -1, marginRight: 5 }} name="sort-reverse-variant" size={20} color="black" />}
              {statusUrutData === 'Up' && <MaterialCommunityIcons style={{ marginTop: -1, marginRight: 5 }} name="sort-variant" size={20} color="black" />}
              <Text>Urutkan</Text>
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
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataFilter.brandName}</Text>
                    <Text style={[DataFilter.statusProduct === 'Tersedia'? styles.statusProductTrue : styles.statusProductFalse]}>{DataFilter.statusProduct}</Text>
                    <Text>{DataFilter.city.displayField || 'Kosong dari Qore' }</Text>
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
