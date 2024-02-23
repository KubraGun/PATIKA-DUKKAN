import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'// Navigation yapısında mutlaka kullanılır
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

// Sayfaların bulunduğu doosya import edilir.
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login/Login';
import Loading from './src/components/Loading/Loading';

const Stack = createStackNavigator(); 

const Router = () => {
  // AuthProvider'daki stateler:
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isLoading);
  const dispatch = useDispatch();

  return (
      <NavigationContainer>
        
          // Kayıtlı oturum varsa login sayfasını , yoksa ana sayfayı gösterir:
          // docs'dan bu koda erişebilirsin
          {isAuthLoading ? 
            (
              <Stack.Navigator>
                <Loading />
              </Stack.Navigator>
            ) :
            !userSession ? (
              <Stack.Navigator>
                      <Stack.Screen 
                              name='LoginPage' 
                              component={Login}
                              options={{
                                    headerShown: false,
                                   }}
                      /> 
              </Stack.Navigator>
                         ) : (
                        <>
                          <Stack.Navigator>
                            <Stack.Screen 
                                            name='ProductsPage' 
                                            component={Products}
                                            options={{
                                              title: 'Dükkan',
                                              headerStyle: {backgroundColor: '#64B5F6'},
                                              headerTitleStyle: {color: 'white'},
                                              headerRight: () => <Icon 
                                                                      name='logout' 
                                                                      size={30}
                                                                      onPress={() => dispatch({type: 'REMOVE_USER'})}
                                                                      />
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

                           </>
                         )}          
      
  </NavigationContainer>
  )
};

export default Router;