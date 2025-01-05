import SearchSection from "@/components/SearchSection";
import { useSelector } from "react-redux";

const List = () => {
  //@ts-ignore
  const state = useSelector((state) => state.auth);
  return (
    <div className="my-4 min-h-[80vh]">
      <SearchSection />
      <div>
        <p className="text-center text-xl">Recent registered user </p>
        <div className="grid min:grid-col-2 gap-2">
          {state.recentRegisteredUsers &&
            state.recentRegisteredUsers.map((ele: any, index: any) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3"
                >
                  <div>{/* <image src={ele.image || ""} /> */}</div>
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold">{ele.name}</p>
                    <p className="text-xl ">{ele.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default List;
