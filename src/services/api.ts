import axios from "axios";
import type { ItemInfoAuto } from "../types/itemInfoAuto";
import type { VariablesInfo } from "../types/variablesInfo";

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

export interface ResponseInfoVariables {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VariablesInfo[];
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

export async function getInfoVariables() {
  const res = await axios.get<ResponseInfoVariables>(
    "/vehicles/getvehiclevariablelist",
    {
      params: {
        format: "json",
      },
    },
  );
  return res.data.Results;
}

export async function getDetailsVariable(id: string) {
  const res = await axios.get<ResponseInfoVariables>(
    `/vehicles/getvehiclevariable/${id}`,
    {
      params: {
        format: "json",
      },
    },
  );
  return res.data;
}
