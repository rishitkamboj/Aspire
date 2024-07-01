import Image from 'next/image';



const ProjectSingle= ({ projectName, projectDesc, projectLink ,img,techstack}:any) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
      <div >
        <Image   className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none w-60 h-full object-cover" src={img} alt="image description" />
      </div>
      <div >
        <div className='text-gray-200 lg:text-3xl text-2xl font-semibold '>{projectName}</div>
        <div className='text-gray-100 lg-text-2xl'>{projectDesc}</div>
        <div className='text-gray-100 lg-text-2xl'><span className='grad'>Tech Stack-</span>{techstack}</div>
        <div><a href={projectLink} target="_blank" rel="noopener noreferrer" className='text-gray-100 font-medium'>Project Link</a></div>
      </div>
    </div>
  );
};

export default ProjectSingle;
