import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '@store/slices/authApiSlice';
import myApi from '@store/slices/userApiSlice';
import * as S from './LoginPage.styles';
import { AuthLogo } from '@icons/AuthLogo';


export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [login] = useLoginMutation();
	const [getUser] = myApi.useLazyGetUserQuery();
	const navigate = useNavigate();

	useEffect(() => {
		setErrMsg('');
	}, [email, password]);

	const handleLogin = async e => {
		e.preventDefault();
		if (email && password) {
			try {
				const userData = await login({ email, password });

				localStorage.setItem('access_token', userData.data.access_token);
				localStorage.setItem('refresh_token', userData.data.refresh_token);
				const user = await getUser();

				localStorage.setItem('myId', user.data.id);
		
				setEmail('');
				setPassword('');
				navigate('/');
			} catch (error) {
				if (!error?.response) {
					setErrMsg('Wrong Email or Password');
				}
			}
		} else if (email === '' || password === '') {
			setErrMsg('Missing Email or Password');
		}
	};

	return (
		<S.LoginPageWrapper>
			<S.LoginPageContainerEnter>
				<S.LoginPageModalBlock>
					<S.LoginPageModalForm action='#'>
						<S.LoginPageModalLogo>
							<NavLink to='/'>
								<AuthLogo />
							</NavLink>
						</S.LoginPageModalLogo>
						<S.LoginPageModalInput
							onChange={e => setEmail(e.target.value)}
							className='login'
							type='text'
							name='login'
							placeholder='email'
						/>
						<S.LoginPageModalInput
							onChange={e => setPassword(e.target.value)}
							className=' password'
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						{errMsg && <h3 style={{ color: 'red' }}>{errMsg}</h3>}
						<S.LoginPageModalBtnEnter onClick={e => handleLogin(e)}>
							Войти
						</S.LoginPageModalBtnEnter>
						<NavLink to='/reg'>
							<S.LoginPageModalBtnSignup>
								Зарегистрироваться
							</S.LoginPageModalBtnSignup>
						</NavLink>
					</S.LoginPageModalForm>
				</S.LoginPageModalBlock>
			</S.LoginPageContainerEnter>
		</S.LoginPageWrapper>
	);
};
