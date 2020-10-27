import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class CurrencyDataList extends React.Component {
    renderData(cdata){
        const highs = cdata.map(data => data.high);
        console.log(highs);
        const lows = cdata.map(data => data.low);
        console.log(lows);
        const opens = cdata.map( data => data.open);
        console.log(opens);
        const closes = cdata.map( data => data.close);
        console.log(closes);
        // const volumes = moneyData.map( data => data.volume);
        // console.log(volumes);
        // const weightedAverages = moneyData.map( data => data.weightedAverage);
        // console.log(weightedAverages);

        return(
            <tr>
                <td>
                    <Sparklines data={highs} width={100} height={20}>
                        <SparklinesLine color='red' />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={lows} width={100} height={20}>
                        <SparklinesLine color='green'/>
                    </Sparklines>
                </td>
                     
                <td>
                    <Sparklines data={opens} width={100} height={20}>
                        <SparklinesLine color='blue'/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={closes} width={100} height={20}>
                        <SparklinesLine color='orange'/>
                    </Sparklines>
                </td>
                     
            </tr>
        )
    }

    render (){
        return (
            <div>
                <div className="card-panel bloo">
                    Gráficos de Comportamento:
                </div>
                <table className="centered stripped">
                    <thead>
                        <tr>
                            <th>Maior Preço</th>
                            <th>Menor Preço</th>
                            <th>Preço Inicial</th>
                            <th>Preço final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(this.renderData)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({data}){
    return { data };
}

export default connect(mapStateToProps)(CurrencyDataList);
