import { useModal } from '@/hooks/modal/useModal';
import { useDeletePost } from '@/query-hooks/post';
import { useAuthStore } from '@/stores/auth-stores';
import { Category } from '@src/types/news-category';
import { POST_STATUS_COLOR, PostStatus } from '@src/types/post-status';
import { getCategoryKoreanName } from '@utils/getCategoryKoreanName';
import { Link, useLocation } from 'react-router-dom';

export const PostHeader = ({
  id,
  status,
  category,
  title,
  author,
}: {
  id?: number;
  status: PostStatus;
  category: Category;
  title: string;
  author: string;
}) => {
  const {
    userInfo: { role },
  } = useAuthStore();
  const { pathname } = useLocation();
  const { mutate: deletePost } = useDeletePost();
  const { open } = useModal();
  const isAdminButtonShown =
    role.indexOf('ROLE_ADMIN') > -1 && pathname !== '/news';

  const handleDeletePost = () => {
    open({
      title: '삭제',
      desc: '삭제하시겠습니까?',
      option: {
        type: 'CONFIRM_CANCEL',
        confirmEvent: () => deletePost(id!),
      },
    });
  };

  return (
    <div className="flex flex-col gap-1 bg-white px-4 py-3 [&>p]:ml-2">
      <div className="[&>span]: mb-1 flex gap-1 [&>span]:rounded-xl [&>span]:px-3 [&>span]:py-[0.1rem] [&>span]:text-xs">
        <span style={{ backgroundColor: POST_STATUS_COLOR[status] }}>
          {status}
        </span>
        <span className="bg-[#D9D9D9]">{getCategoryKoreanName(category)}</span>
      </div>
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-[#848484]">{author}</p>
      {isAdminButtonShown && (
        <div className="flex gap-1 px-2 text-xs text-primary">
          <Link to={`/news/edit/${id}`}>수정</Link>
          <button onClick={handleDeletePost}>삭제</button>
        </div>
      )}
    </div>
  );
};
