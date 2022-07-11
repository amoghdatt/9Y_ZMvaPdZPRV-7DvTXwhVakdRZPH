export default function AxiosHttpAction(axiosInstance) {
  const post = async ({
    method = "post",
    body,
    url,
    headers = {},
    responseType = "json",
  }) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data: body,
        responseType,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return response.data;
    } catch (e) {
      return e?.response?.data ?? "Unknown error";
    }
  };

  const filePost = async ({
    method = "post",
    body,
    url,
    headers = {},
    responseType = "json",
  }) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data: body,
        responseType,
        headers: {
          "Content-Type": "multipart/form-data",
          ...headers,
        },
      });
      return response.data;
    } catch (e) {
      return e?.response?.data ?? "Unknown error";
    }
  };

  const get = async ({
    method = "get",
    url,
    headers = {},
    responseType = "json",
  }) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        responseType,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return response.data;
    } catch (e) {
      return e?.response?.data ?? "Unknown error";
    }
  };

  return { post, get, filePost };
}
