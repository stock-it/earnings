const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'sdc_database',
    user: 'student',
    password: 'student',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

pool.query(
    `SELECT * FROM earnings 
    WHERE earnings_id=10`
    , (err, res) => {
        if (err) {
            console.log(err.error);
        } else {
            console.log(res.rows)
        }    
    pool.end()
});
