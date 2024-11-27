import { Content } from '../components/Content';
import { AccountEntry } from './LoginEntry';

export const DKULoginPage = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_3fr]">
      <Content
        message="단국대학교 계정으로 로그인해주세요."
        content={<AccountEntry />}
      />
    </div>
  );
};
