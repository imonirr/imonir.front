import React, { PureComponent } from 'react';

import { Row } from 'styled/Responsive';
import Nav from './Nav/Nav';
import SocialNav from './SocialNav/SocialNav';

import {
  Email,
  Phone,
  Button,
  HeaderWrap,
  ContactRow,
} from './Header.styled';


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
    const mailtoHref = `mailto:${mail}`;

    return (
      <HeaderWrap>
        <Row justify="flex-end">
          <SocialNav />
        </Row>
        <ContactRow justify="flex-end">
          <div>
            {
              this.state.viewemail && (
                <Email href={mailtoHref}>{mail}</Email>
              )
            }
            {
              !this.state.viewemail && (
                <Button onClick={this.viewEmail}>View Email</Button>
              )
            }
            <Phone>  +88 01716108114 </Phone>
          </div>
        </ContactRow>
        <Row justify="flex-start">
          <Nav />
        </Row>
      </HeaderWrap>
    );
  }
}


export default Header;
