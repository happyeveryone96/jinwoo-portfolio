/* eslint-disable react/jsx-no-undef */
import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Uzik1 from "../../../public/images/uzik1.png";
import Uzik2 from "../../../public/images/uzik2.png";
import Uzik3 from "../../../public/images/uzik3.png";
import Uzik4 from "../../../public/images/uzik4.png";
import css from "../../styles/projects.module.css";
import Link from "next/link";
import Github from "../../../public/images/GitHub.svg";
import Image from "next/image";

const Uzik = () => {
  return (
    <ProjectContainer>
      <h1>UZik (우리들의 직업)</h1>
      <p className={css.highlight}>직업 소개 서비스</p>
      <ImageSlider props={[Uzik1, Uzik2, Uzik3, Uzik4]} />
      <div className={css.project_box}>
        <p>
          많은 직업들을 다양한 링크들을 통해 소개하고 게시판을 통해 소통할 수
          있는 커뮤니티입니다. 2020년 8월, 워크넷에서 오픈 API 인증키를 발급받긴
          했지만 사용 방법을 몰라서, 엑셀 파일의 텍스트를 추출하는 프로그램을
          사용하여 UZIK이라는 웹서비스 제작했습니다. 하지만, 불필요한 코드가
          많아지면서 가독성이 떨어졌고, 리라이팅의 필요성을 느끼고 React.js와
          Express.js를 활용해서 리라이팅 작업을 진행했습니다.
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
          FE : React.js, Redux Toolkit, JavaScript, TypeScript(부분 적용), HTML,
          SCSS, Styled-Components
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
    </ProjectContainer>
  );
};

export default Uzik;
