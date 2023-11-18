import React from "react";
import Card from "./cart/card";
type Props = {
  listMovie: string[];
}

export default function ListCart(props:Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4rem",
        flexWrap: "wrap",
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
    </div>
  );
}
