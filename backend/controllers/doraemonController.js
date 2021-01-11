const Doraemon = require('../models/doraemonModel');

//create
exports.createProduct = async(req,res,next) => {
    console.log('createProduct',req.body);
    try{
        await Doraemon.create(req,res).then(([rows]) => {
            res.redirect('/doraemon/test');
        });
    }catch(err){
        console.log(err);
    }
};

//read
exports.getTestData = async(req,res) => {
    let data = {};
    try{
        await Doraemon.fetchTestData().then(([rows]) => {
            console.log('getPeople',JSON.stringify(rows));
            data.doraemon = rows;
            // res.json(rows);
        });
        res.render('people', { title: 'Doraemon',data: data.doraemon});
    }catch(err){
        console.log(err);
    }
};

exports.getPeople = async(req,res) => {
    let data = {};
    try{
        await Doraemon.fetchAll().then(([rows]) => {
            // console.log('getPeople',JSON.stringify(rows));
            data.doraemon = rows;
            // res.json(rows);
        });
        res.render('people', { title: 'Doraemon',data: data.doraemon});
    }catch(err){
        console.log(err);
    }
};

exports.getNameByHid = async (req,res) => {
    let data={};
    // data.hid = 0;
    try{
        if(req.params.name === 'suneo')data.hid = 1;
        else if (req.params.name === 'shizuka')data.hid = 2;
        else if (req.params.name === 'doraemon')data.hid = 3;
        else if (req.params.name === 'nobita')data.hid = 4;
        else if (req.params.name === 'gian')data.hid = 5;

        await Doraemon.fetchNameByHid(data.hid).then(([rows]) => {
            data.doraemon = rows;
            // res.json(data.doraemon);
        });

        res.render('introduce',{data:data.doraemon ,title:req.params.name});
    }catch(err){
        console.log(err);
    }
};

exports.getPeopleByCid = async (req,res) => {
    let data={};
    // data.hid = 0;
    try{
        if(req.params.category === 'future')data.cid = 1;
        else if (req.params.category === 'nobita')data.cid = 2;
        else if (req.params.category === 'shizuka')data.cid = 3;
        else if (req.params.category === 'suneo')data.cid = 4;
        else if (req.params.category === 'gian')data.cid = 5;
        else if (req.params.category === 'other')data.cid = 0;

        await Doraemon.fetchPeopleByCid(data.cid).then(([rows]) => {
            data.doraemon = rows;
            // res.json(data.doraemon);
        });

        res.render('people',{data:data.doraemon ,title:req.params.name});
    }catch(err){
        console.log(err);
    }
};

//update
exports.updateProduct = async(req,res,next) => {
    console.log('updateProduct',req.body);
    try{
        await Doraemon.updateById(req,res).then(([rows]) => {
            res.redirect('/doraemon/test');
        });
    }catch(err){
        console.log(err);
    }
};

//delete
exports.deleteProductById = async(req,res,next) => {
    console.log('deleteProductById',req.params.id);
    try{
        await Doraemon.deleteById(req.params.id).then(([rows]) => {
            res.redirect('/doraemon/test');
        });
    }catch(err){
        console.log(err);
    }
};