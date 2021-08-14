import React, { Fragment } from 'react';
import { connect, styled } from "frontity";
import Link from "./link";
import { isEmpty } from 'lodash';

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  return (
    <NavContainer>
      <Fragment>
        {
          (!isEmpty(items))
          ? items.map((menu) => {
            const isCurrentPage = state.router.link === menu.url;
            return (
              <NavItem key={menu.title}>
                {/* If link url is the current page, add `aria-current` for a11y */}
                <Link link={menu.url} aria-current={isCurrentPage ? "page" : undefined}>
                  {menu.title}
                </Link>
          </NavItem>
            );
          })
          : <Fragment />
        }
      </Fragment>
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  border-top: 3px solid #000;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0;
  color: #000;
  font-size: 0.9em;
  box-sizing: border-box;
  text-transform: uppercase;
  flex-shrink: 0;
  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    padding: 8px 15px;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #444;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
