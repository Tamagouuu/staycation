import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedValue = searchParams.get("sortBy") ?? "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return <Select onChange={handleChange} options={options} value={selectedValue} type="white" />;
}

export default SortBy;
