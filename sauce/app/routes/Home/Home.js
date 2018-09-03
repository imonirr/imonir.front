import React, { Component } from 'react';

import NoteList from 'components/NoteList/NoteList';
import Container from 'styled/Container';
import {
  Row,
  Column,
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
          <Column width="30em" order={2}>
            <p>
              Hi there.
            </p>
            <div>
              <p>
                My name is <strong>Moniuzzaman Monir.</strong><br />
                I am a Full Stack Developer.<br />
                I have been working for {this.state.years}+ years.<br /><br />
              </p>
              <p>
                I am enthusiastic about problem solving and software engineering.
                Interesting problems, curious and friend people inspire me most.
              </p>
              <p>
                Today technology enhances social and economic dynamic of everyday life with new and innovative ways to solve real problems. I endeavor to convey a crisp innovative procedure to each challenge i take. Alongside my experience and resourcefulness, I likewise bring an unparalleled love for my work.
              </p>
              <h5>Favorite stack</h5>
              <p>
                <EmText>Frontend</EmText>:
                <span> React, Redux, Webpack + goodies(Eslint, Nextjs ...).</span><br />
                <EmText>Backend</EmText>: Django, Nodejs.<br />
                <EmText>My SwissArmyKnife</EmText>: Docker, Vim, Linux, Gitlab/Github ...
              </p>
            </div>
          </Column>
          <Column>
            <Pic alt="" src="/static/images/pic_200.jpg" />
          </Column>
        </Row>

        <NoteList />

      </Container>
    );
  }
}

export default Home;
