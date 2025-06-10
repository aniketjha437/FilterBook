const Form = (props) => {
  return (
    <>
      <form action="" className="border-2 mb-22">
        <input
          type="text"
          placeholder="Search Contacts"
          className="input text-white w-100 "
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Form;
