import React from "react";
import * as S from "./style";
// import { IIFE } from "src/utils";

// import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { maHTR,maRap } from "src/redux/cartSlice";

type Props = {
  data: string[];
};

export default function ListRight(props: Props) {
  // console.log(props.data);
  // const [maHTRs, setMaHTR] = useState("");
  const dispatch = useDispatch();

  // console.log(maHTRs);
  return (
    <S.form_r>
      {props.data.map((img:any) => {
        console.log(img.tenHeThongRap)
        return (
          <div
            onClick={() => {
              // setMaHTR(img.maHeThongRap);
              dispatch(maHTR(img.maHeThongRap));
              dispatch(maRap(img.mahom));
            }}
            key={img.biDanh}
          >
            <img src={img.logo} alt="cc" />
          </div>
        );
      })}
    </S.form_r>
  );
}
