import React from 'react'
import ListRight from './list-brand-r'
import ListLeft from './list-brand-l'
import * as S from "./style"
// import { IIFE } from "src/utils";
// import { getProductById_Date } from "src/services/product.service";
// import { useAppSelector } from "src/redux/hooks";
// import TypedInputNumber from 'antd/es/input-number'

type Props ={
  listLogo: string[];
}

export default function ListBrand(props: Props) {
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
    <S.form>
        <ListRight data={props.listLogo}></ListRight>
        
        <ListLeft/>
    </S.form>
  )
}
