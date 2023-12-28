import styled from 'styled-components';
import { device } from '../breakPoints';

export const SellerProfilePageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SellerProfilePageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
	@media ${device.min} {
		width: 100%;
		min-width: 320px;
	}
`;

export const SellerProfilePageHeaderLogo = styled.div`
	display: block;
	@media ${device.min} {
		display: none;
	}
`;

export const SellerProfilePageHeaderBtn = styled.button`
	width: 241px;
	height: 50px;
	border-radius: 6px;
	border: 1px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	color: rgba(255, 255, 255, 1);
	background: rgba(0, 158, 228, 1);

	&:hover {
		background-color: #0080c1;
	}
	@media ${device.min} {
		display: none;
	}
`;

export const SellerProfilePageHeaderBtnPutAd = styled.button`
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
`;

export const SellerProfilePageHeaderBtnLk = styled.button`
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
`;

export const SellerProfilePageHeaderBtnMainEnter = styled.button`
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

export const SellerProfilePageMain = styled.div``;

export const SellerProfilePageMainContainer = styled.div`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0px 10px 79px;
	@media ${device.min} {
		padding: 85px 0px 84px;
		display: flex;
		flex-direction: column;
	}
`;

export const SellerProfilePageMainCenterBlock = styled.div`
	margin: 0 auto;
	@media ${device.max} {
		display: flex;
		flex-direction: column;
		padding: 0 0 0 30px;
	}
	@media ${device.min} {
		margin: 0 auto;
		padding: 0 20px;
	}
`;

export const SellerProfilePageMainMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 11px 0;
	width: 100%;
	padding: 31px 10px 64px;
	@media ${device.min} {
		display: none;
	}
`;

export const SellerProfilePageMenuForm = styled.div`
	margin-left: 60px;
	max-width: 1044px;
	width: 100%;
`;

export const SellerProfilePageTitle = styled.h2`
	color: rgba(0, 0, 0, 1);
	font-size: 40px;
	font-weight: 500;
	line-height: 88px;
	letter-spacing: 0em;
	text-align: left;
	@media ${device.min} {
		font-size: 24px;
		line-height: 29px;
		color: #000000;
		padding: 0;
		margin-bottom: 20px;
		position: relative;
	}
`;

export const SellerProfilePageSellContent = styled.div`
	width: 100%;
	@media ${device.min} {
		max-width: 100%;
		width: 100%;
	}
`;

export const SellerProfilePageSellSeller = styled.div`
	display: flex;
	align-items: top;
	justify-content: start;
	@media ${device.min} {
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: column-reverse;
		${'' /* align-items: center; */}
	}
`;

export const SellerProfilePageSellerLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 50px;
	@media ${device.min} {
		margin-right: 0px;
	}
`;

export const SellerProfilePageSellerImg = styled.div`
	width: 170px;
	height: 170px;
	border-radius: 50%;
	background-color: #f0f0f0;

	& img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
		border-radius: 50%;
	}
	@media ${device.min} {
		width: 137px;
		height: 132px;
	}
`;

export const AltBtnClose = styled.div`
	display: none;
	@media ${device.min} {
		display: block;
		font-size: 24px;
		line-height: 29px;
		padding: 0 0 0 26px;

		&::before {
			content: '';
			display: block;
			width: 23px;
			height: 23px;
			background-color: transparent;
			border-top: 2px solid #000000;
			border-left: 2px solid #000000;
			transform: rotate(-45deg);
			position: absolute;
			top: 75px;
			left: 26.5px;
			cursor: pointer;
			z-index: 20;
		}
	}
`;

export const SellerProfilePageSellerRight = styled.div`
	width: auto;
	@media ${device.min} {
		width: 100%;
		max-width: 320px;
		display: flex;
		flex-direction: column;

		&:last-child {
			align-items: flex-start;
			padding-bottom: 30px;
		}
	}
`;

export const SellerProfilePageSellerTitle = styled.h3`
	font-size: 20px;
	font-weight: 600;
	line-height: 40px;
	color: #000000;
	margin-bottom: 0px;
	@media ${device.min} {
		font-size: 20px;
		line-height: 26px;
		margin-bottom: 6px;
	}
`;

