import React, {useState, useEffect} from 'react'
import ListRight from './list-brand-r'
import ListLeft from './list-brand-l'
import * as S from "./style"
import { getLogoHouseMovie } from 'src/services/product.service'
import { IIFE } from "src/utils";
// import { getProductById_Date } from "src/services/product.service";
// import { useAppSelector } from "src/redux/hooks";
// import TypedInputNumber from 'antd/es/input-number'

type Props ={
  listLogo: string[];
}

export default function ListBrand(props: Props) {
  const [listLogoHouse, setListLogoHouse] = useState([]);
  useEffect(()=>{
    IIFE(async()=>{
      const resp = await getLogoHouseMovie();
      setListLogoHouse(resp);
    })
  },[])
  // console.log(props.listLogo)

  // const { maHTR } = useAppSelector((rootReducer) => rootReducer.cartsReducer);
  // console.log(maHTR);
  // const [detail, setDetail] = useState();

  // useEffect(() => {
  //   IIFE(async () => {
  //     const resp = await getProductById_Date(maHTR);
  //     setDetail(resp);
  //   });
  // }, [maHTR]);

  // console.log(detail);

  return (
    <>
    <S.DongBan><h1>MOVIE IS SHOWING</h1></S.DongBan>
    <S.form>
        <ListRight data={listLogoHouse}></ListRight>
        
        <ListLeft/>
    </S.form>
    </>
  )
}
