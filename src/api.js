import axios from 'axios';

export async function getVans() {
  try {
    const res = await axios.get("/api/vans");
    const data = res.data;
    return data.vans;
  } catch (error) {
    console.error("Error retrieving vans:", error);
    throw error;
  }
}
