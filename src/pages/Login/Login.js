// libraries, packages
import React from 'react';
import {SafeAreaView, Text, View, Image, Alert} from 'react-native';
import styles from './Login.style';
import {Formik} from 'formik';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

// Custom hooks
import usePost from '../../hooks/usePost/usePost';

// Custom components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = ({navigation}) => {
  /*
  *<Formik
  *       initialValues={{bu kısım obje alır}}
  *        
  */
  const {data, loading, error, post} = usePost(); // usePost içerisine parametre vermek yerine
                                                  // buradan dönen post fonksiyonuna da parametre gönderebiliriz
                                                  // bunu diğer custom hook olan useFetch'te de yapabiliriz
                                                  // ayrıca community tarafından geliştirilmiş useHttp custom hook'u da kullanılabilir
                                                  // bu durumda end point i buradan gelen post fonksiyonuna parametre olarak gönderelim
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }

  if(error){
    Alert.alert('Dükkan', 'Giriş işlemi başarısız');
  }

  if(data){
      if(data.status === 'Error')
      {
        Alert.alert('Dükkan', 'Kullanıcı bulunamadı');
      }
      else {
        dispatch({tyoe: 'SET_USER', payload: {user}});
        AsyncStorage.setItem('@USER', JSON.stringify(user)); // Bu işlemi reducerda da yapabiliriz const user ... dan sonraki satıra. Aynı işlemler yapılmış olur
        navigation.navigate('ProductsPage');
      }
  }
/**
 * Async storage usage:
 * https://react-native-async-storage.github.io/async-storage/docs/usage
 */


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image source={require('../../assets/login-logo.png')} 
                style={styles.logo}/>
        
      </View>
      <Formik
              initialValues={{username:'', password:''}}
              onSubmit={handleLogin}
      >
        {({handleSubmit, handleChange, values}) => (
                <View style={styles.body_container}>
                  <Input 
                        placeHolder='Kullanıcı adını giriniz' 
                        value={values.username}
                        onType={handleChange('username')}
                        iconName='account'                        
                  />
                  <Input 
                        placeholder='şifrenizi giriniz'
                        value={values.password}
                        onType={handleChange('password')}
                        iconName='key'
                        isSecure
                        />
                  <Button 
                        text='Giriş Yap' 
                        onPress={handleSubmit} // Oluşturduğumuz custom component'inin özelliklerini o component içinde tanımlamak gerekmez, parametre olarak
                                              // yazılır ancak geri dönüş fonksiyonu componentin kullanıldığı sayfada tanımlanabilir
                                              // Yani özellik orada parametre olarak dururken fonksiyonu sayfada yazılabilir
                        loading={loading}
                  />
                </View>
        )}
      </Formik>

    </SafeAreaView>
  );
}

export default Login;