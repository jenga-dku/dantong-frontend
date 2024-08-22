import { Box } from '@/components/ui/Box';
import { CATEGORY } from '@/types/news-category';
import { FormRegister } from '@/types/react-hook-form';
import { cn } from '@/utils/cn';

export const CategorySelector = ({
  register: { register, formState },
}: {
  register: FormRegister;
}) => {
  return (
    <Box className="p-0 py-1">
      <select
        className={cn(
          'select w-full  text-gray-400',
          formState.errors['category'] && 'text-error',
        )}
        {...register('category')}
        name="category"
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
