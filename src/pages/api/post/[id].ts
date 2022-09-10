import { NextApiRequest, NextApiResponse } from 'next';
import { getPost, GetPropsPost, Post } from '~/libs/db';

export interface PostQuery extends GetPropsPost {}
export interface PostResponse {
  post?: Post;
  error?: string | unknown;
}

const PostHandler = async (req: NextApiRequest, res: NextApiResponse<PostResponse>) => {
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  try {
    const { id } = req.query as unknown as PostQuery;

    const post = await getPost({ id });
    return res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default PostHandler;
