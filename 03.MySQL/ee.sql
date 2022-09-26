# 2007년도에 데뷔한 걸그룹은?

SELECT girl_group.name, girl_group.debut, song.title  
	FROM girl_group JOIN song
	ON song.sid=girl_group.hit_song_id
	WHERE girl_group.debut BETWEEN '2009-01-01' AND '2009-12-31';
	ORDER BY girl_group.debut