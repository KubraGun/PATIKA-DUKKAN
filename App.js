import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'// Navigation yapısında mutlaka kullanılır
import {createStackNavigator} from '@react-navigation/stack';

// Sayfaların bulunduğu doosya import edilir.
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';

const Stack = createStackNavigator(); 

const Router = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen 
                  name='ProductsPage' 
                  component={Products}
                  options={{
                    title: 'Dükkan',
                    headerStyle: {backgroundColor: '#64B5F6'},
                    headerTitleStyle: {color: 'white'},

                  }}
                  />
          <Stack.Screen 
                  name='DetailPage' 
                  component={Detail}
                  options={{
                    title: 'Detay',
                    headerStyle: {backgroundColor: '#64B5F6'},
                    headerTitleStyle: {color: 'white'},
                    headerTintColor :'white',
                  }}
                  />

      </Stack.Navigator>
  </NavigationContainer>
  )
};

export default Router;