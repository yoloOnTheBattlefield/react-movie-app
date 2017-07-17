import React from 'react';
import {
  Information,
  InformationWrapper,
  Name,
  Biography
} from './Description.styles'

export default class extends React.Component{
  render(){
    const { actor } = this.props;
    if(!actor && !actor.name){
      return null;
    }
    return (
      <div>
        <div>
          <div>
            <div>{actor.name ? actor.name.toUpperCase() : ''}</div>
          </div>
          <div>
            {actor.biography}
          </div>
        </div>
      </div>
    )
  }
}
