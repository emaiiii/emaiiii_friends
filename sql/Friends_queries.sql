/*VIEW TABLES COMMAND
\dt

// VIEW DATA IN TABLE
TABLE TABLE_NAME
*/

/*INSERT INTO QUERIES*/

INSERT INTO users (user_id, user_name, email, num_followers, num_following) 
VALUES (1, 'mkd003', 'mitchkdoan@gmail.com', 2, 2);

UPDATE users
	SET email = 'mdoan005@ucr.edu'
	WHERE user_id = 1;

INSERT INTO users (user_id, user_name, email, num_followers, num_following) 
VALUES (2, 'erikmaii', 'emai003@ucr.edu', 2, 2);


INSERT INTO follows(user_id, follower_id)
VALUES (1, 2);

INSERT INTO follows(user_id, follower_id)
VALUES (1, 3);

INSERT INTO follows(user_id, follower_id)
VALUES (2, 1);

INSERT INTO follows(user_id, follower_id)
VALUES (2, 3);

INSERT INTO follows(user_id, follower_id)
VALUES (3, 1);

INSERT INTO follows(user_id, follower_id)
VALUES (3, 2);

SELECT user_id FROM Users WHERE user_name = var; 

SELECT photo_id FROM Photo_tag WHERE tag = var;

SELECT photo_id FROM Photos_stats ORDER BY num_likes LIMIT 10;

SELECT photo_id FROM Photos_stats ORDER BY num_dislikes LIMIT 10;

SELECT photo_id FROM Photos WHERE d_t = LIMIT 10

SELECT photo_id FROM Photos WHERE day = var;

SELECT photo_id FROM Photos WHERE user_id = var;