import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Row } from 'styled/Responsive';
import Container from 'styled/Container';
import Nav from './Nav/Nav';
import SocialNav from './SocialNav/SocialNav';

const ContactInfo = styled.p`
  font-size: 1.2rem;
`;
const Button = styled.button`
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0 2rem;
  line-height: 1rem;
  height: auto;
  &:hover {
    color: ${props => props.theme.colors.secondary};
    background-color: transparent;
  };
`;
const HeaderWrap = styled(Container)`
  margin: 0 auto 2rem auto;
`;


class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewemail: false,
    };

    this.viewEmail = this.viewEmail.bind(this);
  }
  viewEmail() {
    this.setState({
      viewemail: true,
    });
  }
  render() {
    const mail = 'moniruzzaman.monir@live.com';

    return (
      <HeaderWrap>
        <Row justify="flex-end">
          <SocialNav />
        </Row>
        <Row justify="flex-end">
          <ContactInfo>
            {
              this.state.viewemail && (
                mail
              )
            }
            {
              !this.state.viewemail && (
                <Button onClick={this.viewEmail}>View Email</Button>
              )
            }
            <span>  +88 01716108114 </span>
          </ContactInfo>
        </Row>
        <Row justify="flex-start">
          <Nav />
        </Row>
      </HeaderWrap>
    );
  }
}


export default Header;
