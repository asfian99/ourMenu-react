const Menu = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between mx-8 mt-6">
      {/* this is each menu wrapper */}
      {items.map((menuItem) => {
        const { id, name, detail, img, price } = menuItem;
        return (
          <div
            key={id}
            className="flex flex-row m-4 p-2"
            style={{ width: "550px", height: "150px" }}
          >
            <img className="rounded-lg w-2/5" src={img} alt="" />
            {/* this is each menu item wrapper*/}
            <div className="w-3/5 ml-4">
              <div className="flex flex-row justify-between border-b-2 mb-4">
                <h4 className="text-lg font-bold">{name}</h4>
                <p className="text-lg font-semibold">$ {price}</p>
              </div>
              <p className="text-gray-900 text-opacity-75">{detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
