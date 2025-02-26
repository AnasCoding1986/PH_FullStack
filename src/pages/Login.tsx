import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
    const {register,handleSubmit} = useForm();

    const [Login,{data,error}] = useLoginMutation();

    console.log("data",data);
    console.log("error",error);
    

    const onsubmit = (data) =>{
      const userInfo = {
        id:data.userId,
        password:data.password,
      };
       
      Login(userInfo);
      
    }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id='id' {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id='password' {...register('password')} />
      </div>
      <Button htmlType='submit'>Login</Button>
    </form>
  )
}

export default Login

