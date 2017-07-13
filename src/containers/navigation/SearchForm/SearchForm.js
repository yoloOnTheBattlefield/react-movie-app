import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  updateInputValue,
  loadSuggestions,
  clearSuggestions
} from './actions';

import './SearchForm.css';

class SearchForm extends React.Component{
  onSuggestionSelected = (event, { suggestion, history }) => {
      event.preventDefault();
      const id = suggestion.id;
      const mediaType = suggestion.media_type;
      switch (mediaType) {
        case 'movie':
          return this.props.history.push(`/movie/${id}`);
          break;
        case 'tv':
          return this.props.history.push(`/tv/${id}`);
          break;
        case 'person':
          return this.props.history.push(`/actor/${id}`);
          break;
      }
    }


    getSuggestionValue(suggestion) {
      const mediaType = suggestion.media_type;
      switch (mediaType) {
        case 'movie':
          return suggestion.original_title
          break;
        case 'tv':
          return suggestion.name
          break;
        case 'person':
          return suggestion.name
          break;
      }
    }


    renderSuggestion(suggestion) {
      const mediaType = suggestion.media_type;
      switch (mediaType) {
        case 'movie':
          return <span>{suggestion.original_title} {suggestion.release_date.slice(0,4)}</span>
          break;
        case 'tv':
          return <span>{suggestion.name}</span>
          break;
        case 'person':
          return <span>{suggestion.name}</span>
          break;
      }
    }

    render() {
      const {
        value,
        suggestions,
        onChange,
        onSuggestionsFetchRequested,
        onSuggestionsClearRequested
      } = this.props;

      const inputProps = {
        placeholder: "Type a movie name",
        value,
        onChange
      };

      return (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      );
    }
  }


  function mapStateToProps(state) {
    const { value, suggestions, isLoading } = state.suggestions;
    return {
      value,
      suggestions,
      isLoading
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      onChange(event, { newValue }) {
        dispatch(updateInputValue(newValue));
      },
      onSuggestionsFetchRequested({ value }) {
        dispatch(loadSuggestions(value));
      },
      onSuggestionsClearRequested() {
        dispatch(clearSuggestions());
      }
    };
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
