CREATE DATABASE IF NOT EXISTS `urheilijat` DEFAULT CHARACTER SET utf8mb4;
USE `urheilijat`;

CREATE TABLE IF NOT EXISTS `urheilijat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etunimi` varchar(50) NOT NULL,
  `sukunimi` varchar(50) NOT NULL,
  `kutsumanimi` varchar(50),
  `syntymavuosi` date,
  `paino` float,
  `kuva` varchar(255),
  `laji` varchar(50),
  `saavutukset` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `urheilijat` (`etunimi`, `sukunimi`, `kutsumanimi`, `syntymavuosi`, `paino`, `kuva`, `laji`, `saavutukset`) VALUES
	('Jari', 'Litmanen', 'Kuningas', '1971-02-20', 74, 'https://upload.wikipedia.org', 'Jalkapallo', 'Mestarien liiga 1995 (Ajax)'),
	('Lauri', 'Markkanen', 'The Finnisher', '1997-05-22', 109, 'https://upload.wikipedia.org', 'Koripallo', 'NBA All-Star 2023'),
	('Mika', 'Häkkinen', 'Flying Finn', '1968-09-28', 70, 'https://upload.wikipedia.org', 'Formula 1', 'F1-maailmanmestari 1998 ja 1999'),
	('Kalle', 'Rovanperä', 'Kalle', '2000-10-01', 60, 'https://upload.wikipedia.org', 'Ralli', 'Rallin maailmanmestari 2022 ja 2023');
