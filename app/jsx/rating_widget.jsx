/** @jsx React.DOM */
'use strict';

var RatingStar = React.createClass({

  render: function() {
    return (
      <li className="rating-star">
        <span />
        <input type="radio" name="rating" id={this.props.id}/>
        <label htmlFor={this.props.id} onClick={this.props.onClick}/>
      </li>
      );
  }
});

var RatingBox = React.createClass({
  getInitialState: function() {
    return {selectedRating: 0};
  },

  setRating: function(rating) {
    this.setState({selectedRating: rating});
  },

  render: function() {
    return (
      <div className="rating-box">
        <h1>Please Rate!</h1>
        <ul>
          <RatingStar onClick={this.setRating.bind(this, 1)} id="star-1"/>
          <RatingStar onClick={this.setRating.bind(this, 2)} id="star-2"/>
          <RatingStar onClick={this.setRating.bind(this, 3)} id="star-3"/>
          <RatingStar onClick={this.setRating.bind(this, 4)} id="star-4"/>
          <RatingStar onClick={this.setRating.bind(this, 5)} id="star-5"/>
        </ul>
        <div className="rating-box-footer">
          Selected Rate <strong>{this.state.selectedRating}</strong>
        </div>
      </div>
    );
  }
});

React.renderComponent(
  <RatingBox />,
  document.getElementById('app')
);
