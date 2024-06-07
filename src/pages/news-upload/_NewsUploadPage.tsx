import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect, useState } from 'react';
import { Box as Title } from '../../components/Box';
import { Box as Category } from '../../components/Box';
import { Box as Summary } from '../../components/Box';
import { Box as Desc } from '../../components/Box';
import { Box as FileBox } from '../../components/Box';
import { Box as PeriodBox } from '../../components/Box';
import { Button } from '../../components/Button';
import { FaCamera } from 'react-icons/fa6';
import { useTopBarStore } from '../../stores/topBar-stores';
import { Editor } from '../../components/Editor';
import { CATEGORY } from '../../types/news-category';
import ImageList from './ImageList';
import { Period } from '../../types/period-picker/period';
import { NewsUpload } from '../../api/news-upload/types';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { PeriodPicker } from '../../components/period-picker';
import { usePostNews } from '../../query-hooks/news-upload';
import { useModal } from '../../hooks/useModal';

export const NewsUploadPage = () => {
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState(['']);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const { mutate: post } = usePostNews();
  const { open } = useModal();
  const { setIsBackButtonVisible, setIsNotificationButtonVisible } =
    useTopBarStore();
  const [postInfo, setPostInfo] = useState<NewsUpload>({
    title: '',
    description: '',
    content: '',
    category: undefined,
    imageFiles: undefined,
    startTime: '',
    endTime: '',
    shown: true,
  });
  const periodState = useState<Period>({
    start: new Date(),
    end: new Date(),
  });
  const [period] = periodState;
  useEffect(() => {
    setIsBackButtonVisible(true);
    setIsNotificationButtonVisible(false);
  }, []);

  useEffect(() => {
    setPostInfo((prev) => ({
      ...prev,
      content: desc,
      imageFiles: imageFiles,
      startTime: `${getFormattedDate(period.start)}`,
      endTime: `${getFormattedDate(period.end)}`,
    }));
  }, [desc, imageFiles, period]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setPostInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([]);
    const files = Array.from(e.target.files || []);
    files.forEach((f) => {
      setImages((prev) => {
        return [...prev, URL.createObjectURL(f)];
      });
      setImageFiles((prev) => {
        if (prev !== null || prev !== undefined) {
          return [...prev, f];
        } else {
          return [f];
        }
      });
    });
  };

  const uploadPost = () => {
    open({
      title: '소식 업로드',
      desc: '업로드하시겠습니까?',
      option: {
        type: 'CONFIRM',
        confirmEvent: () => {
          post(postInfo);
        },
      },
    });
  };

  // 이미지 순서 변경시 로직
  useEffect(() => {
    setImageFiles([]);
    images.forEach((image) => {
      fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], 'image.jpg', { type: blob.type });
          setImageFiles((prev) => [...prev, file]);
        });
    });
  }, [images]);

  return (
    <div className="flex flex-col gap-5">
      <PeriodBox>
        <PeriodPicker periodState={periodState} />
      </PeriodBox>
      <Category className="p-0 py-1">
        <select
          className="select w-full  text-gray-400"
          name="category"
          onChange={(e) => handleInputChange(e)}
        >
          <option disabled selected>
            카테고리 선택
          </option>
          {Object.entries(CATEGORY).map(([id, categoryName]) => (
            <option value={id}>{categoryName}</option>
          ))}
        </select>
      </Category>
      <Title>
        <input
          className="text-md w-full"
          name="title"
          value={postInfo.title}
          onChange={(e) => {
            handleInputChange(e);
          }}
          placeholder="제목을 입력해주세요"
        />
      </Title>
      <Summary>
        <input
          className="text-md w-full"
          value={postInfo.description}
          name="description"
          onChange={(e) => {
            handleInputChange(e);
          }}
          placeholder="간단한 설명을 입력해주세요"
        />
      </Summary>
      <Desc className="overflow-hidden p-0 [&>div]:w-full">
        <Editor setDesc={setDesc} />
      </Desc>
      <FileBox>
        <label className="flex cursor-pointer text-gray-400">
          <input
            multiple
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              handleImages(e);
            }}
          />
          <FaCamera className="mr-2" />
          이미지 첨부
        </label>
      </FileBox>
      {images.length > 0 && images[0].length > 0 && (
        <ImageList images={images} updateImages={setImages} />
      )}
      <Button
        onClick={() => {
          uploadPost();
        }}
        size="full"
        content="업로드"
      />
    </div>
  );
};
