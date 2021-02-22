import React from 'react';

import Header from '../Header/Header';

export default (props)=>{
    return (
        <div className="layout">
            <Header></Header>
            {
                props.children
            }
        </div>
    )
}