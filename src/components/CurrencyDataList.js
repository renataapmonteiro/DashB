import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars} from 'react-sparklines';

class CurrencyDataList extends React.Component {
    renderData(cdata){
        const highs = cdata.map(data => data.high);
        console.log(highs);
        const lows = cdata.map(data => data.low);
        console.log(lows);
        // const opens = moneyData.map( data => data.open);
        // console.log(opens);
        // const closes = moneyData.map( data => data.close);
        // console.log(closes);
        // const volumes = moneyData.map( data => data.volume);
        // console.log(volumes);
        // const weightedAverages = moneyData.map( data => data.weightedAverage);
        // console.log(weightedAverages);

        return(
            <tr>
                <td>
                    <Sparklines data={highs}>
                        <SparklinesBars />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={lows}>
                        <SparklinesLine style={{ fill: "none" }} />
                        <SparklinesSpots />
                    </Sparklines>
                </td>
                     
            </tr>
        )
    }

    render (){
        return (
            <table className="centered stripped">
                <thead>
                    <tr>
                        <th>Maior Preço</th>
                        <th>Menor Preço</th>
                        <th>Open - Preço Inicial</th>
                        <th>Close - Preço final</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(this.renderData)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({data}){
    return { data };
}

export default connect(mapStateToProps)(CurrencyDataList);
