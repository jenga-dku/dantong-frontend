import { Box } from '@/components/ui/Box';
import { PostHeader } from '@components/PostHeader';
import { Carousel } from '@components/carousel/Carousel';
import parse from 'html-react-parser';
import { Button } from '@components/ui/Button';
import { useTopBarStore } from '@stores/topBar-stores';
import { useGetPostDetail } from '@query-hooks/post';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const PostPage = () => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split('/news/')[1]);
  const { data } = useGetPostDetail(postId);
  const navigate = useNavigate();

  useEffect(() => {
    useTopBarStore.setState({ isBackButtonVisible: true });
  }, []);

  return (
    <div>
      {data && (
        <Box className={`h-fit flex-col overflow-hidden p-0`}>
          <Carousel data={data.postFileResponse} />
          <PostHeader
            status={data.status}
            title={data.title}
            category={data.category}
            author="SW융합대학 SW:ing 학생회"
          />
          <hr />
          <div className="p-4 text-sm">{parse(data.content)}</div>
          {data.surveySummaryResponse && data.surveySummaryResponse.surveyId ? (
            <div className=" p-4 pt-2">
              <Button
                content="신청"
                size="full"
                onClick={() => {
                  navigate(`/form/${data.surveySummaryResponse.surveyId}`);
                }}
              />
            </div>
          ) : (
            <div className="h-2" />
          )}
        </Box>
      )}
    </div>
  );
};
