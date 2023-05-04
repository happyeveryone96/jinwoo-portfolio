/* eslint-disable react/jsx-no-undef */
import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Discatch1 from "../../../public/images/discatch1.png";
import Discatch2 from "../../../public/images/discatch2.png";
import Discatch3 from "../../../public/images/discatch3.png";
import css from "../../styles/projects.module.css";
import Link from "next/link";
import Github from "../../../public/images/GitHub.svg";
import Image from "next/image";

const Discatch = () => {
  return (
    <ProjectContainer>
      <h1>disCATch</h1>
      <p className={css.highlight}>동네 고양이 돌봄 플랫폼</p>
      <ImageSlider props={[Discatch1, Discatch2, Discatch3]} />
      <div className={css.project_box}>
        <p className={css.highlight}>기획 의도</p>
        <p>
          캣맘과 캣대디 그리고 지자체의 노력으로 길고양이의 인식이 많이
          좋아졌다고는 하지만 아직도 길고양이에 불만이 지속해서 제기되고
          있습니다. 우리가 사는 동네부터 자발적으로 체계적인 고양이 돌봄 활동을
          한다면 조금이나마 문제가 해결될 것이라 생각하여 프로젝트를
          기획했습니다.
        </p>
        <p>
          <span className={css.highlight}>개발 기간</span> - 2021.09 ~ 2021.12
        </p>
        <p>
          <span className={css.highlight}>개발 인원</span> - 4명 (FE - 2명,
          React.js / <br />
          BE - 2명, Java Spring)
        </p>
        <Link
          href="https://github.com/streetcatshelter/disCATch_Client"
          target="_blank"
        >
          <Image alt="GitHub" src={Github} className={css.github} />
        </Link>
        <p>
          <span className={css.highlight}>사용 기술</span> - React.js, Redux
          Toolkit, JavaScript, WebSocket, HTML, Styled-Components
        </p>
        <p>
          <span className={css.highlight}>주요 기능</span> - 무한스크롤, 토스트
          팝업, 카카오맵, 카카오맵 검색, <br />
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
    </ProjectContainer>
  );
};

export default Discatch;
