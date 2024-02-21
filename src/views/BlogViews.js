import React, { useEffect, useState } from 'react';

const TestMemo = () => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('faisal');
  const add = () => setCount((count) => count + 1);
  return (
    <>
      <ChildMemo userName={userName} />
      <button onClick={add}>click</button>
    </>
  );
};

const ChildMemo = React.memo(({ userName }) => {
  console.log('rendered');
  return <div> {userName}</div>;
});

export default function BlogViews(props) {
  useEffect(() => {
    console.log('blogViews', { props });
  }, []);
  return (
    <>
      <div>blogViews</div>
      <TestMemo />
    </>
  );
}
