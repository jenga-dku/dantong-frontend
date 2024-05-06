import { Box } from '../../components/Box';
import { PostHeader } from '../../components/PostHeader';
import { post } from '../../data';
import { Carousel } from '../../components/carousel/Carousel';
import parse from 'html-react-parser';
import { Button } from '../../components/Button';
import { useTobBarStore } from '../../stores/topBar-stores';

export const PostPage = () => {
  const { status, title, category, author, images, desc } = post;
  useTobBarStore.setState({ isBackButtonVisible: true });

  return (
    <div>
      <Box className={`h-fit flex-col overflow-hidden p-0`}>
        <Carousel data={images} />
        <PostHeader
          status={status}
          title={title}
          category={category}
          author={author}
        />
        <hr />
        <p className="p-4 text-sm">{parse(desc)}</p>
        <div className=" p-4 pt-2">
          <Button content="신청" size="full" onClick={() => {}} />
        </div>
      </Box>
    </div>
  );
};
