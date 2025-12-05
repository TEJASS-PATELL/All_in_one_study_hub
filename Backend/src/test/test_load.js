import http from 'k6/http';
import { check, sleep } from 'k6';

const TEST_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjIxLCJpYXQiOjE3NjQ5NTkxNzUsImV4cCI6MTc2NTU2Mzk3NX0.PsExEDZf6hh-TdXj9tKDi3o3xpKqywfGGTLzrB5AxjI';

export const options = {
  vus: 50,          
  duration: '30s', 
};

export default function () {
  const url = `${__ENV.SERVER_URL}/api/discussion/getdiscussion`;

  const params = {
    cookies: {
      token: TEST_TOKEN,
    },
  };

  const res = http.get(url, params);

  check(res, {
    'Status is 201/200': (r) => r.status === 201 || r.status === 200,
    'Response body exists': (r) => r.body && r.body.length > 0,
    'Response > 100 bytes': (r) => r.body && r.body.length > 100,
  });

  sleep(1);
}
