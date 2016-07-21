import React, { PropTypes } from 'react';
import Radium from 'radium';

const FilterLinkRaw = React.createClass({
   propTypes: {
      dispatch: PropTypes.func.isRequired,
      filter: PropTypes.string.isRequired,
      currentFilter: PropTypes.string
   },

   onClick(event) {
      event.preventDefault();
      this.props.dispatch({
         type: 'SET_VISIBILITY_FILTER',
         filter: this.props.filter
      });
   },
   
   render() {
      if (this.props.currentFilter === this.props.filter) {
         return <span>{this.props.children}</span>;
      } else {
         return (
            <a href="#" onClick={this.onClick}>
               {this.props.children}
            </a>
         );
      }
   }
});


const FilterLink = Radium(FilterLinkRaw);
export default FilterLink;
