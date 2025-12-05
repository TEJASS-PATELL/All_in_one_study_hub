import http from 'k6/http';
import { check, sleep } from 'k6';

const TEST_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE3LCJpYXQiOjE3NjQ5Mjg4NDAsImV4cCI6MTc2NTUzMzY0MH0.KGGTIEIt3I-o7TrfOtdhX_9Xnz_dXbpWMAVS1HRLCh4';

export const options = {
  vus: 50,          
  duration: '30s', 
};

export default function () {
  const url = `${__ENV.SERVER_URL}/api/discussion/creatediscussion`;

  const payload = JSON.stringify({
    name: "Test User",
    location: "Delhi",
    category: "Engineering",
    qualification: "B.Tech",
    examGiven: "GATE",
    examCracked: "Yes",
    advice: "Stay consistent and practice daily.",
    description: "This is a test discussion for load testing.",
    email: "test@example.com",
    jobRole: "Software Engineer",
    company: "ABC Pvt Ltd",
    department: "Tech",
    salaryPackage: "8 LPA"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    cookies: {
      token: TEST_TOKEN,
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Status is 201/200': (r) => r.status === 201 || r.status === 200,
    'Response body exists': (r) => r.body && r.body.length > 0,
    'Response > 100 bytes': (r) => r.body && r.body.length > 100,
  });

  sleep(1);
}
