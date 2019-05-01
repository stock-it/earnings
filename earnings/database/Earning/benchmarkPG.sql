\connect sdc_database;
-- Benchmarking CRUD routes
-- ------------------------------------
-- psql postgres < database/Earning/benchmarkPG.sql
\timing

-- CREATE INDEX idx_quarterNumber ON earnings USING btree (quarterNumber);
-- CREATE INDEX idx_company ON earnings USING btree (company);



-- get (find item)
SELECT *
FROM earnings
WHERE ticker = 'JXYWV';
-- ------------------------------------

-- -- insert
-- INSERT INTO earnings (
--   ticker,
--   company, 
--   actualEarning, 
--   estimatedEarning,
--   quarter, 
--   quarterNumber,
--   earnings_id
-- ) VALUES (
--   'EXAMPLE','My First Company',6.31,5.91,'Q4 2017',0,70000001
-- );