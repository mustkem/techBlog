import { connect } from "react-redux";
import Head from "next/head";

import HomeComponent from "../Components/Home";
import { wrapper as storeWrapper } from "../Store/store";

import * as homeActions from "../Store/Actions/actions";

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>
          Learn Javascript, React, Best Practice Javascript, Best Practice React
        </title>
        <meta
          name="Description"
          content="Learn Javascript, React, Best Practice Javascript, Best Practice React"
        />
        <meta
          name="Keywords"
          content="Javascript, React, Learn, Tutorial, Tutorials, Learning, Training, HTML, CSS, Code, Example, Examples, Medium"
        />
      </Head>
      <HomeComponent item={posts} />
    </div>
  );
}
export const getStaticProps = storeWrapper.getStaticProps(
  async ({ params, store }) => {
    await store.dispatch(homeActions.getPosts2());

    return { props: { posts: store.getState().page.posts } };
  }
);

const mapStateToprops = (state) => {
  return {
    products: state,
  };
};
export default connect(mapStateToprops)(Home);
