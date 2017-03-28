import React, { Component } from 'react';

class Pages extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        return(
            <div>
                <strong>Page title: </strong><a href={this.props.page.link} target="_blank">{this.props.page.title}</a>
                {!this.props.page.tags ? null : <strong>Page tags:</strong> }
                {!this.props.page.tags ? null : this.props.page.tags.map((tag, keys) => <a href="#" key={keys}>{tag}</a> )}
            </div>
        )
    }
}

class SessionDetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="sessiondetails">
                {this.props.detaildata.map((page, key) => <Pages key={key} page={page}></Pages> )}
            </div>
        )
    }
}


class Session extends React.Component{
    constructor(props){
        super(props);
        this.state = {showDetails: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({showDetails:!this.state.showDetails})
    }
    render(){
        return(
            <div className="iterate">
                <div className="session" onClick={this.handleClick} hidden={this.state.showDetails}>
                        <div className="datapoint"><label>Date / Time</label> {this.props.datain.date}</div>
                        <div className="datapoint"><label>Site Name</label> {this.props.datain.sitename}</div>
                        <div className="datapoint"><label>Session Length:</label> {this.props.datain.sessionlength}</div>
                        <div className="datapoint"><label>Number Pages viewed:</label>{this.props.datain.pageviews}</div> 
                        {this.state.showDetails}
                </div>
               {!this.state.showDetails ? null : <SessionDetails detaildata={this.props.datain.pages}></SessionDetails>}
            </div>
        )
    }
} 

class Sessions extends React.Component{
    render(){
        return (
            <div className="sessions section-container oline">
                <h2>Previous Sessions</h2>
                {this.props.userlist[this.props.user].sessions.map((session, key) => <Session key={key} datain={session}></Session>)}
            </div>
        );
    }    
}

export default Sessions;
