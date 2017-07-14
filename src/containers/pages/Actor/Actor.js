import React from 'react';
import { connect } from 'react-redux';
import { getActorById, getActorImages } from './actions';
import { Loader } from 'semantic-ui-react';
import Hero from './Hero/Hero';

class Actor extends React.Component{
  componentWillMount(){
    this.props.getActorById(this.props.match.params.id);
    this.props.getActorImages(this.props.match.params.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.props.getActorById(this.props.match.params.id);
      this.props.getActorImages(this.props.match.params.id);
    }
  }
  render(){
    const { actor, actorImages } = this.props;

    if(!actor || !actorImages.profiles) {
      return <Loader size='massive' active inline='centered' />
    }
    return (
      <div style={{position: 'relative'}}>
        <Hero
          actor={actor}
          backdrop={actor.profile_path}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  actor: state.getActor.actor,
  actorImages: state.getActor.images
});

const mapDispatchToProps = (dispatch) => ({
  getActorById: (id) => dispatch(getActorById(id)),
  getActorImages: (id) => dispatch(getActorImages(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Actor);
