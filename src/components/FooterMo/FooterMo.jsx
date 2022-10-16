import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  padding: 60px 20px;
  width: 100%;
  height: auto;
  // ★내부 설정★
  justify-content: center;
  background: #f0f0f0;
  color: #787878;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    display: none;
  }
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
// [CUInfo]
const DivCUInfo = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-right: 215px;
  width: auto;
  // ★내부 설정★
  // ★행동 설정★
`;
// CULogo
const DivCULogo = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-bottom: 30.8px;
  // ★내부 설정★
  // ★행동 설정★
`;
const ACULogo = styled.a`
  display: flex;
  width: 100px;
  height: 21.2px;
`;
const ImgCULogo = styled.img`
  display: flex;
  width: 100%;
`;
// Address
const DivAddress = styled.address`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const PAddress = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.64px;
`;
// Tel
const DivTel = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const PTel = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: -0.56px;
`;
// SNS
const DivSNS = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-top: 20px;
  // ★내부 설정★
  // ★행동 설정★
`;
const AFacebook = styled.a`
  padding-right: 15px;
`;
const IconFacebook = styled.img``;
const ATwitter = styled.a`
  padding-right: 15px;
`;
const IconTwitter = styled.img``;
const ABlog = styled.a`
  padding-right: 15px;
`;
const IconBlog = styled.img``;
// [QuickMenu]
const DivQuickMenu = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const TitleQuickMenu = styled.strong`
  color: #8059ea;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.88;
`;
const NavQuickMenu = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  line-height: 2.13;
  letter-spacing: -0.6px;
`;
const NavRight = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 19px 72px 0 0;
  list-style-type: none;
`;
const NavLeft = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 19px 72px 0 0;
  list-style-type: none;
`;
const LiQuickMenu = styled.li``;
const AQuickMenu = styled.a`
  text-decoration: none;
`;
const AStrongQuickMenu = styled.a`
  font-weight: 700;
  color: #000;
  text-decoration: none;
`;
// [FamilySite]
const DivFamilySite = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const TitleFamilySite = styled.strong`
  color: #8059ea;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.88;
`;
const NavFamilySite = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  line-height: 2.13;
  letter-spacing: -0.6px;
`;
const LiFamilySite = styled.li``;
const AFamilySite = styled.a`
  text-decoration: none;
`;

function FooterMo(props) {
  return (
    <Wrapper>
      <InnerWrap>
        <DivCUInfo>
          <DivCULogo>
            <ACULogo href="">
              <ImgCULogo
                src="/images/common/footer_logo.png"
                alt="cu_logo_gray"
              />
            </ACULogo>
          </DivCULogo>
          <DivAddress>
            <PAddress>BGF리테일 서울시 강남구 테헤란로 405(삼성동)</PAddress>
            <PAddress>COPYRIGHT © BGFretail ALL RIGHT RESERVED.</PAddress>
          </DivAddress>
          <DivTel>
            <PTel>TEL: 1577-8007</PTel>
          </DivTel>
          <DivSNS>
            <AFacebook
              href="https://www.facebook.com/CU.BGFretail.cvs/"
              target="_blank"
            >
              <IconFacebook
                src="/images/common/footer_facebook.png"
                alt="facebook"
              />
            </AFacebook>
            <ATwitter href="https://twitter.com/BGFretail" target="_blank">
              <IconTwitter
                src="/images/common/footer_twitter.png"
                alt="twitter"
              />
            </ATwitter>
            <ABlog href="http://blog.bgfcu.com" target="_blank">
              <IconBlog src="/images/common/footer_blog.png" alt="blog" />
            </ABlog>
          </DivSNS>
        </DivCUInfo>
        <DivQuickMenu>
          <TitleQuickMenu>Quick Menu</TitleQuickMenu>
          <NavQuickMenu>
            <NavLeft>
              <LiQuickMenu>
                <AQuickMenu href="" target="_blank">
                  입점상담
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu href="" target="_blank">
                  매장찾기
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu href="http://mkr.bgfretail.com/" target="_blank">
                  발주 및 배송데이터
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu
                  href="http://etax.bgfretail.com/index.jsp"
                  target="_blank"
                >
                  전자세금계산서
                </AQuickMenu>
              </LiQuickMenu>
            </NavLeft>
            <NavRight>
              <LiQuickMenu>
                <AQuickMenu
                  href="https://www.pocketcu.co.kr/auth/owner"
                  target="_blank"
                >
                  점주인증
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu
                  href="https://www.pocketcu.co.kr/auth/emp"
                  target="_blank"
                >
                  임직원인증
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AStrongQuickMenu
                  href="https://www.pocketcu.co.kr/policy/policy/pc/privacyPolicy"
                  target="_blank"
                >
                  개인정보처리방침
                </AStrongQuickMenu>
              </LiQuickMenu>
            </NavRight>
          </NavQuickMenu>
        </DivQuickMenu>
        <DivFamilySite>
          <TitleFamilySite>Family Site</TitleFamilySite>
          <NavFamilySite>
            <NavLeft>
              <LiFamilySite>
                <AFamilySite href="http://www.bgf.co.kr" target="_blank">
                  BGF
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.bgfretail.com/" target="_blank">
                  BGF리테일
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="https://www.pocketcu.co.kr" target="_blank">
                  포켓CU
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.bgfnetworks.com/" target="_blank">
                  BGF네트웍스
                </AFamilySite>
              </LiFamilySite>
            </NavLeft>
            <NavRight>
              <LiFamilySite>
                <AFamilySite href="http://www.bgfhumannet.com/" target="_blank">
                  BGF휴먼넷
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.bgflogis.com/" target="_blank">
                  BGF로지스
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.cupost.co.kr" target="_blank">
                  BGF포스트
                </AFamilySite>
              </LiFamilySite>
            </NavRight>
          </NavFamilySite>
        </DivFamilySite>
      </InnerWrap>
    </Wrapper>
  );
}

export default FooterMo;
