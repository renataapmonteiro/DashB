import React from 'react';
import { connect } from 'react-redux';


class CurrencyDataList extends React.Component {

    renderData(moneyData){
        const highs = moneyData.map( dataCurrency => dataCurrency.high);
        console.log(highs);
        const lows = moneyData.map( dataCurrency => dataCurrency.low);
        console.log(lows);
        const opens = moneyData.map( dataCurrency => dataCurrency.open);
        console.log(opens);
        const closes = moneyData.map( dataCurrency => dataCurrency.close);
        console.log(closes);
        const volumes = moneyData.map( dataCurrency => dataCurrency.volume);
        console.log(volumes);
        const weightedAverages = moneyData.map( dataCurrency => dataCurrency.weightedAverage);
        console.log(weightedAverages);

        return(
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
    }

    render (){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Maior Preço</th>
                        <th>Menor Preço</th>
                        <th>Open - Preço Inicial</th>
                        <th>Close - Preço final</th>
                        <th>Volume</th>
                        <th>Valor total Negociado</th>
                        <th>Valor Medio da Moeda</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataCurrency.map(this.renderData)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ dataCurrency }){
    return { dataCurrency }
}

export default connect(mapStateToProps)(CurrencyDataList);
