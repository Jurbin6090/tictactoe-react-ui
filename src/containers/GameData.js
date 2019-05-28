import React from 'react';
import {connect} from 'react-redux';

function test(i, j){
    console.log(i)
    console.log(j)
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
            ? data.map((game) => {
                return <div>
                    {game.playerOneName}(X) vs. {game.playerTwoName}(O)
                    <hr/>
                    Player {game.playersTurn}'s Turn
                    <hr/>
                    {game.board.map((row, i) => {
                        return <div class="row">
                            {
                                row.map((cell, j) => {
                                    return <div onClick={test(i + 1, j + 1)}>
                                        {cell}
                                    </div>
                                })
                            }
                        </div>
                    })
                    }
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