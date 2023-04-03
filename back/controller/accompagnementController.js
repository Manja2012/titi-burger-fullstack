import { get } from '../model/accompagnementModel.js'

export const getAllAccompagnements = async (req, res, next) => {
    try{
//axios
const data = await get()
res.status(200).json(data)
}
    catch(error){
        next(error)
    }
}