const SectionTitle = ({ title, text }) => {
  return (
    <div className='my-4 md:my-6 lg:my-8'>
      <p className='text-center lg:w-1/3 w-full  mx-auto text-gray-500 dark:text-slate-300 text-xl my-4 italic '>
        {text}
      </p>
      <h1 className='text-center capitalize  pb-6 mx-auto lg:w-1/2 w-full text-black dark:text-white lg:text-3xl text-2xl font-bold'>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
