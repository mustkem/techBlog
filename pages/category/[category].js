import { connect } from "react-redux";
import Head from "next/head";

import HomeComponent from "../../Components/Home";
import { wrapper as storeWrapper } from "../../Store/store";

import * as homeActions from "../../Store/Actions/actions";

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
      <HomeComponent posts={posts} />
    </div>
  );
}


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // Get the paths we want to pre-render based on posts
  const paths = [{
    params: { category: "javascript" },
  },{
    params: { category: "react" },
  }];
 

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = storeWrapper.getStaticProps(
  async ({ params, store }) => {

    console.log("test--------------", params)

    await store.dispatch(homeActions.getPosts2({category:params.category}));

    return { props: {  } };
  }
);

const mapStateToprops = (state) => {
  return {
    posts: state.page.posts,
  };
};

export default connect(mapStateToprops)(Home);
