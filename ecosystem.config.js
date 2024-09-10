module.exports = {
    apps: [
      {
        name: 'MOEBOT',
        script: './src/bot.js',
        env: {
          PORT: 3000,
          NODE_ENV: 'development',
        },
        env_production: {
          PORT: 3000,
          NODE_ENV: 'production',
        },
        autorestart: true,
        exp_backoff_restart_delay: 100,
        cron_restart: '0 0 * * *',
      },
    ],
  };