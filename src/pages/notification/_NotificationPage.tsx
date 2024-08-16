import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';

export const NotificationPage = () => {
  return (
    <Box className="flex-col gap-7">
      <div
        className="tooltip-full tooltip tooltip-open tooltip-primary mt-7 w-full before:w-full before:text-primary after:left-[10px]"
        data-tip="행사 소식을 푸시알림을 통해 바로 받아보세요!"
      >
        <div className="mt-2 flex w-full items-center justify-between">
          <p>PUSH 알림</p>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            defaultChecked
          />
        </div>
      </div>
      <Button content="적용" />
    </Box>
  );
};
