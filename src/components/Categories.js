const Categories = ({ categories, filterItems }) => {
  return (
    <>
      <div className="text-center my-4">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => filterItems(category)}
              className="capitalize text-teal-600 text-lg hover:bg-teal-800 hover:text-white duration-300  rounded mx-2 py-2 px-4"
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
