const Event = require ('../models/event')


const index = async (req,res)=>{
    try{
        res.json(await Event.find({}))
    }catch(error){
        res.status(400).json(error)
    }
}

const del = async (req,res) =>{
    try{
        res.json(await Event.findByIdAndDelete(req.params.id))
    } catch(error){
        res.status(400).json(error)
    }
}

const update = async (req,res)=>{
    try{
        res.json(await Event.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch(error){
        res.status(400).json(error)
    }
}

const create = async (req, res) => {
    try{
        res.json(await Event.create(req.body))
    }catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req,res) => {
    try {
        res.json(await Event.findById(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    del,
    update,
    create,
    show
}