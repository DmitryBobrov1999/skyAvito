import styled from 'styled-components';
import { device } from '../../pages/breakPoints';

export const MainPageFooter = styled.footer`
	display: none;
	@media ${device.min} {
		display: flex;
		align-items: center;
		height: 54px;
		width: 100%;
		background-color: #ffffff;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
		z-index: 10;
		justify-content: center;
		position: fixed;
		bottom: 0;
		z-index: 999;
	}
`;

export const MainPageFooterContainer = styled.div`
	@media ${device.min} {
		min-width: 225px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
`;

export const MainPageFooterImgDiv = styled.div`
	@media ${device.min} {
		& svg {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
		}
	}
`;