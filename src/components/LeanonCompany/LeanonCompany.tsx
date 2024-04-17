/* eslint-disable react/jsx-no-undef */
import React from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import css from "../../styles/projects.module.css";
import Link from "next/link";
import Github from "../../../public/images/GitHub.svg";
import Image from "next/image";

const LeanonCompany = () => {
  return (
    <ProjectContainer isFirst={true}>
      <h1>린온컴퍼니 Internship</h1>
      <p className={css.highlight}>린온컴퍼니 소개</p>
      <p>
        - 프리랜서 강사를 타겟으로 하는 온라인 강의 플랫폼 서비스(Supporti)를
        제공
      </p>
      <div className={css.project_box}>
        <p>
          <span className={css.highlight}>개발 기간</span> - 2022.08.01 ~
          2022.08.25
        </p>
        <p>
          <span className={css.highlight}>프로젝트 설명</span>
          <br />
          <span>
            - 프리랜서 강사들을 타겟으로 하는 온라인 강의 플랫폼(v1) 대시보드를
            기존 기술스택(Vue.js)에서 React.js로 Migration하면서 유지보수 및
            개발
          </span>
          <br />
          <span>
            - 프리랜서와 창업자를 연결하여 모임을 매칭해주고 솔루션을 제시하는
            플랫폼(v2)의 개발
          </span>
        </p>
        <Link
          href="https://velog.io/@happyeveryone96/JUSTCODE-5%EA%B8%B0-%EA%B8%B0%EC%97%85-%ED%98%91%EC%97%85-%ED%9A%8C%EA%B3%A0"
          target="_blank"
        >
          기업협업 회고록
        </Link>
        <p>
          <span className={css.highlight}>
            사용 기술 <br />
          </span>{" "}
          - React.js, JavaScript, SCSS, HTML (v1)
          <br />- React Native for Web, JavaScript, HTML (v2)
        </p>
        <p>
          <span className={css.highlight}>담당 업무</span>
          <br /> - recharts 라이브러리를 활용해 프리랜서 강사들이 사용하는 월별
          매출 차트 구현 (v1) <br />- useWindowDimensions 훅을 활용한 반응형
          디자인 (v2) <br />- 모임 상세 페이지 퍼블리싱 작업 (v2)
        </p>
      </div>
    </ProjectContainer>
  );
};

export default LeanonCompany;
