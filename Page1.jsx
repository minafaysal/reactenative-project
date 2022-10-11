import {View ,Text,Button} from "react-native";
import { usePreventScreenCapture } from 'expo-screen-capture';




export const Page1=({navigation})=>{
    usePreventScreenCapture();
    return(
        <View>
        <Text>Hello We are in Page 1</Text>
        <Button title="Go To Page 2"
    onPress={()=>{navigation.navigate("Page2")}}
    />
        </View>

)
}
