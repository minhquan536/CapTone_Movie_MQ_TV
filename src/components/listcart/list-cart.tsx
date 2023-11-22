import React from "react";
import Card from "./cart/card";
import * as S from "./index"
type Props = {
  listMovie: string[];
}

export default function ListCart(props:Props) {
  return (
    <S.form_card
      style={{
        display: "grid",
        gap: "4rem",
        gridAutoColumns: "1fr 1fr 1fr"
      }}
    >
      {
        props.listMovie.map((item: any) => {
          return(
            <Card key={item.maPhim}
              maPhim={item.maPhim}
              tenPhim={item.tenPhim}
              ngayKhoiChieu={item.ngayKhoiChieu}
              hinhAnh={item.hinhAnh}
            />
          )
        })
      }
    </S.form_card>
  );
}
