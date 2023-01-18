import Axios, { Method } from "axios";
import queryString from "querystring";

const baseUrl = process.env.REACT_APP_BASE_URL

export const makeUrl = ({ uri = "", pathParams, query, version }, host) =>
  `${host || baseUrl}${version || ""}${uri
    .split("/")
    .map((param) =>
      param.charAt(0) === ":" ? encodeURI(pathParams[param.slice(1)]) : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;

export const instanceApi = ({
  uriEndPoint = { uri: "", method: "GET", version: "", headerProps: {} },
  pathParams,
  query,
  body,
  header,
}) => {
  return new Promise(async (resolve, reject) => {
    Axios({
      method: uriEndPoint.method || "POST",
      url: makeUrl({ ...uriEndPoint, pathParams, query }, baseUrl),
      headers: header || getDefaultHeaders(),

      data: body || undefined,
    })
      .then((response) => {
        if (response?.data?.accessToken) {
          localStorage.setItem("accessToken", response.data.accessToken);
        }
        resolve(response);
      })
      .catch((err) => {
        if (!err.response) {
        }

        if (err?.response?.status === 401) {
          // Unauthorized

          reject(err.response);
        }
        reject(err.response);
      });
  });
};

export const getDefaultHeaders = () => ({
  "Content-Type": "application/json",
});
