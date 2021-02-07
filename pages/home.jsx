import React from 'react'
// import qoreContext from "../qoreContext"
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";

export default function HomePage() {
  // const products = qoreContext.views.allProduct.useListRow()
  // console.log(products, " dari home")

  return(
    <>
      <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <Image
              source={require('../img/logo.png')}
            />
          </View>
          <Text>Hi Moms, Welcome to <Text style={styles.textApp}>MomsKu App</Text></Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#45C6C9'
  },
  textApp: {
    color: '#F97897'
  }
})
