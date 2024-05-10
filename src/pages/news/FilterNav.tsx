import { ReactNode } from 'react';
import { Box } from '../../components/Box';
import { IoHeart } from 'react-icons/io5';
import { FilterCategory } from '../../types';

export const FilterNav = ({
  updateCategory,
}: {
  updateCategory: React.Dispatch<React.SetStateAction<FilterCategory>>;
}) => {
  return (
    <div className="fixed top-[40px] z-50 ml-[-1.25rem] flex w-[calc(400px)] justify-center bg-[#EBF4FF] pb-[2px] pt-2">
      <Box className="h-[45px] w-[calc(100%-2.5rem)] max-w-[calc(400px)] items-center justify-between gap-2 overflow-hidden py-3">
        <strong className="whitespace-nowrap">스윙</strong>
        {FilterNavDataList.map(({ name, id }) => (
          <label className="btn h-fit min-h-fit w-fit min-w-fit rounded-[10px] px-3 py-1 text-sm font-light leading-none has-[:checked]:bg-primary has-[:checked]:text-white">
            <input
              onClick={() => {
                updateCategory(id);
              }}
              name="filterNav"
              type="radio"
              className="hidden"
            />
            {name}
          </label>
        ))}
      </Box>
    </div>
  );
};

type FilterNav = {
  name: string | ReactNode;
  id: FilterCategory;
};

const FilterNavDataList: FilterNav[] = [
  { name: '전체', id: '' },
  { name: '행사', id: 'EVENT' },
  { name: '공지', id: 'NOTICE' },
  { name: '제휴', id: 'PARTNERSHIP' },
  { name: <IoHeart className="text-[#D46060]" />, id: 'LIKE' },
];
