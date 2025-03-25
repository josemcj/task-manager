function Select({ items, value = '', id = '', onChange }) {
  return (
    <select id={id} className="select" value={value} onChange={onChange}>
      <option value="" disabled>
        Seleccionar
      </option>
      {items.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
