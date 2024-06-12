import { Box as EventInfoBox } from '../../components/Box';
import { Box as DetailInfoBox } from '../../components/Box';

export const EmptyTicket = ({ isLoggedIn }: { isLoggedIn?: boolean }) => (
  <>
    <div className="flex h-[140px] items-center justify-center opacity-50">
      <EventInfoBox className="box-border h-full w-2/3 flex-col gap-2 px-2 py-3">
        <p className="h-7 overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-primary px-1 py-[0.3rem] text-center text-sm text-white" />
        <div className="flex gap-2 text-sm">
          <div className="aspect-square h-[73px] w-[73px] bg-[#f0f0f0]" />
          <div className="flex w-[calc(66.6%-0.5rem)] flex-col justify-between gap-3">
            <p className="line-clamp-2 flex-col items-center justify-center overflow-hidden text-ellipsis text-xs">
              ㅤㅤ
            </p>
            <p className="flex w-full items-center justify-between rounded-lg bg-[#E1EFFF]  p-1 px-2 text-xs">
              <span className="w-5/6 overflow-hidden text-ellipsis whitespace-nowrap ">
                ㅤ
              </span>
            </p>
          </div>
        </div>
      </EventInfoBox>
      <DividingLine />
      <DetailInfoBox className="h-full w-1/3 flex-col justify-between gap-2 px-2 py-3 text-sm">
        <div className="flex h-full flex-col justify-center gap-2">
          <div className="flex flex-col gap-1 text-[0.65rem] leading-none">
            <p className="w-fit bg-zinc-100 px-[5px] py-[1px]">ㅤㅤㅤㅤ</p>
            <p className="ml-[5px]">ㅤㅤ</p>
          </div>
          <div className="flex flex-col gap-1 text-[0.65rem] leading-none">
            <p className="w-fit bg-zinc-100 px-[5px] py-[1px]">ㅤㅤㅤㅤ</p>
            <p className="ml-[5px]">ㅤㅤ</p>
          </div>
        </div>
        <button className="btn-primary btn-outline btn h-9 min-h-9 whitespace-nowrap border-[1.5px]">
          ㅤㅤㅤ
        </button>
      </DetailInfoBox>
    </div>
    <p className="relative top-[-85px] flex w-full justify-center">
      {isLoggedIn ? '신청 내역이 없습니다' : '로그인 이후 이용 가능합니다'}
    </p>
  </>
);

const DividingLine = () => (
  <div className="h-[calc(100%-20px)] border-r-[2px] border-dashed border-primary" />
);
