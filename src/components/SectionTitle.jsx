const SectionTitle = ({ title, text }) => {
  return (
    <div>
      <p className='text-center lg:w-1/3 w-full  mx-auto text-gray-500 text-xl my-4 italic '>
        {text}
      </p>
      <h1 className='text-center capitalize  pb-6 mx-auto lg:w-1/2 w-full text-black lg:text-5xl text-4xl font-bold'>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
