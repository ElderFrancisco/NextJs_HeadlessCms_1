import axiosInstance from "@/app/utils/axios";
import config from "@/app/config/config";

export const getModules = async () => {
  try {
    const response = await axiosInstance.get(
      "/modules?fields[0]=type&fields[1]=listingOrder&filters[visible][$eq]=true&sort=listingOrder"
    );

    return response.data.data;
  } catch (error) {
    console.log("Error on getModules: ", error);
    return null;
  }
};

export const getModule = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/modules/${id}?populate[image][fields][0]=url&populate[image][fields][1]=alternativeText&populate[sliderImages][fields][0]=id&populate[sliderImages][fields][1]=url&populate[sliderImages][fields][2]=alternativeText`
    );

    if (response.data.data.attributes.image.data !== null) {
      response.data.data.attributes.image.data.attributes.url = `${config.HOST_URL}${response.data.data.attributes.image.data.attributes.url}`;
    }
    if (response.data.data.attributes.sliderImages.data !== null) {
      response.data.data.attributes.sliderImages.data.map((image) => {
        image.attributes.url = `${config.HOST_URL}${image.attributes.url}`;
      });
    }
    return response.data.data.attributes;
  } catch (error) {
    console.log("Error on getModule: ", error);

    return null;
  }
};
