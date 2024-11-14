import { create } from "apisauce";

const authClient = create({
  baseURL: "https://identitytoolkit.googleapis.com",
  headers: { "Content-Type": "application/json" },
});

export default authClient;
