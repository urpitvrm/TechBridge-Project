
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");

  const debouncedSearch = useMemo(() => {
    return debounce((query) => {
      onSearch(query);
    }, 500);
  }, [onSearch]);

  useEffect(() => {
    if (text.trim()) {
      debouncedSearch(text);
    } else {
      onSearch("");
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [text, debouncedSearch, onSearch]);

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search movies..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-64 rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-80 md:w-96"
      />
    </div>
  );
};

export default SearchBar;
