import React from 'react'

const Rank = () => {
    return (
        <div className="card-panel">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>TxFee</th>
                        <th>HumanType</th>
                        <th>Minconf</th>
                        <th>HexColor</th>
                    </tr>
                </thead>
            </table>
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

export default Rank
