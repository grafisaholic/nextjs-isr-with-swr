import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { getAllPosts, getPost } from '~/libs/db';

import Layout from '~/components/layout';
import { UsePost } from '~/hooks/use-post';

const PostPage = ({ id, fallbackData }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const { data, isLoading } = UsePost({
    id,
    fallbackData,
    revalidateOnMount: false,
  });

  const post: any = !isLoading && data?.post;

  return (
    <Layout>
      <div className="pt-8 pb-4 px-4 flex flex-col space-y-4">
        <button className="bg-white py-2 px-3 border self-end border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Edit
        </button>
        <h3 className="font-bold text-3xl mt-4">{post.title}</h3>
      </div>

      <article className="px-4">
        <p className="text-justify">{post.content}</p>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPosts().then(posts =>
    posts.map(p => {
      return {
        params: {
          id: p.id.toString(),
        },
      };
    })
  );

  return { paths, fallback: true };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params as Params;
  const post = await getPost({
    id: id,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: post.id,
      fallbackData: {
        post,
      },
    },
    revalidate: 1,
  };
};

export default PostPage;
