import React from 'react'
import './Main.css'
import 'font-awesome/css/font-awesome.min.css'
import Devlist from '../components/Devlist'
import Matchlist from '../components/Matchlist'

export default ({ match }) => {
    console.log('main ', match);
    return (
        <div className="container">
            <Matchlist match={match} />
            <Devlist match={match} />
        </div>
    )
};
