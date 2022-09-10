import useSWR, { SWRConfiguration } from 'swr';
import { PostQuery, PostResponse } from '~/pages/api/post/[id]';
import { fetcher } from '~/utils/fether';

export interface UsePostProps extends SWRConfiguration, Partial<PostQuery> {}

export const UsePost = ({ id, ...config }: UsePostProps) => {
  const swr = useSWR<PostResponse>(!id ? null : '/api/post/' + id, fetcher, config);

  const isLoading = !swr.error && !swr.data;

  return {
    ...swr,
    isLoading,
  };
};
