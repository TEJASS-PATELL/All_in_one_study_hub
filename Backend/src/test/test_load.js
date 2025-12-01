import http from 'k6/http';
import { check, sleep } from 'k6';

const TEST_TOKEN = __ENV.TEST_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE0LCJpYXQiOjE3NjQ1ODk2MTMsImV4cCI6MTc2NTE5NDQxM30.Z_9hf6VKnv1K2ysf3g9fWtNQ7eamjzjKGEyQFzaKjsU'; 

export const options = {
    vus: 10,          
    duration: '10s',   //? configured time
};

export default function () {
    const url = `${__ENV.SERVER_URL}/api/auth/alluser`;
    
    const params = {
        cookies: {
            token: TEST_TOKEN,
        },
    };
    
    const res = http.get(url, params); 

    check(res, {
        'Status is 200/202': (r) => r.status === 200 || r.status === 202, 
        'Response body exists': (r) => r.body !== null,
        'Response body size is > 100 bytes': (r) => r.body && r.body.length > 100,
    });

    sleep(1); 
}