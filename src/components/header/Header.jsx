import { NavLink } from 'react-router-dom';
import * as S from './Header.styles';
import { LittleLogo } from '@icons/LittleLogo';

export const Header = ({ setActiveAddAd, token }) => {
	return (
		<S.ProfilePageHeader>
			<S.ProfilePageHeaderNav>
				<S.MainPageMainLittleSvg>
					<NavLink to='/'>
						<LittleLogo/>
					</NavLink>
				</S.MainPageMainLittleSvg>
				{token ? (
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
