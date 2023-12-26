import React, { useEffect } from 'react';

export default function BlogViews() {
  useEffect(() => {
    console.log('blogViews');
  }, []);
  return <div>blogViews</div>;
}
