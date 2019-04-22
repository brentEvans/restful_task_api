console.log("I am tasks.js");

const mongoose = require('mongoose');
const Task = mongoose.model('Task');


class Tasks {
    getAll(req, res){
        Task.find({}, (err, tasks) => {
            if (err){
                console.log("Error:", err);
            } else{
                res.json({status: "ok", tasks: tasks});
            }
        });
    }

    getOne(req, res){
        Task.findOne({_id: req.params.id}, (err, task) => {
            if(err){
                console.log("Error:", err);
            } else{
                res.json({status: "ok", task: task});
            }
        });
    }
    create(req, res){
        let task = new Task(req.body);
        task.save( (err) => {
            if(err){
                res.json({
                    stats: "not ok", 
                    valid: false,
                    errors: err})
            } else {
                res.json({status: "ok", valid: true});
            }
        });
    }
    update(req, res){
        Task.findOne({_id: req.params.id}, (err, task) => {
            if(err){
                console.log("Error:", err);
            } else{
                task.title = req.params.title;
                task.description = req.params.description;
                task.isComplete = req.params.isComplete;
                task.save( (err) => {
                    res.json({status: "ok", valid: true});
                })
            }
        });
    }
    delete(req, res){
        Task.remove({_id: req.params.id}, (err) => {
            if(err){
                console.log("Error:", err);
            } else{
                res.json({status: "ok", valid: true});
            }
        });
    }
}

module.exports = new Tasks();

