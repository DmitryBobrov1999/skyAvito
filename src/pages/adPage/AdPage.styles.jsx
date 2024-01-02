import styled from 'styled-components';
import { device } from '../../breakPoints';

export const AdPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const AdPageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
	@media ${device.max} {
	}

	@media ${device.min} {
		width: 100%;
		min-width: 320px;
		height: auto;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

export const AdPageHeaderLogo = styled.div`
	display: block;
	@media ${device.min} {
		display: none;
	}
`;

export const AdPageHeaderBtn = styled.button`
	width: 241px;
	height: 50px;
	border-radius: 6px;
	border: 1px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	color: rgba(255, 255, 255, 1);
	margin-left: 60px;
	background: rgba(0, 158, 228, 1);

	&:hover {
		background-color: #0080c1;
	}
	@media ${device.min} {
		display: none;
	}
`;

export const AdPageMain = styled.div`
	margin: 0 auto;
	@media ${device.max} {
		width: 100%;
	}
`;

export const AdPageMainContent = styled.div`
	max-width: 792px;
	width: 100%;
	padding: 0 5px 117px;
`;

export const AdPageMainContainer = styled.div`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0px 5px;
	@media ${device.max} {
		padding: 0px 0px 0px 30px;
	}
	@media ${device.min} {
		padding: 0 20px 0;
		max-width: 320px;
	}
`;
export const AdPageMainMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 11px 0;
	padding: 43px 5px 77px;
	@media ${device.max} {
		justify-content: space-evenly;
	}
	@media ${device.min} {
		display: none;
	}
`;
export const AdPageMainArcticle = styled.div`
	max-width: 1178px;
	padding: 0 0 70px;
	margin: 0 auto;
	padding: 0 5px 70px;
	@media ${device.max} {
		padding: 0 5px 70px 30px;
	}
	@media ${device.min} {
		max-width: 1178px;
		width: 100%;
		padding: 55px 0 0px;
		margin: 0 auto;
	}
`;

export const AdPageArcticleTitle = styled.h3`
	margin-bottom: 32px;
	padding: 0 5px;
	font-size: 32px;
	font-weight: 700;
	line-height: 45px;
	letter-spacing: 0em;
	text-align: left;
	@media ${device.min} {
		margin-bottom: 14px;
		padding: 0;
	}
`;
export const AdPageArcticleText = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: rgba(0, 0, 0, 1);
`;
export const AdPageArcticleContent = styled.div`
	display: flex;
	align-items: top;
	@media ${device.max} {
		align-items: center;
		flex-wrap: wrap;
	}
	@media ${device.min} {
		width: 100%;
		margin: 0 auto;
		padding: 0;
		flex-direction: column;
	}
`;

export const AdPageArticleLeft = styled.div`
	max-width: 480px;
	margin-right: 54px;
	@media ${device.average} {
		margin-right: 20px;
	}
	@media ${device.min} {
		width: 100%;
		height: 320px;
		min-width: 320px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 0;
		margin-bottom: 20px;
	}
`;

export const AdPageArticleImg = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${device.min} {
		width: 100%;
		min-width: 320px;
		height: auto;
		min-height: 320px;
		margin: 0 0px;
	}
`;

export const AdPageArticleFillImg = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	& img {
		width: 480px;
		height: 480px;
		background: rgba(240, 240, 240, 1);
	}
	@media ${device.min} {
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;

		& img {
			width: 320px;
			height: 320px;
		}
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

export const AdPageArticleRight = styled.div`
	max-width: 621px;
	@media ${device.min} {
		max-width: 100%;
		width: 100%;
		padding: 0 20px;
		display: flex;
		justify-content: center;
	}
`;

export const AdPageArticleBlock = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AdPageArticleTitle = styled.h3`
	font-size: 32px;
	font-weight: 700;
	line-height: 45px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 10px;
	@media ${device.min} {
		margin-bottom: 10px;
	}
`;

export const AdPageArticleInfo = styled.div`
	margin-bottom: 34px;
	@media ${device.min} {
		margin-bottom: 20px;
	}
`;

export const AdPageArticleDate = styled.p`
	color: #5f5f5f;
	margin-bottom: 4px;
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
	@media ${device.min} {
		font-size: 14px;
		line-height: 17px;
		color: #5f5f5f;
		margin-bottom: 4px;
	}
`;
export const AdPageArticleCity = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 4px;
	@media ${device.min} {
		font-size: 14px;
		line-height: 17px;
		color: #5f5f5f;
		margin-bottom: 4px;
	}
`;
export const AdPageArticleLink = styled.a`
	font-family: 'Noto Sans', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
	color: #009ee4;
	@media ${device.min} {
		font-size: 14px;
		line-height: 19px;
		color: #009ee4;
	}
`;

export const AdPageArticlePrice = styled.p`
	font-size: 28px;
	line-height: 39px;
	font-weight: 700;
	margin-bottom: 20px;
	@media ${device.min} {
		font-size: 18px;
		line-height: 25px;
		font-weight: 700;
		margin-bottom: 20px;
	}
`;

export const AdPageArticleBtn = styled.button`
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
	&:hover {
		background-color: #0080c1;
	}
	& span {
		display: block;
		font-size: 14px;
		font-weight: 400;
	}
	@media ${device.min} {
		width: 100%;
		max-width: 320px;
		height: 57px;
		font-size: 14px;
		line-height: 20px;
		color: #ffffff;
		& span {
			font-size: 12px;
		}
	}
`;

export const AdPageEditBtn = styled.button`
	margin-right: 10px;
	width: 189px;
	height: 50px;
	background-color: #009ee4;
	border-radius: 6px;
	border: 1px solid #009ee4;
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	color: #ffffff;
	font-family: 'Roboto', sans-serif;
	&:hover {
		background-color: #0080c1;
	}
	& span {
		display: block;
		font-size: 14px;
		font-weight: 400;
	}
	@media ${device.min} {
		margin-right: 0;
		width: 100%;
		height: 57px;
		font-size: 14px;
		line-height: 20px;
		max-width: 320px;
		color: #ffffff;
		& span {
			font-size: 12px;
		}
	}
`;

export const AdPageDeleteBtn = styled.button`
	width: 225px;
	height: 50px;
	background-color: #009ee4;
	border-radius: 6px;
	border: 1px solid #009ee4;
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	color: #ffffff;
	font-family: 'Roboto', sans-serif;
	&:hover {
		background-color: #0080c1;
	}
	& span {
		display: block;
		font-size: 14px;
		font-weight: 400;
	}
	@media ${device.min} {
		width: 100%;
		height: 57px;
		font-size: 14px;
		line-height: 20px;
		max-width: 320px;
		color: #ffffff;
		& span {
			font-size: 12px;
		}
	}
`;

export const AdPageArticleAuthor = styled.div`
	margin-top: 34px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	@media ${device.min} {
		margin-top: 30px;
		margin-bottom: 30px;
	}
`;

export const AdPageAuthorImg = styled.div`
	width: 40px;
	height: 40px;
	background-color: #f0f0f0;
	border-radius: 50%;
	& img {
		width: 40px;
		height: 40px;
		background-color: #f0f0f0;
		border-radius: 50%;
	}
`;

export const AdPageAuthorCont = styled.div`
	margin-left: 12px;
`;

export const AdPageAuthorName = styled.p`
	font-size: 20px;
	line-height: 26px;
	font-weight: 600;
	color: #009ee4;
	@media ${device.min} {
		font-size: 18px;
		line-height: 23px;
		font-weight: 600;
	}
`;

export const AdPageAuthorAbout = styled.p`
	font-size: 16px;
	line-height: 32px;
	color: #5f5f5f;
	@media ${device.min} {
		font-size: 14px;
		line-height: 28px;
	}
`;

export const AdPageFooter = styled.footer`
	display: none;
`;

export const AdPageArticleImgBar = styled.div`
	margin-top: 30px;
	width: 490px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	overflow: hidden;
	margin-left: -5px;
	@media ${device.min} {
		display: none;
	}
`;

export const AdPageArticleImgBarDiv = styled.div`
	width: 88px;
	min-width: 88px;
	height: 88px;
	background-color: #f0f0f0;
	margin: 0 5px;
	border: 2px solid rgba(0, 158, 228, 1);
	cursor: pointer;
	& img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
`;

export const AdPageArticleImgBarMob = styled.div`
	display: none;
	@media ${device.min} {
		width: 68px;
		height: 8px;
		position: absolute;
		top: 347px;
		display: flex;
		gap: 7px;
		justify-content: center;
		z-index: 10;
	}
`;

export const AdPageArticleImgBarMobCircleActive = styled.div`
	display: none;
	@media ${device.min} {
		display: flex;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: 1px solid black;
	}
`;

export const AdPageBtnDiv = styled.div`
	display: flex;
	@media ${device.min} {
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
`;
