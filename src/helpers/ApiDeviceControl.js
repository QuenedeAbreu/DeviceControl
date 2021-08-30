import Cookies from "js-cookie";
import qs from "qs";

const BASEAPI = "http://localhost:8000";

const apiFetchPost = async (url, data) => {
  if (!data.token) {
    let token = Cookies.get("token");
    if (token) {
      data.token = token;
    }

  }

  const response = await fetch(BASEAPI + url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  json['status'] = response.status;

  if (json.notallowed) {
    window.location.href = "/login";
    return;
  }
  return json;
}
// eslint-disable-next-line
const apiFetchGet = async (url, data = []) => {
  if (!data.token) {
    let token = Cookies.get("token");
    if (token) {
      data.token = token;
    }

  }

  const response = await fetch(`${BASEAPI + url}?${qs.stringify(data)}`);
  const json = await response.json();
  console.log(json);
  if (json.notallowed) {
    window.location.href = "/login";
    return;
  }
  return json;
}


const ApiDeviceControl = {
  login: async function (username, password) {
    // consultar api para obtener token
    const response = await apiFetchPost(
      '/api/auth/login ',
      { username, password });

    return response;
  }
}

export default () => ApiDeviceControl;