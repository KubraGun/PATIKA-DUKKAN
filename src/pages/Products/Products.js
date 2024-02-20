import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

// index, style ve card dosyalarını ayrı ayrı oluşturduğumuzda klasöre erişiriz
import ProductCard from '../../components/ProductCard/ProductCard';

import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  

  /* 
  // Oluşturduğumuz custom hoook olan useFetch'e yazdık:
  const [error, setError]  =useState(null)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

 
      
  useEffect(
    () => {
      fetchData();
    }
    , []
    );
  
  const fetchData = async () => {

    try {
      const {data: productData} = await axios.get(Config.API_URL);
      setData(productData);
      setLoading(false);
    }
    catch (err){
      setError(err.message);
      setLoading(false)

    }
  }*/


  const {loading, data, error} = useFetch(Config.API_URL); // bir key kullanmadığımız müddetçe return ettiğimiz sırada geri döner

  const handleProductSelect = (id) => {
    navigation.navigate('DetailPage', {id});
  }

  //onPress eventinde parametre gondermeden işlem yaptıracaksak yalnızca fonksiyonun adını göndermemiz yeterliydi.
  //ancak parametre göndermemiz gerekiyorsa arrow func. şeklinde oluşturmalıyız
    const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>

  if(loading){
    return <Loading />;
    
  }

  if (error){
    return(
      <Error />
    )
  }
  return(
      <SafeAreaView>
        <FlatList 
                data={data}
                renderItem={renderProduct}
        />
       </SafeAreaView>
  );
}

export default Products;