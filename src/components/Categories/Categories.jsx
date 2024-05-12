import { useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <Container>
      <div className="flex flex-row items-center justify-between overflow-x-auto py-4">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            label={item?.label}
            icon={item?.icon}
            selected={category === item?.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
