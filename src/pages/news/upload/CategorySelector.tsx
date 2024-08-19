import { Box } from '@/components/ui/Box';
import { CATEGORY } from '@/types/news-category';

export const CategorySelector = () => {
  return (
    <Box className="p-0 py-1">
      <select
        className="select w-full  text-gray-400"
        name="category"
        // onChange={handleInputChange}
      >
        <option disabled selected>
          카테고리 선택
        </option>
        {Object.entries(CATEGORY).map(([id, categoryName]) => (
          <option value={id}>{categoryName}</option>
        ))}
      </select>
    </Box>
  );
};
