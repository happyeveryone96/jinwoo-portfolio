/* eslint-disable react/jsx-no-undef */
import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Rush1 from "../../../public/images/rush1.png";
import Rush2 from "../../../public/images/rush2.png";
import Rush3 from "../../../public/images/rush3.png";
import Rush4 from "../../../public/images/rush4.png";
import Rush5 from "../../../public/images/rush5.png";
import css from "../../styles/projects.module.css";
import Link from "next/link";
import Github from "../../../public/images/GitHub.svg";
import Image from "next/image";

const Rush = () => {
  return (
    <ProjectContainer>
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
          <span className={css.highlight}>주요 기능</span> - 로그인, 회원가입,
          메인 페이지, 제품 상세 페이지, <br /> 장바구니, 제품 리스트 페이지
        </p>
        <p className={css.highlight}>담당 기능</p>
        <p>- 제품 상세 정보 가져오기 기능 구현</p>
        <p>- 리뷰 CRUD 기능 구현</p>
        <p>- 장바구니 CRUD 기능 구현</p>
        <p>
          - window 객체의 scrollTo 메소드를 사용하여 제품 <br />
          상세 페이지 내부 내비게이션 바의 버튼 클릭 시 해당 위치로 스크롤 기능
          구현
        </p>
        <p>- 페이지 전환 시 0.5초 동안 보여지는 스피너 구현</p>
        <p>
          - 잘못된 url로 접근 시 보여지는 NOT FOUND 페이지 <br />
          구현
        </p>
      </div>
    </ProjectContainer>
  );
};

export default Rush;
