/* eslint-disable react/jsx-no-undef */
import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Reboast1 from "../../../public/images/Reboast1.png";
import Reboast2 from "../../../public/images/Reboast2.png";
import Reboast3 from "../../../public/images/Reboast3.png";
import Reboast4 from "../../../public/images/Reboast4.png";
import Reboast5 from "../../../public/images/Reboast5.png";
import Reboast6 from "../../../public/images/Reboast6.png";
import Reboast7 from "../../../public/images/Reboast7.png";
import Reboast8 from "../../../public/images/Reboast8.png";
import Reboast9 from "../../../public/images/Reboast9.png";
import Reboast10 from "../../../public/images/Reboast10.png";
import Reboast11 from "../../../public/images/Reboast11.png";
import Reboast12 from "../../../public/images/Reboast12.png";
import Reboast13 from "../../../public/images/Reboast13.png";
import Sesiban1 from "../../../public/images/sesiban1.png";
import Sesiban2 from "../../../public/images/sesiban2.png";
import Sesiban3 from "../../../public/images/sesiban3.png";
import Sesiban4 from "../../../public/images/sesiban4.png";
import Sesiban5 from "../../../public/images/sesiban5.png";
import Sesiban6 from "../../../public/images/sesiban6.png";
import Sesiban7 from "../../../public/images/sesiban7.png";
import Sesiban8 from "../../../public/images/sesiban8.png";
import Sesiban9 from "../../../public/images/sesiban9.png";

import css from "../../styles/projects.module.css";
import Link from "next/link";
import Github from "../../../public/images/GitHub.svg";
import Image from "next/image";

const Dataus = () => {
  return (
    <ProjectContainer isFirst={true}>
      <h1>
        데이터스 <br />
        (Work Experience)
      </h1>
      <p className={css.highlight}>근무 기간 - 2023.06 ~ 2023.10 (5개월)</p>
      <p className={css.highlight}>담당 업무 1 - ReBoast 프로토타입 개발</p>
      <ImageSlider
        props={[
          Reboast1,
          Reboast2,
          Reboast3,
          Reboast4,
          Reboast5,
          Reboast6,
          Reboast7,
          Reboast8,
          Reboast9,
          Reboast10,
          Reboast11,
          Reboast12,
          Reboast13,
        ]}
      />
      <div className={css.project_box}>
        <Link
          href="https://github.com/happyeveryone96/ReBoast-Web"
          target="_blank"
        >
          <Image alt="GitHub" src={Github} className={css.github} />
        </Link>
        <br />
        <Link href="https://re-boast-web.vercel.app/" target="_blank">
          웹 페이지 URL
        </Link>
        <p>
          <span className={css.highlight}>사용 기술</span> - React.js,
          TypeScript, CSS, HTML, Redux Toolkit
        </p>
        <p>
          <span className={css.highlight}>프로젝트 설명</span> - 생애주기별 개인
          맞춤형 학습 컨텐츠를 제공하는 플랫폼의 프로토타입 개발
        </p>
        <p className={css.highlight}>담당 기능 (FE 1인 개발)</p>
        <p>- 로그인 및 회원가입 기능 개발</p>
        <p>- 메인 페이지 / 강의 상세 페이지 / 학습 자료 페이지 개발</p>
        <p>- 멘토 소개 페이지 / 멤버쉽 페이지 / 이벤트 페이지 개발</p>
        <p>- 미디어 쿼리를 활용한 반응형 디자인</p>
        <p>- Formik과 Yup을 활용한 유효성 검사 로직 구현</p>
        <p>- Redux Toolkit을 활용한 상태 관리</p>
        <p>- redux-persist를 활용한 전역 상태 유지 기능 구현</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <p className={css.highlight}>담당 업무 2 - 세시반 프로토타입 개발</p>
      <ImageSlider
        props={[
          Sesiban1,
          Sesiban2,
          Sesiban3,
          Sesiban4,
          Sesiban5,
          Sesiban6,
          Sesiban7,
          Sesiban8,
          Sesiban9,
        ]}
      />
      <p className={css.highlight}>개발 기간 - 2023.10.04 ~ 2023.10.13</p>

      <div className={css.project_box}>
        <Link
          href="https://github.com/happyeveryone96/three-thirty"
          target="_blank"
        >
          <Image alt="GitHub" src={Github} className={css.github} />
        </Link>
        <br />
        <p>
          <span className={css.highlight}>사용 기술</span> - React Native,
          TypeScript, Recoil.js
        </p>
        <p>
          <span className={css.highlight}>프로젝트 설명</span> - 주식 커뮤니티
          앱 개발
        </p>
        <p className={css.highlight}>담당 기능 (FE 1인 개발)</p>
        <p>- 로그인 및 회원가입 기능 개발</p>
        <p>- 게시물 작성 / 조회 / 수정 / 삭제 기능 개발</p>
        <p>- 게시물 좋아요 및 싫어요 기능 개발</p>
        <p>- 댓글 작성 / 조회 / 수정 / 삭제 기능 개발 </p>
      </div>
    </ProjectContainer>
  );
};

export default Dataus;
