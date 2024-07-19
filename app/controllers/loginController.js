import LoginInfo from '../models/loginMod.js';


const LoginAdmin = new LoginInfo();


LoginAdmin.username = 'admin';
LoginAdmin.password = 'admin';

export default function checkAdmin(user, pass) {
    
    if (user === LoginAdmin.username && pass === LoginAdmin.password) {
        return true;
    }
    return false
}
