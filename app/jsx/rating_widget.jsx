/** @jsx React.DOM */
'use strict';

var RatingStar = React.createClass({

  render: function() {
    return (
      <li className={this.props.className + ' rating-star'}>
        <input type="radio" name="rating" id={this.props.id}/>
        <label htmlFor={this.props.id} onClick={this.props.onClick} onMouseEnter={this.props.onMouseEnter}/>
      </li>
      );
  }
});

var RatingBox = React.createClass({
  getInitialState: function() {
    return {
      selectedRating: 0,
      hoveredRating: 0
    };
  },

  setRating: function(rating) {
    this.setState({selectedRating: rating});
  },

  setHoveredRating: function(rating) {
    this.setState({selectedRating: rating});

  },

  isActive: function(rating) {
    return this.state.selectedRating > rating ? 'active' : 'not-active';
  },

  render: function() {
    return (
      <div className="rating-box">
        <h1>Please Rate!</h1>
        <ul>
          <RatingStar onClick={this.setRating.bind(this, 1)} id="star-1" className={this.isActive.bind(this, 1)()} onMouseEnter={this.setHoveredRating.bind(this, 1)}/>
          <RatingStar onClick={this.setRating.bind(this, 2)} id="star-2" className={this.isActive.bind(this, 2)()} onMouseEnter={this.setHoveredRating.bind(this, 2)}/>
          <RatingStar onClick={this.setRating.bind(this, 3)} id="star-3" className={this.isActive.bind(this, 3)()} onMouseEnter={this.setHoveredRating.bind(this, 3)}/>
          <RatingStar onClick={this.setRating.bind(this, 4)} id="star-4" className={this.isActive.bind(this, 4)()} onMouseEnter={this.setHoveredRating.bind(this, 4)}/>
          <RatingStar onClick={this.setRating.bind(this, 5)} id="star-5" className={this.isActive.bind(this, 5)()} onMouseEnter={this.setHoveredRating.bind(this, 5)}/>
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
