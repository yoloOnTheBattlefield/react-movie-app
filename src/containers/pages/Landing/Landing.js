import React from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies, fetchTheaterMovies } from './actions';
import _values from 'lodash/values';
import Hero from '../../components/Hero/Hero';
import MoviesContainer from './FetchContainer/MoviesContainer';

class Landing extends React.Component{

  componentDidMount(){
    this.props.fetchUpcomingMovies();
    this.props.fetchTheaterMovies();
  }

  render(){
    const collections = _values(this.props.collections);

    const randomMovie = Math.floor((Math.random() * collections[0].results.length) + 1);
    const showcasedMovie = collections[0].results[randomMovie];
    return(
      <div>
        <Hero movie={showcasedMovie} landing />
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
