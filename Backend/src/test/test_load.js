const http = require('k6/http');
const { check, sleep } = require('k6');

export let options = {
  vus: 100, 
  duration: '30s',
};

export default function () {
  const url = 'https://all-in-one-study-hub.onrender.com/api/exam/government-jobs'; 
  
  const res = http.get(url); 

  check(res, {
    'Status is 200': (r) => r.status === 200,
    'Response body size is > 100 bytes': (r) => r.body.length > 100,
  });
  
  sleep(1); 
}