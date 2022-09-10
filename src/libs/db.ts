import { posts as dbPosts, PostTypes as dbPost } from '../../data/post';

export interface Post extends dbPost {}

export interface GetPropsPost {
  id: Post['id'];
}

export const getPost = async ({ id }: GetPropsPost): Promise<Post> => {
  const post = dbPosts.find(p => p.id == id);

  return post!;
};

export const getAllPosts = async (): Promise<Post[]> => {
  return dbPosts;
};
