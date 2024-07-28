import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { PostDetailResponse } from '@api/post/types';
import { Box as EventInfoBox } from '@/components/ui/Box';
import { Box as DetailInfoBox } from '@/components/ui/Box';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import { handleDateFormat } from '@utils/handleDateFomat';

export const TicketCarousel = ({ data }: { data: PostDetailResponse[] }) => {
  const navigate = useNavigate();

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ type: 'bullets' }}
      modules={[Navigation, Pagination]}
      className="swiper-carousel h-[180px] [&_.swiper-button-next::after]:h-[20px] [&_.swiper-button-next::after]:text-[20px] [&_.swiper-button-next::after]:font-bold [&_.swiper-button-prev::after]:h-[20px] [&_.swiper-button-prev::after]:text-[20px] [&_.swiper-button-prev::after]:font-bold "
    >
      {data.map(
        (
          {
            postId,
            title,
            postFileResponse,
            description,
            startTime,
            surveyId,
            status,
          },
          index,
        ) => (
          <SwiperSlide key={`ticket-${postId}`}>
            <div className="flex h-[140px] items-center">
              <EventInfoBox className="box-border h-full w-2/3 flex-col gap-2 px-2 py-3">
                <h3 className="overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-primary px-1 py-[0.3rem] text-center text-sm text-white">
                  {title}
                </h3>
                <div className="flex gap-2 text-sm">
                  <img
                    className="aspect-square h-[73px] w-[73px]"
                    src={postFileResponse[0].url}
                    alt="신청행사 썸네일"
                  />
                  <div className="flex w-[calc(66.6%-0.5rem)] flex-col justify-between gap-3">
                    <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
                      {description}
                    </p>
                    <Link
                      className="flex w-full items-center justify-between rounded-lg bg-[#E1EFFF]  p-1 px-2 text-xs"
                      to={`/news/${postId}`}
                    >
                      <span className="w-5/6 overflow-hidden text-ellipsis whitespace-nowrap ">
                        상세 보기
                      </span>
                      <FaChevronRight className="text-primary" />
                    </Link>
                  </div>
                </div>
              </EventInfoBox>
              <DividingLine />
              <DetailInfoBox className="h-full w-1/3 flex-col justify-between gap-2 px-2 py-3 text-sm">
                <div className="flex h-full flex-col justify-center gap-2">
                  <div className="flex flex-col gap-1 text-[0.65rem] leading-none">
                    <p className="w-fit bg-zinc-100 px-[5px] py-[1px]">일시</p>
                    <p className="ml-[5px]">{handleDateFormat(startTime)}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-[0.65rem] leading-none">
                    <p className="w-fit bg-zinc-100 px-[5px] py-[1px]">행사</p>
                    <p className="ml-[5px]">{status}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigate(`/form/my/response?id=${surveyId}`);
                  }}
                  className="btn-primary btn-outline btn h-9 min-h-9 whitespace-nowrap border-[1.5px]"
                >
                  신청 내역
                </button>
              </DetailInfoBox>
            </div>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
};

const DividingLine = () => (
  <div className="h-[calc(100%-20px)] border-r-[2px] border-dashed border-primary" />
);
