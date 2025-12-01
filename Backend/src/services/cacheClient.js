import Redis from 'ioredis';

const cacheClient = new Redis(process.env.REDIS_API);

cacheClient.on('connect', () => {
    console.log('Redis client connected successfully!');
});

cacheClient.on('error', (err) => {
    console.error('Redis Connection Error:', err);
});

export default cacheClient;