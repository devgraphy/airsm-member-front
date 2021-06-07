import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Signup.css';
import axios from 'axios';

function Signup(props) {
    const [phone, setPhone] = useState();
    const [password, setPw] = useState();
    const [password2, setPw2] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();

    function registerUser(e){
        e.preventDefault();
        if(phone.length > 7 & name.length > 0 & password.length > 3 & password2.length > 3){
            if(password === password2){
                axios.post('http://localhost:8000/membership/users/signup/',
                                {
                                    phone,
                                    name,
                                    email,
                                    password
                                })
                .then(res=>{
                    props.history.push('/');
                });
                // history.push('/');
            }
            else    alert("비밀번호가 일치하지 않습니다.");

        }
        else{
            alert("입력이 너무 짧습니다.");
        }
        
                            
    }
    return (
        <div className="Signup">
            <h1>SignUp</h1>
            <form className="form" noValidate autoComplete="off" >
                <div className="input">
                    <TextField label="Phone Number(*)" 
                               variant="filled"
                               minlength="8"
                               onChange={(e)=>setPhone(e.target.value)}/>
                </div>    {/* 추후 휴대폰 개인 인증 구현 필요 */}
                <div className="input">
                    <TextField label="Password(*)"
                               variant="filled"
                               type="password"
                               minlength="4"
                               placeholder="4자 이상 입력"
                               onChange={(e)=>setPw(e.target.value)}/>
                </div>     
                <div className="input">
                    <TextField label="Confirm Password(*)"
                               variant="filled"
                               type="password"
                               minlength="4"
                               placeholder="4자 이상 입력"
                               onChange={(e)=>setPw2(e.target.value)}/>
                </div>{/* 위 패스워드와 일치하는지 유효성 검사*/}
                <div className="input">
                    <TextField label="Name(*)"
                               variant="filled"
                               minlength="1"
                               onChange={(e)=>setName(e.target.value)}/>
                </div>            {/* 한글 이름에 대한 유효성 검사 */}
                <div className="input">
                    <TextField label="Email"
                               variant="filled" 
                               onChange={(e)=>setEmail(e.target.value)}/>
                </div>  
            </form>
            <div>
                <Button className="input"
                    variant="outlined"
                    color="primary"
                    onClick={registerUser}
                    >가입하기
                </Button>
            </div>
        </div>
    );
}

export default Signup;