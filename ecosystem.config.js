module.exports = {
  apps: [
    {
      name: 'grar-alfa-website',
      script: 'npm start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000
      },
      // Auto restart on crash
      autorestart: true,
      // Restart after 5000ms if app is not responding
      restart_delay: 5000,
      // Max memory usage before restart
      max_memory_restart: '1G',
      // Logging
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Environment variables
      env: {
        NODE_ENV: 'development'
      },
      // Production environment
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000
      },
      // Health check
      health_check: {
        enabled: true,
        max_restarts: 5,
        min_uptime: '10s'
      },
      // Watch for file changes in development
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      // Error handling
      error_log: './logs/error.log',
      out_log: './logs/out.log',
      log_log: './logs/combined.log',
      time: true
    }
  ],
  deploy: {
    production: {
      user: 'node',
      host: 'your-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:yourusername/grar-alfa-website.git',
      path: '/var/www/grar-alfa',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}