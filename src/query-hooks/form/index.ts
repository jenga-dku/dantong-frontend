import { useQuery } from '@tanstack/react-query';
import { Form } from '../../api/form';

export const useGetForm = (id: number) =>
  useQuery({
    queryFn: () => Form.getForm(id),
    queryKey: ['form'],
  });
