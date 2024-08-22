import { Box } from '@/components/ui/Box';
import { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa6';
import ImageList from './ImageList';
import { cn } from '@/utils/cn';
import { FormRegister } from '@/types/react-hook-form';

export const FileSection = ({
  register: { register, setValue, formState },
}: {
  register: Required<FormRegister>;
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([]);
    const files = Array.from(e.target.files || []);
    files.forEach((f, index) => {
      setImages((prev) => {
        return index === 0
          ? [URL.createObjectURL(f)]
          : [...prev, URL.createObjectURL(f)];
      });
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
          setImageFiles((prev) => [...prev, file]);
        });
    });
  }, [images]);

  useEffect(() => {
    imageFiles.length > 0 && setValue('imageFiles', imageFiles);
  }, [imageFiles]);

  return (
    <>
      <Box>
        <label className="flex cursor-pointer text-gray-400">
          <input
            multiple
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            {...register('imageFiles')}
            onChange={handleImagesChange}
          />
          <p
            className={cn(
              'clickable flex',
              formState.errors['imageFiles'] && 'text-error',
            )}
          >
            <FaCamera className="mr-2" />
            이미지 첨부
          </p>
        </label>
      </Box>
      {images.length > 0 && (
        <ImageList images={images} updateImages={setImages} />
      )}
    </>
  );
};
