import { Box } from '@/components/ui/Box';
import { PostHeader } from '@components/PostHeader';
import { Carousel } from '@components/carousel/Carousel';
import parse from 'html-react-parser';
import { Button } from '@components/ui/Button';
import { useTopBarStore } from '@stores/topBar-stores';
import { useGetPostDetail } from '@query-hooks/post';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetFriendEventByPost } from '@/query-hooks/friend';

export const PostPage = () => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split('/news/')[1]);
  const { data: post, isFetched: isPostFetched } = useGetPostDetail(postId);
  const { data: friendList, isFetched: isFriendListFetched } =
    useGetFriendEventByPost(postId);
  const navigate = useNavigate();

  useEffect(() => {
    useTopBarStore.setState({ isBackButtonVisible: true });
  }, []);

  if (isPostFetched)
    return (
      <div>
        <Box className={`h-fit flex-col overflow-hidden p-0`}>
          <Carousel data={post!.postFileResponse} />
          <PostHeader
            id={postId}
            status={post!.status}
            title={post!.title}
            category={post!.category}
            author="SW융합대학 SW:ing 학생회"
          />
          <hr />
          <div className="p-4 text-sm">{parse(post!.content)}</div>
          {isFriendListFetched ? (
            friendList?.length ? (
              <div className="collapse collapse-arrow mx-4 box-border w-[calc(100%-2rem)] rounded-lg bg-slate-100 px-3 py-1 text-left text-xs text-primary">
                <input type="checkbox" className="min-h-fit" />
                <div className="collapse-title collapse-arrow flex min-h-fit w-full justify-between p-0">
                  <p>
                    친구 {friendList[0].name} 님
                    {friendList.length > 1
                      ? ` 외 ${friendList.length - 1}명`
                      : ''}
                    이 신청하셨어요!
                  </p>
                </div>
                <div className="collapse-content mt-1 flex flex-col gap-1 p-0 pl-1 text-zinc-800">
                  <p>신청한 친구</p>
                  {friendList.map(({ name }) => (
                    <p>{name}</p>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )
          ) : (
            <div className="collapse collapse-arrow mx-4 box-border w-[calc(100%-2rem)] rounded-lg bg-slate-100 px-3 py-1 text-left text-xs text-primary">
              <input type="checkbox" className="min-h-fit" />
              <div className="collapse-title collapse-arrow flex min-h-fit w-full justify-between p-0">
                <p>로그인 후 친구가 신청한 행사를 확인해보세요!</p>
              </div>
              <div className="collapse-content mt-1 flex flex-col gap-1 p-0 pl-1 text-zinc-800">
                <p>해당 행사를 신청한 친구 목록을 확인하실 수 있어요</p>
              </div>
            </div>
          )}
          {post!.surveySummaryResponse ? (
            <div className=" p-4 pt-2">
              <Button
                content="신청"
                size="full"
                onClick={() => {
                  navigate(`/form/${post!.surveySummaryResponse.surveyId}`);
                }}
              />
            </div>
          ) : (
            <div className="h-2" />
          )}
        </Box>
      </div>
    );
  return <></>;
};
