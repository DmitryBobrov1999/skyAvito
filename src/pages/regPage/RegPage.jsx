import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '@store/slices/authApiSlice';
import * as S from './RegPage.styles';
import { AuthLogo } from '@icons/AuthLogo';

export const RegPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [city, setCity] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [register] = useRegisterMutation();
	const navigate = useNavigate();

	useEffect(() => {
		setErrMsg('');
	}, [email, password]);

	const handleRegistration = async e => {
		e.preventDefault();
		if (email && password && repeatPassword) {
			try {
				await register({
					email,
					password,
					repeatPassword,
					name,
					surname,
					city,
				}).unwrap();
				setEmail('');
				setPassword('');
				setRepeatPassword('');
				navigate('/login');
			} catch (error) {
				if (!error?.response) {
					console.log(error);
				}
			}
		} else if (email === '' || password === '' || repeatPassword === '') {
			setErrMsg('Missing Email or Password');
		}
	};

	return (
		<S.RegPageWrapper>
			<S.RegPageContainerEnter>
				<S.RegPageModalBlock>
					<S.RegPageModalForm action='#'>
						<S.RegPageModalLogo>
							<NavLink to='/'>
								<AuthLogo />
							</NavLink>
						</S.RegPageModalLogo>
						<S.RegPageModalInput
							onChange={e => setEmail(e.target.value)}
							className=' login'
							type='text'
							name='login'
							placeholder='email'
						/>
						<S.RegPageModalInput
							onChange={e => setPassword(e.target.value)}
							className=' password'
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						<S.RegPageModalInput
							onChange={e => setRepeatPassword(e.target.value)}
							className=' password'
							type='password'
							name='repeatPassword'
							placeholder='Повторите пароль'
						/>
						<S.RegPageModalInput
							onChange={e => setName(e.target.value)}
							className=' password'
							type='text'
							name='name'
							placeholder='Имя (необязательно)'
						/>
						<S.RegPageModalInput
							onChange={e => setSurname(e.target.value)}
							className=' password'
							type='text'
							name='surName'
							placeholder='Фамилия (необязательно)'
						/>
						<S.RegPageModalInput
							onChange={e => setCity(e.target.value)}
							className=' password'
							type='text'
							name='city'
							placeholder='Город (необязательно)'
						/>
						{errMsg && <h3 style={{ color: 'red' }}>{errMsg}</h3>}
						<S.RegPageModalBtnSignup onClick={e => handleRegistration(e)}>
							Зарегистрироваться
						</S.RegPageModalBtnSignup>
					</S.RegPageModalForm>
				</S.RegPageModalBlock>
			</S.RegPageContainerEnter>
		</S.RegPageWrapper>
	);
};
