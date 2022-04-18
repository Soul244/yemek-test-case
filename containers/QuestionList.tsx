import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Question } from 'types';

import axios from 'axiosInstance';
import Card, { CardBody, CardFooter } from 'components/Card';
import Grid from 'components/Grid';
import Loading from 'components/Loading';

function QuestionList() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios('questions?page=1');
        const newData = data.map((item: Question) => {
          return {
            ...item,
            published_at: new Date(item.published_at),
          };
        });
        setQuestions(newData);
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getQuestions();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid gridTemplateColumns={['auto', 'auto auto', 'auto auto auto', 'auto auto auto auto']}>
          <Link href='/questions/new'>
            <a>
              <Card hasShadowAnimation style={{ height: '100%' }}>
                <CardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesomeIcon icon='plus' size='2x' color='#1a1a1a' />
                </CardBody>
              </Card>
            </a>
          </Link>
          {questions.map((item, index) => (
            <Link key={`question-${index}`} href={item.url}>
              <a>
                <Card style={{ height: '100%' }} hasShadowAnimation>
                  <CardBody>{item.question}</CardBody>
                  <CardFooter>{item.published_at.toLocaleDateString()}</CardFooter>
                </Card>
              </a>
            </Link>
          ))}
        </Grid>
      )}
    </>
  );
}

export default QuestionList;
