require('dotenv').config();

let CONFIG = {};

// Current ENV
CONFIG.current_env = process.env.CURRENT_ENV || 'production';

// Port
CONFIG.port = process.env.PORT || '3001';

// Database
CONFIG.mongodb_uri = process.env.MONGODB_URI || 'mongodb+srv://bankadmin:<password>@cluster0-dhvdo.mongodb.net/onlinebank?retryWrites=true&w=majority';

// JWT
CONFIG.jwt_secret_key =
   process.env.JWT_SECRET_KEY || 'f5HxCefwrdShD8P8ncPh4qFAktdnjAujASWjGxdmDVHHD4rZKWpBbjPEcDqmeP7u';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '1d';

// Mailgun
CONFIG.mailgun_api_key = process.env.MAILGUN_API_KEY || '';
CONFIG.mailgun_domain = process.env.MAILGUN_DOMAIN || '';
CONFIG.mailgun_host = process.env.MAILGUN_HOST || '';


CONFIG.SMTP = {
	host: process.env.MAIL_HOST || 'mail.alrazzaqftgroup.capital',
	user: process.env.MAIL_USER || 'noreply@alrazzaqftgroup.capital',
	password: process.env.MAIL_PASSWORD || 'alrazzaqftgroup.capital@2020',
	from: process.env.MAIL_DEFAULT_FROM_ADDRESS || 'noreply@alrazzaqftgroup.capital',
	port: process.env.MAIL_PORT || 465,
	adminEmail: process.env.ADMIN_NOTIFICATIONS_EMAIL || 'queries@alrazzaqftgroup.capital'
};

module.exports = CONFIG;
