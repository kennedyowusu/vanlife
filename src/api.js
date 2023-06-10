import axios from "axios";

export async function getVans() {
  try {
    const response = await axios.get("/api/vans");
    if (response.status !== 200) {
      throw {
        message: "Failed to fetch vans",
        statusText: response.statusText,
        status: response.status,
      };
    }
    const data = response.data;
    return data.vans;
  } catch (error) {
    console.error("Error retrieving vans:", error);
    throw error;
  }
}
