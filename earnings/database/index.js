const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'sdc_database',
    user: 'student',
    password: process.env.PSQL_PASSWORD || 'student',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

module.exports = pool;
