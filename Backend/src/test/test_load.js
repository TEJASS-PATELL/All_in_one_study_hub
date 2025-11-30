import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
};

export default function () {
  const url = `${__ENV.SERVER_URL}/api/exam/government-jobs/Engineering`;

  const res = http.get(url);

  check(res, {
    'Status is 200': (r) => r.status === 200,
    'Response body size is > 100 bytes': (r) => r.body.length > 100,
  });

  sleep(1);
}