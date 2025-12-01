import http from 'k6/http';
import { check, sleep } from 'k6';

// Environment variable se token fetch karein, ya yahan hardcode karein (for testing)
const TEST_TOKEN = __ENV.TEST_TOKEN || 'your_valid_jwt_token_here'; 

export const options = {
    vus: 10,
    duration: '10s',
};

export default function () {
    const url = `${__ENV.SERVER_URL}/api/roadmap/getroadmap`;
    
    // 💡 Headers mein token daalein
    const params = {
        cookies: {
            token: TEST_TOKEN, // Assuming token is sent via cookie
        },
        // Agar token header mein jaata hai:
        // headers: {
        //     'Authorization': `Bearer ${TEST_TOKEN}`,
        // },
    };

    // Note: Agar aapka token cookie se nahi, standard 'Authorization' header se jata hai, toh uske liye code modify karna padega.
    
    const res = http.get(url, params); 

    check(res, {
        'Status is 200': (r) => r.status === 200,
        'Response body exists': (r) => r.body !== null,
        'Response body size is > 100 bytes': (r) => r.body && r.body.length > 100,
    });

    sleep(1);
}