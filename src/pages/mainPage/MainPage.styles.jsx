import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../breakPoints';

export const MainPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	background-color: #f1f1f1;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MainPageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
	backdrop-filter: blur(2px);
	@media ${device.min} {
		width: 100%;
		min-width: 320px;
		height: auto;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

export const MainPageHeader = styled.header`
	background-color: #009ee4;
	position: sticky;
	top: 0;
	@media ${device.min} {
		display: none;
	}
`;

export const MainPageHeaderNav = styled.nav`
	margin: 0 auto;
	height: 79px;
	display: flex;
	align-items: center;
	max-width: 1158px;
	justify-content: end;
	@media ${device.max} {
		justify-content: space-around;
	}
	@media ${device.average} {
		justify-content: space-evenly;
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
`;

export const MainPageMain = styled.main`
	@media ${device.max} {
		width: 100%;
	}
	@media ${device.min} {
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 30px;
	}
`;

export const MainPageMainSearch = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 11px 0;
	max-width: 1158px;
	margin: 0 auto;
	padding: 43px 0 43px;
	position: sticky;
	top: 79px;
	background: white;
	opacity: 0.99;
	@media ${device.max} {
		display: flex;
		justify-content: space-evenly;
	}
	@media ${device.average} {
		justify-content: center;
	}
	@media ${device.min} {
		top: 0;
		width: 100%;
		height: 55px;
		background-color: #009ee4;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
		padding: 0;
		z-index: 3;
		display: flex;
	}
`;

export const MainPageMainBigSvg = styled.div`
	display: flex;
	@media ${device.min} {
		display: none;
	}
`;

export const MainPageMainLittleSvg = styled.div`
	display: none;
	@media ${device.min} {
		display: flex;
	}
`;

export const MainPageMainLogoImg = styled.img`
	width: 54px;
	height: auto;
`;

export const MainPageMainForm = styled.form`
	margin-left: 60px;
	width: 1044px;
	display: flex;
	@media ${device.max} {
		max-width: 1044px;
		width: 70%;
		margin-left: 10px;
	}
	@media ${device.average} {
	}
	@media ${device.min} {
		min-width: 243px;
	}
`;

export const MainPageText = styled.input`
	width: 100%;
	height: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	background-color: transparent;
	padding: 13px 19px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #000000;
	display: flex;
	&::placeholder {
		background-color: transparent;
		color: rgba(0, 0, 0, 0.3);
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
	}
	@media ${device.max} {
	}
	@media ${device.min} {
		display: none;
	}
`;

export const MainPageMiniText = styled.input`
	display: none;
	@media ${device.min} {
		display: flex;
		height: 32px;
		border-radius: 30px;
		background: rgba(255, 255, 255, 1);
		border-width: 1px;
		border-style: solid;
		border-color: rgba(0, 0, 0, 0.2);
		font-size: 14px;
		font-weight: 400;
		line-height: 21px;
		letter-spacing: 0em;
		text-align: left;
		padding: 13px 19px;
		font-style: normal;
		color: #000000;
		&::placeholder {
			background-color: transparent;
			color: rgba(0, 0, 0, 0.3);
			font-size: 14px;
			font-weight: 400;
			line-height: 21px;
			letter-spacing: 0em;
			text-align: left;
		}
		@media ${device.min} {
			min-width: 243px;
			width: 100%;
		}
	}
`;

export const MainPageSearchBtn = styled.button`
	margin-left: 10px;
	width: 158px;
	height: 50px;
	background-color: #009ee4;
	border: 1px solid #009ee4;
	border-radius: 6px;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	&:hover {
		background: rgba(0, 128, 193, 1);
	}
	@media ${device.min} {
		display: none;
	}
`;

export const MainPageMainContainer = styled.div`
	max-width: 1158px;
	margin: 0 auto;
	padding: 0 0 37px 0;
	@media ${device.max} {
		padding: 0;
		height: auto;
		display: grid;
		flex-direction: column;
		align-items: center;
	}
	@media ${device.min} {
		width: 100%;
	}
`;

export const MainPageMainH2Div = styled.div`
	@media ${device.max} {
		display: grid;
		justify-content: space-evenly;
		grid-template-columns: repeat(3, 270px);
	}
	@media ${device.average} {
		grid-template-columns: repeat(2, 270px);
	}
	@media ${device.min} {
		grid-template-columns: repeat(2, 137px);
		grid-gap: 10px 10px;
	}
`;

export const MainPageMainH2 = styled.h2`
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 42px;
	color: #000000;
	height: 88px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	@media ${device.min} {
		font-size: 24px;
		line-height: 29px;
		color: #000000;
		text-align: center;
		margin-top: 30px;
		height: 29px;
		margin-bottom: 20px;
	}
`;

export const MainPageMainContent = styled.div`
	@media ${device.min} {
		width: 100%;
		margin: 0 auto;
		right: 0;
		left: 0;
		top: 134px;
		bottom: 84px;
	}
`;

export const MainPageMainContentCards = styled.div`
	max-width: 1158px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 270px);
	grid-auto-rows: 441px;
	grid-gap: 40px 26px;

	@media ${device.max} {
		grid-template-columns: repeat(3, 270px);
		justify-content: space-evenly;
	}

	@media ${device.average} {
		grid-template-columns: repeat(2, 270px);
		grid-auto-rows: 441px;
	}

	@media ${device.min} {
		grid-template-columns: repeat(2, 137px);
		grid-gap: 10px 10px;
		grid-auto-rows: 293px;
	}
