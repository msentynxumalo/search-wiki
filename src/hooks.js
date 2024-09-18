import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export const useSearch = (query) => {
    const [state, setState] = useState({
        articles: [],
        status: 'IDLE',
        error: ''
    });

    const cancelToken = useRef(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if(query.length < 3) return; //optimise to not do unnecessary api calls

    if(cancelToken.current){
        cancelToken.current.cancel();
    }

    cancelToken.current = axios.CancelToken.source();  // cancel call if previous is not complete

    // Make a request for a user with a given ID
      axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`
        ,{cancelToken: cancelToken.current.token}
      )
      .then(function (response) {
        const parsedResponse = [];
        for(let i = 0; i < response.data[1].length; i++){
          parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i]
          })
        }
        setState({
            articles: parsedResponse,
            status: 'Success',
            error: ''
        });
      })
      .catch(function (error) {
        if(axios.isCancel(error)){
            return;
        }

        // handle error
        setState({
            articles: [],
            status: 'Error',
            error: error
        });
      })
  }, [query]);
  return state;
};

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])
    return debounceValue;
};

export const useSearchForm = () => {
    const [searchValue, setSearchValue] = useState('');

    const onSearchChange = (e) => setSearchValue(e.target.value);

    return {
        searchValue, onSearchChange
    }
};