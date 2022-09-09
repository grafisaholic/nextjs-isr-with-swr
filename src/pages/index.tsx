import type { InferGetStaticPropsType } from 'next'
import NextLink from 'next/link'

import { getAllPosts } from '~/libs/db'
import { UseAllPosts } from '~/hooks/use-all-post'

import Post from '~/components/post'
import Layout from '~/components/layout'

const Home = ({ fallbackData } : InferGetStaticPropsType<typeof getStaticProps>) => {
  const {data, isLoading} = UseAllPosts({
    fallbackData,
    revalidateOnMount : false
  })

  const posts = !isLoading && data?.posts || [];

  return (
    <Layout>
      <div className='py-8 px-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold '>Next.js Incremental Static Regeneration with SWR</h1>
          <p className='text-slate-500'>Learning about static page with ISR & SWR. it's so fast</p>
        </div>
        <div className='mt-6'>
          <p>
            you can add and edit from blog post. if you are insert, this post will be insert into local storage. Whilst static page reavalidate in the background.
          </p>
          <small className='text-slate-400'>For example, below is a sample of blog can be edit.</small>
        </div>
      </div>

      <div className='py-8 px-4'>
        <h3 className='text-xl font-semibold '>Featured Post</h3>
        <div className='w-16 h-1 bg-black'></div>

        <div className='flex flex-col gap-2 py-4'>
          {posts?.map(post => (
            <NextLink href={`/post/${post.id}`} key={post.id}>
              <a>
                <Post title={post.title} id={post.id} date={post.date} stack={post.stack} />
              </a>
            </NextLink>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      fallbackData : { posts }
    },
    revalidate : 1
  }
}

export default Home
