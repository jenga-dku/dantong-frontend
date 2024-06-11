import React, { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Box } from '../../../components/Box';
import Sortable from 'sortablejs';

export default function ImageList({
  images,
  updateImages,
}: {
  images: string[];
  updateImages: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const imageListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    imageListRef &&
      Sortable.create(imageListRef!.current!, {
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        ghostClass: 'ghost',
        group: 'shared',
        forceFallback: true,
        onEnd: (evt) => {
          updateImages([]);
          Array.from(evt.to.children).forEach(({ id }) =>
            updateImages((prev) => [...prev, id]),
          );
        },
      });
  }, [imageListRef]);

  return (
    <div
      className="grid w-full grid-cols-3 place-items-center gap-2"
      ref={imageListRef}
    >
      {images.map((image) => (
        <Box id={image} className="h-[100px] w-[100px] justify-center p-1">
          <img
            className="rounded-[10px]"
            src={image}
            alt="소식글 첨부 이미지"
          />
        </Box>
      ))}
    </div>
  );
}
