import { categories } from "../../assets";

const CategoryIcon = (props) => {
  const { image, name } = props;
  return (
    <div className=" rounded-[1.25rem] border-[3px] border-[#1a2d57] w-[215px] h-[58px]">
      <div className="flex flex-row items-center py-2 px-4">
        <img src={image} className="w-8 h-8" alt="" />
        <p className="text-center mx-auto text-[#949494] font-bold text-sm">
          {name}
        </p>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-[50px] lg:mt-[70px]">
      {categories.map((category) => (
        <CategoryIcon
          key={category.name}
          image={category.image}
          name={category.name}
        />
      ))}
    </div>
  );
};

export default Category;
