const db = require('../utils/database');

const Doraemon = class doraemon{
    constructor(id,cid,people_img,hid,firstName,lastName,englishName,birthday,starSign,height,weight,hobby,afraid,character,intro_img){
        this.id = id;
        this.cid = cid;
        this.people_img = people_img;
        this.hid = hid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.englishName = englishName;
        this.birthday = birthday;
        this.starSign = starSign;
        this.height = height;
        this.weight = weight;
        this.hobby = hobby;
        this.afraid = afraid;
        this.character = character;
        this.intro_img = intro_img;
    }

    //create
    static create(req,res){
        return db.execute(
            'INSERT INTO test (id,cid,name,people_img) VALUES (?,?,?,?)',
            [req.body.id,req.body.cid,req.body.name,req.body.people_img]
        );
    }

    //read
    static fetchTestData() {
        return db.execute('SELECT * from test');
    }

    static fetchAll() {
        return db.execute('SELECT * from people');
    }

    static fetchNameByHid(hid) {
        return db.execute('SELECT * from main where hid = ?',[hid]);
    }

    static fetchPeopleByCid(cid) {
        return db.execute('SELECT * from people where cid = ?',[cid]);
    }

    //update
    static updateById(req,res){
        return db.execute('UPDATE test SET cid=?,name=?,people_img=? where id=?',
        [req.body.cid,req.body.name,req.body.people_img,req.body.id]
        )
    }

    //delete
    static deleteById(id){
        return db.execute('DELETE FROM test where id = ?',[id]);
    }
};

const testFetchAll = async(req,res) => {
    try{
        await Doraemon.fetchPeopleByCid().then(([rows]) => {
            console.log('fetchAll',JSON.stringify(rows));
        });
    }catch(err){
        console.log(err);
    }
};

// testFetchAll();
module.exports = Doraemon;