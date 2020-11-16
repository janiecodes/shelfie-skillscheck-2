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

SELECT * FROM inventory
WHERE id = $1;

UPDATE inventory
SET name = $2,
    price = $3,
    imgurl = $4,
WHERE id = $1
RETURNING *;

DELETE FROM inventory
WHERE id = $1;