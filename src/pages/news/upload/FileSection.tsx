import { Box } from '@/components/ui/Box';
import { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa6';
import ImageList from './ImageList';

export const FileSection = () => {
  const [images, setImages] = useState(['']);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([]);
    const files = Array.from(e.target.files || []);
    files.forEach((f) => {
      setImages([...images, URL.createObjectURL(f)]);
      setImageFiles(() => {
        if (imageFiles !== null || imageFiles !== undefined) {
          return [...imageFiles, f];
        } else {
          return [f];
        }
      });
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
          setImageFiles([...imageFiles, file]);
        });
    });
  }, [images]);

  return (
    <>
      <Box>
        <label className="flex cursor-pointer text-gray-400">
          <input
            multiple
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={handleImagesChange}
          />
          <FaCamera className="mr-2" />
          이미지 첨부
        </label>
      </Box>
      {images.length > 0 && images[0].length > 0 && (
        <ImageList images={images} updateImages={setImages} />
      )}
    </>
  );
};
