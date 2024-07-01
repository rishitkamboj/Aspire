import Image from 'next/image';

const Skills = ({ src, skillName }:any) => {
  return (
    <div>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white mr-2">
       
          <Image src={src} alt={skillName} width={32} height={32} />
        </div>
        {skillName}
      </span>
    </div>
  );
};

export default Skills;