`;

export const MainPageMainCardsItemNav = styled(NavLink)`
	color: rgba(0, 158, 228, 1);
	text-decoration: none;
	@media ${device.min} {
		height: 293px;
		width: 137px;
	}
`;

export const MainPageMainCardsItem = styled.div`
	margin: 0;
	@media ${device.min} {
		margin: 0;
		box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		width: 137px;
		height: auto;
	}
`;

export const MainPageMainCardsCard = styled.div`
	width: 270px;
	height: 441px;
	display: flex;
	flex-direction: column;
	@media ${device.min} {
		width: 137px;
		height: auto;
		display: flex;
		flex-direction: column;
	}
`;

export const MainPageMainCardImg = styled.div`
	width: 270px;
	height: 270px;
	background-color: #f0f0f0;
	margin-bottom: 20px;
	@media ${device.min} {
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		width: 137px;
		height: 132px;
		background-color: #d9d9d9;
		margin-bottom: 0;
	}
`;

export const MainPageCardImg = styled.img`
	width: 100%;
	height: 100%;
	@media ${device.min} {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
`;

export const MainPageA = styled.a``;

export const MainPageCardPrice = styled.p`
	font-size: 22px;
	font-weight: 500;
	line-height: 33px;
	letter-spacing: 0em;
	text-align: left;
	padding-top: 10px;
	padding-bottom: 10px;
	@media ${device.min} {
		font-size: 16px;
		line-height: 24px;
	}
`;

export const MainPageCardTitle = styled.h3`
	font-size: 22px;
	font-weight: 500;
	line-height: 26px;
	letter-spacing: 0em;
	text-align: left;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	@media ${device.min} {
		font-size: 14px;
		line-height: 17px;
		color: #009ee4;
		margin-bottom: 10px;
		margin-top: 10px;
	}
`;

export const MainPageCardContent = styled.div`
	height: 151px;
	@media ${device.min} {
		height: 161px;
		padding: 10px 10px 20px 10px;
	}
`;

export const MainPageCardPlaceDate = styled.div`
	overflow: hidden;
`;

export const MainPageCardDate = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
	@media ${device.min} {
		font-size: 12px;
		line-height: 16px;
		color: #5f5f5f;
	}
`;

export const MainPageCardPlace = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
	@media ${device.min} {
		font-size: 12px;
		line-height: 16px;
		color: #5f5f5f;
	}
`;
