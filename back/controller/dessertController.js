import { get } from '../model/dessertModel.js'

export const getAllDesserts = async (req, res, next) => {
    try{
//axios
const data = await get()
res.status(200).json(data)
}
    catch(error){
        next(error)
    }
}