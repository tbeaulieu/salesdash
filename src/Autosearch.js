import React, { Component } from 'react';

// const emaillist = [{
//         firstname: "test",
//         lastname: "boringname",
//         email: "test@test.com"
//     },
//     {
//         firstname: "joe bob",
//         lastname: "briggs",
//         email: "joebob@test.com"
//     },
//     {
//         firstname: "johnny",
//         lastname: "western",
//         email: "jimbob@google.com"
//     },
//     {
//         firstname: "kathrine",
//         lastname: "Yamaguchi",
//         email: "kathrine@masters.org"
//     }
// ];
class Dropmenu extends React.Component{
    constructor(props){
        super(props);

    }
        render(){
            return(
            <ul className="dropmenu">
                    <li>{this.props.query}</li>
                    {this.props.userlist.filter(obj => Object.keys(obj).some(key => obj[key].toString().toLowerCase().includes(this.props.query.toLowerCase()))).map((person, keys) => <li key={keys}>{person['First Name']} {person['Last Name']} <label>email:</label> {person['Email']}</li>)}
            </ul>
            )

        }
}

class Autosearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', visible: false};
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.state.value !== '' ? this.state.visible = true : this.state.visible=false;
    }
    render(){ 
        //<ul className="dropmenu">{this.state.searchList.filter(obj => Object.keys(obj).some(key => obj[key].toLowerCase().includes(this.state.value.toLowerCase()))).map((person, keys) => <li key={keys}>{person.firstname} {person.lastname} <label>email:</label> {person.email}</li>)}</ul>;
        return ( 
            <div className="Autosearch">
            <input type = "text" value = { this.state.value } onChange = { this.handleChange }
            placeholder = "Search users (first name or last name or email address)"
           
            />
            {!(this.state.value.length > 0) ? null :
             <Dropmenu userlist={this.props.userlist} query={this.state.value} />}
            </div>
        )
    }
}
//             <SearchResults userlist={emaillist} > </SearchResults>  


export default Autosearch;