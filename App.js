import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './HomePage';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { MyCamera } from './MyCamera';
import { ImgPic } from './ImgPic';
import { Locat } from './Locat';
import { Web } from './WebView';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Setting } from './Setting';
// import { MainPage } from './MainPage';




const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="MyCamera" component={MyCamera} />
        <Stack.Screen name="Img" component={ImgPic} />
        <Stack.Screen name="Locat" component={Locat} />
        <Stack.Screen name="Web" component={Web} />

      </Stack.Navigator>

    </NavigationContainer>

  );
  
}


// export  function newApp() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>

// <Tab.Screen name="MainPage" component={MainPage} />
// <Tab.Screen name="Setting" component={Setting} />



//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
