import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100,          
  duration: '60s', 
};

export default function () {
  const url = `${__ENV.SERVER_URL}/api/exam/private-jobs/Core Engineering`;

  const res = http.get(url);

  check(res, {
    'Status is 201/200': (r) => r.status === 201 || r.status === 200,
    'Response body exists': (r) => r.body && r.body.length > 0,
    'Response > 100 bytes': (r) => r.body && r.body.length > 100,
  });

  sleep(1);
}
