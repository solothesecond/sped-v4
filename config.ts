import type { ConfigTypes } from '@src/types/config';
const config: ConfigTypes = {
  port: 8080, // The port lunar runs on (Default: 8080)
  auth: {
    protect: true, // Enable or disable authentication (Default: false)
    log: true, // Logs when a user logs in (Default: true)
    users: [
      // To add more users, follow this format:
      {
        lunar: 'lunariscool', // Replace to whatever you want format is username: "password"
      },
    ],
  },
};

export default config;
