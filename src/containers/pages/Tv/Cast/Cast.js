import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getCast from './actions';
import {
  Container,
  ScrollContainer,
  Card,
  Name,
  Title
} from './Cast.styles.js';

class Cast extends React.Component{
  componentWillMount(){
    this.props.getCast(this.props.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.id !== this.props.id){
      this.props.getCast(this.props.id);
    }
  }

  render(){
    if(!this.props.id){
      return null;
    }
    if(!this.props.team){
      return null;
    }
    if(!this.props.team.cast){
      return null;
    }

    const cast = this.props.team.cast.filter((member) => {
      return member.order < 10;
    });
    return(
        <Container row>
          <Title><h1>Cast</h1></Title>
          <ScrollContainer>
          {
            cast ?
              cast.map((member) => {
                if(!member.profile_path){
                  return null;
                }
                  return (
                    <Link
                      to={`/actor/${member.id}`}
                      key={member.id}
                    >
                      <Card
                        key={member.cast_id}
                        member={`https://image.tmdb.org/t/p/w300${member.profile_path}`}
                      >
                        <Name>
                          <span>{member.name}</span> as<br/>
                          <span>{member.character}</span>
                        </Name>
                      </Card>
                    </Link>
                  )
                }
              )
              :
              'No information about the cast yet...'
          }
        </ScrollContainer>
        </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  team: state.getTv.team
});

const mapDispatchToProps = (dispatch) => ({
  getCast: (id) => dispatch(getCast(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cast);
