import { FormListLayout } from '../../../../layout/FormListLayout';
import { FormListItem } from '../../../../api/form/types';
import { useGetInfiniteFormList } from '../../../../query-hooks/form';
import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';

export const FormListPage = () => {
  const formListState = useGetInfiniteFormList({
    size: 6,
  });
  const {
    list: formList,
    intersection,
    isFetching,
  } = useInfiniteScroll<FormListItem>(formListState);

  return (
    <FormListLayout<FormListItem>
      title="응답현황"
      pageID="list"
      list={formList ?? []}
      intersection={intersection}
      isFetching={isFetching}
    />
  );
};
