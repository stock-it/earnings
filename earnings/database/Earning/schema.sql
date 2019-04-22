DROP DATABASE IF EXISTS sdc_database;  

CREATE DATABASE sdc_database;

\connect sdc_database;

DROP TABLE IF EXISTS earnings;

CREATE TABLE earnings (
    ticker TEXT,
    company VARCHAR(100) NOT NULL, 
    actualEarning FLOAT(2), 
    estimatedEarning FLOAT(2),
    quarter VARCHAR(8), 
    quarterNumber SMALLINT,
    earnings_id SERIAL UNIQUE PRIMARY KEY
);

\copy earnings (ticker, company, actualEarning, estimatedEarning, quarter, quarterNumber) FROM PROGRAM 'gunzip -c $(pwd)/database/Earning/writeMe.CSV.gz' DELIMITER ',' CSV;

-- npm run genzip
-- brew info postgres
-- $ pg_ctl -D /usr/local/var/postgres start
-- npm run unzipsave
-- npm run benchmarks