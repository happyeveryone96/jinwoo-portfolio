import { StaticImageData } from "next/image";
import {
  reboastImages,
  sesibanImages,
  discatchImages,
  dreamImages,
  rushImages,
  uzikImages,
} from "./imagesData";

export interface ProjectData {
  title: string;
  duration: string;
  description: string;
  techStack: string;
  responsibilities: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: StaticImageData[];
  isFirst?: boolean;
}

export const projectsData: ProjectData[] = [
  {
    title: "데이터스 (Work Experience)",
    duration: "2023.06 ~ 2023.10 (5개월)",
    description:
      "생애주기별 개인 맞춤형 학습 컨텐츠를 제공하는 플랫폼의 프로토타입 개발",
    techStack: "React.js, TypeScript, CSS, HTML, Redux Toolkit",
    responsibilities: [
      "ReBoast 프로토타입 개발",
      "로그인 및 회원가입 기능 개발",
      "메인 페이지 / 강의 상세 페이지 / 학습 자료 페이지 개발",
      "멘토 소개 페이지 / 멤버쉽 페이지 / 이벤트 페이지 개발",
      "미디어 쿼리를 활용한 반응형 디자인",
      "Formik과 Yup을 활용한 유효성 검사 로직 구현",
      "Redux Toolkit을 활용한 상태 관리",
      "redux-persist를 활용한 전역 상태 유지 기능 구현",
    ],
    githubUrl: "https://github.com/happyeveryone96/ReBoast-Web",
    liveUrl: "https://re-boast-web.vercel.app/",
    images: reboastImages,
    isFirst: true,
  },
  {
    title: "세시반 프로토타입 개발",
    duration: "2023.10.04 ~ 2023.10.13",
    description: "주식 커뮤니티 앱 개발",
    techStack: "React Native, TypeScript, Recoil.js",
    responsibilities: [
      "로그인 및 회원가입 기능 개발",
      "게시물 작성 / 조회 / 수정 / 삭제 기능 개발",
      "게시물 좋아요 및 싫어요 기능 개발",
      "댓글 작성 / 조회 / 수정 / 삭제 기능 개발",
    ],
    githubUrl: "https://github.com/happyeveryone96/three-thirty",
    images: sesibanImages,
  },
  {
    title: "EO 스튜디오 Internship",
    duration: "2024.01.08 ~ 2024.02.16",
    description: "창업가들을 타겟으로 하는 블로그 (Citti) 개발",
    techStack: "Next.js, TypeScript, TanStack Query, Tailwind CSS",
    responsibilities: ["메인 화면 개발", "QA 대응"],
    liveUrl: "https://citti.io/",
  },
  {
    title: "린온컴퍼니 Internship",
    duration: "2022.08.01 ~ 2022.08.25",
    description:
      "프리랜서 강사를 타겟으로 하는 온라인 강의 플랫폼 서비스(Supporti) 제공",
    techStack:
      "React.js, JavaScript, SCSS, HTML (v1), React Native for Web, JavaScript, HTML (v2)",
    responsibilities: [
      "recharts 라이브러리를 활용해 프리랜서 강사들이 사용하는 월별 매출 차트 구현 (v1)",
      "useWindowDimensions 훅을 활용한 반응형 디자인 (v2)",
      "모임 상세 페이지 퍼블리싱 작업 (v2)",
    ],
  },
  {
    title: "DREAM",
    duration: "2022.07.11 ~ 2022.07.29",
    description: "한정판을 거래하는 KREAM을 참고하여 진행한 프로젝트",
    techStack: "React.js, JavaScript, SCSS, Styled-Components, HTML",
    responsibilities: [
      "JWT와 로컬스토리지를 사용한 로그인 / 회원가입 구현",
      "정규 표현식을 활용한 유효성 검사 기능 구현",
      "카카오 로그인 시 query-string 라이브러리를 활용하여 redirect url으로 전달되는 데이터를 로컬 스토리지에 저장하는 기능 구현",
      "react-slick 라이브러리 이용 및 CSS 커스터마이즈 슬라이더 구현",
      "관심상품 등록 및 해제 기능 구현",
      "제품 사이즈 선택 모달 구현",
      "페이지 이동 시 구매 및 판매에 필요한 정보들을 state로 넘겨주는 기능 구현",
      "useState와 useEffect 훅을 활용해 체크 박스 체크 여부 확인 기능 구현",
    ],
    githubUrl: "https://github.com/happyeveryone96/justcode-5-2nd-dream-front",
    images: dreamImages,
  },
  {
    title: "RUSH",
    duration: "2022-06-20 ~ 2022-07-08",
    description: "LUSH를 모티브로 한 프로젝트",
    techStack: "React.js, JavaScript, SCSS, Styled-Components, HTML",
    responsibilities: [
      "제품 상세 정보 가져오기 기능 구현",
      "리뷰 CRUD 기능 구현",
      "장바구니 CRUD 기능 구현",
      "window 객체의 scrollTo 메소드를 사용하여 제품 상세 페이지 내부 내비게이션 바의 버튼 클릭 시 해당 위치로 스크롤 기능 구현",
      "페이지 전환 시 0.5초 동안 보여지는 스피너 구현",
      "잘못된 url로 접근 시 보여지는 NOT FOUND 페이지 구현",
    ],
    githubUrl:
      "https://github.com/happyeveryone96/justcode-5-1st-rushandcode-front",
    images: rushImages,
  },
  {
    title: "disCATch",
    duration: "2021.09 ~ 2021.12",
    description: "동네 고양이 돌봄 플랫폼",
    techStack:
      "React.js, Redux Toolkit, JavaScript, WebSocket, HTML, Styled-Components",
    responsibilities: [
      "react-intersection-observer를 사용해 무한스크롤 구현",
      "카카오맵을 이용한 지도 시스템 구현 (지도 검색, 고양이 위치 표시)",
      "AWS S3를 이용한 이미지 업로드 기능 구현",
      "Redux-Toolkit을 이용한 동네 정보 유지 기능 구현",
      "DaumPostcode를 사용한 주소 검색 기능 구현",
      "커뮤니티 기능 구현",
    ],
    githubUrl: "https://github.com/streetcatshelter/disCATch_Client",
    images: discatchImages,
  },
  {
    title: "UZik (우리들의 직업)",
    duration: "2021.12.20 ~ 2022.01.03",
    description:
      "많은 직업들을 다양한 링크들을 통해 소개하고 게시판을 통해 소통할 수 있는 커뮤니티입니다. 2020년 8월, 워크넷에서 오픈 API 인증키를 발급받긴 했지만 사용 방법을 몰라서, 엑셀 파일의 텍스트를 추출하는 프로그램을 사용하여 UZIK이라는 웹서비스 제작했습니다. 하지만, 불필요한 코드가 많아지면서 가독성이 떨어졌고, 리라이팅의 필요성을 느끼고 React.js와 Express.js를 활용해서 리라이팅 작업을 진행했습니다.",
    techStack:
      "FE : React.js, Redux Toolkit, JavaScript, TypeScript(부분 적용), HTML, SCSS, Styled-Components; BE : Node.js, Express.js, MongoDB, Github, 워크넷 오픈 API",
    responsibilities: [
      "JWT 토큰과 Cookie를 이용한 로그인 / 회원가입 / 인증 기능",
      "오픈 API를 이용한 직업카드 (직업에 대한 검색 링크)",
      "게시판 CRUD",
      "미디어 쿼리를 활용하여 반응형 웹 구현",
    ],
    githubUrl: "https://github.com/happyeveryone96/UZik_rewriting",
    images: uzikImages,
  },
];
