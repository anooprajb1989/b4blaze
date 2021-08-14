import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from './footer';
import List from "./list";
import Post from "./post";
import HomePage from "./pages/homepage";
import Page from "./pages/pages";
// import PostCategory from './postCategory'
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import { getPostsGroupedByCategory } from '../helpers'
import Link from "@frontity/components/link";
import { isEmpty } from "lodash";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log('data.isHome-------', data, data.isHome);
  // console.log('menu--', menu);
  const postsPerCategory = getPostsGroupedByCategory(state.source)
  console.log('postsPerCategory', postsPerCategory);
  const Html2React = libraries.html2react.Component; 
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      {/* <div className="sds">
          {
          postsPerCategory.map(({ posts, category }, index) => {
            if(isEmpty(category)) {
              return null;
            }
            return (
              <BoxCategory key={index}>
                  <Heading>{category && category.name !== 'undefined' ? category.name : ''}</Heading>
                  {posts.map((post, index) => (
                    <Article key={index}>
                      <div>
                        
                          <div px={2}>
                            <Link link={post.link}>
                              <h2>
                                <Html2React html={post.title.rendered} />
                              </h2>
                            </Link>
                            <Html2React html={post.excerpt.rendered} />
                          </div>
                        
                      </div>
                    </Article>
                    ))}
                  <Link link={category.link}>
                  <p>&gt;&gt; See more posts at <strong>{category && category.name !== 'undefined' ? category.name : ''}</strong></p>
                  </Link>
              </BoxCategory>
            );
          })
        }
          </div> */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} />
          <Page when={data.isPage} />
          {/* <PostCategory when={data.isPostType} /> */}
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
const Article = styled.article`
  width: 33.33%;
  display: inline-block;
`;
const BoxCategory = styled.div`
  border-radius: 5px;
  padding: 20px;
  border: 4px solid #000;
`
const Heading = styled.h2`
  font-size: 50px;
  background-color: yellow;
  padding: 5px;
`
const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fcfcfc;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 10%);
`;
const FooterContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #161619;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
