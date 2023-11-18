import { useNavigate } from "react-router-dom";
import * as S from "./style"

type Movie ={
  maPhim: number,
  tenPhim: string,
  ngayKhoiChieu: string,
  hinhAnh: string,
}

export default function Card(props:Movie) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/detail/${props.maPhim}`);
  };
  return (
    <S.form key={props.maPhim} onClick={handleNavigate}>
      <div>
        <img src={props.hinhAnh} alt="cc" />
      </div>
      <div>
        <h2>{props.tenPhim}</h2>
      </div>
      <div>
        <h2>{props.ngayKhoiChieu}</h2>
      </div>
    </S.form>
  )
}
