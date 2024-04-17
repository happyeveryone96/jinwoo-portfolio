/* eslint-disable react/jsx-no-undef */
import React from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import css from "../../styles/projects.module.css";
import Link from "next/link";

const EOStudio = () => {
  return (
    <ProjectContainer isFirst={true}>
      <h1>EO 스튜디오 Internship</h1>
      <div className={css.project_box}>
        <p>
          <span className={css.highlight}>개발 기간</span> - 2024.01.08 ~ 2024 ~
          02.16
        </p>
        <p>
          <span className={css.highlight}>프로젝트 설명</span>
          <br />
          <span>- 창업가들을 타겟으로 하는 블로그 (Citti) 개발</span>
        </p>
        <Link href="https://citti.io/" target="_blank">
          웹 페이지 URL
        </Link>
        <p>
          <span className={css.highlight}>
            사용 기술 <br />
          </span>{" "}
          - Next.js, TypeScript, TanStack Query, Tailwind CSS
        </p>
        <p>
          <span className={css.highlight}>담당 업무</span>
          <br /> - 메인 화면 개발
          <br /> - QA 대응
        </p>
      </div>
    </ProjectContainer>
  );
};

export default EOStudio;
