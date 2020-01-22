import React from 'react'
import './Main.css'

import Devlist from '../components/Devlist'
import Matchlist from '../components/Matchlist'

export default ({ match }) => {
    return (
        <div className="container">
            <Matchlist match={match} />
            <Devlist match={match} />
        </div>
    )
};
