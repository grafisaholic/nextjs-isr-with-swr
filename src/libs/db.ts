import {posts, PostTypes} from '../../data/post'

export interface Post extends PostTypes {}

export const getAllPosts = async (): Promise<Post[]> => {
  return posts;
};
