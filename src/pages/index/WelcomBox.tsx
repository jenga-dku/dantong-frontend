import { Box } from '../../components/Box';
import { ReactComponent as NewsIcon } from '../../assets/svg/News.svg';

export const WelcomeBox = () => {
  return (
    <Box className="items-center justify-evenly">
      <div className="flex flex-col gap-1">
        <h1 className="font-NanumSquareBold text-2xl">$name 님!</h1>
        <p className="text-lg leading-[1.2]">
          최근에 등록된 SW융합대학의 행사글을 확인해보세요
        </p>
      </div>
      <NewsIcon width={120} />
    </Box>
  );
};
