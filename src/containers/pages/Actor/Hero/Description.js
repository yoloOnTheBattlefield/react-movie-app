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
      <Information>
        <InformationWrapper>
          <div>
            <Name>{actor.name ? actor.name.toUpperCase() : ''}</Name>
          </div>
          <Biography>
            {actor.biography}
          </Biography>
        </InformationWrapper>
      </Information>
    )
  }
}
