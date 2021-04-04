import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = (props)=>{
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

export default Layout;