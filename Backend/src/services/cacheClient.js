import Redis from 'ioredis';

const redisUrl = process.env.REDIS_API; 

const cacheClient = new Redis(redisUrl, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});

cacheClient.on('connect', () => {
    console.log('Redis client connected successfully!');
});

cacheClient.on('error', (err) => {
    console.error('Redis Connection Error : ', err.message);
});

export default cacheClient;