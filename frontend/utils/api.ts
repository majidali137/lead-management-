import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getLeads = async () => {
  const res = await API.get("/leads");
  return res.data.data; 
};

export const createLead = async (data: {
  name: string;
  email: string;
  status: string;
}) => {
  const res = await API.post("/leads", data);
  return res.data;
};
