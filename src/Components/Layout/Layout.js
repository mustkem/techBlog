import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default (props)=>{
    return (
        <div className="layout">
            <Header/>
            {
                props.children
            }
            <Footer />
        </div>
    )
}