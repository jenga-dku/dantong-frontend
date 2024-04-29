import { useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from './Input';
import { signUpInfo } from './_SignUpPage';

type userInfoInputAttr = {
  id: 'mail' | 'name' | 'studentID' | 'phoneNumber' | 'major';
  korName: string;
};

export const InputContainer = ({
  inputAttrList,
  inputValue,
  pageIndex,
}: {
  inputAttrList: userInfoInputAttr[];
  inputValue: signUpInfo;
  pageIndex: 1 | 2;
}) => {
  const [activatedInputIndex, setActivatedInputIndex] = useState(0);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const isEntryCompleted = activatedInputIndex === inputAttrList.length;

  return (
    <div className="flex flex-col gap-8" ref={inputContainerRef}>
      {inputAttrList
        .slice(0, activatedInputIndex + 1)
        .reverse()
        .map(({ id, korName }, inputIndex) => (
          <Input
            value={''}
            className="text-2xl"
            placeholder={korName}
            label={korName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              //   setUserInfo((prev) => {
              //     return { ...prev, [id]: e.target.value };
              //   });
            }}
            additionalElement={
              inputIndex !== 0 ||
              isEntryCompleted || (
                <Button
                  content="확인"
                  size="fit"
                  onClick={() => {
                    setActivatedInputIndex((prev) => prev + 1);
                  }}
                  //   disabled={userInfo[id].length === 0}
                />
              )
            }
          />
        ))}
    </div>
  );
};
