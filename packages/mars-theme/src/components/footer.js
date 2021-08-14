import React, { Fragment } from 'react';
import { connect, styled } from "frontity";

const Footer = ({ state }) => (
    <Fragment>
        <Container>
            <FooterArea>
                <p>© Copyright 2021, All Rights Reserved  |   TV 0 News Networks Ltd. Powered By TV0 News Network</p>
            </FooterArea>
        </Container>
    </Fragment>
);
const FooterArea = styled.div`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export default connect(Footer);