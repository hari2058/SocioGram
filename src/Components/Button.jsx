export function Button({ text, onClick, type = "submit" }) {
  return (
    <>
      <button
        onClick={onClick}
        className=" 
      bg-[rgb(238,239,224)]
      px-4 py-2   hover:bg-[rgb(209,216,190)] hover:text-white text-center rounded-2xl  sm:w-full "
        type={type}
      >
        {text}
      </button>
    </>
  );
}
