import React, { Component } from 'react';


class Personal extends React.Component{
    
    render(){
    
        return (
            <div className="Personal section-container oline">
                <div className="name-item">
                        <p><label>First Name</label> {this.props.userlist[this.props.user]['First Name']}</p>
                        <p><label>Last Name</label> {this.props.userlist[this.props.user]['Last Name']}</p>
                </div>
                <div className="name-item">
                        <p><label>Email</label> {this.props.userlist[this.props.user]['Email']}</p>
                        <p><label>Phone Number</label> {this.props.userlist[this.props.user]['phone']}</p>
                        <p><label>Company</label> {this.props.userlist[this.props.user]['phone']}</p>
                </div>
                <div className="name-item">
                        <p><label>Site License User</label> {this.props.userlist[this.props.user]['Site License User']}</p>
                        <p><label>Subscription Products</label> {this.props.userlist[this.props.user]['Subscription Products']}</p>
                </div>
                <div className="name-item">
                        <p><label>Last Login</label> {this.props.userlist[this.props.user]['Site Last Login']}</p>
                        <p><label>Length Last Session</label> {this.props.userlist[this.props.user]['Length Last Session']}</p>
                        <p><label>Nb pages viewed last session</label> {this.props.userlist[this.props.user]['Nb Pages viewed Last Session']}</p>
                </div>
            </div>
        );
    }    
}

export default Personal;
