CREATE TABLE inventory(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER,
    imgurl VARCHAR(500)
);

SELECT * FROM inventory;

INSERT INTO inventory
(name, price, imgurl)
VALUES
(${name}, ${price}, ${imgurl});