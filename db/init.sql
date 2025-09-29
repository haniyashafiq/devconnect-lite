CREATE DATABASE IF NOT EXISTS devconnect;

USE devconnect;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('user','developer')
);

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(100),
  description TEXT,
  tech_stack VARCHAR(255),
  budget DECIMAL(10,2),
  status ENUM('open','in progress','completed') DEFAULT 'open',
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE bids (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT,
  developer_id INT,
  amount DECIMAL(10,2),
  message TEXT,
  FOREIGN KEY (project_id) REFERENCES projects(id),
  FOREIGN KEY (developer_id) REFERENCES users(id)
);