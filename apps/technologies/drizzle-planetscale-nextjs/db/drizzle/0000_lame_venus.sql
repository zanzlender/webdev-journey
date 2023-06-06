CREATE TABLE `cities` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`popularity` enum('unknown','known','popular'));

CREATE TABLE `User` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`address` varchar(512),
	`city_id` int);

CREATE UNIQUE INDEX `name_idx` ON `User` (`name`);
ALTER TABLE `User` ADD CONSTRAINT `User_city_id_cities_id_fk` FOREIGN KEY (`city_id`) REFERENCES `cities`(`id`) ON DELETE no action ON UPDATE no action;