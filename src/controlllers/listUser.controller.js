import listUserService from "../service/listUser.service";

const listUserController = async (request, response) => {
    try{
        const user = await listUserService();
        return response.status(200).json(user);
    }catch(err){
        return response.status(400).json(err.message);
    }
}

export default listUserController;