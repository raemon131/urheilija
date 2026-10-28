CREATE USER IF NOT EXISTS 'urheilijakayttaja'@'localhost' IDENTIFIED BY 'urheilu123';
USE `urheilijat`;
GRANT INSERT,UPDATE,DELETE,SELECT ON urheilijat TO 'urheilijakayttaja'@'localhost' IDENTIFIED BY 'urheilu123';
