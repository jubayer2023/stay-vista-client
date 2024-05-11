import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(selected)

  let currentQuery = {};

  const handleCategory = () => {
    // console.log(label, searchParams);
    // console.log(searchParams);

    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
      // console.log(currentQuery);
    }

    const updatedQuery = { ...currentQuery, category: label };

    const searchURL = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    // console.log(
    //   "[searchURL ===] ",
    //   searchURL,
    //   "[updatedQuery === ]",
    //   updatedQuery,
    //   "[currentQuery ===]",
    //   currentQuery
    // );

    navigate(searchURL);
  };

  return (
    <div
      onClick={handleCategory}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "hover:text-neutral-800 border-b-pink-600 border-b-4 transition" : ""
      }`}
    >
      <Icon size={26}></Icon>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
