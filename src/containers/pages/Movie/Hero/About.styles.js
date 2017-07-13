import styled from 'styled-components';

export const About = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Poster = styled.div`
  width: 150px;
  height: 225px;
  background: url(${props => props.poster });
  background-size: cover;
  background-position: 50%;
  position: relative;
  box-shadow: ${props => props.shadow ? '0px 50px 50px rgba(0,0,0,0.8)' : ''};
`;

export const Text = styled.div`
  width: calc(100% - 300px);
  height: 180px;
  margin: auto;
  padding: 0;
  color: white;
  font-weight: 300;
  letters-spacing: 3px;
  line-height: 30px;
  font-size: 20px;
  z-index: 2;
  overflow-x: scroll;
`;

export const RatingContainer = Poster.extend`
  height: 180px;
  margin: auto;
  box-sizing: border-box;
  border-left: 1px solid rgba(255,255,255,0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;
