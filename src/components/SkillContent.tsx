interface SkillContentProps {
  name: string;
  alt: string;
  type: string;
  src: string;
}

export const SkillContent = ({ name, alt, type, src }: SkillContentProps) => {
  return (
    <div className="w-[275px] h-20 flex justify-start items-center px-3 gap-3 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition">
      <figure className="w-14 h-14 flex items-center justify-center rounded-lg bg-zinc-800 px-3">
        <img
          src={src}
          alt={alt}
          className="w-full"
        />
      </figure>
      <div>
        <span className="block text-base text-white font-medium">{name}</span>
        <span className="block text-xs text-zinc-500">{type}</span>
      </div>
    </div>
  );
};
