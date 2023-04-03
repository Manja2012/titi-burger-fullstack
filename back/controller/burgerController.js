import { get } from '../model/burgerModel.js'

export const getAllBurgers = async (req, res, next) => {
    try{
//axios
const data = await get()
res.status(200).json(data)
}
    catch(error){
        next(error)
    }
}