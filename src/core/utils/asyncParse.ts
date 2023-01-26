export const asyncJsonParse = (jsonString: string) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(jsonString));
    } catch (error) {
      reject(error);
    }
  });
};
