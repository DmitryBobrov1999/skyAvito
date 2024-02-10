import moment from 'moment/moment';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Spinner } from '@components/spinner/Spinner';
import { useSellerAdsQuery } from '@store/slices/apiSlice';
import { useSpecificAdQuery } from '@store/slices/apiSlice';
import { AddAdPage } from '../addAd/AddAdPage';
import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import * as S from './SellerProfilePage.styles';
import { BigLogo } from '@icons/BigLogo';

export const SellerProfilePage = () => {
	const [showNumber, setShowNumber] = useState(false);
	let { id, user_id } = useParams();
	const { data: sellerAds, isLoading } = useSellerAdsQuery({ user_id });
	const { data: specificAd } = useSpecificAdQuery({ id });
	const [activeAddAd, setActiveAddAd] = useState(null);

	return (
		<>
			<S.SellerProfilePageWrapper
				style={
					activeAddAd && { WebkitFilter: 'blur(5px)', filter: 'blur(5px)' }
				}
			>
				{isLoading ? (
					<Spinner />
				) : (
					<S.SellerProfilePageContainer>
						<Header  setActiveAddAd={setActiveAddAd} />

						<S.SellerProfilePageMain>
							<S.SellerProfilePageMainContainer>
								<S.SellerProfilePageMainCenterBlock>
									<S.SellerProfilePageMainMenu>
										<S.SellerProfilePageHeaderLogo>
											<BigLogo />
										</S.SellerProfilePageHeaderLogo>

										<S.SellerProfilePageMenuForm action='#'>
											<NavLink to='/'>
												<S.SellerProfilePageHeaderBtn>
													Вернуться на&nbsp;главную
												</S.SellerProfilePageHeaderBtn>
											</NavLink>
										</S.SellerProfilePageMenuForm>
									</S.SellerProfilePageMainMenu>

									<S.SellerProfilePageTitle>
										Профиль продавца
									</S.SellerProfilePageTitle>

									<S.SellerProfilePageProfileSell>
										<S.SellerProfilePageSellContent>
											<S.SellerProfilePageSellSeller>
												<S.SellerProfilePageSellerLeft>
													<S.SellerProfilePageSellerImg>
														<img
															src={`http://localhost:8090/${specificAd?.user?.avatar}`}
															alt='sellerImg'
														/>
													</S.SellerProfilePageSellerImg>
												</S.SellerProfilePageSellerLeft>
												<NavLink to={`/seller/${specificAd?.id}`}>
													<S.AltBtnClose />
												</NavLink>
												<S.SellerProfilePageSellerRight>
													<S.SellerProfilePageSellerTitle>
														{specificAd?.user?.name}
													</S.SellerProfilePageSellerTitle>
													<S.SellerProfilePageSellerCity>
														{specificAd?.user?.city}
													</S.SellerProfilePageSellerCity>
													<S.SellerProfilePageSellerInf>
														Продает товары с{' '}
														{moment(specificAd?.user?.sells_from).format('LL')}
													</S.SellerProfilePageSellerInf>

													<S.SellerProfilePageSellerBtn
														onClick={() => setShowNumber(true)}
													>
														Показать&nbsp;телефон
														<span>
															{showNumber
																? specificAd?.user?.phone
																: specificAd?.user?.phone.slice(0, -9) +
																  `ХХХ ХХ ХХ`}
														</span>
													</S.SellerProfilePageSellerBtn>
												</S.SellerProfilePageSellerRight>
											</S.SellerProfilePageSellSeller>
										</S.SellerProfilePageSellContent>
									</S.SellerProfilePageProfileSell>

									<S.SellerProfilePageMainTitle>
										Товары продавца
									</S.SellerProfilePageMainTitle>
								</S.SellerProfilePageMainCenterBlock>
								<S.SellerProfilePageMainContent>
									{sellerAds &&
										sellerAds.map(sellerAd => (
											<NavLink to={`/seller/${sellerAd?.id}`} key={sellerAd.id}>
												<S.SellerProfilePageCardsCard>
													<S.SellerProfilePageCardsItem>
														<S.SellerProfilePageCardsCard>
															<S.SellerProfilePageCardsImg>
																<img
																	src={`http://localhost:8090/${sellerAd?.images[0]?.url}`}
																	alt='sellerPict'
																/>
															</S.SellerProfilePageCardsImg>
															<S.SellerProfilePageCardsContent>
																<S.SellerProfilePageCardsTitle>
																	{sellerAd?.title}
																</S.SellerProfilePageCardsTitle>

																<S.SellerProfilePageCardsPrice>
																	{sellerAd.price
																		.toString()
																		.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}{' '}
																	₽
																</S.SellerProfilePageCardsPrice>
																<S.SellerProfilePageCardsPlace>
																	{sellerAd?.user?.city}
																</S.SellerProfilePageCardsPlace>
																<S.SellerProfilePageCardsDate>
																	{moment(sellerAd?.created_on).format('LL')}
																</S.SellerProfilePageCardsDate>
															</S.SellerProfilePageCardsContent>
														</S.SellerProfilePageCardsCard>
													</S.SellerProfilePageCardsItem>
												</S.SellerProfilePageCardsCard>
											</NavLink>
										))}
								</S.SellerProfilePageMainContent>
							</S.SellerProfilePageMainContainer>
						</S.SellerProfilePageMain>
						<Footer />
					</S.SellerProfilePageContainer>
				)}
			</S.SellerProfilePageWrapper>
			{activeAddAd && <AddAdPage setActiveAddAd={setActiveAddAd} />}
		</>
	);
};
