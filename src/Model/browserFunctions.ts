import axios from "axios";
import type { Iuser } from "./accounts";



export const handleNotification = (message: string, win: any, type: string, title: string, image: string = '', func: any = ()=>{}) => {
    win.iziToast[type]({
        title: title,
        'message': message,
        position: 'topRight',
        image: image,
        onClosed: func
    })
    
    return func || 0
}

export const handleBrowserError = (error) =>{
    console.log(error);
}

export async function check_for_session (loc: Location, refresh:boolean = false, user: Iuser ={}) {
   let res = await (await axios.get('/api/utils/session')).data;
   console.log(res);
   if(res){
    return true;
}else{
    if(refresh && user.id){
        let form = new FormData();
        form.append('body', JSON.stringify(user));
       try {
        let data = await  axios.put(`api/utils/session`, form);
        if(data){
            loc.reload();
        }
       } catch (error) {
           console.log(error);
            //loc.href = '/signin' 
       }
    }else{
        if(!res) loc.href = "/signin";
    };
}
}