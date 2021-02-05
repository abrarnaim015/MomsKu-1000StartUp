import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button, Alert } from "react-native";
import qoreContext from "../qoreContext";

function LoginPage() {
    const Separator = () => (
        <View style={styles.separator} />
    );

    const [value, onChangeText] = React.useState('Useless Placeholder');

    const item = qoreContext.view("allProduct").useListRow()

    console.log(items.data, "dari Login")
    return (
        <>
            <View style={styles.container}>

                <Text>Sewa Perlengkapan Bayi & Ibu Menyusui</Text>
                <Text>Dari Ibu untuk Ibu</Text>
                <Separator />
                <Text>Email</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeText(text)}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeText(text)}
                />
                <Separator />

                <View style={styles.btn}>
                    <Button
                        title="MASUK"
                        color="#f194ff"
                        onS={() => Alert.alert('Button with adjusted color pressed')}
                    />
                </View>
                <Image
                    style={styles.tinyLogo}
                    source={require("../img/tentang.jpg")}
                />
                <Image
                    style={styles.tinyLogo}
                    source={require("../img/kontak.jpg")}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: 200,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: "white",
        textAlign: 'center'
    },
    separator: {
        marginVertical: 8,
    },
    btn: {
        width: 200,
        height: 50,
        color: "#FE7998"
    },
    tinyLogo: {
        width: 30,
        height: 30,
    }

})

export default LoginPage