import React, { useState, useEffect } from "react";
import * as S from "./style";
import { IIFE } from "src/utils";
import { getProductById_Date } from "src/services/product.service";
import { useAppSelector } from "src/redux/hooks";
import { Link } from "react-router-dom";

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
                    <h1>{itemPhimChiTiet.tenPhim} </h1>

                    {itemPhimChiTiet.lstLichChieuTheoPhim.map((itemDatVe) => {
                      return (
                        <>
                          <button>
                            <Link key={itemDatVe.maLichChieu} to="/bookseat">
                              {itemDatVe.ngayChieuGioChieu}
                            </Link>
                          </button>
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
