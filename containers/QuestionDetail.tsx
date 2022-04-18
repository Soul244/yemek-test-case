import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import axios from 'axiosInstance';
import Card, { CardBody } from 'components/Card';
import Grid from 'components/Grid';
import Loading from 'components/Loading';
import { Question } from 'types';
import { QuestionPropType } from 'propTypes';
import Alert from 'components/Alert';

const CardStyled = styled(Card)`
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transition: all 0.3s ease-in-out;
  }
`;

interface QuestionDetailProps {
  isQuestionLoading: boolean;
  question?: Question;
  getQuestionDetail: () => void;
}

const QuestionDetail = ({ isQuestionLoading, question, getQuestionDetail }: QuestionDetailProps) => {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const vote = async (url: string) => {
    try {
      setIsSuccess(null);
      await axios.post(url);
      setIsSuccess(true);
      getQuestionDetail();
    } catch (error) {
      setIsSuccess(false);
    }
  };

  return (
    <>
      {isQuestionLoading ? (
        <Loading />
      ) : (
        <Grid gridTemplateColumns={['auto', 'auto', 'auto', 'auto']}>
          {question?.choices.map((item, index) => (
            <CardStyled key={`question-${index}`} hasShadowAnimation onClick={() => vote(item.url)}>
              <CardBody style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.choice}</span>
                <span>Oy Sayısı: {item.votes}</span>
              </CardBody>
            </CardStyled>
          ))}
          {isSuccess === true && <Alert type='success'>Oylama Başarılı</Alert>}
          {isSuccess === false && <Alert type='error'>Hata gerçekleşti</Alert>}
        </Grid>
      )}
    </>
  );
};

QuestionDetail.propTypes = {
  isQuestionLoading: PropTypes.bool.isRequired,
  question: QuestionPropType,
  getQuestionDetail: PropTypes.func.isRequired,
};

export default QuestionDetail;
