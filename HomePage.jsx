import { Button, Text, View } from "react-native";



export const HomePage = ({ navigation }) => {

    return (
        <View>
            <Text>
                Hello from Home Page
            </Text>
            <Button title="Go To Page 1"
                onPress={() => { navigation.navigate("Page1") }}
            />
            <Button title="Open Camera Component "
                onPress={() => { navigation.navigate("MyCamera") }} />

            <Button title="Open Image Picker Component "
                onPress={() => { navigation.navigate("Img") }} />

            <Button title="Open web Browser Component "
                onPress={() => { navigation.navigate("Web") }} />

            <Button title="Open Location Component "
                onPress={() => { navigation.navigate("Locat") }} />


        </View>
    )
}
    ;