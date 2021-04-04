import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default (props)=>{
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}} className="layout">
            <div>
            <Header/>
            {
                props.children
            }
            </div>
            <Footer />
        </div>
    )
}