export const SellerProfilePageSellerCity = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 10px;
	@media ${device.min} {
		font-size: 16px;
		line-height: 21px;
		color: #5f5f5f;
		margin-bottom: 6px;
	}
`;

export const SellerProfilePageSellerInf = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 10px;
	@media ${device.min} {
		font-size: 16px;
		line-height: 21px;
		color: #5f5f5f;
		margin-bottom: 6px;
	}
`;

export const SellerProfilePageSellerBtn = styled.button`
	margin-top: 20px;
	background-color: #009ee4;
	border-radius: 6px;
	border: 1px solid #009ee4;
	width: 214px;
	height: 62px;
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	color: #ffffff;
	font-family: 'Roboto', sans-serif;

	& span {
		display: block;
		font-size: 14px;
		font-weight: 400;
	}
	@media ${device.min} {
		width: 100%;
		height: 57px;
		font-size: 16px;
		font-weight: 500;
		line-height: 20px;
		position: absolute;
		top: 410px;
		max-width: 278px;
		& span {
			font-size: 12px;
		}
	}
`;

export const SellerProfilePageImgMobBlock = styled.div`
	display: block;
	@media ${device.min} {
		display: flex;
		width: 100%;
		justify-content: center;
		padding: 20px 0;
	}
`;

export const SellerProfilePageMainTitle = styled.h3`
	font-size: 32px;
	font-weight: 500;
	line-height: 70px;
	letter-spacing: 0em;
	text-align: left;
	@media ${device.min} {
		font-size: 20px;
		line-height: 26px;
		margin-bottom: 30px;
	}
`;

export const SellerProfilePageMainContent = styled.div`
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 270px);
	grid-auto-rows: 441px;
	grid-gap: 40px 26px;
	justify-content: center;
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
		grid-auto-rows: 293px;
		grid-gap: 10px 10px;
	}
`;

export const SellerProfilePageCardsContent = styled.div`
	height: 161px;
	padding: 10px 10px 20px 10px;
`;

export const SellerProfilePageProfileSell = styled.div`
	margin-bottom: 44px;
	@media ${device.min} {
		margin-bottom: 120px;
	}
`;

export const SellerProfilePageCardsImg = styled.div`
	width: 270px;
	height: 270px;
	background-color: #f0f0f0;

	& img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
	@media ${device.min} {
		width: 137px;
		height: 132px;
		background-color: #d9d9d9;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		& img {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
		}
	}
`;

export const SellerProfilePageCardsTitle = styled.h3`
	height: 52px;
	font-size: 22px;
	font-weight: 500;
	line-height: 26px;
	color: #009ee4;
	margin-bottom: 10px;
	margin-top: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	@media ${device.min} {
		height: 51px;
		font-size: 14px;
		line-height: 17px;
		color: #009ee4;
		margin-bottom: 10px;
		margin-top: 10px;
	}
`;

export const SellerProfilePageCardsPrice = styled.p`
	color: #000000;
	font-size: 22px;
	font-weight: 500;
	line-height: 33px;
	margin-bottom: 10px;
	@media ${device.min} {
		font-size: 16px;
		line-height: 24px;
	}
`;

export const SellerProfilePageCardsPlace = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 4px;
	@media ${device.min} {
		font-size: 12px;
		line-height: 16px;
		color: #5f5f5f;
	}
`;

export const SellerProfilePageCardsDate = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	@media ${device.min} {
		font-size: 12px;
		line-height: 16px;
		color: #5f5f5f;
	}
`;

export const SellerProfilePageCardsItem = styled.div`
	margin: 0;
	@media ${device.min} {
		margin: 0;
		box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		width: 137px;
		height: auto;
	}
`;

export const SellerProfilePageCardsCard = styled.div`
	width: 270px;
	height: 441px;
	display: flex;
	flex-direction: column;
	@media ${device.min} {
		width: 137px;
		height: 293px;
		display: flex;
		flex-direction: column;
	}
`;
