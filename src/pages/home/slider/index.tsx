import { useRef } from "react";
import { Carousel } from "antd";
import * as S from "./style";
import { left } from "src/assets/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
}

type Props = {
  products: string[];
};

export default function Silder(props: Props) {
  const refCarousel = useRef<CarouselRef>();

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div
      style={{
        position: "relative",
        width:"100%"
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      >
        <S.BtTrai
          onClick={() => {
            if (refCarousel.current) {
              refCarousel.current.prev();
            }
          }}
        >
        Next
        </S.BtTrai>
        <S.BtPhai
          onClick={() => {
            if (refCarousel.current) {
              refCarousel.current.next();
            }
          }}
        >
          Prev
        </S.BtPhai>
      </div>
      
      <Carousel ref={refCarousel} afterChange={onChange}>
        {props.products.map((img) => {
          return (
            <div>
              <S.ImageSlide src={img.hinhAnh} alt=".." />
              {/* <h3 style={contentStyle}>1</h3> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
