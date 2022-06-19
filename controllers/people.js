const Person = require ('../models/event')



const index = async (req,res)=>{
    try{
        res.json(await Person.find({}))
    }catch(error){
        res.status(400).json(error)
    }
}

const del = async (req,res) =>{
    try{
        res.json(await Person.findByIdAndDelete(req.params.id))
    } catch(error){
        res.status(400).json(error)
    }
}

const update = async (req,res)=>{
    try{
        res.json(await Person.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch(error){
        res.status(400).json(error)
    }
}

const create = async (req, res) => {
    try{
        const person = await Person.create(req.body)
        res.json(person)
    }catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    del,
    update,
    create
}