const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req,res) =>{
   try{
       const aliens = await Alien.find()
       res.json(aliens)
   }catch(err){
       res.send('Error' + err)
   }
})
router.get('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.send(alien)
    }catch(err){
        res.send('Error' + err)
 
    }
 })
router.post('/', async(req,res) => {
    console.log('data posted...')
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub

    })

    try{
        const a1 = await alien.save()
        res.json(a1)
        }catch(err){
        res.send('Error')
    }

})
router.patch('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
 
    }catch(err){
        res.send('Error')
    }
 })
 router.delete('/:id', async(req,res) =>{
   
     try{
        const alien = await Alien.findByIdAndDelete(req.params.id)
         res.send('deleted2 successfully')
     }catch(err){
         res.json('Error')
     }
 })

 /*router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router