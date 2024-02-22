import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider = ({children}) => {
  // Uygulama initial olduğunda react'tan useEffect çağrılmalı
  //

  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER')
    .then(userSession =>{
                          userSession && setUser(JSON.parse(userSession));
                          /*
                          // Yukarıdaki işle aşağıdakinin kısaltmasıdır (false state'inde null durumu olduğu için):
                              userSession ? setUser(JSON.parse(userSession)) : 
                                            setUser(null);
                          */
    setAuthLoading(false);
    });
  }, []);

  const store = createStore(reducers, {user, isAuthLoading}); /** burada 2. parametreyi  */

/** Burada bellekten veri çekerken zaman aşımı söz konusudur Burada veri çekerken loading durumu göz önünde bulundurulacak*/
  return <Provider store={store}>{children}</Provider>;
}

export default AuthProvider;