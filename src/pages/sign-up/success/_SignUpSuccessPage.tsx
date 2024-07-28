import { Button } from '@components/ui/Button';
import { ReactComponent as WelcomeIcon } from '@assets/svg/Welcome.svg';
import { useSignUpInfoStore } from '@stores/signUpInfo-stores';

export const SignUpSuccessPage = ({ onNext }: { onNext: () => void }) => {
  const { signUpInfo } = useSignUpInfoStore();

  return (
    <div className="grid grid-cols-1 grid-rows-[5fr_1fr]">
      <div className="flex h-full w-full flex-col items-center justify-center text-2xl">
        <strong className="text-primary ">회원가입 완료</strong>
        <WelcomeIcon width="120" />
        <strong className="text-[#555] ">환영해요 {signUpInfo.name}님!</strong>
      </div>
      <Button onClick={onNext} content="로그인" />
    </div>
  );
};
