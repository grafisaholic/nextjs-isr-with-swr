import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts, Post } from '~/libs/db';

export interface PostsResponse {
  posts?: Post[];
  error?: string | unknown;
}

const PostsHandler = async (_: NextApiRequest, res: NextApiResponse<PostsResponse>) => {
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  try {
    const posts = await getAllPosts();

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default PostsHandler;
