import React from 'react';
import styled from 'styled-components';
function App() {
  return (
    <div className='App'>
      <InfoContainer>
        <div className='title'>접속 방법을 선택해주세요!</div>
        <div className='img'></div>

        <div className='buttonBox'>
          <button className='browser'>브라우저로 계속하기</button>
          <button>앱 다운로드</button>
        </div>
      </InfoContainer>
    </div>
  );
}

export default App;

const InfoContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }
  .img {
    display: block;
    background: url('assets/images/info/img_bg.png') no-repeat center;
    background-size: contain;
    margin: 60px auto 0;
    width: 80%;
    height: 350px;
  }
  .buttonBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 0;
    button {
      max-width: 300px;
      margin: 0 5px;
      width: calc(50% - 10px);
      height: 48px;
      border-radius: 5px;
      background: #fff;
      border: 1px solid #e4e4e9;
      border-radius: 5px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3e3a39;
      &.browser {
        background: #0073ea;
        color: #fff;
      }
    }
  }

  @media (max-width: 480px) {
    .img {
      height: 150px;
      width: 100%;
    }
    .buttonBox {
      button {
        width: 100%;
        &.browser {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
