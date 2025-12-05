import Redis from 'ioredis';

const redisUrl = process.env.REDIS_API; 

const cacheClient = new Redis(redisUrl, {
    maxRetriesPerRequest: null,
    retryStrategy: function (times) {
        if (times > 10) return null; 
        const delay = Math.min(times * 500, 2000); 
        return delay;
    }
});

cacheClient.on('connect', () => {
    console.log('Redis client connected successfully!');
});

cacheClient.on('error', (err) => {
    console.error('Redis Connection Error : ', err.message);
});

export default cacheClient;