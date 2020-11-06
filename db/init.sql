CREATE TABLE inventory(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER,
    imgurl VARCHAR(500)
);

SELECT * FROM inventory;