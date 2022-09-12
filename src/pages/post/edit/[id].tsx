import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

import { getAllPosts, getPost, Post } from '~/libs/db';
import { UsePost } from '~/hooks/use-post';
import { UseAllPosts } from '~/hooks/use-all-post';

import Layout from '~/components/layout';

interface FormInput extends Post {}

function PostEditPage({ id, fallbackData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { data, isLoading, mutate } = UsePost({
    id,
    fallbackData,
    revalidateOnMount: false,
  });
  const { mutate: mutateAllPost } = UseAllPosts();

  const post: any = (!isLoading && data?.post) || {};
  const form = useForm<FormInput>({ defaultValues: post });

  const handleSubmit: SubmitHandler<FormInput> = payload => {
    const updatePost = {
      ...post,
      ...payload,
    };

    // MUTATE DETAIL PAGE
    mutate(
      {
        post: updatePost,
      },
      false
    );

    // MUTATE ALL POST
    mutateAllPost(prevData => {
      const updatePosts = prevData?.posts?.map(postPrev =>
        postPrev.id === id ? updatePost : postPrev
      );

      return {
        posts: updatePosts,
      };
    }, false);

    router.push(`/post/${post.id}`);
  };

  return (
    <Layout>
      <div className="pt-8 pb-4 px-4 ">
        <h3 className="text-[25px] font-bold">Edit : {post.title}</h3>
      </div>

      <div className="px-4">
        <form className="space-y-4 mt-2" onSubmit={form.handleSubmit(handleSubmit)}>
          <label htmlFor="title" className="block">
            <span className="block font-medium text-gray-700">Title</span>
            <input
              type="text"
              {...form.register('title')}
              className="px-3 py-2 rounded-md border border-gray-300 w-full mt-2 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 block sm:text-sm"
            />
          </label>

          <label htmlFor="content" className="block">
            <span className="block font-medium text-gray-700">Content</span>
            <textarea
              id=""
              cols={30}
              rows={10}
              {...form.register('content')}
              className="px-3 py-2 rounded-md border border-gray-300 w-full mt-2 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 block sm:text-sm"></textarea>
          </label>

          <div role="group" className="space-x-4 mt-4">
            <Link href={`/post/${post.id}`}>
              <a
                className="border px-3 py-2 shadow-sm text-sm inline-flex justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
            ">
                Cancle
              </a>
            </Link>
            <button
              type="submit"
              className="
          border px-3 py-2 shadow-sm text-sm inline-flex justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-800 text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <p className="text-sm mt-6 max-w-sm text-gray-600 px-4">
        Any changes made to content will be saved to the cache, whilst static pages (this post and
        the "Home" page) revalidate in the background.
        <small className="block mt-1">(in this example, content is only saved to the cache)</small>
      </p>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPosts().then(posts =>
    posts.map(post => {
      return {
        params: {
          id: post.id.toString(),
        },
      };
    })
  );

  return { paths, fallback: false };
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

export default PostEditPage;
