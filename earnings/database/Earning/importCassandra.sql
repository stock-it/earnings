DROP KEYSPACE IF EXISTS sdc_keyspace;

CREATE KEYSPACE sdc_keyspace
 WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
};

USE sdc_keyspace;

CREATE TABLE earnings (
  company VARCHAR,
  ticker VARCHAR,
  actualearning DECIMAL, 
  estimatedearning DECIMAL,
  quarter VARCHAR, 
  quarternumber FLOAT,
  PRIMARY KEY(ticker,quarternumber)
);
 WITH CLUSTERING ORDER BY (ticker ASC, quarternumber ASC);
ASC or DESC;

INSERT INTO earnings (
  ticker,
  company, 
  actualearning, 
  estimatedearning,
  quarter, 
  quarternumber
) VALUES (
  'EXAMPLE','My First Company',6.31,5.91,'Q4 2017',0
);

COPY earnings (  
  ticker,
  company, 
  actualearning, 
  estimatedearning,
  quarter,
  quarternumber
  ) FROM './writemecass.csv' 
  WITH HEADER = FALSE;

node database/Earning/dataGen.js | gzip -c > database/Earning/writemecass.csv.gz

-- https://docs.datastax.com/en/cql/3.3/cql/cql_reference/cqlshCopy.html

-- \connect sdc_keybase;

--tracing on
--\describe keyspaces;
--SELECT * FROM system_schema.keyspaces;

-- delete
DELETE FROM earnings
WHERE ticker = 'EXAMPLE'
;

-- update
UPDATE earnings
SET actualEarning = 7.00
WHERE ticker = 'EXAMPLE' AND quarternumber = 0
;

-- get (find item)
SELECT *
FROM earnings
WHERE ticker = 'JXYWV';
