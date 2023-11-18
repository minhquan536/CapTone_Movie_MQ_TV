import React, {useState, useEffect} from "react";
import Silder from "./slider";
import { IIFE, saveLocal } from "../../utils";
import { getProfile } from "../../services";
import ListCart from "../../components/listcart/list-cart";
import ListBrand from "src/components/list-brand";
import { ACCESS_TOKEN } from "src/contants";
import { getListMovie, getLogoHouseMovie } from "src/services/product.service";

function Home() {

  const [listProduct, setLitProduct] = useState([]);
  const [listMovie, setListMovie] = useState([]);
  const [listLogoHouse, setListLogoHouse] = useState([]);

  saveLocal(ACCESS_TOKEN,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwOSIsIkhldEhhblN0cmluZyI6IjE0LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzA1MjgwMDAwMCIsIm5iZiI6MTY4MzczODAwMCwiZXhwIjoxNzEzMjAwNDAwfQ.Y0q3MDoDxNMpVtvUf90Wwp7z6n8VL07u_x3J58CmzQ0")
  useEffect(()=>{
    IIFE(async()=>{
      const resp = await getProfile();
      setLitProduct(resp);
    })
  },[])

  // console.log(listMovie)
  // console.log(listLogoHouse)

  useEffect(()=>{
    IIFE(async()=>{
      const resp = await getListMovie();
      setListMovie(resp);
    })
  },[])

  useEffect(()=>{
    IIFE(async()=>{
      const resp = await getLogoHouseMovie();
      setListLogoHouse(resp);
    })
  },[])


  return (
    <div>
        <Silder products={listProduct}/>

        <ListCart listMovie={listMovie}/>

        <ListBrand listLogo={listLogoHouse}/>
    </div>
  )
}

export default Home;