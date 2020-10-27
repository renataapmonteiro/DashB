import axios from 'axios';
import React from 'react';
import ReactPaginate from 'react-paginate';

class Rank extends React.Component {
    constructor(props){
        super(props);

        this.state={
            moedaInfo: []
        }
    }

    componentDidMount(){
        axios.get(`https://poloniex.com/public?command=returnCurrencies`)
        .then(res=>{
            const moedaInfo = res.data;
            console.log(moedaInfo);
            this.setState({ moedaInfo: moedaInfo});
        })
    }
    
    
    render() {
            return (
            <div >
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
                        <tbody className="centered">
                           {Object.keys(this.state.moedaInfo).map((key) =>(
                               <tr>
                                    <th>{key}</th>
                                    <th>{this.state.moedaInfo[key].txFee}</th>
                                    <th>{this.state.moedaInfo[key].humanType}</th>
                                    <th>{this.state.moedaInfo[key].minConf}</th>
                                    <th>#{this.state.moedaInfo[key].hexColor}</th>
                               </tr>   
                           ))}
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


export default Rank;

