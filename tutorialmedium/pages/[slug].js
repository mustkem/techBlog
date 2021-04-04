import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Head from "next/head";

import PostComponent from "../Components/PostPage";

import { wrapper as storeWrapper } from "../Store/store";
import { getPost2 } from "../Store/Actions/actions";

import { API_URL } from "../config";

function PostPage({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="Description" content={post.desc} />
      </Head>
      <PostComponent post={post} />
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios({
    method: "get",
    url: API_URL + "/feed/posts",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  const posts = await res.posts;

  // Get the paths we want to pre-render based on posts
  const paths = [];
  posts.forEach((post) => {
    paths.push({
      params: { slug: post.slug },
    });
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = storeWrapper.getStaticProps(
  async ({ params, store }) => {
    await store.dispatch(getPost2(params.slug));

    return { props: { post: store.getState().page.post } };
  }
);

const mapStateToprops = (state) => {
  return {
    products: state.page.post,
  };
};

export default connect(mapStateToprops)(PostPage);
