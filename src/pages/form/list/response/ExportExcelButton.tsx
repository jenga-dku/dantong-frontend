import { FormResponse } from '@/api/form/types';
import { API_BASE_URL } from '@/constant';

export const ExportExcelButton = ({
  formInfo,
  formId,
}: {
  formInfo: FormResponse;
  formId: number;
}) => (
  <a
    href={`${API_BASE_URL}/excel/download?fileName=${formInfo!.title}&surveyId=${formId}`}
    className="cursor-pointer underline"
  >
    Excel로 저장하기
  </a>
);
