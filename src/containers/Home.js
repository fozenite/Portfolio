import React, { Component, PropTyes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <Image className="profilePic" src={require('../assets/fb.jpg')} alt="profilePic"/>
        <p>
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
          Full Stack Web Dev Rails JS
        </p>
      </Container>
    );
  }
}

