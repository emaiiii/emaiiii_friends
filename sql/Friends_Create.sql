DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS photo_stats CASCADE;
DROP TABLE IF EXISTS follows CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS user_tag CASCADE;
DROP TABLE IF EXISTS photo_tag CASCADE;
DROP TABLE IF EXISTS Userid CASCADE;
DROP TABLE IF EXISTS Photoid CASCADE;


-- CREATE TABLE Userid (
-- useridcnt int NOT NULL,
-- PRIMARY KEY (useridcnt)
-- );

-- INSERT INTO userid VALUES(1);

-- CREATE TABLE Photoid (
-- photoidcnt int NOT NULL,
-- PRIMARY KEY (photoidcnt)
-- );

-- INSERT INTO Photoid VALUES(1);

CREATE TABLE users(
    id serial PRIMARY KEY,
    fname VARCHAR(100),
    lname VARCHAR(100),
    email text UNIQUE NOT NULL,
    num_followers INT DEFAULT 0,
    num_following INT DEFAULT 0,
    joined TIMESTAMP NOT NULL
);

CREATE TABLE login(
    id serial PRIMARY key,
    hash varchar(100) NOT NULL,
    email text UNIQUE NOT NULL
);

CREATE TABLE Photos (
	photo_id serial PRIMARY KEY, 
	user_id int NOT NULL,
	imgname text,
	img bytea,
	title varchar(100),
	caption varchar(2200), 
	day varchar(10), 
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE Photo_stats (
	photo_id int NOT NULL, 
	num_likes int, 
	num_dislikes int,
	num_comments int, 
	num_views int, 
	PRIMARY KEY (photo_id)
);

CREATE TABLE Follows (
	user_id int NOT NULL,
	following_id int NOT NULL,
	PRIMARY KEY (user_id, following_id)
);

CREATE TABLE Comments (
	photo_id int NOT NULL,
	user_id int NOT NULL,
	comment varchar(300)
	
);

CREATE TABLE Photo_tag (
	photo_id int NOT NULL, 
	tag text[],
	PRIMARY KEY (photo_id, tag)
);

CREATE TABLE User_tag (
	photo_id int NOT NULL, 
	user_name text[],
	PRIMARY KEY (photo_id, user_name)
);

