import { NavLink } from 'react-router-dom';
import * as S from './Header.styles';
import { LittleLogo } from '@icons/LittleLogo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAuth } from '@store/slices/authSlice';

export const Header = ({ setActiveAddAd }) => {
	const { isAuth } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setAuth());
	}, [dispatch]);
	
	return (
		<S.ProfilePageHeader>
			<S.ProfilePageHeaderNav>
				<S.MainPageMainLittleSvg>
					<NavLink to='/'>
						<LittleLogo />
					</NavLink>
				</S.MainPageMainLittleSvg>
				{isAuth ? (
					<>
						<S.ProfilePageHeaderBtnPutAd onClick={() => setActiveAddAd(true)}>
							Разместить объявление
						</S.ProfilePageHeaderBtnPutAd>
						<NavLink to='/profile'>
							<S.ProfilePageHeaderBtnLk>
								Личный кабинет
							</S.ProfilePageHeaderBtnLk>
						</NavLink>
					</>
				) : (
					<NavLink to='/login'>
						<S.MainPageHeaderBtnMainEnter>
							Вход в личный кабинет
						</S.MainPageHeaderBtnMainEnter>
					</NavLink>
				)}
			</S.ProfilePageHeaderNav>
		</S.ProfilePageHeader>
	);
};
