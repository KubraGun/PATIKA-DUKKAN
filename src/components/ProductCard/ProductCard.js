import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style'


// Property'ler {} arasına yazılır.
// Bu örnekte gönerilen property Product'tır. JSON formatında bir veri setidir. Burada her verinin id'si, başlığı, fiyatı,.. gibi bilgiler bulunur.
// Bunlara erişebilmek için <property_name>.<key> ile erişiriz


// Parantez içindeki {product} bu component'i kullanan sayfada özellik olarak belirtilir. yani;
// <ProductCard product={...} />
const ProductCard = ({product, onSelect}) => {
 
  return(
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image 
              style={styles.image}
              source={{uri: product.image}}
        />

        <View styele={style.body_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );

}

export default ProductCard;

// export default ile const bir arada kullanılmaz 