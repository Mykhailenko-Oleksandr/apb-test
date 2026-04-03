import css from "./SearchForm.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import {
  getInfoVinCode,
  type FormData,
  type ResponseDecoderVin,
} from "../../services/api";
import { useState } from "react";
import Loader from "../Loader/Loader";
import type { ApiError } from "../../types/apiError";
import toast from "react-hot-toast";
import { useSearchStore } from "../../services/storeSearch";

const schema = yup
  .object({
    vin: yup.string().max(17, "Max 17").required("Vin code is required"),
  })
  .required();

interface Props {
  setResult: (result: ResponseDecoderVin) => void;
}

export default function SearchForm({ setResult }: Props) {
  const [isLoader, setIsLoader] = useState(false);
  const setNewStore = useSearchStore((state) => state.setNewStore);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoader(true);
      const autoInfo = await getInfoVinCode(data);
      setResult(autoInfo);
      setNewStore(autoInfo);
    } catch (error: unknown) {
      const err = error as ApiError;

      toast.error(
        err.response?.data?.response?.validation?.body?.message ||
          err.response?.data?.response?.message ||
          err.message,
      );
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputBox}>
          <input
            type="text"
            className={clsx(css.input, errors.vin?.message && css.error)}
            {...register("vin")}
          />

          {errors.vin?.message && (
            <span className={css.errorMassage}>{errors.vin.message}</span>
          )}
        </div>
        <button type="submit" className={css.submitBtn} disabled={!isValid}>
          Search
        </button>
      </form>

      {isLoader && <Loader />}
    </>
  );
}
