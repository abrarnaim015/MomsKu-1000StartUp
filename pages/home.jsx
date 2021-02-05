import qoreContext from "../qoreContext"
import { Text, View, StyleSheet, TextInput, Image, Button, Alert } from "react-native";


export default function HomePage() {

    const products = qoreContext.views.allProduct.useListRow()

    console.log(products, " dari home")
    return(
        <>
        <Text>{JSON.stringify(products.data)}</Text>

        </>
    )
}
