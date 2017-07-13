import React from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies, fetchTheaterMovies } from './actions';
import _values from 'lodash/values';
import Hero from './Hero/Hero';
import MoviesContainer from './FetchContainer/MoviesContainer';

class Landing extends React.Component{

  componentDidMount(){
    this.props.fetchUpcomingMovies();
    this.props.fetchTheaterMovies();
  }

  render(){
    const collections = _values(this.props.collections);
    const showcasedMovie = collections[0].results[0];
    return(
      <div>
        <Hero movie={showcasedMovie} />
        <MoviesContainer collections={collections} />
      </div>
    )
  }
}
const mapStateToProps = ({ collections }) => ({
  collections
});

export default connect(mapStateToProps, {
  fetchUpcomingMovies,
  fetchTheaterMovies
})(Landing);
