import React from 'react';
import {connect} from 'react-redux';

function GameData({data}) {
    if (!data) {
        return (
            <div>
                No Data
            </div>
        )
    }
    return (
        <div>
            <div>
                {data
                    ? data.map((item, i) => {
                        return <div key={i}>
                            Game Id: {item.id}
                            <hr/>
                            Player One: {item.playerOneName}
                            <hr/>
                            Player Two: {item.playerTwoName}
                            <hr/>
                            Players Turn: {item.playersTurn}
                            <hr/>
                            Game State: {item.state}
                            <hr/>
                            Message: {item.message}
                            <hr/>
                            Board: {item.board}
                        </div>;
                    })
                    : null}
            </div>
        </div>
    )
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