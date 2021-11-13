import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGRkYWNkZjE2YjRiMzFlZDBmMjFmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjc3NTc2MiwiZXhwIjoxNjM3MDM0OTYyfQ.fAFz9RUT8glce7XG31nXBKAFdoxs86lLg39l1GM2x3k";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});