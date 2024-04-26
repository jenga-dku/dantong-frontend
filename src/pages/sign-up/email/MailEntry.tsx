import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content } from '../Content';

export const MailEntry = ({
  updateMail,
}: {
  updateMail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const inputRef = useRef(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [mail, setMail] = useState('');

  useEffect(() => {
    updateMail(mail);
  }, [mail]);
  const navigate = useNavigate();
  return (
    <>
      <Content
        message="힉생 인증을 위한\n단국대학교 이메일을 직접 입력해주세요"
        content={
          <>
            <div className="font-NanumSquareBold flex justify-between border-b-2 border-solid border-primary pb-1 pl-2 pr-5 text-lg">
              <input
                type="text"
                value={mail}
                ref={inputRef}
                autoFocus={true}
                onChange={(e) => {
                  setIsButtonActive(e.target.value.length > 0);
                  setMail(e.target.value);
                }}
              />
              <p className="text-[#C4C4C4]">@dankook.ac.kr</p>
            </div>
          </>
        }
      />
      <button
        className="btn-primary"
        disabled={!isButtonActive}
        onClick={() => {
          navigate('?isMailSended=true');
        }}
      >
        인증하기
      </button>
    </>
  );
};
