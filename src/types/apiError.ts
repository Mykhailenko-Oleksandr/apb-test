import type { AxiosError } from "axios";

export type ApiError = AxiosError<{
  error: string;
  response: {
    data: {
      response: {
        message: string;
      };
    };
    message: string;
    validation: { body: { message: string } };
  };
}>;
