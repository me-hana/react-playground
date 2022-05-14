import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const ContentWrapper = styled('div')(() => ({
  width: '100vw',
  height: '95vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '.title': {
    fontSize: '1.5rem',
    margin: '50px',
  },
  '.inputs': {
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    span: {
      fontSize: '1.2rem',
      margin: '10px',
    },
  },
}));

const SecondIndex = () => {
  return (
    <ContentWrapper>
      <div className="title">Validation with Regex</div>
      {/* 영어 소문자, 숫자만 허용 */}
      <div className="inputs">
        <span>ID</span>
        <TextField
          name="input-id"
          size="small"
          label="ID 입력하삼"
          variant="filled"
        />
      </div>

      {/* 영대소문자, 숫자, 특수문자 모두 허용. 8글자 이상 16글자 이하 */}
      <div className="inputs">
        <span>PW</span>
        <TextField
          name="input-password"
          size="small"
          label="PW 입력하삼"
          variant="filled"
        />
      </div>
    </ContentWrapper>
  );
};

export default SecondIndex;
