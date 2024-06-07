import { Button } from '../../../components/Button';
import { ReactComponent as WelcomeIcon } from '../../../assets/svg/Welcome.svg';
import { useSignUpInfoStore } from '../../../stores/signUpInfo-stores';

export const SignUpSuccessPage = ({ onNext }: { onNext: () => void }) => {
  const { signUpInfo } = useSignUpInfoStore();

  return (
    <div className="grid grid-cols-1 grid-rows-[5fr_1fr]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="font-NanumSquareEB text-2xl text-primary ">
          회원가입 완료
        </p>
        <WelcomeIcon width="120" />
        <p className="font-NanumSquareEB text-2xl text-[#555] ">
          환영해요 {signUpInfo.name}님!
        </p>
      </div>
      <Button
        onClick={() => {
          onNext();
        }}
        content="로그인"
        size="full"
      />
    </div>
  );
};
