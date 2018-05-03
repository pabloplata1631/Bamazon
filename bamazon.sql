DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon ;
USE bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,4) NOT NULL,
stock_quantity INTEGER (10) NOT NULL,
PRIMARY KEY (item_id)
);

