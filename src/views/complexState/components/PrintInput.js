import { useCallback, useState } from 'react';

function PrintInput({ value = { amount: 0, currency: 'RMB' }, onChange = () => {} }) {
  const handleChange = useCallback(
    (newValue) => {
      onChange({
        ...value,
        ...newValue,
      });
    },
    [onChange, value],
  );
  return (
    <>
      <input
        type="text"
        value={value.amount}
        onChange={(evt) => handleChange({ amount: evt.target.value })}
      />
      <select
        value={value.currency}
        onChange={(evt) => handleChange({ currency: evt.target.value })}
      >
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
        <option value="eur">EUR</option>
      </select>
    </>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [price, setPrice] = useState();
  return (
    <>
      <PrintInput value={price} onChange={setPrice} />
      <p>{JSON.stringify(price)}</p>
    </>
  );
};
