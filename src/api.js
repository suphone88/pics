import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID RJ2-VuP_RiKEGEIk1Bd_Bm56YUwQDj7WyyemxPBqAJQ",
    },
    params: {
      query: term,
    },
  });
  //console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
