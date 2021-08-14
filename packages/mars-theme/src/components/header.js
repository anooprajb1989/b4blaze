import React, { Fragment } from 'react';
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import './styles.css';

const Header = ({ state }) => {
  const currDate = new Date();
  console.log('currDate', currDate);
  return (
    <Fragment>
      <TopHeader>
        <Container>
          <Row>
            <Col>
              <p>
                {currDate.toDateString()}
              </p>
            </Col>
            <Col>
              social logo
            </Col>
          </Row>
        </Container>
      </TopHeader>
      <Container>
        <Row>
          <Col>
            <LogoImg src="https://tv0.in/wp-content/uploads/2020/08/tv0.png" alt={state.frontity.title} />
          </Col>
        </Row>
        {/* <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
      </Container>
      <Nav />
    </Fragment>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  color: #444;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TopHeader = styled.div`
  background: #fff;
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;
const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  display: flex;
`;
// const Title = styled.h2`
//   margin: 0;
//   margin-bottom: 16px;
// `;

// const Description = styled.h4`
//   margin: 0;
//   color: rgba(0, 0, 0, 0.7);
// `;
const LogoImg = styled.img`
  max-height: 80px;
  width: auto;
`;
// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
