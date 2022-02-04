import { confirm_codes } from "../../../Model/accounts";

export async function get(req, res){
    try {
        let code = req.query.code;
        let type = req.query.type;
        let data = await confirm_codes(type, code);
        if(data){
            res.json(true);
        }
        else{
            res.json('')
        }
    } catch (error) {
        res.json('');
    }
}