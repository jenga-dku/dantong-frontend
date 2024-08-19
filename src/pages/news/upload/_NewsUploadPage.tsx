import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect } from 'react';
import { Button } from '@components/ui/Button';
import { useTopBarStore } from '@stores/topBar-stores';
import { usePostNews } from '@query-hooks/news-upload';
import { useModal } from '@/hooks/modal/useModal';
import { PeriodInput } from './PeriodInput';
import { CategorySelector } from './CategorySelector';
import { Input } from './Input';
import { FileSection } from './FileSection';
import { EditorSection } from './EditorSection';
import { Wrapper } from '@/components/ui/Wrapper';

export const NewsUploadPage = () => {
  const { mutate: post } = usePostNews();
  const { open } = useModal();

  useEffect(() => {
    useTopBarStore.setState({
      isBackButtonVisible: true,
      isNotificationButtonVisible: false,
    });
  }, []);

  const uploadPost = () => {
    open({
      title: '소식 업로드',
      desc: '업로드하시겠습니까?',
      option: {
        type: 'CONFIRM',
        confirmEvent: () => {
          // post(postInfo);
        },
      },
    });
  };

  return (
    <Wrapper className="flex flex-col gap-5">
      <PeriodInput />
      <CategorySelector />
      <Input.Title />
      <Input.Summary />
      <EditorSection />
      <FileSection />
      <Button onClick={uploadPost} size="full" content="업로드" />
    </Wrapper>
  );
};
