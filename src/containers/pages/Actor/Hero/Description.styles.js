import styled from 'styled-components';

const gold = '#E1CB96';

export const Information = styled.div`
  width: 60%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #111;
  display: flex;
  box-shadow: 5px 0 5px rgba(1,1,1,0.5);
`;

export const InformationWrapper = styled.div`
  margin: 10% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 50px;
  line-height: 50px;
  padding: 5px;
  padding-left: 100px;
  margin-bottom: 10px;
  color: ${gold};
  font-family: 'Cinzel', serif;
  word-wrap: wrap;
  span{
    color: white;
  }
`;

export const Hello = Name.extend`
  padding-left: 50px;
  color: white;
  font-size: 35px;
  margin-bottom: 15px;
`;


export const Biography = styled.div`
  margin-top: 10%;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 25px;
  word-spacing: 2px;
  &:first-letter{
    font-size: 55px;
    display:block;
    float:left;
    margin:3px;
  }
`;
