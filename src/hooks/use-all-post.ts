import useSWR, { SWRConfiguration } from 'swr'
import { PostResponse } from '~/pages/api/posts'
import { fetcher } from '~/utils/fether'

interface UseAllPostProps extends SWRConfiguration, Partial<{}>{}

export const UseAllPosts = (config?: UseAllPostProps) => {
  const swr = useSWR<PostResponse>('/api/posts', fetcher, config);

  const isLoading = !swr.error && !swr.data

  return {
    ...swr,
    isLoading
  }
}
