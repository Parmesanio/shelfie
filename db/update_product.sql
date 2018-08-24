update products
set product_name = $1, product_price = $2, product_url = $3
where id = $4;