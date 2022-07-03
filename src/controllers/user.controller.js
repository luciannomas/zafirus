import User from "../models/Users"


export const createUsers = async ( req, res ) => {
    
    try {
        const newUser = new User(req.body)
        const userSaved = await newUser.save()
        return res.json(userSaved)
        
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }

} 

export const getUsers = async (req, res) => {

    try {
        const users = await User.find()
        return res.json(users)
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}

export const getUsersId = async (req, res) => {

    try {
        const { id } = req.params
        const users = await User.findById(id)
        if (!users) return res.status(404).json({ msg: "Users does not exists" });
        return res.json(users)
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const userUpdate = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.json({ message: "User was updated Successfully"})
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}

export const deleteUser = async (req,res) => {
    try {
        const { id } = req.params
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ msg: "User does not exists" });
        return res.status(204).json();
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}