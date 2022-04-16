import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import ListGroup from 'components/ListGroup';
import ListGroupItem from 'components/ListGroupItem';
import axios from 'axiosInstance';
import { Question } from 'types';

const Question = () => {
  const router = useRouter();
  const { questionid } = router.query;

  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    const getQuestions = async () => {
      const { data } = await axios(`questions/${questionid}`);
      setQuestion(data);
    };
    getQuestions();
  }, [questionid]);

  return (
    <>
      <h1>{question?.question}</h1>
      <ListGroup>
        {question?.choices.map((item, index) => (
          <ListGroupItem key={`question-${index}`}>{item.choice}</ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default Question;
