import { retrieveDownline } from "../../../Model/serverFunctions";

export async function get(req, res){
    try {
        let userId = req.session.user.id;
        let referals = await retrieveDownline(userId);
        res.json(referals);
        
    } catch (error) {
        
    }
}