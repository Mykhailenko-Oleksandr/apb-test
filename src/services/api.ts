import axios from "axios";
import type { ItemInfoAuto } from "../types/itemInfoAuto";

axios.defaults.baseURL = "https://vpic.nhtsa.dot.gov/api";

export interface FormData {
  vin: string;
}

export interface ResponseDecoderVin {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: ItemInfoAuto[];
}

export async function getInfoVinCode({ vin }: FormData) {
  const res = await axios.get<ResponseDecoderVin>(
    `/vehicles/decodevin/${vin}`,
    {
      params: {
        format: "json",
      },
    },
  );
  return res.data;
}
