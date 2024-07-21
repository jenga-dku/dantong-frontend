import { POST_STATUS_COLOR, PostStatus } from '@src/types/post-status';

export const getPostStatusColor = (status: PostStatus) => {
  return POST_STATUS_COLOR[status];
};
