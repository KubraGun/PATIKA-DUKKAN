import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url){
  const [error, setError]  = useState(null)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

    const fetchData = async () => {

      try {
        const {data: responseData} = await axios.get(url);
        setData(responseData);
        setLoading(false);
      }
      catch (err){
        setError(err.message);
        setLoading(false)

      }
  }

  useEffect(() => {
    fetchData();
  }, []); // Bu fonksiyon call edildiğinde çalışacak

  return {error, loading, data};
}

//not : eslint-disable-next-line react-hooks/exhaustive-deps
export default useFetch;