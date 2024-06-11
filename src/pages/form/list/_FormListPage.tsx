import { FormListLayout } from '../../../layout/FormListLayout';
import { FormListItem } from '../../../api/form/types';
import { useGetInfiniteFormList } from '../../../query-hooks/form';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export const FormListPage = () => {
  const formListState = useGetInfiniteFormList({
    size: 6,
  });
  const {
    list: formList,
    intersection,
    isFetching,
  } = useIntersectionObserver<FormListItem>(formListState);

  return (
    <FormListLayout<FormListItem>
      title="응답현황"
      list={formList ?? []}
      intersection={intersection}
      isFetching={isFetching}
    />
  );
};
