import axios from "axios";

const getUrl = type => {
  const list = {
    pages: `${process.env.REACT_APP_API_PATH}/api/wp/v2/pagina/`,
    default: `${process.env.REACT_APP_API_PATH}/api/wp/v2/pagina/`
  };
  return list[type] || list.default;
};

const api = urlName => {
  return axios.create({
    baseURL: getUrl(urlName)
  });
};

export default api;
