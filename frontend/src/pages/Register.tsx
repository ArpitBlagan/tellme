import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiGithubFill } from "@remixicon/react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const signinSchema = z.object({
  email: z.string().email("Please provide valid email address."),
  password: z.string().min(6, "Password should be atleast 6 characters long."),
});

type signin = z.infer<typeof signinSchema>;
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";

import { BorderBeam } from "@/components/ui/border-beam";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signin>({
    // defaultValues: {
    //   email: "blaganarpit@gmail.com",
    //   password: "Ab@123456",
    // },
    resolver: zodResolver(signinSchema),
  });
  const onSubmit: SubmitHandler<signin> = (data) => {
    toast.promise(
      async () => {
        setLoading(true);
      },
      {
        loading: "Loading...",
        success: () => {
          setLoading(false);
          navigate("/");
          return "Signin successfully 😁.";
        },
        error: () => {
          setLoading(false);
          return "Signin falied pleaes check your email & password combination and try again later ❌.";
        },
      }
    );
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] mx-2 gap-4 ">
      <div className="relative w-full md:w-1/2 min:h-1/2 flex flex-col items-center justify-center gap-4 bg-zinc-800 rounded-xl py-5 px-7">
        <BorderBeam
          className="hidden md:block"
          size={250}
          duration={32}
          delay={9}
        />
        <div className="flex flex-col items-center justify-center gap-3">
          <Link to="/">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[70px] w-[100px] mb-2"
            >
              <path
                fill="#F2F4F8"
                d="M23.4,-9.7C30.9,15.6,38.1,39,31.9,43.3C25.8,47.6,6.2,32.9,-5.5,21.2C-17.2,9.4,-21.2,0.6,-19,-17.4C-16.8,-35.4,-8.4,-62.6,-0.2,-62.6C7.9,-62.5,15.8,-35.1,23.4,-9.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </Link>
          <p className="text-lg text-white">Welcome back to Refnet</p>
          {/* <p className="text-md tracking-tight text-gray-300">
          For testing purpose I have already put the credentials so you guys don't have to 👀.
          </p>  */}
        </div>
        <form
          className="flex flex-col gap-4 w-full items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("email")}
            className="w-full lg:w-1/2 border-zinc-800 bg-black  h-[40px] text-white"
            placeholder="Enter your email address"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-black rounded-md">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className=" w-full py-3  h-[40px] border-zinc-800 text-white"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute hover-bg-none right-0 top-0 h-full px-3 py-2  text-gray-400 hover:text-gray-600"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </Button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          <Button
            type="submit"
            disabled={loading}
            className="py-5 hover:bg-gray-700 text-white duration-300 ease-in-out mb-3 w-1/2"
          >
            Sign in
          </Button>
        </form>
        <hr className="border border-zinc-700 w-full" />
        <Button
          onClick={async (e) => {
            e.preventDefault();
          }}
          className="flex items-center text-white gap-3 mt-3 hover:bg-gray-700 duration-300 ease-in-out"
        >
          Sign in with Github <RiGithubFill />
        </Button>
        <p>
          Don't have an Account?{"  "}
          <a href="/signup" className="text-blue-400 underline">
            Sign up
          </a>
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-600 text-center">
          By using Refnet, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </div>
  );
}

export default Register;
