import { instanceApi } from "../utils/apiUtils/CallApis";
import endPoints from "../utils/apiUtils/EndPoints";

export const httpRegisterUser = async (payload) => {
  console.log("payload :>> ", payload);
  return await instanceApi({
    uriEndPoint: {
      ...endPoints.register,
    },
    body: payload,
  });
};

export const httpLoginUser = async (payload) => {
  console.log("httpLogin----");

  return await instanceApi({
    uriEndPoint: {
      ...endPoints.login,
    },
    body: payload,
  });
};

export const httpMeUser = async (jwt) => {
  console.log("httpMe----");
  return await instanceApi({
    uriEndPoint: {
      ...endPoints.me,
    },
    header: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

export const httpGetUser = async () => {
  return await instanceApi({
    uriEndPoint: {
      ...endPoints.users,
    },
  });
};

export const httpDeleteUser = async (payload) => {
  console.log("payload :>> ", payload);
  return await instanceApi({
    uriEndPoint: {
      ...endPoints.deleteUser,
    },
    ...payload,
  });
};

export const httpUpdateUser = async (payload) => {
  return await instanceApi({
    uriEndPoint: {
      ...endPoints.updateUser,
    },
    ...payload,
  });
};
