const Task = require('../models/tasks');


const getAllTask = async (req, res) => {

    const data = await Task.find({});

    res.send({
        msg: 'get All Tasks',
        data: data,
    });
}

const createTask = async (req, res) => {

    try {
        const data = req.body;
        const newItem = await Task.create({ ...data });
        res.status(201).json({ newItem });
    } catch (error) {
        return res.status(500).json({ msg: error.message, error });
    }
}

const getOneTask = async (req, res) => {

    const { id } = req.params;

    try {

        const data = await Task.findById(id);
        if (!data) return res.status(404).json({ msg: `There is no records with the id ${id}` });

        res.send({
            msg: 'getOneTask',
            id: id,
            data: data
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message, error });
    }

}

const updateTask = async (req, res) => {

    const id = req.params.id;
    const updatedData = req.body;

    try {
        
        const data = await Task.findByIdAndUpdate(id, { ...updatedData }, { new: true });
        if (!data) return res.status(404).json({ msg: `There is no records with the id ${id}` });

        res.send({
            msg: 'Task was updated!',
            data: data,
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message, error });
    }


}

const deleteTask = async (req, res) => {

    const id = req.params.id;

    try {

        const data = await Task.findByIdAndDelete(id);
        if (!data) return res.status(404).json({ msg: `There is no records with the id ${id}` });

        res.send({
            msg: 'Task was deleted!',
            data: data,
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message, error });
    }

}

module.exports = {
    getAllTask,
    createTask,
    getOneTask,
    updateTask,
    deleteTask,
}