import axios from 'axios';

function httpClient(AppSettings) {
  'ngInject';
  console.log('ppSettings.apiUrl',AppSettings.apiUrl);
  var http = axios.create({
    baseURL: AppSettings.apiUrl
  });
  return http;
}

export default {
  name: 'httpClient',
  fn: httpClient
};