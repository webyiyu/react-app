import { useCallback, useEffect, useMemo, useState } from 'react';
import { Table, Select } from 'antd';
import _ from 'lodash';
import { useAsync } from '../hooks/index';

const endpoint = 'https://60b2643d62ab150017ae21de.mockapi.io/';
const useArticle = () => {
  const { data, execute, error } = useAsync(
    useCallback(async () => {
      const res = await fetch(`${endpoint}/posts`);
      return await res.json();
    }, []),
  );
  useEffect(() => execute(), [execute]);

  return {
    articles: data,
    articlesError: error,
  };
};

const useCategories = () => {
  const { execute, data, error } = useAsync(
    useCallback(async () => {
      const res = await fetch(`${endpoint}/categories`);
      return await res.json();
    }, []),
  );
  useEffect(() => execute(), [execute]);

  return {
    categories: data,
    categoriesError: error,
  };
};

const useCombinedArticles = (articles, categories) => {
  return useMemo(() => {
    if (!articles || !categories) return [];
    return articles.map((article) => {
      return {
        ...article,
        category: categories.find((c) => String(c.id) === String(article.categoryId)),
      };
    });
  }, [articles, categories]);
};

const useFilteredArticles = (articles, selectedCategory) => {
  return useMemo(() => {
    if (!articles) return [];
    if (!selectedCategory) return articles;
    return articles.filter((article) => {
      return String(article?.category?.name) === String(selectedCategory);
    });
  }, [articles, selectedCategory]);
};

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const columns = [
    { dataIndex: 'title', title: 'Title' },
    { dataIndex: ['category', 'name'], title: 'Category' },
  ];

  const { articles, articlesError } = useArticle();
  const { categories, categoriesError } = useCategories();
  // 数据组合
  const combine = useCombinedArticles(articles, categories);
  // 数据过滤
  const result = useFilteredArticles(combine, selectedCategory);

  const options = useMemo(() => {
    const arr = _.uniqBy(categories, (c) => c.name).map((c) => ({
      value: c.name,
      label: c.name,
    }));
    arr.unshift({ value: null, label: 'All' });
    return arr;
  }, [categories]);

  if (articlesError || categoriesError) return 'failed';
  if (!result) return 'loading...';

  return (
    <div>
      <br />
      <Select
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
        options={options}
        style={{ width: '200px' }}
        placeholder="Select a category"
      />
      <Table dataSource={result} columns={columns} />
    </div>
  );
}
