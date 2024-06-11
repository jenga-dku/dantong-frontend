import { Box } from '../../../components/Box';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FilterNavDataList } from '../../../types/news-filter-nav';

export const FilterNav = () => {
  const navigate = useNavigate();
  const [seachParams] = useSearchParams();

  return (
    <div className="fixed top-[40px] z-50 ml-[-1.25rem] flex w-[400px] max-w-full justify-center bg-[#EBF4FF] pb-[2px] pt-2">
      <Box className="h-[45px] w-[calc(100%-2.5rem)] max-w-full items-center justify-between gap-2 overflow-hidden py-3">
        {/* <strong className="whitespace-nowrap">스윙</strong> */}
        {FilterNavDataList.map(({ name, id }) => (
          <label
            key={id}
            className="btn h-fit min-h-fit w-fit min-w-fit rounded-[10px] px-3 py-1 text-sm font-light leading-none has-[:checked]:bg-primary has-[:checked]:text-white"
          >
            <input
              onClick={() => {
                id !== 'LIKE' && navigate(`?category=${id}`);
              }}
              name="filterNav"
              type="radio"
              checked={(function () {
                if (!seachParams.get('category')) {
                  return name === '전체';
                }
                return seachParams.get('category') === id;
              })()}
              className="hidden"
            />
            {typeof name === 'string'
              ? name
              : (function () {
                  const LikeIcon = name;
                  return <LikeIcon className="like-btn text-[#D46060]" />;
                })()}
          </label>
        ))}
      </Box>
    </div>
  );
};
