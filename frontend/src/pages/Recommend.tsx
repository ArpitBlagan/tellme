import { BackendUrl } from "@/contants";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
const Recommend = () => {
  const [recommended, setRecommended] = useState([]);
  const getRecommendedUser = async () => {
    try {
      const res = await axios.get(BackendUrl + "/api/recommendedUser", {
        withCredentials: true,
      });
      setRecommended(res.data.users);
    } catch (err) {
      toast.error("Error while fetching recommended user.");
    }
  };
  useEffect(() => {
    getRecommendedUser();
  }, []);
  return (
    <div className="my-4 min-h-[80vh]">
      <div className="">
        <p className="text-center text-xl">
          Recommed user that can match you vibe{" "}
        </p>
        <div className="grid min:grid-col-2 gap-2">
          {recommended.map((ele: any, index: any) => {
            return (
              <div key={index}>
                <p>{ele.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
