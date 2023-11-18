// import { saveLocal } from "src/utils";
// import { getLocal } from "src/utils";
// import { getLocal } from "src/utils";
import { axiosAuth, axiosAuth_2, axiosWithoutAuth } from "./axios.config";
// import { ACCESS_TOKEN } from "src/contants";
// import { ACCESS_TOKEN } from "src/contants";



export const getProfile = async () => {
    try {
      const resp = await axiosAuth("/LayDanhSachBanner", {
        method: "GET",
        // headers: { Authorization: "Bearer" + getLocal(ACCESS_TOKEN) }
      });
      // fetch: body
      // axios: data
  
      return resp.data.content;
    } catch (error) {

      throw new Error(error);
    }
};

export const getListMovie = async () => {
  try {
    const resp = await axiosAuth("/LayDanhSachPhim", {
      method: "GET",
      // headers: { Authorization: "Bearer" + getLocal(ACCESS_TOKEN) }
    });
    // fetch: body
    // axios: data

    return resp.data.content;
  } catch (error) {

    throw new Error(error);
  }
};

export const getLogoHouseMovie = async () => {
  try {
    const resp = await axiosAuth_2("/LayThongTinHeThongRap", {
      method: "GET",
      // headers: { Authorization: "Bearer" + getLocal(ACCESS_TOKEN) }
    });
    // fetch: body
    // axios: data

    return resp.data.content;
  } catch (error) {

    throw new Error(error);
  }
};


export const getProductById = async (MaPhim: string) => {
  try {
    // const resp = await axiosWithoutAuth(`Product/getbyid?id=${id}`);

    const resp = await axiosWithoutAuth("LayThongTinPhim", {
      params: { MaPhim },
    });

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductById_Date = async (maHeThongRap: string,maNhom: string) => {
  console.log(maHeThongRap)
  try {
    // const resp = await axiosWithoutAuth(`Product/getbyid?id=${id}`);

    const resp = await axiosAuth_2(`/LayThongTinLichChieuHeThongRap${maHeThongRap}?maHeThongRap=${maNhom}`);

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};