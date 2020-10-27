import axios from 'axios';
import React from 'react';

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
            <div className='tableS'>
                <div className="card-panel">
                    <table className="centered" >
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
                           {Object.keys(this.state.moedaInfo).map((key) =>(
                               <tr key={key}>
                                    <th >{key}</th>
                                    <th>{this.state.moedaInfo[key].txFee}</th>
                                    <th>{this.state.moedaInfo[key].humanType}</th>
                                    <th>{this.state.moedaInfo[key].minConf}</th>
                                    <th>#{this.state.moedaInfo[key].hexColor}</th>
                               </tr>   
                           ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}    


export default Rank;

