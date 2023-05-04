/* eslint-disable react/jsx-no-undef */
import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Dream1 from "../../../public/images/dream1.png";
import Dream2 from "../../../public/images/dream2.png";
import Dream3 from "../../../public/images/dream3.png";
import Dream4 from "../../../public/images/dream4.png";
import css from "../../styles/projects.module.css";
import Link from "next/link";
import Github from "../../../public/images/GitHub.svg";
import Image from "next/image";

const Dream = () => {
  return (
    <ProjectContainer isFirst={true}>
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
          <span className={css.highlight}>주요 기능</span> - 로그인, 회원가입,
          카카오 로그인, 메인 페이지, SHOP 페이지, 마이 페이지, 제품 상세 페이지
        </p>
        <p className={css.highlight}>담당 기능</p>
        <p>- JWT와 로컬스토리지를 사용한 로그인 / 회원가입 구현</p>
        <p>- 정규 표현식을 활용한 유효성 검사 기능 구현</p>
        <p>
          - 카카오 로그인 시 query-string 라이브러리를 <br />
          활용하여 redirect url으로 전달되는 데이터를 <br />
          로컬 스토리지에 저장하는 기능 구현
        </p>
        <p>- react-slick 라이브러리 이용 및 CSS 커스터마이즈 슬라이더 구현</p>
        <p>- 관심상품 등록 및 해제 기능 구현</p>
        <p>- 제품 사이즈 선택 모달 구현</p>
        <p>
          - 페이지 이동 시 구매 및 판매에 필요한 정보들을 state로 <br />
          넘겨주는 기능 구현
        </p>
        <p>
          - useState와 useEffect 훅을 활용해 체크 박스 <br /> 체크 여부 확인
          기능 구현
        </p>
      </div>
    </ProjectContainer>
  );
};

export default Dream;
