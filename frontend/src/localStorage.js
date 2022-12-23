export const setUserInfo = ({
    _id = '',
    name = '',
    email = '',
    password = '',
    token = '',
    snakeScore = 0,
    isAdmin = false,
})=>{
    localStorage.setItem(
        'userInfo',
        JSON.stringify({
            _id,
            name,
            email,
            password,
            token,
            snakeScore,
            isAdmin,
        })
        
    );
};

export const clearUser = ()=>{
    localStorage.removeItem('userInfo');
};


export const getUserInfo = ()=>{
    return localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')):
    {name:'',email:'',password:'',snakeScore:0};
};