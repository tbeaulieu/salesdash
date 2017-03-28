import React, { Component } from 'react';
import SiteDrop from './SiteDrop.js';
import Autosearch from './Autosearch.js';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="lbluebkg"><img src="."/>
                <h1>Sales Team Dashboard</h1></div>
                <div className="container">
                    <SiteDrop></SiteDrop>
                    <Autosearch userlist={this.props.userlist}></Autosearch>
                </div>
            </div>
        )
    }    
}

export default Header;
