import { Box } from '../../components/Box';
import { PostHeader } from '../../components/PostHeader';
import { Carousel } from '../../components/carousel/Carousel';
import parse from 'html-react-parser';
import { Button } from '../../components/Button';
import { useTopBarStore } from '../../stores/topBar-stores';
import { useGetPostDetail } from '../../query-hooks/post';
import { useLocation, useNavigate } from 'react-router-dom';

export const PostPage = () => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split('/news/')[1]);
  const { data } = useGetPostDetail(postId);
  const navigate = useNavigate();
  useTopBarStore.setState({ isBackButtonVisible: true });

  return (
    <div>
      {data && (
        <Box className={`h-fit flex-col overflow-hidden p-0`}>
          <Carousel data={data.postFileResponse} />
          <PostHeader
            status={data.status}
            title={data.title}
            category={data.category}
            author={data.userResponse.name}
          />
          <hr />
          <p className="p-4 text-sm">{parse(data.content)}</p>
          {data.surveyId ? (
            <div className=" p-4 pt-2">
              <Button
                content="신청"
                size="full"
                onClick={() => {
                  navigate(`/form/${data.surveyId}`);
                }}
              />
            </div>
          ) : (
            <div className="h-8" />
          )}
        </Box>
      )}
    </div>
  );
};
