import { Section } from './Section';
import { Box as EventInfoBox } from '../../components/Box';
import { Box as DetailInfoBox } from '../../components/Box';
import { AppliedEventData } from '../../data';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

export const AppliedEventSection = () => {
  const { eventName, location, date, relatedPost, thumbnail, detail } =
    AppliedEventData;

  return (
    <Section title="신청한 행사">
      <div className="flex items-center">
        <EventInfoBox className="box-border h-full w-2/3 flex-col gap-2 px-2 py-3">
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-primary px-1 py-[0.3rem] text-center text-sm text-white">
            {eventName}
          </h3>
          <div className="flex gap-2 text-sm">
            <img className="w-1/3" src={thumbnail} alt="신청행사 썸네일" />
            <div className="flex w-[calc(66.6%-0.5rem)] flex-col justify-between gap-3">
              <p>장소: {location}</p>
              <p className="whitespace-nowrap">일시: {date}</p>
              <Link
                className="flex w-full items-center justify-between rounded-lg bg-[#E1EFFF]  p-1 px-2 text-xs"
                to={relatedPost.link}
              >
                <span className="w-5/6 overflow-hidden text-ellipsis whitespace-nowrap ">
                  {relatedPost.title}
                </span>
                <FaChevronRight className="text-primary" />
              </Link>
            </div>
          </div>
        </EventInfoBox>
        <DividingLine />
        <DetailInfoBox className="h-full w-1/3 flex-col justify-between gap-2 px-2 py-3 text-sm">
          <div className="flex h-full flex-col items-center justify-center">
            {detail.map(({ key, value }) => (
              <p className="whitespace-nowrap">
                {key}: {value}
              </p>
            ))}
          </div>
          <button className="btn-primary btn-outline btn h-9 min-h-9 whitespace-nowrap border-[1.5px]">
            정보 수정
          </button>
        </DetailInfoBox>
      </div>
    </Section>
  );
};

const DividingLine = () => (
  <div className="h-[calc(100%-20px)] border-r-[2px] border-dashed border-primary" />
);
