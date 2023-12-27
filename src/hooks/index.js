import { useState, useCallback, useEffect } from 'react';
import useAsync from './useAsync';

function useCounter() {
  const [count, setCount] = useState(0);
  const add = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);
  const reset = useCallback(() => setCount(0), []);
  return {
    count,
    add,
    decrement,
    reset,
  };
}

const getPosition = () => {
  return {
    x: document.documentElement.scrollLeft,
    y: document.documentElement.scrollTop,
  };
};

const useScroll = () => {
  // 定一个 position 这个 state 保存滚动条位置
  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handler = () => {
      setPosition(getPosition(document));
    };
    // 监听 scroll 事件，更新滚动条位置
    document.addEventListener('scroll', handler);
    return () => {
      // 组件销毁时，取消事件监听
      document.removeEventListener('scroll', handler);
    };
  }, []);
  return position;
};

export { useCounter, useScroll, useAsync };
