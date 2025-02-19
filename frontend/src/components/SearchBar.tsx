import {  Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch size={21} />}>
      <Input placeholder="Search game..." borderRadius={22} height={12} fontSize={19} />
    </InputGroup>
  );
};

export default SearchBar;
