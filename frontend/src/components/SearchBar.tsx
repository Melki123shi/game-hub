import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width={"100%"} startElement={<BsSearch size={21}/>}>
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={22}
          height={12}
          fontSize={19}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
