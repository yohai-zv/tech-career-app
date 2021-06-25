import React from 'react';
import styled from 'styled-components';

const FooterS = styled.footer`
  background-color: lightgray;
  color: black;
  height: 320px;
  padding-top: 66px;
  position: relative;
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  position: relative;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 19px;
  margin-top: -50px;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 50px;
  font-size: 29px;
  position: absolute;
  right: 0;
`;

const Container = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;

const I = styled.i`
  margin: 10px 0;
  font-size: 22px;
`;

const P = styled.p`
  position: absolute;
  bottom: 17px;
  left: 43%;
`;

const Span = styled.span`
  margin-right: 17px;
`;

const Li = styled.li`
  height: 30%;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterS>
      <Container>
        <img src='tech-career-logo.png' alt='' width='150px' />
        <FooterWrapper>
          <div className='huddle'>
            <br />
            <I class='fas fa-map-marker-alt'>
              <Span></Span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </I>
            <br />
            <I class='fas fa-phone-volume'>
              <Span></Span>
              Lorem ipsum dolor sit amet.
            </I>
            <br />
            <I class='far fa-envelope'>
              <Span></Span>
              Lorem, ipsum dolor.
            </I>
          </div>
          <Ul>
            <Li>item</Li>
            <Li>item</Li>
            <Li>item</Li>
            <Li>item</Li>
            <Li>item</Li>
            <Li>item</Li>
          </Ul>
          <Social>
            <i class='fab fa-facebook social-media'></i>
            <i class='fab fa-github social-media'></i>
            <i class='fab fa-linkedin social-media'></i>
          </Social>
        </FooterWrapper>
      </Container>
      <P>all rights recived 2021 &copy; Noy Asi Yohai Yuda </P>
    </FooterS>
  );
};

export default Footer;
