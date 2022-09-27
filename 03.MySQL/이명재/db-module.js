const mysql = require('mysql');
const config = require('./mysql.json');

module.exports = {
    getConnection: function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            if (err) {
                console.log('mysql connection error');
                console.log(err);
            }
        });
        return conn;
    },
    getgroupList: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT gid,name,date_format(debut,'%Y-%m-%d') as debutDate, song.title FROM girl_group 
                        JOIN song ON girl_group.hit_song_id=song.sid;`
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },

    getsongList: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT sid,title,lyrics,date_format(debut,'%Y-%m-%d') as debutDate, song.title FROM girl_group 
                        JOIN song ON girl_group.hit_song_id=song.sid;`
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },

    insertgruop: function(params, callback) {
        const conn = this.getConnection();
        const sql = `INSERT INTO girl_group (gid, name, debutDate, title)
                            VALUES (?, ?, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    getgroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM tigers WHERE id=? and isDeleted=0;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);    
        });
        conn.end();
    },
    updatePlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE tigers SET player=?, backNo=?, position=?
                            WHERE id=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deletePlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE tigers SET isDeleted=1 WHERE id=?`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
}