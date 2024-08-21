import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect } from 'react';
import { SubmitButton } from '@components/ui/Button';
import { useTopBarStore } from '@stores/topBar-stores';
import { usePostNews } from '@query-hooks/news-upload';
import { useModal } from '@/hooks/modal/useModal';
import { PeriodInput } from './PeriodInput';
import { CategorySelector } from './CategorySelector';
import { Input } from './Input';
import { FileSection } from './FileSection';
import { EditorSection } from './EditorSection';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NewsUpload } from '@/api/news-upload/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Category, CATEGORY } from '@/types/news-category';
import * as yup from 'yup';

export const NewsUploadPage = () => {
  const { mutate: post } = usePostNews();
  const { open } = useModal();
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<NewsUpload> = (data) => {
    open({
      title: '소식 업로드',
      desc: '업로드하시겠습니까?',
      option: {
        type: 'CONFIRM',
        confirmEvent: () => {
          post(data);
        },
      },
    });
  };

  useEffect(() => {
    useTopBarStore.setState({
      isBackButtonVisible: true,
      isNotificationButtonVisible: false,
    });
  }, []);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <PeriodInput register={{ setValue, formState }} />
      <CategorySelector register={{ register, formState }} />
      <Input.Title register={{ register, formState }} />
      <Input.Summary register={{ register, formState }} />
      <EditorSection register={{ register, formState, setValue }} />
      <FileSection register={{ register, formState, setValue }} />
      <SubmitButton content="업로드" />
    </form>
  );
};

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  content: yup.string().required(),
  category: yup
    .string()
    .oneOf(Object.keys(CATEGORY) as Category[])
    .required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
});
