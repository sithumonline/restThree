import { apiInstance } from "../apiInstance";

export async function getNotes() {
  const PATH = "/api/v1/category/";

  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function getNote() {
  const PATH = "/api/v1/category/"

  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function create(requestData) {
  const PATH = "/api/v1/category/";

  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function update(requestData) {
  const PATH = `/api/v1/category/${requestData.id}`;

  try {
    const res = await apiInstance.put(PATH, requestData);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function remove(id) {
  const PATH = `/api/v1/category/${id}`;

  try {
    const res = await apiInstance.delete(PATH);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}
