import React from 'react';
import {connect} from 'react-redux';
import {takeTurn} from "../actions";
import {store} from '../index'

function test(game, i, j) {
    store.dispatch(takeTurn(game, i, j));
}

function GameData({data}) {
    if (!data) {
        return (
            <div>
                No Data
            </div>
        )
    }
    return <div>
        {data
            ? data.map((game, m) => {
                return <div key={m}>
                    {game.playerOneName}(X) vs. {game.playerTwoName}(O)
                    <hr/>
                    Player {game.playersTurn}'s Turn
                    <hr/>
                    <table>
                        <tbody>
                        {game.board.map((row, i) => {
                            return <tr key={'row' + i} className="row">
                                {
                                    row.map((cell, j) => {
                                        return <td className="cell" key={'cell' + i + j}
                                                   onClick={() => test(game.id, i + 1, j + 1)}>
                                            {cell === 'BLANK' ? '-' : cell}
                                        </td>
                                    })
                                }
                            </tr>
                        })
                        }
                        </tbody>
                    </table>
                </div>;
            })
            : null}
    </div>
}

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(
    mapStateToProps,
    null
)(GameData);