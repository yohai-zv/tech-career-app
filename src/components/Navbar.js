import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const NavbarTag = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 30px;
  max-width: 1330px;
  margin: 0 auto;
`;
const NavbarWrapper = styled.div`
  background-color: lightgray;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageDiv = styled.div`
  width: 150px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const Li = styled.li`
  margin: 5px 20px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarTag>
        <ImageDiv>
          <Image src='/tech-career-logo.png' />
        </ImageDiv>
        <Ul>
          <Li>item</Li>
          <Li>item</Li>
          <Li>item</Li>
          <Li>item</Li>
        </Ul>
        <Button color='bedge'>הירשם / התחבר</Button>
      </NavbarTag>
    </NavbarWrapper>
  );
};

export default Navbar;
