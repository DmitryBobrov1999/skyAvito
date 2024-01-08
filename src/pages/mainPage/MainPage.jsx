import moment from 'moment/moment';
import 'moment/locale/ru';
import { Spinner } from '@components/spinner/Spinner';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './MainPage.styles';
import { useGetAdsQuery } from '@store/slices/apiSlice';
import { AddAdPage } from '../addAd/AddAdPage';
import { Footer } from '@components/footer/Footer';
import { BigLogo } from '@icons/BigLogo';
import { LittleLogo } from '@components/icons/LittleLogo';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '@store/slices/authSlice';

export const MainPage = () => {
	const { data: allAds, isLoading } = useGetAdsQuery();
	const [filteredWords, setFilteredWords] = useState('');
	const [filteredAds, setFilteredAds] = useState(null);
	const [activeAddAd, setActiveAddAd] = useState(null);
	const { isAuth } = useSelector(state => state.auth);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setAuth());
	}, [dispatch]);

	useEffect(() => {
		setFilteredAds(allAds);
	}, [allAds]);

	const exit = () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('myId');
	};

	const handleChange = event => {
		setFilteredWords(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();

		if (filteredWords) {
			const filteredAdsArray = allAds.filter(ads => {
				return ads.title.toLowerCase().includes(filteredWords.toLowerCase());
			});
			setFilteredAds(filteredAdsArray);
		} else {
			setFilteredAds(allAds);
		}
	};

	return (
		<>
			<S.MainPageWrapper>
				{isLoading ? (
					<Spinner />
				) : (
					<S.MainPageContainer>
						<S.MainPageHeader>
							<S.MainPageHeaderNav>
								{isAuth ? (
									<>
										<NavLink to='/login'>
											<S.MainPageHeaderBtnMainEnter
												onClick={async () => {
													await exit();
													window.location.reload();
												}}
												style={{ marginRight: '10px' }}
											>
												Выйти
											</S.MainPageHeaderBtnMainEnter>
										</NavLink>
										<NavLink to='/profile'>
											<S.MainPageHeaderBtnMainEnter>
												Личный кабинет
											</S.MainPageHeaderBtnMainEnter>
										</NavLink>
									</>
								) : (
									<NavLink to='/login'>
										<S.MainPageHeaderBtnMainEnter>
											Вход в личный кабинет
										</S.MainPageHeaderBtnMainEnter>
									</NavLink>
								)}
							</S.MainPageHeaderNav>
						</S.MainPageHeader>
						<S.MainPageMain>
							<S.MainPageMainSearch>
								<NavLink to='/'>
									<S.MainPageMainBigSvg>
										<BigLogo />
									</S.MainPageMainBigSvg>

									<S.MainPageMainLittleSvg>
										<LittleLogo />
									</S.MainPageMainLittleSvg>
								</NavLink>

								<S.MainPageMainForm onSubmit={handleSubmit}>
									<S.MainPageText
										type='text'
										placeholder='Поиск по объявлениям'
										name='search'
										onChange={handleChange}
									/>
									<S.MainPageMiniText
										type='text'
										placeholder='Поиск'
										name='search'
										onChange={handleChange}
									/>

									<S.MainPageSearchBtn type='submit'>Найти</S.MainPageSearchBtn>
								</S.MainPageMainForm>
							</S.MainPageMainSearch>
							<S.MainPageMainContainer>
								<S.MainPageMainH2Div>
									<S.MainPageMainH2>Объявления</S.MainPageMainH2>
								</S.MainPageMainH2Div>

								<S.MainPageMainContentCards>
									{filteredAds &&
										filteredAds.map(ads => {
											const img = ads.images[0]?.url;

											return (
												<S.MainPageMainCardsItemNav
													key={ads.id}
													to={`/seller/${ads?.id}`}
												>
													<S.MainPageMainCardsItem>
														<S.MainPageMainCardsCard>
															<S.MainPageMainCardImg>
																<S.MainPageCardImg
																	src={`http://localhost:8090/${img}`}
																/>
															</S.MainPageMainCardImg>

															<S.MainPageCardContent>
																<S.MainPageCardTitle>
																	{ads.title}
																</S.MainPageCardTitle>
																<S.MainPageCardPrice>
																	{ads.price
																		.toString()
																		.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}{' '}
																	₽
																</S.MainPageCardPrice>
																<S.MainPageCardPlaceDate>
																	<S.MainPageCardPlace>
																		{ads.user?.city}
																	</S.MainPageCardPlace>
																	<S.MainPageCardDate>
																		{moment(ads.created_on).format('LLL')}
																	</S.MainPageCardDate>
																</S.MainPageCardPlaceDate>
															</S.MainPageCardContent>
														</S.MainPageMainCardsCard>
													</S.MainPageMainCardsItem>
												</S.MainPageMainCardsItemNav>
											);
										})}
								</S.MainPageMainContentCards>
							</S.MainPageMainContainer>
						</S.MainPageMain>

						<Footer setActiveAddAd={setActiveAddAd} />
					</S.MainPageContainer>
				)}
			</S.MainPageWrapper>
			{activeAddAd && <AddAdPage setActiveAddAd={setActiveAddAd} />}
		</>
	);
};
