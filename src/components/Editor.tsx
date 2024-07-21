import { Editor as ToastEditor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

export const Editor = ({
  setDesc,
}: {
  setDesc: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const editorRef = useRef<ToastEditor>(null);

  const toolbar = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote', 'ul', 'ol'],
  ];

  return (
    <ToastEditor
      initialValue={' '}
      initialEditType="wysiwyg"
      autofocus={false}
      toolbarItems={toolbar}
      hideModeSwitch
      ref={editorRef}
      height="300px"
      onBlur={(e) => {
        setDesc(editorRef.current?.getInstance().getHTML() ?? '');
      }}
    />
  );
};
