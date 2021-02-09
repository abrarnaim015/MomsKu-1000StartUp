import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'

export default function DetailProduct({ navigation }) {

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={{ marginRight: 235, marginTop: 20 }}>
            <View style={styles.BoxStatusProduct}>
              <Text style={styles.TextStatus}>Available</Text>
            </View>
          </View>
          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <Image
              source={require('../img/content/2.jpg')}
              style={{ width: 350, height: 350 }}
            />
          </View>
          <View>
            <View style={{ justifyContent: 'flex-start', marginRight: 100 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Snap Ultra Duo Double</Text>
              <Text>Condong Catur, Sleman</Text>
              <Text style={{ color: '#E79933', fontSize: 20, fontWeight: 'bold' }}>IRD 350,000 / 7 Days</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ marginHorizontal: 50 }}>
                <Text>Start Date</Text>
              </View>
              <View style={{ marginHorizontal: 50 }}>
                <Text>End Date</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ backgroundColor: 'red', height: 30 }}></View>
              <View style={{ backgroundColor: 'yellow', height: 30 }}></View>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>BOOK</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: 30 }}>
            <View style={{ justifyContent: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>Description</Text>
              <Text styl={{ textAlign: 'center' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              {'\n'}
              {'\n'}
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  scrollView: {
    paddingHorizontal: 20
  },
  BoxStatusProduct: {
    backgroundColor: '#E2F3E6',
    borderRadius: 20,
    padding: 5
  },
  TextStatus: {
    color: '#6FC783',
    marginHorizontal: 10
  },
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F97897',
    shadowColor: '#F97897',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
})