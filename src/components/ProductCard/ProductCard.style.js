import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    margin: 10,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    //height: 100,
    resizeMode: 'contain', //yanındaki bileşenin içeriğine göre büyüklük olur ancak minimum bi boyutta kamasını istersek:
    minHeight: 100, // Parent element olan view bu durumda minimum bu kadar kalır
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price:{
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default styles;
