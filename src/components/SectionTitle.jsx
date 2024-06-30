const SectionTitle = ({ title, text }) => {
  return (
    <div>
      <p className='text-center w-1/3  mx-auto text-gray-500 text-xl my-4 italic '>
        {text}
      </p>
      <h1 className='text-center capitalize  pb-6 mx-auto w-1/2 text-black text-5xl font-bold'>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
