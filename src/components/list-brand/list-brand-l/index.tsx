import React, { useState, useEffect } from "react";
import * as S from "./style";
import { IIFE } from "src/utils";
import { getProductById_Date } from "src/services/product.service";
import { useAppSelector } from "src/redux/hooks";
import { Link } from "react-router-dom";

type Props = {
  giaTri : string[]
}

export default function ListLeft() {
  const { maHTR } = useAppSelector((rootReducer) => rootReducer.cartsReducer);
  const { maRap } = useAppSelector((rootReducer) => rootReducer.cartsReducer);
  // console.log(maHTR);
  const [detail, setDetail] = useState();

  useEffect(() => {
    IIFE(async () => {
      const resp = await getProductById_Date(maHTR, maRap);
      setDetail(resp);
    });
  }, [maHTR, maRap]);
  const mangRAP = detail;
  // console.log(mangRAP);
  return (
    <>
      <S.form_r>
        {mangRAP?.map((item) => {
          // console.log(item.lstCumRap)
          return item.lstCumRap.map((itemPhim) => {
            // console.log(itemPhim.tenCumRap);
            return itemPhim.danhSachPhim.map((itemPhimChiTiet) => {
              // console.log(itemPhimChiTiet.hinhAnh);
              return (
                <S.item_r>
                  <div>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "15rem",
                        height: "20rem",
                      }}
                      src={itemPhimChiTiet.hinhAnh}
                      alt=".."
                    />
                  </div>
                  <div>
                    <h1>{itemPhimChiTiet.hot ? <span style={{ fontSize:"3rem", color:"red",}}>HOT</span> : <span></span>}   {itemPhimChiTiet.tenPhim} </h1>
                    
                    {itemPhimChiTiet.lstLichChieuTheoPhim.map((itemDatVe) => {
                      return (
                        <>
                          <S.LinkBt>
                            <h3>Giờ chiếu</h3>
                            <Link style={{color:"green", fontWeight:"500", fontSize:"2rem",}} key={itemDatVe.maLichChieu} to="/bookseat">
                              {itemDatVe.ngayChieuGioChieu}
                            </Link>
                          </S.LinkBt>
                        </>
                      );
                    })}
                  </div>
                </S.item_r>
              );
            });
          });
        })}
      </S.form_r>
    </>
  );
}
