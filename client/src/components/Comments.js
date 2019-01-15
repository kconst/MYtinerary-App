import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getComments} from '../actions/commentActions';
import axios from 'axios';
// import PropTypes from 'prop-types';

class CommentForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('hi')
        console.log(this.props)
        const itineraryLink = this.props.itineraryLink
              this.props.getComments(itineraryLink);
              
            }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    comment = React.createRef();
    
    handleSubmit(event) {
        const comment = {comment:"holasss"};
    //   alert('A comment was submitted: ' + this.state.value);
      event.preventDefault();
      axios.post(`/api/comments`, comment).then(res => 
      console.log(res));
    }
  
    render() {
        console.log(this.state.value)

       console.log( this.props.comment)
      return (
    <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comments
            <input type="text" ref={this.comments} value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit"> Add Comment</button>
          {/* <i class="material-icons">navigate_next</i> */}
        </form>
        <div>
        {this.props.comment.comments.map((comment) => (
            <div key={comment._id}>{comment.comment}</div>
        ))}
        </div>
        </div>
      );
    }
  }

//   CommentForm.propTypes = {
//     getComments: PropTypes.func.isRequired,
//     comment: PropTypes.array.isRequired
//     };

  const mapStateToProps = (state) => ({
    comment: state.reducerFour
  });

  export default connect(mapStateToProps, {getComments})(CommentForm);