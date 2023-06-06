CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`address` varchar(512),
	`city_id` int);

DROP TABLE `User`;
CREATE UNIQUE INDEX `name_idx` ON `users` (`name`);