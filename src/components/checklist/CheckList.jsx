/* eslint-disable react/prop-types */
const CheckList = ({ checklist }) => {
  const { color, title, state } = checklist;
  return (
    <div className="flex gap-3">
      <span className="material-symbols-rounded" style={{ color: color }}>
        check_circle
      </span>
      <span>
        <div style={{ color: color, textTransform: 'uppercase' }}>{title}</div>
        <div style={{ color: color == '#9499C3' ? '#9499C380' : '#FFFFFF' }}>
          {state}
        </div>
      </span>
    </div>
  );
};

export default CheckList;
