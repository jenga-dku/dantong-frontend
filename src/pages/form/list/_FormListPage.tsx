import { useEffect } from 'react';
import { Box } from '../../../components/Box';
import { handleDateFormat } from '../../../utils/handleDateFomat';
import { useTopBarStore } from '../../../stores/topBar-stores';
import { PiUsersLight } from 'react-icons/pi';
import { POST_STATUS_COLOR } from '../../../types/post-status';
import { formList } from '../../../data';
import { useNavigate } from 'react-router-dom';

export const FormListPage = () => {
  const navigate = useNavigate();

  const { setIsBackButtonVisible, setIsNotificationButtonVisible } =
    useTopBarStore();

  useEffect(() => {
    setIsBackButtonVisible(true);
    setIsNotificationButtonVisible(false);
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      <h1 className="pl-3 text-xl font-bold text-[#AFAFAF]">응답 현황</h1>
      {formList.map(
        ({ surveyId, title, startTime, endTime, replyCount, status }) => (
          <Box
            key={surveyId}
            className="flex cursor-pointer flex-col gap-2"
            onClick={() => {
              navigate(`/form/response/${surveyId}`);
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
              <span className="gap-1 bg-blue-50 ">
                <PiUsersLight className="text-sm" />
                {replyCount}
              </span>
            </div>
          </Box>
        ),
      )}
    </ul>
  );
};
