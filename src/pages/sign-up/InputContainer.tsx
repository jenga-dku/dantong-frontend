import { useEffect, useRef } from 'react';
import { Button } from '../../components/Button';
import { Input } from './Input';
import {
  SignUpInfoKey,
  useSignUpInfoStore,
} from '../../stores/signUpInfo-stores';

export type userInfoInputAttr = {
  id: SignUpInfoKey;
  korName: string;
  type: string;
};

export const InputContainer = ({
  inputAttrList,
  onNext,
  containerID,
}: {
  inputAttrList: userInfoInputAttr[];
  onNext: () => void;
  containerID: 'info' | 'password';
}) => {
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  const { activatedInputIndex, setActivatedInputIndex } = useSignUpInfoStore();
  const isEntryCompleted =
    activatedInputIndex[containerID] === inputAttrList.length;

  useEffect(() => {
    const currentInput =
      inputContainerRef.current?.children[0]?.querySelector('input');
    currentInput?.focus();
  }, [activatedInputIndex]);

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[1fr_3fr] overflow-hidden">
      <div className="flex flex-col gap-8" ref={inputContainerRef}>
        {inputAttrList
          .slice(0, activatedInputIndex[containerID] + 1)
          .reverse()
          .map(({ id, korName, type }, inputIndex) => (
            <Input
              key={`${containerID}-${id}`}
              type={type}
              value={signUpInfo[id]}
              className="text-2xl"
              placeholder={korName}
              label={korName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSignUpInfo({ ...signUpInfo, [id]: e.target.value });
              }}
              additionalElement={
                inputIndex !== 0 ||
                isEntryCompleted || (
                  <Button
                    content="확인"
                    size="fit"
                    onClick={() => {
                      setActivatedInputIndex({
                        ...activatedInputIndex,
                        // 해당하는 InputContainer 타입의 활성화된 Input Index에 1을 더하여 다음 Input을 표시한다.
                        [containerID]: activatedInputIndex[containerID] + 1,
                      });
                    }}
                    disabled={signUpInfo[id].length === 0}
                  />
                )
              }
            />
          ))}
      </div>
      {isEntryCompleted && (
        <Button
          content="다음"
          onClick={() => {
            onNext();
          }}
          size="full"
        />
      )}
    </div>
  );
};
