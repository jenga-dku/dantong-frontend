import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { useCallback, useMemo, useRef } from 'react';

export const useInfiniteScroll = <T>({
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetching,
}: UseInfiniteQueryResult<InfiniteData<T[], unknown>, Error>) => {
  const observer = useRef<IntersectionObserver>();

  const intersection = useCallback(
    (target: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });
      if (target) observer.current.observe(target);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading],
  );

  const list = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [data]);

  return { intersection, list, isLoading, isFetching };
};
