import { get } from '../model/boissonModel.js'

export const getAllBoissons = async (req, res, next) => {
    try{
//axios
const data = await get()
res.status(200).json(data)
}
    catch(error){
        next(error)
    }
}