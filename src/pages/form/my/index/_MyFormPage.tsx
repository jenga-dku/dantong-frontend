import { FormListLayout } from '../../../../layout/FormListLayout';
import { FormListItem } from '../../../../api/form/types';
import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import { useGetInfiniteMyFormList } from '../../../../query-hooks/form';

export const MyFormPage = () => {
  const formListState = useGetInfiniteMyFormList({
    size: 6,
  });
  const {
    list: formList,
    intersection,
    isFetching,
  } = useInfiniteScroll<FormListItem>(formListState);

  return (
    <FormListLayout<FormListItem>
      title="신청내역"
      pageID="my"
      list={formList ?? []}
      intersection={intersection}
      isFetching={isFetching}
    />
  );
};
