import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// @ts-ignore: we don't need to import the type of the component

import axios from 'axiosInstance';
import ListGroup from 'components/ListGroup';
import ListGroupItem from 'components/ListGroupItem';
import { Question } from 'types';

const Home: NextPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    const getQuestions = async () => {
      const { data } = await axios('questions?page=1');
      setQuestions(data);
    };
    getQuestions();
  }, []);

  return (
    <>
      <h1>Yemek.com Test Case</h1>
      <ListGroup>
        {questions.map((item, index) => (
          <ListGroupItem key={`question-${index}`}>
            <Link href={item.url}>
              <a>{item.question}</a>
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default Home;
