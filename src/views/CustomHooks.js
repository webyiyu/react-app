import React, { useCallback } from 'react';
import faker from 'faker';
import { useCounter, useScroll } from '../hooks/index';

function Counter() {
  const { count, add, decrement, reset } = useCounter();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span> {count} </span>
      <button onClick={add}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

function ScrollTop() {
  const { y } = useScroll();
  const goTop = useCallback(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const style = {
    position: 'fixed',
    right: '10px',
    bottom: '10px',
  };
  if (y > 300) {
    return (
      <button style={style} onClick={goTop}>
        back to top
      </button>
    );
  }
  return null;
}

const data = [];
for (let i = 0; i < 40; i++) {
  data.push({
    id: i,
    name: faker.name.findName(),
    introduction: faker.lorem.paragraph(),
  });
}

export default function CustomHooks() {
  return (
    <div>
      <Counter />
      <div>
        <h1>Use Scroll Sample</h1>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.introduction}</p>
          </div>
        ))}
        <ScrollTop />
      </div>
    </div>
  );
}
