var React = require('react');
var ReactDOM = require('react-dom');


var LeaderBoard = React.createClass({
	render: function () {
		return (
		 <table>
		   <thead>
		   <tr>
		     <th>Ranking</th>
		     <th>Camper</th>
		     <th>Points in last 30 days</th>
		     <th>Total Points</th>
		    </tr>
		    </thead>
		    <tbody>item</tbody>
		    </table>
			);
	}
});

var App = React.createClass({
	render: function () {
		return (
			<div>
             <h1> Camper LeaderBoard </h1>
             <LeaderBoard />
			 </div>
			 );
	}
});

ReactDOM.render(<App />, document.getElementById("app"));

