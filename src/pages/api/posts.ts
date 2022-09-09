import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts, Post } from '~/libs/db'

export interface PostResponse {
  posts?: Post[],
  error?: string | unknown
}

export default async (_: NextApiRequest, res: NextApiResponse<PostResponse>) => {
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  try {
    const posts = await getAllPosts();

    res.status(200).json({ posts })
  } catch (error) {
    res.status(500).json({ error });
  }
}
