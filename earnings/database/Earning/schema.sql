DROP DATABASE IF EXISTS sdc_database;  

CREATE DATABASE sdc_database;

\connect sdc_database;

DROP TABLE IF EXISTS earnings;

CREATE TABLE earnings (
    ticker TEXT UNIQUE,
    company VARCHAR(100) NOT NULL, 
    actualEarning FLOAT(2), 
    estimatedEarning FLOAT(2),
    quarter VARCHAR(8), 
    quarterNumber SMALLINT,
    earnings_id SERIAL PRIMARY KEY
);

\copy earnings FROM PROGRAM 'gunzip -c $(pwd)/database/Earning/writeMe.CSV.gz' DELIMITER ',' CSV;

-- npm run genzip
-- brew info postgres
-- $ pg_ctl -D /usr/local/var/postgres start
-- npm run unzipsave
-- npm run benchmarks