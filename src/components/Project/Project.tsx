// import React from "react";
// import ImageSlider from "../ImageSlider/ImageSlider";
// import ProjectContainer from "../ProjectContainer/ProjectContainer";
// import css from "../../styles/projects.module.css";
// import Link from "next/link";
// import { StaticImageData } from "next/image";

// interface ProjectProps {
//   title: string;
//   period: string;
//   description: string;
//   images: StaticImageData[];
//   url?: string;
//   tech: string;
//   responsibilities: string[];
// }

// const Project: React.FC<ProjectProps> = ({
//   title,
//   period,
//   description,
//   images,
//   url,
//   tech,
//   responsibilities,
// }) => {
//   return (
//     <ProjectContainer isFirst={true}>
//       <h1>
//         {title} <br />
//         {title === "Dataus" && <span>(Work Experience)</span>}
//       </h1>
//       <div className={css.project_box}>
//         <p>
//           <span className={css.highlight}>개발 기간</span> - {period}
//         </p>
//         <p>
//           <span className={css.highlight}>프로젝트 설명</span>
//           <span> - {description}</span>
//         </p>
//         <ImageSlider props={images} />
//         <p>
//           <span className={css.highlight}>사용 기술</span>
//           <br />- {tech}
//         </p>
//         {url && (
//           <p>
//             <br />
//             <Link href={url} target="_blank">
//               <span className={css.highlight}>웹 페이지 URL</span>
//             </Link>
//           </p>
//         )}
//         <p>
//           <span className={css.highlight}>담당 업무</span>
//           <br />{" "}
//           {responsibilities.map((resp, index) => (
//             <span key={index}>
//               - {resp}
//               <br />
//             </span>
//           ))}
//         </p>
//       </div>
//     </ProjectContainer>
//   );
// };

// export default Project;
// src/components/Project/Project.tsx
import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import css from "../../styles/projects.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

interface ProjectProps {
  title: string;
  duration: string;
  responsibilities: string[];
  images?: StaticImageData[];
  githubUrl?: string;
  liveUrl?: string;
  techStack: string;
  description: string;
  isFirst?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  title,
  duration,
  responsibilities,
  images,
  githubUrl,
  liveUrl,
  techStack,
  description,
  isFirst,
}) => {
  return (
    <ProjectContainer isFirst={isFirst ? true : undefined}>
      <h1>{title}</h1>
      <p className={css.highlight}>{duration}</p>
      {images && <ImageSlider props={images} />}
      <div className={css.project_box}>
        {githubUrl && (
          <Link href={githubUrl} target="_blank">
            <Image
              width={120}
              height={30}
              alt="GitHub"
              src="/images/GitHub.svg"
              className={css.github}
            />
          </Link>
        )}
        {liveUrl && (
          <>
            <br />
            <Link href={liveUrl} target="_blank">
              웹 페이지 URL
            </Link>
          </>
        )}
        <p>
          <span className={css.highlight}>프로젝트 설명</span> - {description}
        </p>
        <p>
          <span className={css.highlight}>사용 기술</span> - {techStack}
        </p>
        <p className={css.highlight}>담당 기능</p>
        {responsibilities.map((task, index) => (
          <p key={index}>- {task}</p>
        ))}
      </div>
    </ProjectContainer>
  );
};

export default Project;
