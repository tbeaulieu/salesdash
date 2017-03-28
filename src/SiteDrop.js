import React, { Component } from 'react';

const sites = ['american banker', 'payment sources', 'digital insurance'];

class SiteDrop extends Component {
    render(){
        return(
            <div className="siteselect">
                <select>
                    {sites.map((site, index)=><option key={index}>{site}</option>)
                    }
                </select>
            </div>
        )
    }
}

export default SiteDrop;