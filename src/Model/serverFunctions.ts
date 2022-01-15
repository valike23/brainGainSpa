

export function authorization_check(req, role: string = ''){
    if(!req.session.user) return {summary: 'you are not logged in', result: false};
    if(role) if(role != req.session.user.type) return {summary: "you are not authorized", result: false}
    return {result:true};
}

export function handle_server_error (error) {
    console.log(error);
}

