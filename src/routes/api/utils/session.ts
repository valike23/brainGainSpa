import type { Iuser } from "../../../Model/accounts";

export function get(req, res) {
    if(req.session.user) {
        res.json(true);
    }
    else {
        res.json(false)
    }
}

export function put(req, res){
    let user: Iuser = JSON.parse(req.fields.body);
    console.log('check the data on the users and see id it is available:',user);
     req.session.user = user ;
     res.json('ok');

}