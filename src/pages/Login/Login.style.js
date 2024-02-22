import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#64b5f6',
    flex: 1,
  },
  logo_container: {
    justifyContent: 'center',
    flex: 1,
  },
  body_container: {
    flex:1,
  },
  logo: {
    height: Dimensions.get('window')/3,
    width: Dimensions.get('window'),
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white', // logodaki siyah alışveriş arabasının rengi beyaz olarak değiştirilir
  },
});