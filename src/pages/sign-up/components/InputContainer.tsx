import { useEffect, useRef } from 'react';
import { Button } from '@components/ui/Button';
import { Input } from './Input';
import { SignUpInfoKey, useSignUpInfoStore } from '@stores/signUpInfo-stores';
import { EntryCompleteButton } from './EntryCompleteButton';
import { useActivateNextInput } from '../utils/useActivateNextInput';
import { MajorSelect } from './MajorSelect';

export type userInfoInputAttr = {
  id: SignUpInfoKey;
  korName: string;
  type: string;
};

export const InputContainer = ({
  inputAttrList,
  containerId,
  onNext,
}: {
  inputAttrList: userInfoInputAttr[];
  containerId: 'info' | 'password';
  onNext: () => void;
}) => {
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  const { activatedInputIndex } = useSignUpInfoStore();

  const isLastInputIndex =
    activatedInputIndex[containerId] === inputAttrList.length;

  const isEntryCompleteButtonVisible = (inputIndex: number) =>
    inputIndex !== 0 || isLastInputIndex;

  const { activateNextInputIndex } = useActivateNextInput(
    containerId,
    isLastInputIndex,
  );

  useEffect(() => {
    const currentInput =
      inputContainerRef.current?.children[0]?.querySelector('input');
    currentInput?.focus();
  }, [activatedInputIndex]);

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[1fr_3fr] overflow-hidden">
      <div className="flex flex-col gap-8" ref={inputContainerRef}>
        {inputAttrList
          .slice(0, activatedInputIndex[containerId] + 1)
          .reverse()
          .map(({ id: signUpInfoKey, korName, type }, inputIndex) => (
            <>
              {type === 'select ' && (
                <MajorSelect activateNextInputIndex={activateNextInputIndex} />
              )}
              {(type === 'text' || type === 'password') && (
                <Input
                  key={`${containerId}-${signUpInfoKey}`}
                  type={type}
                  value={signUpInfo[signUpInfoKey]}
                  className="text-2xl"
                  placeholder={korName}
                  label={korName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSignUpInfo({
                      ...signUpInfo,
                      [signUpInfoKey]: e.target.value,
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isLastInputIndex) {
                      activateNextInputIndex();
                    }
                  }}
                  additionalElement={
                    <EntryCompleteButton
                      signUpInfoKey={signUpInfoKey}
                      visible={isEntryCompleteButtonVisible(inputIndex)}
                      activateNextInput={activateNextInputIndex}
                    />
                  }
                />
              )}
            </>
          ))}
      </div>
      {isLastInputIndex && <Button content="다음" onClick={onNext} />}
    </div>
  );
};
