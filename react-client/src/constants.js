// put const variables and paths here for less repetition

const PORT = process.env.PORT || 3000
console.log('PORT', PORT);

// change this to `http://localhost:${PORT}` when dev-ing
// current url is the deployed one; api calls are using this variable
// export const baseUrl = 'http://localhost:3000';
export const baseUrl = `https://heirbloom.herokuapp.com:${PORT}`;
// export const baseUrl = `http://ec2-52-14-192-5.us-east-2.compute.amazonaws.com:${PORT}`;