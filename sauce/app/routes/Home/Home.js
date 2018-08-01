import React, { Component } from 'react';

import NoteList from 'components/NoteList/NoteList';
import Container from 'styled/Container';
import {
  Row,
  Column2,
} from 'styled/Responsive';


import {
  Pic,
  EmText,
} from './Home.styled';


class Home extends Component {
  constructor(props) {
    super(props);
    const todate = new Date();
    this.state = {
      years: todate.getFullYear() - 2011 - 1,
    };
  }
  render() {
    return (
      <Container>
        <Row wrap="wrap" mb={4}>
          <Column2 order={2}>
            <p>
              Hi there.
            </p>

            <div>
              <p>
                I am <strong>Moniuzzaman Monir.</strong><br />
                Full Stack Developer.<br />
                I have been working for {this.state.years}+ years.<br /><br />
              </p>
              <h5>Favorite stack</h5>
              <p>
                <EmText>Frontend</EmText>:
                <span> React, Redux, Webpack + goodies(Eslint, Nextjs ...).</span><br />
                <EmText>Backend</EmText>: Django, Nodejs.<br />
                <EmText>My SwissArmyKnife</EmText>: Docker, Vim, Linux, Gitlab/Github ...
              </p>
            </div>
          </Column2>
          <Column2>
            <Pic alt="" src="/static/images/pic_200.jpg" />
          </Column2>
        </Row>

        <NoteList />

      </Container>
    );
  }
}

export default Home;
