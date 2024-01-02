import * as S from './CommentsPage.styles';
import moment from 'moment/moment';
import { useState } from 'react';
import { useAddCommentMutation } from '@store/slices/apiSlice';

export const CommentsPage = ({ setActiveModal, specificAd, comments }) => {
	const [text, setText] = useState('');

	const [addComment] = useAddCommentMutation();

	const [hover, setHover] = useState(false);

	const token = localStorage.getItem('access_token');

	const handleAddComment = async e => {
		e.preventDefault();
		if (text) {
			try {
				await addComment({ text, specificAd });
				setText('');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<S.CommentsPageModalBlock>
			<S.CommentsPageModalContent>
				<S.AltBtnCloseCommentsMin
					onClick={() => setActiveModal(null)}
				></S.AltBtnCloseCommentsMin>
				<S.CommentsPageModalTitle>Отзывы о товаре</S.CommentsPageModalTitle>

				<S.CommentsPageModalBtnClose onClick={() => setActiveModal(null)}>
					<S.CommentsPageModalBtnCloseLine></S.CommentsPageModalBtnCloseLine>
				</S.CommentsPageModalBtnClose>

				<S.CommentsPageModalScroll>
					<S.CommentsPageModalFormNewArt id='formNewArt' action='#'>
						<S.CommentsPageModalNewArtBlock>
							<label htmlFor='text'>Добавить отзыв</label>
							<S.CommentsPageFormNewAreaTextArea
								className='form-newArt__area'
								onChange={e => setText(e.target.value)}
								name='text'
								id='formArea'
								cols='auto'
								rows='5'
								placeholder='Введите описание'
							></S.CommentsPageFormNewAreaTextArea>
						</S.CommentsPageModalNewArtBlock>
						<S.CommentsPageFormBtnPub
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
							style={
								token
									? {
											background: hover ? '#0080c1' : 'rgba(0, 158, 228, 1)',
									  }
									: { background: 'rgba(217, 217, 217, 1)' }
							}
							disabled={token ? false : true}
							onClick={e => handleAddComment(e)}
						>
							Опубликовать
						</S.CommentsPageFormBtnPub>
					</S.CommentsPageModalFormNewArt>

					<S.CommentsPageModalReviews>
						{comments &&
							comments.map(comment => (
								<S.CommentsPageReviewsItem key={comment.id}>
									<S.CommentsPageReviewLeft>
										<S.CommentsPageReviewImg>
											<img
												src={`http://localhost:8090/${comment?.author?.avatar}`}
												alt='commentAvatar'
											/>
										</S.CommentsPageReviewImg>
									</S.CommentsPageReviewLeft>
									<S.CommentsPageReviewRight>
										<S.CommentsPageReviewName>
											{comment?.author?.name}{' '}
											<span>
												{moment(comment?.created_on).format('DD MMMM')}
											</span>
										</S.CommentsPageReviewName>
										<S.CommentsPageReviewTitle>
											Комментарий
										</S.CommentsPageReviewTitle>
										<S.CommentsPageReviewText>
											{comment?.text}
										</S.CommentsPageReviewText>
									</S.CommentsPageReviewRight>
								</S.CommentsPageReviewsItem>
							))}
					</S.CommentsPageModalReviews>
				</S.CommentsPageModalScroll>
			</S.CommentsPageModalContent>
		</S.CommentsPageModalBlock>
	);
};
