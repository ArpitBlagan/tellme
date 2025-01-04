import { RiSearchLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import { BackendUrl, trimText } from "../contants";
import { toast } from "sonner";
import { Triangle } from "react-loader-spinner";
import axios from "axios";

const SearchSection = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const getResults = async (ff: string) => {
    console.log(ff);
    try {
      const res = await axios.get(
        BackendUrl + `/api/search?searchText=${ff}&limit=5`
      );
      console.log(res.data);
      setResults(res.data.users);
    } catch (err) {
      toast.error(
        "something went wrong while getting results for you search 🥲."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    let time: any;
    let ff = trimText(text);
    if (ff.length) {
      setLoading(true);
      time = setTimeout(() => {
        getResults(ff);
      }, 2000);
    } else {
      // If search text is empty, clear the results and stop loading
      setLoading(false);
      setResults([]); // Clear results when search is empty
    }
    return () => {
      clearTimeout(time);
    };
  }, [text]);
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className={`relative ${
          isFocused ? "w-8/12" : "w-1/2"
        } transition-all duration-300 ease-in-out`}
      >
        <Input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-full py-5 font-semibold pl-10 pr-4 text-gray-900 bg-white border-2 border-gray-300 rounded-full focus:outline-none  transition-all duration-300 ease-in-out"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <RiSearchLine
            className={`h-5 w-5 ${
              isFocused ? "text-black" : "text-gray-400"
            } transition-all duration-300 ease-in-out`}
          />
        </div>
      </div>
      <div className=" my-10">
        {loading ? (
          <div>
            <Triangle />
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-3">Result</div>
            {text.length ? (
              <p className="text-center text-gray-700 font-bold">
                {results.length > 0 ? "No more data left" : "No related Data."}
              </p>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
