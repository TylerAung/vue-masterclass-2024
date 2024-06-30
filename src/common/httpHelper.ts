// httpClient.js
import axios, { AxiosResponse } from 'axios';

// Create an instance of Axios
const httpClient = axios.create({
  //baseURL: process.env.VUE_APP_API_BASE_URL, // or any base URL you need
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000, // example timeout
});

// Add a request interceptor

// static GetResponse(movie:IMovie):Promise<AxiosResponse<ClassDTO>> {
//   return axios.get
//   return axios.post
// }
//// static GetResponse(movie:IMovie):Promise<AxiosResponse<Array<ClassDTO>>> {


// Add a response interceptor
httpClient.interceptors.response.use(
  response => {
    // Perform decoding here
    console.log(httpClient.interceptors.response);
    console.log('Res Data: ', response.data);
    response.data = decodeResponse(response.data);
    return { ...response, data: response.data }; // Return the decoded response
  },
  error => {
    // Handle error responses
    return Promise.reject(error);
  }
);


const httpClientV2 = axios.create({
  //baseURL: process.env.VUE_APP_API_BASE_URL, // or any base URL you need
  baseURL: 'http://localhost:5041'
});

httpClientV2.interceptors.response.use(
  response => {
    // Perform decoding here
    // console.log('Before Decode Data: ',response.data);
    response.data = decodeResponse(response.data);
    return { ...response, data: response.data }; // Return the decoded response
  },
  error => {
    // Handle error responses
    return Promise.reject(error);
  }
);

httpClientV2.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (config.method && config.method.toUpperCase() === 'POST' && config.data) {
      config.data = encodeResponse(config.data);
    }
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  });


function encodeResponse(data: any) {
  // Convert the object to a JSON string and then encode it to Base64
  const jsonString = JSON.stringify(data);
  const encodedString = btoa(jsonString);
  console.log('Encoded (Base64):', encodedString);
  return encodedString;
}

function decodeResponse(encodedData: string) {
  // Decode the Base64 string and then parse it back to a JSON object
  const decodedString = atob(encodedData);
  const jsonObject = JSON.parse(decodedString);
  console.log('Decoded (Object):', jsonObject);
  return jsonObject;
}


export default httpClient;
export { httpClientV2 };


//Sample Code to engage the interceptor
const PostRequest = async () => {
  let payload = {
    "id": "b10756f4-0cc0-4a51-82fd-f3990d475eee",
    "name": "FrontEnd Post Uni",
    "students": [
      {
        "id": "a4bdb8e3-d986-43f5-b59e-806d1a39cee5",
        "name": "FrontEnd Sample Stud 1",
        "age": 10
      }
    ]
  }
  try {
    let res = await httpClientV2.post("/api/Classrooms", payload)
    console.log('Post Data: ', res.data)
  } catch (error) {
    console.log('Error: ', error)
  }

}