import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 40px;

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Footer = () => (
  <Wrapper>
    <p style={{color:'white'}}>
      Built by <a style={{color:'white'}} href="https://www.linkedin.com/company/hacktivspace-community/"> TEAM HACKTIVATORS </a>.
    </p>
  </Wrapper>
);

export default Footer;
