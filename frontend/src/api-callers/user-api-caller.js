import AxiosHttpAction from "./axios-http-action";

export default function UserApiHandler({ axiosInstance }) {
  const httpAction = AxiosHttpAction(axiosInstance);

  this.login = async function login({ email, password }) {
    return await httpAction.post({
      body: JSON.stringify({
        data: {
          email,
          password,
        },
      }),
      url: "/v1/user/login",
    });
  };

  this.signup = async function login(user) {
    return await httpAction.post({
      body: JSON.stringify({
        data: user,
      }),
      url: "/v1/user/signup",
    });
  };

  this.fetchAllFiles = async function fetchAllFiles(userId) {
    return httpAction.get({
      url: `/v1/user/${userId}/files`,
    });
  };

  this.uploadUserFile = async function uploadFile({ file, userId }) {
    return await httpAction.filePost({
      body: file,
      url: `/v1/user/${userId}/file/upload`,
    });
  };

  this.deleteUserFile = async function deleteFile({ userId, fileId }) {
    return await httpAction.deleteResource({
      url: `/v1/user/${userId}/files/${fileId}`,
    });
  };
}
