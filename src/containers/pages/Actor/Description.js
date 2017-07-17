import React from 'react';
import {
  InformationWrapper,
  Biography
} from './Description.styles'

export default class extends React.Component{
  render(){
    const { actor } = this.props;
    if(!actor && !actor.name){
      return null;
    }
    console.log(actor)
    return (
      <InformationWrapper>
        <Biography>
          {actor.biography}
        </Biography>
      </InformationWrapper>
    )
  }
}
