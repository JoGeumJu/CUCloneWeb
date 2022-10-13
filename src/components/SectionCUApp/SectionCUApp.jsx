import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  margin: 0 auto 160px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin: 0 auto 140px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const DivBg = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 1280px;
  height: auto;
  padding-top: 33px;
  // ★내부 설정★
  background-color: #e9e7f6;
  border-radius: 10px;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: 100%;
    margin: 0 20px;
  }
`;
const DivText = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 50%;
  padding-left: 80px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    padding-left: 20px;
  }
`;
const TitleText = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding: 25px 0 14px;
  // ★내부 설정★
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: -1.44px;
  font-weight: 700;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 27px;
    line-height: 1.2;
    letter-spacing: -1.44px;
    font-weight: 700;
  }
  @media only screen and (max-width: 903px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 838px) {
    font-size: 22px;
  }
`;
const SubTitleText = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 15px;
  color: #222;
  letter-spacing: -0.8px;
  font-weight: 400;
  line-height: 1.2;
  // ★행동 설정★
  @media only screen and (max-width: 838px) {
    font-size: 13px;
  }
`;
const ImgPocketCU = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-left: 110px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    padding-left: 0px;
  }
`;
const DivLink = styled.a`
  // ★레이아웃 설정★
  display: flex;
  position: absolute;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  width: 200px;
  height: 60px;
  // ★내부 설정★
  top: 70px;
  right: 45px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #6837f8;
  border-radius: 5vh;
  text-decoration: none;
  cursor: pointer;
  // ★행동 설정★
  &:hover {
    box-shadow: 0px 2px 10px rgb(104, 55, 248, 0.6);
  }
`;
const TitleLink = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin-right: 30px;
  // ★내부 설정★
  color: #fff;
  font-size: 18px;
  letter-spacing: -0.72px;
  line-height: 1;
  font-weight: 600;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 15px;
  }
`;
const ImgDownload = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 15px;
  height: 17px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    padding-left: 0px;
  }
`;

function SectionCUApp(props) {
  return (
    <Wrapper>
      <DivBg>
        <DivText>
          <TitleText>차별화된 서비스와 풍성한 혜택이 가득!</TitleText>
          <SubTitleText>포켓CU APP 사용해보세요 :)</SubTitleText>
        </DivText>
        <ImgPocketCU
          src="/images/main/app_go_object_img01_pc.png"
          alt="img_pocket_cu"
        />
        <DivLink href="https://pocketcu.co.kr" target="_blank">
          <TitleLink>포켓CU 설치</TitleLink>
          <ImgDownload src="/images/main/ico_btn_down.png" alt="img_download" />
        </DivLink>
      </DivBg>
    </Wrapper>
  );
}

export default SectionCUApp;
