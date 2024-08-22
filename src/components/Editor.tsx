import { Editor as ToastEditor } from '@toast-ui/react-editor';
import { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { cn } from '@/utils/cn';
import { FormRegister } from '@/types/react-hook-form';

export const Editor = ({ formState, setValue }: Required<FormRegister>) => {
  const editorRef = useRef<ToastEditor>(null);
  const editorContent = editorRef.current?.getInstance().getHTML();
  const error = formState.errors['content'];

  useEffect(() => {
    editorContent !== '<p><br></p>' && setValue('content', editorContent);
  }, [editorContent]);

  return (
    <div className={cn(error && 'editor-error')}>
      <ToastEditor
        placeholder="내용을 입력해주세요"
        initialEditType="wysiwyg"
        autofocus={false}
        toolbarItems={toolbar}
        hideModeSwitch
        ref={editorRef}
        height="300px"
      />
    </div>
  );
};

const toolbar = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
];
