CREATE TABLE tb_user (
  id CHAR(22) NOT NULL PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example seed data for the users table

-- Insert sample user 1
INSERT INTO tb_user (id, username, email)
VALUES ('73WakrfVbNJBaAmhQtEeDv', 'johnDoe', 'johndoe@example.com');

-- Insert sample user 2
INSERT INTO tb_user (id, username, email)
VALUES ('5J6X2zXzrKf2YyWd6iN1HJ', 'janeSmith', 'janesmith@example.com');

-- Insert sample user 3
INSERT INTO tb_user (id, username, email)
VALUES ('9fRt7J1t3FhX7GyvP1BbLJ', 'aliceJohnson', 'alicejohnson@example.com');
