import React, { Component } from 'react';



class RenderList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filteredusers: this.props.userlist,
            activeIndex: '',
            sortDirection: ''
        };
        this.clickCategory = this.clickCategory.bind(this);
    }
    clickCategory(index, data){
        // console.log(index);
        let sortDir = this.state.sortDir;
        let sortBy = this.props.userlist.map((obj) => Object.keys(obj))[0].slice(0,10)[index];
        console.log(sortBy);
        if(sortBy === this.state.activeIndex){
            sortDir = this.state.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        }
        else{
            sortDir = 'DESC'; 
        }
        let newrows = this.state.filteredusers.slice();
        newrows.sort((a, b) =>{
            let sortval = 0;
            if(a[sortBy] > b[sortBy]){
                sortval = 1;
            }
            if(a[sortBy] < b[sortBy]){
                sortval = -1;
            }

            if(sortDir==='DESC'){
                sortval = sortval * -1;
            }
            return sortval;
        });
        this.setState({
            activeIndex: sortBy,
            sortDirection : sortDir,
            filteredusers: newrows
        });
    }
    render(){
        return(
            <div>
                <div className="Catagories Personal">
                    {this.props.headlines.map((catagory, key)=> <a href="#" key={key} id={catagory.index} className="useritem" onClick={this.clickCategory.bind(this, key)}>{catagory}</a>)}
                </div>
               
                    {this.state.filteredusers.map((user, key)=> 
                    <div className="Personal SelectRow" key={key} onClick={this.props.userselect.bind(this, key)}>
                        <div className="useritem">{user['First Name']}</div>
                        <div className="useritem">{user['Last Name']}</div>
                        <div className="useritem">{user['Email']}</div>
                        <div className="useritem">{user['Subscription Products']}</div>
                        <div className="useritem">{user['Site License User']}</div>
                        <div className="useritem">{user['Site License Name']}</div>
                        <div className="useritem">{user['Date/Time last Login']}</div>
                        <div className="useritem">{user['Site Last Login']}</div>
                        <div className="useritem">{user['Length Last Session']}</div>
                        <div className="useritem">{user['Nb Pages viewed Last Session']}</div>

                    </div>)}
            </div>
            
        )
    };
}

class Userlist extends React.Component{
    
    //  sortToggle(event) {
    //     this.setState({sort:''});
    //     console.log(event);
    // }

   constructor(props){
       super(props);
        const getCatagories = this.props.userlist.map((obj) => Object.keys(obj))[0].slice(0,10);
        this.state = { 
            headlines: getCatagories, 
            sortedlist: this.props.userlist,
            sortby: "Last Name",
            sortDir: null
        }    
 }

    render(){
        return(
            <div className="userlist section-container oline">
                <h2>LAST USERS LOGGED IN</h2>
                <RenderList headlines={this.state.headlines} userselect={this.props.userselect} userlist={this.props.userlist}/>
            </div>
        );
    }
}

export default Userlist;