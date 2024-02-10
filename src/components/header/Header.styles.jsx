import styled from 'styled-components';
import { device } from '../../breakPoints';

export const ProfilePageHeader = styled.header`
	background-color: #009ee4;
	@media ${device.min} {
		width: 100%;
		height: 55px;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
`;

export const MainPageHeaderBtnMainEnter = styled.button`
	width: 224px;
	height: 40px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	&:hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
	@media ${device.min} {
		display: none;
	}
`;

export const ProfilePageHeaderNav = styled.nav`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0 10px;
	height: 79px;
	display: flex;
	align-items: center;
	justify-content: end;
	@media ${device.max} {
		justify-content: space-around;
	}
	@media ${device.average} {
		justify-content: space-evenly;
	}
	@media ${device.min} {
		height: 55px;
		justify-content: start;
		padding: 0 20px;
	}
`;

export const ProfilePageHeaderLogo = styled.div`
	display: block;
	@media ${device.min} {
		display: none;
	}
`;

export const MainPageMainLittleSvg = styled.div`
	display: none;

	@media ${device.min} {
		display: flex;
		z-index: 20;
	}
`;

export const ProfilePageHeaderBtnPutAd = styled.button`
	width: 232px;
	height: 40px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	&::hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
	@media ${device.min} {
		display: none;
	}
`;

export const ProfilePageHeaderBtnLk = styled.button`
	width: 173px;
	height: 40px;
	margin-left: 10px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	&::hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
	@media ${device.min} {
		display: none;
	}
`;
