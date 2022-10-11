import {View ,Text,Button} from "react-native"


export const Page2=({navigation})=>{
    return(
        <View>
        <Text>Hello We are in Page 2</Text>

        <Button title="Go To Page 1"
    onPress={()=>{navigation.navigate("Page1")}}
    />
        </View>

)
}



       
 