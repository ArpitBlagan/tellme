import { MarqueeDemo } from "@/components/Demo";

import { Button } from "@/components/ui/button";
import Ripple from "@/components/ui/ripple";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-[90vh] relative  flex items-center justify-center">
        <Ripple />
        <div className="text-center flex flex-col gap-3">
          <p className="text-[5em]">Find new friends</p>
          <p className="text-3xl">
            Discover New Connections, Build Lasting Friendships
          </p>
          <p>
            A social platform designed to help you meet new people, find friends
            with shared interests, and grow your social circle effortlessly.
          </p>
          <div className="flex items-center justify-center">
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Enter the world of Findy 😄
            </Button>
          </div>
        </div>
      </div>
      <MarqueeDemo />
    </div>
  );
};

export default Home;
