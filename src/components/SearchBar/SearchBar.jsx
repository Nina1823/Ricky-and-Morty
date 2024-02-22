import {
   SearchContainer,
   SearchInput,
   SearchIconContainer
} from "./SearchBar.styles";

export default function SearchBar(props) {
   const {onSearch} = props
   return (
      <SearchContainer>
         <SearchInput type='search'/>
         <SearchIconContainer>
         <button onClick={onSearch} style={{ backgroundColor: 'black', color: 'white' }}>Look</button>
         </SearchIconContainer>
     </SearchContainer>
   );
}
