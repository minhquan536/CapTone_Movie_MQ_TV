import React, { useState } from "react";
import * as S from "./style";
// import { IIFE } from "src/utils";

// import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { maHTR, maRap } from "src/redux/cartSlice";

type Props = {
  data: string[];
};

export default function ListRight(props: Props) {
  // console.log(props.data);
  const dispatch = useDispatch();
  // console.log(maHTRs);
  const [focusedImage, setFocusedImage] = useState(null);

  const handleImageClick = (img) => {
    dispatch(maHTR(img.maHeThongRap));
    dispatch(maRap(img.mahom));
  };

  const handleImageFocus = (img) => {
    setFocusedImage(img.biDanh);
  };

  const handleImageBlur = () => {
    setFocusedImage(null);
  };

  return (
    <S.form_r>
      {props.data.map((img: any) => {
        // console.log(img.tenHeThongRap);
        return (
          <div
            onClick={() => handleImageClick(img)}
            onFocus={() => handleImageFocus(img)}
            onBlur={handleImageBlur}
            tabIndex={0} // Cho phép sự kiện onFocus và onBlur hoạt động trên div
            key={img.biDanh}
          >
            <img
            style={{
              border: focusedImage === img.biDanh ? '2px solid red' : 'none',
            }}
              // style={buttonStyle}
              // onClick={handleButtonClick}
              // onBlur={handleButtonBlur}
              src={img.logo}
              alt="cc"
            />
          </div>
        );
      })}
    </S.form_r>
  );
}
