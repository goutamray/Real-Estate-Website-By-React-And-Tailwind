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

