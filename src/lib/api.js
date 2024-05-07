import axios from "./axios";

export const sendEmail = async (data) => {
  try {
    const res = await axios.post("/contactform", JSON.stringify(data));
    const result = res.data;

    if (result.message.error) {
      throw {
        response: {
          data: {
            message: result.message.error,
          },
        },
      };
    }

    return result;
  } catch (error) {
    const responseError = error.response.data;
    let errorObj = {};

    errorObj.message = responseError.message;

    if (responseError.errors) {
      const errorFields = Object.keys(responseError.errors);

      const errors = errorFields.map((error) => ({
        name: error,
        message: responseError.errors[error][0],
      }));

      errorObj.errors = errors;
    }

    throw errorObj;
  }
};
