import React from 'react';
import { connect } from 'react-redux';
import { getTvById } from './actions';
import TvHero from './TvHero/TvHero';
import TvInfo from './TvInfo/TvInfo';
import Cast from './Cast/Cast';
import Similar from './Similar/Similar';

class Tv extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      large: false
    }
  }
  componentWillMount(){
    this.props.getTvById(this.props.match.params.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.props.getTvById(this.props.match.params.id);
    }
  }
  checkWidth = () => {
    this.setState({
      large: window.innerWidth > 768 ? true : false
    })
  }
  componentDidMount(){
    this.checkWidth();
    window.addEventListener('resize', (e) => {
      this.checkWidth();
    })
  }
  render(){
    const { tv } = this.props;
    const { large } = this.state;
    if(!tv){
      return null;
    }
    return (
      <div>
        <TvHero tv={tv} large={large} />
        <TvInfo tv={tv} large={large} />
        <Cast id={tv.id} />
        <Similar id={tv.id} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tv: state.getTv.tv
});

const mapDispatchToProps = (dispatch) => ({
  getTvById: (id) => dispatch(getTvById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tv);
