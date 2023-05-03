import React, { ReactNode } from "react";
import css from "../../styles/projects.module.css";

interface Props {
  isFirst?: true;
  children: ReactNode;
}

const ProjectContainer: React.FC<Props> = ({ isFirst, children }: Props) => {
  return (
    <div
      className={`${css.project_main_container} ${
        isFirst && css.first_container
      }`}
    >
      <div className={css.project_container}>
        <div className={css.project_sub_container}>{children}</div>
      </div>
    </div>
  );
};

export default ProjectContainer;
