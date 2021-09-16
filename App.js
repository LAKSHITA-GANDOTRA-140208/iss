import "react-native-gesture-handler"
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import IssLocationScreen from './screens/IssLocationScreen'
 import { createStackNavigator } from "@react-navigation/stack";
 import { NavigationContainer } from "@react-navigation/native";
 const Stack=createStackNavigator()
export default class App extends Component {
render(){
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="IssLocationScreen" component={IssLocationScreen}></Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
