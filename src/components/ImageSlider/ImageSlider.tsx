import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImageData } from "next/image";

interface Props {
  props: StaticImageData[];
}

const ImageSlider: React.FC<Props> = ({ props }: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplatSpeed: 2000,
    slidesToShow: 1,
    sliedsToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {props?.map((img, idx) => {
          return (
            <CardBox key={idx}>
              <CardImg alt="productImg" src={img.src} />
            </CardBox>
          );
        })}
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 40vw;
    @media screen and (max-width: 1000px) {
      width: 60vw;
    }
  }

  .slick-slide div {
    outline: none;
  }
`;

const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  object-fit: contain;
  width: 40vw;
  height: 40vw;
  @media screen and (max-width: 1000px) {
    width: 60vw;
    height: 60vw;
  }
`;

export default ImageSlider;
