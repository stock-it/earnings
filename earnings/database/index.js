const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.PGHOST2 || 'localhost',
    port: 5432,
    database: 'sdc_database',
    user: process.env.PGUSER || 'student',
    password: process.env.PGPASSWORD || 'student',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

module.exports = pool;