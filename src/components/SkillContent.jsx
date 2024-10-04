export const SkillContent = ({ name, type, src }) => {
  return (
    <div className="w-[275px] h-20 flex justify-start items-center px-3 gap-3 rounded-2xl border border-zinc-700">
      <figure className="w-[60px] h-[60px] flex items-center justify-center rounded-[10px] bg-zinc-800">
        <img src={src} alt="react" className="w-10" />
      </figure>
      <div>
        <span className="block text-base text-zinc-50 font-medium">{name}</span>
        <span className="block text-xs text-zinc-600 font-medium">{type}</span>
      </div>
    </div>
  );
};
