import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IIFE } from "src/utils";
// import { useDispatch } from "react-redux";
import { getProductById } from "src/services/product.service";

import * as S from "./style";
import ListBrand from "src/components/list-brand";

export default function Detail() {
  // const dispatch = useDispatch();

  const params = useParams();

  const [detail, setDetail] = useState();

  useEffect(() => {
    IIFE(async () => {
      if (params.idDetail) {
        const resp = await getProductById(params.idDetail);
        setDetail(resp);
      }
    });
  }, [params.idDetail]);

  // console.log(detail);
  return (
    <>
      <S.fromInfo>
        <img
          style={{
            width: 500,
            height: 500,
          }}
          src={detail?.hinhAnh}
        />
        <div
          style={{
            paddingLeft: "2rem",
          }}
        >
          <h1>{detail?.tenPhim}</h1>
          <p>{detail?.moTa}</p>
          <h2>Thời gian: {detail?.ngayKhoiChieu}</h2>
          <h3>Điểm đánh giá: {detail?.danhGia}/10</h3>
          <button>
            <Link to="/bookseat">Đặt vé</Link>
          </button>
        </div>
      </S.fromInfo>

      <ListBrand/>
    </>
  );
}
