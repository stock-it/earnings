## CRUD API for Earnings Module


### Create / POST - create new stock
stocks/:id
Create a company (using ticker id) to add to database. Protected.

### Read / GET - read a stock
api/earnings/:id
Get a report of stock information (actual and expected earnings) for the past five quarters. Client-side.

stocks/:id
On loading the page, the stock information is populated for every module via the ticker id. Client-side.

### Update / PUT - update a stock
stocks/:id
Updates earnings information about a company. Protected.

### Delete / DELETE - delete a stock
stocks/:id
Delete a company (using ticker id) from the database. Protected.
