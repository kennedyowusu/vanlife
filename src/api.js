import axios from "axios";

export async function getVans() {
  try {
    const res = await axios.get("/api/vans");
    if (res.status !== 200) {
      throw {
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status,
      };
    }
    const data = res.data;
    return data.vans;
  } catch (error) {
    console.error("Error retrieving vans:", error);
    throw error;
  }
}
