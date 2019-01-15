import React, { Component } from 'react';
import {getItineraries} from '../actions/itineraryActions';
import {connect} from 'react-redux';
// import Toggle from './Toggle';
import Activities from './Activities';


class Itineraries extends Component {
    constructor() {
      super();
      this.state = {
        Itineraries: [],
        showActivities: ""
      };
     
    }


componentDidMount() {
    console.log(this.props)
    const cityLink = this.props.match.params.id
          this.props.getItineraries(cityLink);
          
        }
        
toggle = (event) =>{
    event.preventDefault();
    // e.persist();
    console.log(event.target.id);
    this.setState({
        showActivities: event.target.id
    });

    console.log(this.state.showActivities);
}        

render() {
    console.log(this.state.showActivities);
    return (
    <div><h4>Available MYtineraries</h4>
    {this.props.Itineraries.itineraries.map(itinerary => {
        return(
        <div key={itinerary._id}>
            <img className = "profilePic" src={itinerary.profilePic} alt="userProfilePic"/>
            <div>{itinerary.title}</div>
            <div>{itinerary.rating} {itinerary.duration} {itinerary.cost}</div>
            <div>{itinerary.hashtags}</div>

            <button onClick={this.toggle} id={itinerary._id}>View All</button>
           
           {this.state.showActivities === itinerary._id ? <Activities id={itinerary._id}/> : null}
            {/* <Toggle
                render={({ on, toggle}) => (
                    <div>
                        {on && <Activities id={itinerary._id}/>}
                        <button onClick={toggle}>View All</button>
                    </div>
                )}
            /> */}
        </div>
            )
        }
    )
}
</div>
    )
}
}


const mapStateToProps = (state) => ({
    Itineraries: state.reducerTwo
  });

export default connect(mapStateToProps, {getItineraries})(Itineraries);