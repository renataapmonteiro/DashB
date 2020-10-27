import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Rank extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            MoedaInfo: [],
            TickerInfo: []
        }
    }

    componentDidMount() {
        this.fetchMoeda();
    }

    fetchMoeda() {
        let moedaFunction = [];
        let tickerFunction = [];

        const pointerToThis = this;

        const API_1 = `https://poloniex.com/public?command=returnCurrencies`;
        const API_2 = `https://poloniex.com/public?command=returnTicker`;

        fetch(API_1)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          //console.log(data);

          for (var key in data) {
            moedaFunction.push(data[key]);

          }

          // console.log(stockChartXValuesFunction);    
          pointerToThis.setState({
            MoedaInfo: moedaFunction
          });
        }
        
        
      )
    }

    renderMoeda(){
        for(var key in this.state.MoedaInfo){
           return key
        }
    }
    render() {
            return (
            <div>
                <div className="card-panel">
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>TxFee</th>
                                <th>HumanType</th>
                                <th>Minconf</th>
                                <th>HexColor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.MoedaInfo[this.key]}
                        </tbody>
                    </table>
                </div>
            
                <div className="row">
                    <div className="col s6">
                        <div className="card-panel">MORE INFO</div>
                    </div>
                    <div className="col s6">
                        <div className="card-panel">A LIT BIT OF MORE INFO</div>
                    </div> 
                </div>
            </div>
        )

    }
}    
    
function mapStateToProps({MoedaInfo}){
    return {MoedaInfo}
}

export default connect(mapStateToProps)(Rank);

