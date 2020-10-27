import axios from 'axios';
import BASE_URL from '../Api/Api';

export const FETCHED_DATA = 'FETCHED_DATA';

export function fetchDataCurrency(currencyPair){
    const Url = `${BASE_URL}?command=returnChartData&currencyPair=${currencyPair}&start=1546300800&end=1546646400&period=14400`;
    const request = axios.get(Url);

    console.log(request);

    return {
        type: FETCHED_DATA,
        payload: request
    }
}
