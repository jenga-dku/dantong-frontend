import { SubmitButton } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useRequestFriend } from '@/query-hooks/friend';
import { useRef, useState } from 'react';

export const FriendRegister = () => {
  const { mutate: requestFriend } = useRequestFriend();
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentId = Number(inputRef.current!.value);
    if (studentId.toString().length === 8) {
      requestFriend(studentId);
      setErrorMessage('');
      inputRef.current!.value = '';
    } else {
      setErrorMessage('❗학번 8자리를 입력해주세요');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex w-full">
          <div className="flex-[6] overflow-hidden">
            <Input
              name="studentId"
              background="bg-transparent"
              placeholder="친구의 학번을 입력해주세요"
              maxLength={8}
              ref={inputRef}
            />
          </div>
          <SubmitButton
            content="전송"
            size="fit"
            className="h-fit min-h-fit flex-1 py-3"
          />
        </div>
        <hr className="ml-4" />
      </form>
      <p className="mt-[-10px] text-sm text-red-500">{errorMessage}</p>
    </>
  );
};
