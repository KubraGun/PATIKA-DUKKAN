import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'// Navigation yapısında mutlaka kullanılır
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// Sayfaların bulunduğu doosya import edilir.
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login/Login';

const Stack = createStackNavigator(); 

const Router = () => {
  // AuthProvider'daki stateler:
  const userSession = useSelector(s => s.user);
  const isLoading = useSelector(s => s.isLoading);

  return (
      <NavigationContainer>
        <Stack.Navigator>
          // Kayıtlı oturum varsa login sayfasını , yoksa ana sayfayı gösterir:
          // docs'dan bu koda erişebilirsin
          {!userSession ? (
                      <Stack.Screen 
                              name='LoginPage' 
                              component={Login}
                              options={{
                                    headerShown: false,
                                   }}
                      /> 
                         ) : (
                           <>
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

                           </>
                         )}          
      </Stack.Navigator>
  </NavigationContainer>
  )
};

export default Router;