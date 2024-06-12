import { ReactNode, useEffect } from 'react';
import { useTopBarStore } from '../stores/topBar-stores';
import { Box } from '../components/Box';
import { CiCalendar, CiFloppyDisk } from 'react-icons/ci';
import { handleDateFormat } from '../utils/handleDateFomat';
import { FormResponse } from '../api/form/types';

export const FormLayout = ({
  formInfo,
  children,
  exportButton,
}: {
  formInfo: FormResponse;
  children: ReactNode;
  exportButton?: ReactNode;
}) => {
  const { setIsBackButtonVisible, setIsNotificationButtonVisible } =
    useTopBarStore();

  useEffect(() => {
    setIsBackButtonVisible(true);
    setIsNotificationButtonVisible(false);
  }, []);

  return (
    <div className="group-[]: flex flex-col gap-5">
      <Box className="flex-col gap-1">
        <h1 className="text-lg font-bold">{formInfo.title}</h1>
        <p className="text-sm">{formInfo.description}</p>
        <p className="mt-2 flex items-center gap-1 text-xs leading-none">
          <CiCalendar size={17} />
          {` ~ ${handleDateFormat(formInfo.endTime)}`}
        </p>
        <p className="mt-2 flex items-center gap-1 text-xs leading-none">
          <CiFloppyDisk size={17} />
          {exportButton}
        </p>
      </Box>
      {children}
    </div>
  );
};
