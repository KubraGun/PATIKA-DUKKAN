import AsyncStorage from '@react-native-async-storage/async-storage';

export default function reducers(state, action){
  switch(action.type){
    case 'SET_USER':
      const {user} = action.payload;
      // Logout işlemi için :
      // Aşağıdakini yapmak yerine REMOVE_USER tanımlayalım
      /*user ? // user nesnesi mevcutsa --> setItem : null ise --> remove
        AsyncStorage.setItem('@USER', JSON.stringify(user)):
        AsyncStorage.removeItem('@USER');*/
        AsyncStorage.setItem('@USER', JSON.stringify(user));
        return {...state, user};

    case 'REMOVE_USER':
      AsyncStorage.removeItem('@USER');
      return {...state, user: null};

    default:
      return state;
  }
}