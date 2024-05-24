import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect, useState } from 'react';
import { Box as Title } from '../../components/Box';
import { Box as Category } from '../../components/Box';
import { Box as Desc } from '../../components/Box';
import { Box as File } from '../../components/Box';
import { Button } from '../../components/Button';
import { FaCamera } from 'react-icons/fa6';
import { useTopBarStore } from '../../stores/topBar-stores';
import { Editor } from '../../components/Editor';

export const NewsUploadPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState(['']);

  const { setIsBackButtonVisible, setIsNotificationButtonVisible } =
    useTopBarStore();

  useEffect(() => {
    setIsBackButtonVisible(true);
    setIsNotificationButtonVisible(false);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Category className="p-0 py-1">
        <select className="select w-full  text-gray-400">
          <option disabled selected>
            카테고리 선택
          </option>
          <option>행사</option>
          <option>공지</option>
          <option>기타</option>
        </select>
      </Category>
      <Title>
        <input
          className="text-md"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="제목을 입력해주세요"
        />
      </Title>
      <Desc className="overflow-hidden p-0 [&>div]:w-full">
        <Editor setDesc={setDesc} />
      </Desc>
      <File>
        <label className="flex cursor-pointer text-gray-400">
          <input type="button" />
          <FaCamera className="mr-2" />
          이미지 첨부
        </label>
      </File>
      <Button size="full" content="업로드" />
    </div>
  );
};
