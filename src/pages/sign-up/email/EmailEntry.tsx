import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EmailEntry = () => {
  const inputRef = useRef(null);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[-50px]">
        <p className="font-SejongHospitalBold mb-6 text-xl leading-[1.2] text-primary">
          힉생 인증을 위한
          <br />
          단국대학교 이메일을 직접 입력해주세요
        </p>
        <div className="font-NanumSquareBold flex justify-between border-b-2 border-solid border-primary pb-1 pl-2 pr-5 text-lg">
          <input
            type="text"
            ref={inputRef}
            autoFocus={true}
            onChange={(e) => {
              setIsButtonActive(e.target.value.length > 0);
            }}
          />
          <p className="text-[#C4C4C4]">@dankook.ac.kr</p>
        </div>
      </div>
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
