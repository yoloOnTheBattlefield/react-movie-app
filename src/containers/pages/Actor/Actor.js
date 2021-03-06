import React from 'react';
import { connect } from 'react-redux';
import { getActorById, getActorImages } from './actions';
import { Loader } from 'semantic-ui-react';
import Hero from './Hero/Hero';
import Description from './Description/Description';

class Actor extends React.Component{
  componentWillMount(){
    this.props.getActorById(this.props.match.params.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.props.getActorById(this.props.match.params.id);
    }
  }
  render(){
    const { actor } = this.props;

    if(!actor) {
      return <Loader size='massive' active inline='centered' />
    }
    return (
      <div style={{position: 'relative'}}>
        <Hero
          actor={actor}
        />
        <Description actor={actor} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  actor: state.getActor.actor,
});

const mapDispatchToProps = (dispatch) => ({
  getActorById: (id) => dispatch(getActorById(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Actor);
