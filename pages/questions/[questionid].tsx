import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Question } from 'types';

import axios from 'axiosInstance';
import Container from 'components/Container';
import QuestionDetail from 'containers/QuestionDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/FormElements';

const Question: NextPage = () => {
  const router = useRouter();
  const { questionid } = router.query;

  const [question, setQuestion] = useState<Question>();
  const [isLoading, setIsLoading] = useState(false);

  const getQuestionDetail = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(`questions/${questionid}`);
      const newData = {
        ...data,
        published_at: new Date(data.published_at),
      };
      setQuestion(newData);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }, [questionid]);

  useEffect(() => {
    getQuestionDetail();
  }, [getQuestionDetail]);

  return (
    <div>
      <Head>
        <title>{question?.question}</title>
        <meta name='description' content='Yemek.com test case' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container>
          <Button type='button' onClick={() => router.back()}>
            <FontAwesomeIcon icon='arrow-left' style={{ marginRight: "0.5rem" }}></FontAwesomeIcon>
            Geri Dön
          </Button>
          <h1>{question?.question}</h1>
          <QuestionDetail isQuestionLoading={isLoading} question={question} getQuestionDetail={getQuestionDetail} />
        </Container>
      </main>
    </div>
  );
};

export default Question;
