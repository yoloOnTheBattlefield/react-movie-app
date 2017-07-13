import React from 'react';
import Waypoint from 'react-waypoint';
import { ReactHeight } from 'react-height';
import { connect } from 'react-redux';
import { getActorById, getActorImages } from './actions';
import { Loader } from 'semantic-ui-react';
import Hero from './Hero/Hero';

class Actor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fixed: true
    }
  }

  //
  _handleWaypointEnter = () => {
    console.log('enter')
    this.setState({
      fixed: true,
    })
  }

   _handleWaypointLeave = () => {
     this.setState({
       fixed: false
     })
  }
  //

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
          fixed={this.state.fixed}
        />
        {/*<div
          style={{
            width: '100vw',
            height: '500vh',
            background: '#276109',
            position: 'absolute',
            top: this.state.height
          }}
        >
          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          />
        </div>*/}
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
