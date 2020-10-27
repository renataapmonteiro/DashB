import React from 'react'
import Search from '../components/Search'
import CurrencyDataList from '../components/CurrencyDataList'

const PageOne = () => {
    return (
        <div className="cont1">
            <Search></Search>
            <CurrencyDataList></CurrencyDataList>
        </div>
    )
}

export default PageOne;
