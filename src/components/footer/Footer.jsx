import { NavLink } from 'react-router-dom';
import * as S from './Footer.styles';
import { LittleFooterHouse } from '@icons/LittleFooterHouse';
import { LittleFooterPlus } from '@icons/LittleFooterPlus';
import { LittleFooterProfile } from '@icons/LittleFooterProfile';

export const Footer = ({ setActiveAddAd }) => {
	return (
		<S.MainPageFooter>
			<S.MainPageFooterContainer>
				<NavLink to='/'>
					<S.MainPageFooterImgDiv>
						<LittleFooterHouse/>
					</S.MainPageFooterImgDiv>
				</NavLink>

				<S.MainPageFooterImgDiv onClick={() => setActiveAddAd(true)}>
					<LittleFooterPlus/>
				</S.MainPageFooterImgDiv>

				<NavLink to='/profile'>
					<S.MainPageFooterImgDiv>
						<LittleFooterProfile/>
					</S.MainPageFooterImgDiv>
				</NavLink>
			</S.MainPageFooterContainer>
		</S.MainPageFooter>
	);
};