/* eslint-disable react/prop-types */
const Stats = ({ stats }) => {
  const { title, fill, value } = stats;
  return (
    <div className='text-white'>
      <span>{title}</span>
      <div className="flex gap-4 items-center w-fit">
        <div className="w-[149px] bg-[#9499C333] h-[6px] rounded-[10px] overflow-hidden">
          <div
            style={{ width: `${fill}%` }}
            className="h-full bg-[#298BFE]"
          ></div>
        </div>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Stats;
