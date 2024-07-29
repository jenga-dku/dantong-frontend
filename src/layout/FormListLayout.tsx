import { useNavigate } from 'react-router-dom';
import { Box } from '@/components/ui/Box';
import { handleDateFormat } from '@utils/handleDateFomat';
import { useTopBarStore } from '@stores/topBar-stores';
import { useEffect } from 'react';
import { PiUsersLight } from 'react-icons/pi';
import { POST_STATUS_COLOR } from '@src/types/post-status';
import { FormListItem } from '@api/form/types';
import { Intersection } from '@components/Intersection';
import { Loader } from '@/components/ui/Loader';

export const FormListLayout = <T extends FormListItem>({
  title,
  pageId,
  list,
  intersection,
  isFetching,
}: {
  title: string;
  pageId: string;
  list: T[];
  intersection: (target: HTMLDivElement) => void;
  isFetching: boolean;
}) => {
  const navigate = useNavigate();

  const { setIsBackButtonVisible, setIsNotificationButtonVisible } =
    useTopBarStore();

  useEffect(() => {
    setIsBackButtonVisible(true);
    setIsNotificationButtonVisible(false);
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      <h1 className="pl-3 text-xl font-bold text-[#AFAFAF]">{title}</h1>
      {list.map(
        ({ surveyId, title, startTime, endTime, submitCount, status }) => (
          <Box
            key={surveyId}
            className="clickable flex-col gap-2"
            onClick={() => {
              navigate(`/form/${pageId}/response?id=${surveyId}`);
            }}
          >
            <p className="text-xs text-gray-500">
              {handleDateFormat(startTime)} ~ {handleDateFormat(endTime)}
            </p>
            <p>{title}</p>
            <div className="[&>span]:leading-1 mt-1 flex gap-2 text-xs [&>span]:flex [&>span]:w-fit [&>span]:items-center [&>span]:rounded-sm [&>span]:px-2">
              <span
                className="text-[0.7rem]"
                style={{ backgroundColor: POST_STATUS_COLOR[status] }}
              >
                {status}
              </span>
              {submitCount && (
                <span className="gap-1 bg-blue-50 ">
                  <PiUsersLight className="text-sm" />
                  {submitCount}
                </span>
              )}
            </div>
          </Box>
        ),
      )}
      <Intersection ref={intersection} />
      <Loader loading={isFetching} />
    </ul>
  );
};
