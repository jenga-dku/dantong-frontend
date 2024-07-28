import { Button } from '@components/ui/Button';
import { SignUpInfoKey, useSignUpInfoStore } from '@/stores/signUpInfo-stores';

export const EntryCompleteButton = ({
  signUpInfoKey,
  visible,
  activateNextInput,
}: {
  signUpInfoKey: SignUpInfoKey;
  visible: boolean;
  activateNextInput: () => void;
}) => {
  const { signUpInfo } = useSignUpInfoStore();
  if (visible)
    return (
      <Button
        content="확인"
        size="fit"
        onClick={() => {
          activateNextInput();
        }}
        disabled={signUpInfo[signUpInfoKey].length === 0}
      />
    );
  return <></>;
};
