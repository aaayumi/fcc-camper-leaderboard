import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Header extends React.Component {
    render() {
        return (
        <div id="header">freeCodeCamp Leader Board </div>
        )
}
}
    
class LeaderBoard extends React.Component {
    handleChange(e){
        this.props.handleData(e.target.id);
    }

    render() {
        return (
        <div>   
        <table>
        <thead>
        <tr>
            <th> # </th>
            <th> Camper Name </th>
            <th id="recent" className="cell" onClick={this.handleChange.bind(this)}> Points in the past 30days</th>
            <th id="alltime" className="cell" onClick={this.handleChange.bind(this)}> All time points </th>
        </tr>
        </thead>
        <tbody>
        { this.props.data.map( function(user, index){
            return(
            <tr key={ user.username }>
            <td>#{index +1}</td>
            <td><a href={'https://www.freecodecamp.com/' + user.username}><img src={user.img} className="profileImg"/><p>{ user.username }</p></a> 
            </td>
            <td>{ user.recent }</td>
            <td>{ user.alltime }</td>
            </tr>  
            )
        })
    }
    </tbody>
    </table>
    </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
           <div> 
            <p id="footer">Coded by Ayumi Saito </p>
            </div>
        )
}
}

class App extends React.Component {
    constructor(props) {
        super(props);
        
        //assign state itself, and a default value for items
        this.state = {
            item: []
        };
    
    
    // bind data 
    this.handleData = this.handleData.bind(this);
    }
    // set up 'alltime' as a default
    componentDidMount(){
        this.handleData('alltime');
        
    }
    handleData(key) {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/' + key)
        .then((response) => {
          this.setState({
              item: response.data
          });
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }
        
    render() {
        return (
        <div className="container">
        <div className="col-xs-12 col-md-8 offset-md-2">
        <Header />
        <LeaderBoard handleData={this.handleData.bind(this)} data={this.state.item} />
        <Footer />
        </div>
        </div>
        )
    }
    }


ReactDOM.render(<App/>, document.getElementById('app'));