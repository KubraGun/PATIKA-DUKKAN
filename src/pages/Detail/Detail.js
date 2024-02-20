import React from 'react';
import {View, Text, Image} from 'react-native';
import Config from 'react-native-config';
import styles from './Detail.style';

import useFetch from '../../hooks/useFetch/useFetch';

// NOT: kullandığımız fakestoreapi'de kategoriler mevcuttur kategori filtreleme yapılabilir.

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Detail = ({route}) => {
const {loading, error, data} = useFetch('${Config.API_URL}/${id}');


  if(loading){
    return <Loading />;
    
  }

  if (error){
    return(
      <Error />
    )
  }
  return(
    <View style={styles.container}>
      <Image source={{uri: data.image}}styles={styles.image}/>
      <View style={styles.body_container}>
         <Text style={style.title}>{data.title}</Text>
        <Text style={style.desc}>{data.description}</Text>
        <Text style={style.price}>{data.price} TL</Text>
      </View>
    </View>
    
  );
}

export default Detail;