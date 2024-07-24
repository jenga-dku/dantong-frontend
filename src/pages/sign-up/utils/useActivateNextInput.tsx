import { useSignUpInfoStore } from '@/stores/signUpInfo-stores';

export const useActivateNextInput = (
  containerId: 'info' | 'password',
  isLastInputIndex: boolean,
) => {
  const { activatedInputIndex, setActivatedInputIndex } = useSignUpInfoStore();
  const activateNextInputIndex = () => {
    !isLastInputIndex &&
      setActivatedInputIndex({
        ...activatedInputIndex,
        // 해당하는 InputContainer 타입의 활성화된 Input Index에 1을 더하여 다음 Input을 표시한다.
        [containerId]: activatedInputIndex[containerId] + 1,
      });
  };
  return { activateNextInputIndex };
};
