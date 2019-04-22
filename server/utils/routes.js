console.log("I am routes.js")

const Tasks = require('../controllers/tasks')


module.exports = (app) => {
    app.get("/tasks", Tasks.getAll);
    app.post("/tasks", Tasks.create);
    app.get("/tasks/:id", Tasks.getOne);
    app.put("/tasks/:id", Tasks.update);
    app.delete("/tasks/:id", Tasks.delete);
};




