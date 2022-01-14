import axios from "axios";



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

export async function check_for_session (loc: Location) {
   let res = await (await axios.get('/api/utils/session')).data;
   console.log(res);
   if(!res) loc.href = "/login";
}