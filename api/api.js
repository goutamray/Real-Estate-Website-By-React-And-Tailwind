import axios from "axios";

 /**
 * create new user data to api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */
 export const createNewUser = async (url, formData) => {
  try {
      const response = await axios.post(`http://localhost:5050/api/v1/user${url}`, formData);
      return response.data; // Return the data property from the response
  } catch (error) {
      console.error('Error submitting product form data:', error.message);
      throw error; // Re-throw the error for handling in the calling function
  }
};


 /**
 * google login user data to api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */

 export const loginGoogleUserData = async (url, formData) => {
    try {
      const response = await axios.post(`http://localhost:5050/api/v1/user${url}`, formData);
      return response.data; // Return the data from the response
    } catch (error) {
      console.error('Error submitting Google login data:', error.message);
      throw error; // Re-throw the error for handling in OAuth.jsx
    }
  };

/**
 * update user data from api 
 * @param {*} url 
 * @param {*} updatedData 
 * @returns 
 */
export const updateUserData = async( url, updatedData ) => {
  try {
   const res = await axios.patch(`http://localhost:5050/api/v1/user${url}`, updatedData); 
    return res.data;  
  } catch (error) {
   console.error('Error submitting form data:', error.message);
   throw error; 
  }
};

/**
 *  fetch user from api
 * @param {*} url 
 * @returns 
 */
export const fetchUserDataFromApi = async(url) => {
  try {
     const res = await axios.get("http://localhost:5050/api/v1/user"+url);
     return res.data;
  } catch (error) {
     console.error('Error submitting form data:', error.message);
     throw error; 
  }  
}; 


/**
 * send product data to api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */
export const createListingData = async (url, formData) => {
  try {
      const response = await axios.post(`http://localhost:5050/api/v1/listing${url}`, formData);
      return response.data; // Return the data property from the response
  } catch (error) {
      console.error('Error submitting product form data:', error.message);
      throw error; // Re-throw the error for handling in the calling function
  }
};

/**
 *  fetch listing from api
 * @param {*} url 
 * @returns 
 */
export const fetchListingDataFromApi = async(url) => {
  try {
     const res = await axios.get("http://localhost:5050/api/v1/listing"+url);
     return res.data;
  } catch (error) {
     console.error('Error submitting form data:', error.message);
     throw error; 
  }  
}; 



/**
 * delete listing data from api 
 * @param {*} id 
 * @returns 
 */
export const deleteListingData = async( id ) => {
  try {
     const res = await axios.delete(`http://localhost:5050/api/v1/listing${id}`); 
     return res.data; 
  } catch (error) {
     console.error('Error submitting form data:', error.message);
     throw error; 
  }
}; 
