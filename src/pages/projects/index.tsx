import Nav from "@/components/Nav/Nav";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Github from "../../../public/images/GitHub.svg";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Uzik1 from "../../../public/images/uzik1.png";
import Uzik2 from "../../../public/images/uzik2.png";
import Uzik3 from "../../../public/images/uzik3.png";
import Uzik4 from "../../../public/images/uzik4.png";
import Dream1 from "../../../public/images/dream1.png";
import Dream2 from "../../../public/images/dream2.png";
import Dream3 from "../../../public/images/dream3.png";
import Dream4 from "../../../public/images/dream4.png";
import Rush1 from "../../../public/images/rush1.png";
import Rush2 from "../../../public/images/rush2.png";
import Rush3 from "../../../public/images/rush3.png";
import Rush4 from "../../../public/images/rush4.png";
import Rush5 from "../../../public/images/rush5.png";
import Discatch1 from "../../../public/images/discatch1.png";
import Discatch2 from "../../../public/images/discatch2.png";
import Discatch3 from "../../../public/images/discatch3.png";
import css from "../../styles/projects.module.css";

const Projects = () => {
  return (
    <div>
      <Nav />
      <div className={`${css.project_main_container} ${css.first_container}`}>
        <div className={css.project_container}>
          <div className={css.project_sub_container}>
            <h1>DREAM</h1>
            <p className={css.highlight}>
              한정판을 거래하는 KREAM을 참고하여 진행한 프로젝트
            </p>
            <ImageSlider props={[Dream1, Dream2, Dream3, Dream4]} />
            <div className={css.project_box}>
              <p>
                <span className={css.highlight}>개발 기간</span> - 2022.07.11 ~
                2022.07.29
              </p>
              <p>
                <span className={css.highlight}>개발 인원</span> - 6명 <br />
                (FE - 3명, React.js / BE - 3명, Node.js)
              </p>
              <Link
                href="https://github.com/happyeveryone96/justcode-5-2nd-dream-front"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} className={css.github} />
              </Link>
              <p>
                <span className={css.highlight}>사용 기술</span> - React.js,
                JavaScript, SCSS, Styled-Components, HTML
              </p>
              <p>
                <span className={css.highlight}>주요 기능</span> - 로그인,
                회원가입, 카카오 로그인, 메인 페이지, SHOP 페이지, 마이 페이지,
                제품 상세 페이지
              </p>
              <p className={css.highlight}>담당 기능</p>
              <p>- JWT와 로컬스토리지를 사용한 로그인 / 회원가입 구현</p>
              <p>- 정규 표현식을 활용한 유효성 검사 기능 구현</p>
              <p>
                - 카카오 로그인 시 query-string 라이브러리를 <br />
                활용하여 redirect url으로 전달되는 데이터를 <br />
                로컬 스토리지에 저장하는 기능 구현
              </p>
              <p>
                - react-slick 라이브러리 이용 및 CSS 커스터마이즈 슬라이더 구현
              </p>
              <p>- 관심상품 등록 및 해제 기능 구현</p>
              <p>- 제품 사이즈 선택 모달 구현</p>
              <p>
                - 페이지 이동 시 구매 및 판매에 필요한 정보들을 state로 <br />
                넘겨주는 기능 구현
              </p>
              <p>
                - useState와 useEffect 훅을 활용해 체크 박스 <br /> 체크 여부
                확인 기능 구현
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={css.project_main_container}>
        <div className={css.project_container}>
          <div className={css.project_sub_container}>
            <h1>RUSH</h1>
            <p className={css.highlight}>LUSH를 모티브로 한 프로젝트</p>
            <ImageSlider props={[Rush1, Rush2, Rush3, Rush4, Rush5]} />
            <div className={css.project_box}>
              <p>
                <span className={css.highlight}>개발 기간</span> - 2022-06-20 ~
                2022-07-08
              </p>
              <p>
                <span className={css.highlight}>개발 인원</span> - 4명 <br />
                (FullStack 4명, React.js + Node.js)
              </p>
              <Link
                href="https://github.com/happyeveryone96/justcode-5-1st-rushandcode-front"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} className={css.github} />
              </Link>
              <p>
                <span className={css.highlight}>사용 기술</span> - React.js,
                JavaScript, SCSS, Styled-Components, HTML
              </p>
              <p>
                <span className={css.highlight}>주요 기능</span> - 로그인,
                회원가입, 메인 페이지, 제품 상세 페이지, <br /> 장바구니, 제품
                리스트 페이지
              </p>
              <p className={css.highlight}>담당 기능</p>
              <p>- 제품 상세 정보 가져오기 기능 구현</p>
              <p>- 리뷰 CRUD 기능 구현</p>
              <p>- 장바구니 CRUD 기능 구현</p>
              <p>
                - window 객체의 scrollTo 메소드를 사용하여 제품 <br />
                상세 페이지 내부 내비게이션 바의 버튼 클릭 시 해당 위치로 스크롤
                기능 구현
              </p>
              <p>- 페이지 전환 시 0.5초 동안 보여지는 스피너 구현</p>
              <p>
                - 잘못된 url로 접근 시 보여지는 NOT FOUND 페이지 <br />
                구현
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={css.project_main_container}>
        <div className={css.project_container}>
          <div className={css.project_sub_container}>
            <h1>disCATch</h1>
            <p className={css.highlight}>동네 고양이 돌봄 플랫폼</p>
            <ImageSlider props={[Discatch1, Discatch2, Discatch3]} />
            <div className={css.project_box}>
              <p className={css.highlight}>기획 의도</p>
              <p>
                캣맘과 캣대디 그리고 지자체의 노력으로 길고양이의 인식이 많이
                좋아졌다고는 하지만 아직도 길고양이에 불만이 지속해서 제기되고
                있습니다. 우리가 사는 동네부터 자발적으로 체계적인 고양이 돌봄
                활동을 한다면 조금이나마 문제가 해결될 것이라 생각하여
                프로젝트를 기획했습니다.
              </p>
              <p>
                <span className={css.highlight}>개발 기간</span> - 2021.09 ~
                2021.12
              </p>
              <p>
                <span className={css.highlight}>개발 인원</span> - 4명 (FE -
                2명, React.js / <br />
                BE - 2명, Java Spring)
              </p>
              <Link
                href="https://github.com/streetcatshelter/disCATch_Client"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} className={css.github} />
              </Link>
              <p>
                <span className={css.highlight}>사용 기술</span> - React.js,
                Redux Toolkit, JavaScript, WebSocket, HTML, Styled-Components
              </p>
              <p>
                <span className={css.highlight}>주요 기능</span> - 무한스크롤,
                토스트 팝업, 카카오맵, 카카오맵 검색, <br />
                커뮤니티, 이미지 업로드, 실시간 채팅, 소셜 로그인
              </p>
              <p className={css.highlight}>담당 기능</p>
              <p>- react-intersection-observer를 사용해 무한스크롤 구현</p>
              <p>
                - 카카오맵을 이용한 지도 시스템 구현 (지도 검색, <br />
                고양이 위치 표시)
              </p>
              <p>- AWS S3를 이용한 이미지 업로드 기능 구현</p>
              <p>- Redux-Toolkit을 이용한 동네 정보 유지 기능 구현</p>
              <p>- DaumPostcode를 사용한 주소 검색 기능 구현</p>
              <p>- 커뮤니티 기능 구현</p>
            </div>
          </div>
        </div>
      </div>

      <div className={css.project_main_container}>
        <div className={css.project_container}>
          <div className={css.project_sub_container}>
            <h1>UZik (우리들의 직업)</h1>
            <p className={css.highlight}>직업 소개 서비스</p>
            <ImageSlider props={[Uzik1, Uzik2, Uzik3, Uzik4]} />
            <div className={css.project_box}>
              <p>
                많은 직업들을 다양한 링크들을 통해 소개하고 게시판을 통해 소통할
                수 있는 커뮤니티입니다. 2020년 8월, 워크넷에서 오픈 API 인증키를
                발급받긴 했지만 사용 방법을 몰라서, 엑셀 파일의 텍스트를
                추출하는 프로그램을 사용하여 UZIK이라는 웹서비스 제작했습니다.
                하지만, 불필요한 코드가 많아지면서 가독성이 떨어졌고, 리라이팅의
                필요성을 느끼고 React.js와 Express.js를 활용해서 리라이팅 작업을
                진행했습니다.
              </p>
              <p>
                <span className={css.highlight}>개발 기간</span> - 2021.12.20 ~
                2022.01.03
              </p>
              <p className={css.highlight}>개인 프로젝트</p>
              <Link
                href="https://github.com/happyeveryone96/UZik_rewriting"
                target="_blank"
              >
                <Image alt="GitHub" src={Github} className={css.github} />
              </Link>
              <p className={css.highlight}>사용 기술</p>
              <p>
                FE : React.js, Redux Toolkit, JavaScript, TypeScript(부분 적용),
                HTML, SCSS, Styled-Components
                <br />
                BE : Node.js, Express.js, MongoDB Github, 워크넷 오픈 API
              </p>
              <p className={css.highlight}>기능</p>
              <p>
                - JWT 토큰과 Cookie를 이용한 로그인 / 회원가입 / <br />
                인증 기능
              </p>
              <p>- 오픈 API를 이용한 직업카드 (직업에 대한 검색 링크)</p>
              <p>- 게시판 CRUD</p>
              <p>- 미디어 쿼리를 활용하여 반응형 웹 구현</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
