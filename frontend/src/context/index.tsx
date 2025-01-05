import { BackendUrl } from "@/contants";
import {
  setLoginStatus,
  updateFriends,
  updateRegisteredUsers,
  updateWholeRequests,
} from "@/redux/slices/auth";
import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
export const conn = createContext<any | null>(null);

const conProv = ({ children }: any) => {
  const dispatch = useDispatch();
  //@ts-ignore
  const stateInfo = useSelector((state) => state.authList);
  const checkIsLoggedIn = async () => {
    try {
      const res = await axios.get(BackendUrl + "/api/check", {
        withCredentials: true,
      });
      dispatch(setLoginStatus({ status: true, user: res.data.user }));
    } catch (err) {
      //Error while checking weather the user is logged in or not...
      toast.error(
        "Something went wrong while checking for user logged in status :("
      );
    }
  };
  const getFriendsList = async () => {
    try {
      const res = await axios.get(BackendUrl + "/api/getFriends", {
        withCredentials: true,
      });
      dispatch(updateWholeRequests({ type: "", requests: res.data.requests }));
    } catch (err) {
      console.log(err);
    }
  };
  const getRequestsList = async () => {
    try {
      const res = await axios.get(BackendUrl + "/api/getRequests", {
        withCredentials: true,
      });
      dispatch(updateFriends({ friends: res.data.friends }));
    } catch (err) {
      console.log(err);
    }
  };
  const getRegisteredList = async () => {
    try {
      const res = await axios.get(BackendUrl + "/api/getRegisteredUser", {
        withCredentials: true,
      });
      dispatch(updateRegisteredUsers({ users: res.data.users }));
    } catch (err) {
      console.log(err);
    }
  };
  const doStuff = async () => {
    try {
      await Promise.all([
        getFriendsList(),
        getRequestsList(),
        getRegisteredList(),
      ]);
    } catch (err) {
      console.error("Error in fetching data", err);
    }
  };
  useEffect(() => {
    if (stateInfo.isLoggedIn) {
      doStuff();
    }
  }, [stateInfo]);
  useEffect(() => {
    checkIsLoggedIn();
  }, []);
  return <conn.Provider value={{}}>{children}</conn.Provider>;
};
export default conProv;
