import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setAllDataProduct, setAllDataBasket } from '../store'
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity } from "react-native";

export default function HomePage({ route, navigation }) {
  // const dispatch = useDispatch()
  const { nameUser } = route.params
  if(nameUser === '' || nameUser === null) {
    nameUser = 'Mamih'
  }

  // const getDataProduct = useSelector((state) => state.allDataProduct)
  // const getDataBasket = useSelector((state) => state.allDataBasket)

  // const [dataProduct, setDataproduct] = React.useState([])
  // const [dataBasket, setDataBasket] = React.useState([])
  
  // useEffect(() => {
  //   dispatch(setAllDataProduct())
  //   dispatch(setAllDataBasket())
  // }, [input])

  // function setAllData() {
  //   setDataproduct()
  //   setDataBasket()
  // }
  
  function getDataByCategory(categoryOf) {
    navigation.navigate('List', {
      byCategory: categoryOf
    })
  }
 
  return(
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../img/bgHomeMomsKu.jpg')} style={styles.bgHome}>
          <View style={{ marginBottom: 20 }}>
            <Image
              source={require('../img/logo.png')}
            />
          </View>
          <View style={styles.boxIcon}>
            <View>
              <Image
                source={require('../img/face.png')}
              />
            </View>
            <View style={{ marginLeft: 10, paddingVertical: 10 }}>
              <Text style={{ marginVertical: 5, fontSize: 20, fontWeight: 'bold' }}>Hi, {nameUser}!</Text>
              <Text>Let's find the baby equipment</Text>
              <Text>you need today.</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.textChoose}>Choose The Equipments</Text>
            </View>
            <View style={styles.boxImgIcon}>
              <View style={styles.boxIconEquioment}>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => getDataByCategory('Stroller')}>
                  <Image
                    source={require('../img/svgtopng/stroller.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => getDataByCategory('Pump')}>
                  <Image
                    source={require('../img/svgtopng/pump.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => getDataByCategory('Food')}>
                  <Image
                    source={require('../img/svgtopng/food.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.boxIconEquioment}>
                <Text style={{ marginLeft: 20 }}>Stroller</Text>
                <Text style={{ marginLeft: 10 }}>Breast Pump</Text>
                <Text style={{ marginRight: 10 }}>Food Maker</Text>
              </View>
            </View>
            <View>
              <View style={styles.boxIconEquioment}>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => getDataByCategory('Toys')}>
                  <Image
                    source={require('../img/svgtopng/toys.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => getDataByCategory('Bath')}>
                  <Image
                    source={require('../img/svgtopng/bath.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={() => getDataByCategory('Bad')}>
                  <Image
                    source={require('../img/svgtopng/bed.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.boxIconEquioment}>
                <Text style={{ marginLeft: 20 }}>Toys</Text>
                <Text style={{ marginLeft: 5 }}>Bath Tub</Text>
                <Text style={{ marginRight: 30 }}>Bed</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  boxIcon: {
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    padding: 10,
    marginBottom: 80,
    height: 150
  },
  bgHome: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    width: '100%'
  },
  textChoose: {
    fontWeight: 'bold', 
    textAlign: 'left',
    marginRight: 150
  },
  boxIconEquioment: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxImgIcon: {
    marginVertical: 20
  }
})


// return(
//   <>
//     <View style={styles.container}>
//         <View style={{ marginBottom: 20 }}>
//           <Image
//             source={require('../img/logo.png')}
//           />
//         </View>
//         <Text>Hi Moms, Welcome to <Text style={styles.textApp}>MomsKu App</Text></Text>
//     </View>
//   </>
// )