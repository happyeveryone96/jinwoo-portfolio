import Nav from "@/components/Nav/Nav";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Github from "../../../public/GitHub.svg";

const Projects = () => {
  return (
    <div>
      <Nav />
      <div className="project-main-container">
        <div className="project-container">
          <div className="project-sub-container">
            <h1>DREAM</h1>
            <p>한정판을 거래하는 KREAM을 참고하여 진행한 프로젝트</p>
            <div className="project-box">
              <p>개발 기간 - 2022.07.11 ~ 2022.07.29</p>
              <p>개발 인원 - 6명 (FE - 3명, React.js / BE - 3명, Node.js)</p>
              <Link
                href="https://github.com/happyeveryone96/justcode-5-2nd-dream-front"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} />
              </Link>
              <p>
                사용 기술 - React.js, JavaScript, SCSS, Styled-Components, HTML
              </p>
              <p>
                주요 기능 - 로그인, 회원가입, 카카오 로그인, 메인 페이지, SHOP
                페이지, 마이 페이지, 제품 상세 페이지
              </p>
              <p className="responsible-function">담당 기능</p>
              <p>- JWT와 로컬스토리지를 사용한 로그인 / 회원가입 구현</p>
              <p>- 정규 표현식을 활용한 유효성 검사 기능 구현</p>
              <p>
                - 카카오 로그인 시 query-string 라이브러리를 활용하여 redirect
                url으로 전달되는 데이터를 로컬 스토리지에 저장하는 기능 구현
              </p>
              <p>
                - react-slick 라이브러리 이용 및 CSS 커스터마이즈 슬라이더 구현
              </p>
              <p>- 관심상품 등록 및 해제 기능 구현</p>
              <p>- 제품 사이즈 선택 모달 구현</p>
              <p>
                - 페이지 이동 시 구매 및 판매에 필요한 정보들을 state로 넘겨주는
                기능 구현
              </p>
              <p>
                - useState와 useEffect 훅을 활용해 체크 박스 체크 여부 확인 기능
                구현
              </p>
            </div>
          </div>
        </div>
        <div className="image-box">
          <div className="dream-1 blob"></div>
          <div className="dream-2 blob"></div>
        </div>
        <div className="image-box">
          <div className="dream-3 blob"></div>
          <div className="dream-4 blob"></div>
        </div>
      </div>

      <div className="project-main-container">
        <div className="project-container">
          <div className="project-sub-container">
            <h1>RUSH</h1>
            <p>LUSH를 모티브로 한 프로젝트</p>
            <div className="project-box">
              <p>개발 기간 - 2022-06-20 ~ 2022-07-08</p>
              <p>개발 인원 - 4명 (FullStack 4명, React.js + Node.js)</p>
              <Link
                href="https://github.com/happyeveryone96/justcode-5-1st-rushandcode-front"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} />
              </Link>
              <p>
                사용 기술 - React.js, JavaScript, SCSS, Styled-Components, HTML
              </p>
              <p>
                주요 기능 - 로그인, 회원가입, 메인 페이지, 제품 상세 페이지,
                장바구니, 제품 리스트 페이지
              </p>
              <p className="responsible-function">담당 기능</p>
              <p>- 제품 상세 정보 가져오기 기능 구현</p>
              <p>- 리뷰 CRUD 기능 구현</p>
              <p>- 장바구니 CRUD 기능 구현</p>
              <p>
                - window 객체의 scrollTo 메소드를 사용하여 제품 상세 페이지 내부
                내비게이션 바의 버튼 클릭 시 해당 위치로 스크롤 기능 구현
              </p>
              <p>- 페이지 전환 시 0.5초 동안 보여지는 스피너 구현</p>
              <p>- 잘못된 url로 접근 시 보여지는 NOT FOUND 페이지 구현</p>
            </div>
          </div>
        </div>
        <div className="image-box">
          <div className="rush-1 blob"></div>
          <div className="rush-2 blob"></div>
        </div>
        <div className="image-box">
          <div className="rush-3 blob"></div>
          <div className="rush-4 blob"></div>
        </div>
        <div className="image-box">
          <div className="rush-5 blob"></div>
        </div>
      </div>

      <div className="project-main-container">
        <div className="project-container">
          <div className="project-sub-container">
            <h1>disCATch</h1>
            <p>동네 고양이 돌봄 플랫폼</p>
            <div className="project-box">
              <p className="planning-the-road">기획 의도</p>
              <p>
                캣맘과 캣대디 그리고 지자체의 노력으로 길고양이의 인식이 많이
                좋아졌다고는 하지만 아직도 길고양이에 불만이 지속해서 제기되고
                있습니다. 우리가 사는 동네부터 자발적으로 체계적인 고양이 돌봄
                활동을 한다면 조금이나마 문제가 해결될 것이라 생각하여
                프로젝트를 기획했습니다.
              </p>
              <p>개발 기간 - 2021.09 ~ 2021.12</p>
              <p>
                개발 인원 - 4명 (FE - 2명, React.js / BE - 2명, Java Spring)
              </p>
              <Link
                href="https://github.com/streetcatshelter/disCATch_Client"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} />
              </Link>
              <p>
                사용 기술 - React.js, Redux Toolkit, JavaScript, WebSocket,
                HTML, Styled-Components
              </p>
              <p>
                주요 기능 - 무한스크롤, 토스트 팝업, 카카오맵, 카카오맵 검색,
                커뮤니티, 이미지 업로드, 실시간 채팅, 소셜 로그인
              </p>
              <p className="responsible-function">담당 기능</p>
              <p>- react-intersection-observer를 사용해 무한스크롤 구현</p>
              <p>
                - 카카오맵을 이용한 지도 시스템 구현 (지도 검색, 고양이 위치
                표시)
              </p>
              <p>- AWS S3를 이용한 이미지 업로드 기능 구현</p>
              <p>- Redux-Toolkit을 이용한 동네 정보 유지 기능 구현</p>
              <p>- DaumPostcode를 사용한 주소 검색 기능 구현</p>
              <p>- 커뮤니티 기능 구현</p>
            </div>
          </div>
        </div>
        <div className="discatch-1 blob"></div>
        <div className="discatch-3 blob"></div>
        <div className="discatch-2 blob"></div>
      </div>

      <div className="project-main-container">
        <div className="project-container">
          <div className="project-sub-container">
            <h1>UZik (우리들의 직업)</h1>
            <p>직업 소개 서비스</p>
            <div className="project-box">
              <p>
                많은 직업들을 다양한 링크들을 통해 소개하고 게시판을 통해 소통할
                수 있는 커뮤니티입니다. 2020년 8월, 워크넷에서 오픈 API 인증키를
                발급받긴 했지만 사용 방법을 몰라서, 엑셀 파일의 텍스트를
                추출하는 프로그램을 사용하여 UZIK이라는 웹서비스 제작했습니다.
                하지만, 불필요한 코드가 많아지면서 가독성이 떨어졌고, 리라이팅의
                필요성을 느끼고 React.js와 Express.js를 활용해서 리라이팅 작업을
                진행했습니다.
              </p>
              <p>개발 기간 - 2021.12.20 ~ 2022.01.03</p>
              <p>개인 프로젝트</p>
              <Link
                href="https://github.com/happyeveryone96/UZik_rewriting"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} />
              </Link>
              <p>사용 기술</p>
              <p>
                FE : React.js, Redux Toolkit, JavaScript, TypeScript(부분 적용),
                HTML, SCSS, Styled-Components
                <br />
                BE : Node.js, Express.js, MongoDB Github, 워크넷 오픈 API
              </p>
              <p className="responsible-function">기능</p>
              <p>- JWT 토큰과 Cookie를 이용한 로그인 / 회원가입 / 인증 기능</p>
              <p>- 오픈 API를 이용한 직업카드 (직업에 대한 검색 링크)</p>
              <p>- 게시판 CRUD</p>
              <p>- 미디어 쿼리를 활용하여 반응형 웹 구현</p>
            </div>
          </div>
        </div>
        <div className="image-box">
          <div className="uzik-1 blob"></div>
          <div className="uzik-2 blob"></div>
        </div>
        <div className="image-box">
          <div className="uzik-3 blob"></div>
          <div className="uzik-4 blob"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;