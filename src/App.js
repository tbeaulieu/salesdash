import React, { Component } from 'react';
import Header from './Header.js';
import Userlist from './Userlist.js';
import Personal from './Personal.js';
import Dataview from './Dataview.js';
import Sessions from './Sessions.js';
import Footer from './Footer.js';
import './Dashboard.css';

const users = [
            {
            "First Name": "Jimmy",
            "Last Name": "Anderson",
            "Email": "j.anderson@gmail.com",
            "Subscription Products": "Premium 1 year",
            "Site License User": "Y",
            "Site License Name": "Blah Blah Blah",
            "Date/Time last Login": "02-14-17 / 8:30 AM",
            "Site Last Login": "American Banker",
            "Length Last Session": "1 h 30mn",
            "Nb Pages viewed Last Session": 5,
            graphs: [
              {
              barData:[
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                {name: 'Page G', uv: 3490, pv: 5300, amt: 2100},
                {name: 'Page H', uv: 3490, pv: 2100, amt: 3900},
                {name: 'Page I', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page J', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page K', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page L', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page M', uv: 3490, pv: 4900, amt: 2200},
                ],
              pieData:[
                {label: 'Real Estate', value: 20.0},
                {label: 'Origination', value: 10.0},
                {label: 'Life Insurance', value: 25.0 },
                {label: 'Something Dull', value: 45.0}
              ] 
              }
            ],
            sessions: [
                      {
                          date: "May 6 2017",
                          sitename: "American Banker",
                          sessionlength: "3hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title: "this boring page",
                                  link: "http://www.google.com",
                              },
                              {
                                  title: "this boring page 2",
                                  link: "http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 7 2017",
                          sitename: "American Banker",
                          sessionlength: "5hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Adventerous page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 9 2017",
                          sitename: "EBA",
                          sessionlength: "7hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this FANTASTIC page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 29 2017",
                          sitename: "Digital Insurance",
                          sessionlength: "2hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Cool page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      }
                  ]
            },
            {
            "First Name": "Yuffie",
            "Last Name": "Kisaragi",
            "Email": "yuffie@squaresoft.com",
            "Subscription Products": "Premium 1 year",
            "Site License User": "Y",
            "Site License Name": "Blah Blah Blah",
            "Date/Time last Login": "02-14-17 / 8:30 AM",
            "Site Last Login": "Digital Insurance",
            "Length Last Session": "8 h 30mn",
            "Nb Pages viewed Last Session": 2,
            graphs: [
              {
              barData:[
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2412},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 3312},
                {name: 'Page G', uv: 3490, pv: 5300, amt: 2100},
                {name: 'Page H', uv: 3490, pv: 2100, amt: 3900},
                {name: 'Page I', uv: 3490, pv: 4900, amt: 3351},
                {name: 'Page J', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page K', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page L', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page M', uv: 3490, pv: 4900, amt: 2200},
                ],
              pieData:[
                {label: 'Real Estate', value: 20.0},
                {label: 'Origination', value: 10.0},
                {label: 'Life Insurance', value: 45.0 },
                {label: 'Something Else', value: 25.0}
              ] 
              }
            ],
            sessions: [
                      {
                          date: "May 6 2017",
                          sitename: "American Banker",
                          sessionlength: "3hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title: "this boring page",
                                  link: "http://www.google.com",
                              },
                              {
                                  title: "this boring page 2",
                                  link: "http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 7 2017",
                          sitename: "American Banker",
                          sessionlength: "5hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Adventerous page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 9 2017",
                          sitename: "EBA",
                          sessionlength: "7hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this FANTASTIC page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 29 2017",
                          sitename: "Merry olde page",
                          sessionlength: "2hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Cool page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      }
                  ]
            },
            {
            "First Name": "Selphie",
            "Last Name": "Tilmitt",
            "Email": "Selphie@squaresoft.com",
            "Subscription Products": "Premium 1 year",
            "Site License User": "Y",
            "Site License Name": "Blah Blah Blah",
            "Date/Time last Login": "02-14-17 / 8:30 AM",
            "Site Last Login": "EBA",
            "Length Last Session": "12 h 30mn",
            "Nb Pages viewed Last Session": 4,
            graphs: [
              {
              barData:[
                {name: 'Page A', uv: 4000, pv: 2400, amt: 1231},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 5312},
                {name: 'Page G', uv: 3490, pv: 5300, amt: 2100},
                {name: 'Page H', uv: 3490, pv: 2100, amt: 3900},
                {name: 'Page I', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page J', uv: 3490, pv: 4900, amt: 2893},
                {name: 'Page K', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page L', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page M', uv: 3490, pv: 4900, amt: 2200},
                ],
              pieData:[
                {label: 'Real Estate', value: 10.0},
                {label: 'Origination', value: 10.0},
                {label: 'Life Insurance', value: 25.0 },
                {label: 'Something round', value: 55.0}
              ] 
              }
            ],
            sessions: [
                      {
                          date: "May 6 2017",
                          sitename: "American Banker",
                          sessionlength: "3hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title: "this boring page",
                                  link: "http://www.google.com",
                              },
                              {
                                  title: "this boring page 2",
                                  link: "http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 7 2017",
                          sitename: "American Banker",
                          sessionlength: "5hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Adventerous page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 9 2017",
                          sitename: "EBA",
                          sessionlength: "7hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this FANTASTIC page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 29 2017",
                          sitename: "Meow Town",
                          sessionlength: "2hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Big Kitty page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      }
                  ]
            },
            {
            "First Name": "Homer",
            "Last Name": "Simpson",
            "Email": "homer@springfield.edu",
            "Subscription Products": "Premium 1 year",
            "Site License User": "Y",
            "Site License Name": "Blah Blah Blah",
            "Date/Time last Login": "02-14-17 / 8:30 AM",
            "Site Last Login": "Digital Insurance",
            "Length Last Session": "8 h 30mn",
            "Nb Pages viewed Last Session": 2,
            graphs: [
              {
              barData:[
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2412},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 3312},
                {name: 'Page G', uv: 3490, pv: 5300, amt: 2100},
                {name: 'Page H', uv: 3490, pv: 2100, amt: 3900},
                {name: 'Page I', uv: 3490, pv: 4900, amt: 3351},
                {name: 'Page J', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page K', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page L', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page M', uv: 3490, pv: 4900, amt: 2200},
                ],
              pieData:[
                {label: 'Real Estate', value: 20.0},
                {label: 'Origination', value: 10.0},
                {label: 'Life Insurance', value: 45.0 },
                {label: 'Something Else', value: 25.0}
              ] 
              }
            ],
            sessions: [
                      {
                          date: "May 6 2017",
                          sitename: "American Banker",
                          sessionlength: "3hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title: "this boring page",
                                  link: "http://www.google.com",
                              },
                              {
                                  title: "this boring page 2",
                                  link: "http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 7 2017",
                          sitename: "American Banker",
                          sessionlength: "5hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Adventerous page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 9 2017",
                          sitename: "EBA",
                          sessionlength: "7hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this FANTASTIC page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 29 2017",
                          sitename: "Merry olde page",
                          sessionlength: "2hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Cool page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      }
                  ]
            },
            {
            "First Name": "Bojack",
            "Last Name": "Horseman",
            "Email": "Bojack@tvguide.com",
            "Subscription Products": "Premium 1 year",
            "Site License User": "Y",
            "Site License Name": "Blah Blah Blah",
            "Date/Time last Login": "02-14-17 / 8:30 AM",
            "Site Last Login": "EBA",
            "Length Last Session": "12 h 30mn",
            "Nb Pages viewed Last Session": 4,
            graphs: [
              {
              barData:[
                {name: 'Page A', uv: 4000, pv: 2400, amt: 1231},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 5312},
                {name: 'Page G', uv: 3490, pv: 5300, amt: 2100},
                {name: 'Page H', uv: 3490, pv: 2100, amt: 3900},
                {name: 'Page I', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page J', uv: 3490, pv: 4900, amt: 2893},
                {name: 'Page K', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page L', uv: 3490, pv: 4900, amt: 2200},
                {name: 'Page M', uv: 3490, pv: 4900, amt: 2200},
                ],
              pieData:[
                {label: 'Real Estate', value: 10.0},
                {label: 'Origination', value: 10.0},
                {label: 'Life Insurance', value: 25.0 },
                {label: 'Something round', value: 55.0}
              ] 
              }
            ],
            sessions: [
                      {
                          date: "May 6 2017",
                          sitename: "American Banker",
                          sessionlength: "3hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title: "this boring page",
                                  link: "http://www.google.com",
                              },
                              {
                                  title: "this boring page 2",
                                  link: "http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 7 2017",
                          sitename: "American Banker",
                          sessionlength: "5hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Adventerous page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 9 2017",
                          sitename: "EBA",
                          sessionlength: "7hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this FANTASTIC page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 29 2017",
                          sitename: "Meow Town",
                          sessionlength: "2hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Big Kitty page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      },
                      {
                          date: "May 29 2017",
                          sitename: "Meow part Deux",
                          sessionlength: "2hr",
                          pageviews: "1743",
                          pages: [
                              {
                                  title:"this Big cat page",
                                  link:"http://www.google.com",
                                  tags: [ "durf", "duff", "bluff"]
                              }
                          ]
                      }
                  ]
            }
]

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentid: 0
    };
    this.userselect = this.userselect.bind(this);
  }
  userselect(index){
    // event.preventDefault();
    this.setState({
      currentid: index
    });
  } 
  render() {
    return (
      <div>
        <Header userlist={users} userselect={this.userselect}></Header>
        <div className="container">
          <Userlist userlist={users} userselect={this.userselect}></Userlist>
          <Personal userlist={users} user={this.state.currentid}></Personal>
          <Dataview userlist={users} user={this.state.currentid}></Dataview>
          <Sessions userlist={users} user={this.state.currentid}></Sessions>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
