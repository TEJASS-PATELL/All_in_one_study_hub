import http from 'k6/http';
import { check, sleep } from 'k6';

const TEST_TOKEN = __ENV.TEST_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE1LCJpYXQiOjE3NjQ2OTUxNTYsImV4cCI6MTc2NTI5OTk1Nn0.yL7saOV1_OTOB9UocMzjxCXzsXo4PWcO5dQYlRaH8vI'; 

export const options = {
    vus: 10,          
    duration: '10s',   //? configured time
};

export default function () {
    const url = `${__ENV.SERVER_URL}/api/roadmap/generateroadmap`;

    const payload = JSON.stringify({
        jobType: 'IT',
        jobRoles: 'Backend Developer',
        education: 'B.Tech',
        skills: 'c++' ,
        status: 'starting',
        notes: 'none',
        roadmapDuration: '4 months',
    });
    
    const params = {
        headers: {
            'Content-Type': 'application/json', // Content-Type zaroori hai
        },
        cookies: {
            token: TEST_TOKEN,
        },
    };
    
    const res = http.post(url, payload, params); 

    check(res, {
        'Status is 200/202': (r) => r.status === 200 || r.status === 202, 
        'Response body exists': (r) => r.body !== null,
        'Response body size is > 100 bytes': (r) => r.body && r.body.length > 100,
    });

    sleep(1); 
}