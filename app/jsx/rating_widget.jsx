/** @jsx React.DOM */
'use strict';

var Star = React.createClass({
  render: function() {
    return (
      <li className="rating-star">
        <a href=""
        className={this.props.className}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave} />
      </li>
      )
  }
});

var RatingStars = React.createClass({
  getInitialState: function() {
    return {rating: 0};
  },

  handleStarClick: function(rating, e) {
    e.preventDefault();
    this.setState({rating: 0});
    this.props.rating(rating);
  },

  setStarState: function(value) {
    if (this.state.rating > 0) {
      return this.state.rating >= value ? 'hovered' : 'inactive';
    } else {
      return this.props.selectedRating >= value ? 'active' : 'inactive';
    }
  },

  handleOnMouseEnter: function(value) {
    this.setState({rating: value});
  },

  handleOnMouseLeave: function() {
    this.setState({rating: 0});
  },

  render: function() {
    var stars = [1, 2, 3, 4, 5];
    var self = this;
    return (
      <div className="rating-stars">
        <ul>
          {
            stars.map(function(value) {
              return (
                  <Star className={self.setStarState.bind(self, value)()}
                        onClick={self.handleStarClick.bind(self, value)}
                        onMouseEnter={self.handleOnMouseEnter.bind(self, value)}
                        onMouseLeave={self.handleOnMouseLeave} />
                )
            })
          }
        </ul>
        <div className="rating-stars-footer">
          Selected Rate <strong>{this.props.selectedRating}</strong>
        </div>
      </div>
      );
  }
});

var RatingBox = React.createClass({
  getInitialState: function() {
    return {rating: 0};
  },

  setRating: function(rating) {
    this.setState({rating: rating});
  },

  render: function() {
    return (
      <div className="rating-box">
        <h1>Please Rate!</h1>
        <RatingStars rating={this.setRating} selectedRating={this.state.rating} />
      </div>
      )
  }

});

React.renderComponent(
  <RatingBox />,
  document.getElementById('app')
);
