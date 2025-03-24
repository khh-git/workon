import { Button, Icon, Title } from "@components";
import {
  exclaimationIcon,
  fbLogo,
  googleLogo,
  msLogo,
  twitterLogo,
} from "@assets";

const Login = () => {
  return (
    <div className="min-h-fit h-dvh flex flex-col items-center justify-center bg-gray-50/50 *:w-68 xl:*:w-1/5">
      <div className="p-3">
        <Title logoStyle="w-6 h-6" />
      </div>

      <div className=" p-4 flex flex-col gap-4 justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.2)] bg-linear-to-br from-blue-300/65 to-gray-400/65 rounded-xl">
        <div className="flex justify-center items-center text-sm gap-2 text-red-500/90 font-semibold">
          <Icon icon={exclaimationIcon} desc="red exclaimation triangle" />
          <span>Incorrect Email/Password</span>
        </div>
        <input
          spellCheck={false}
          placeholder="Email"
          className="bg-white rounded-full px-2 py-0.5 w-full outline-0 shadow-md text-md text-gray-600 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400/75"
        />
        <input
          placeholder="Password"
          type="password"
          className="bg-white rounded-full px-2 py-0.5 w-full outline-0 shadow-md text-md text-gray-600 font-semibold placeholder:text-sm placeholder:text-gray-400/75 "
        />
        <a
          href="/"
          className="text-sm px-1 text-blue-800 font-semibold hover:underline w-fit"
        >
          Can't Get In ?
        </a>
        <Button style="w-full h-fit rounded-xl py-0.5 cursor-pointer shadow-md bg-amber-100 font-semibold text-md text-gray-600 ">
          <span>Get In</span>
        </Button>
      </div>

      <div className="p-4 flex gap-2 justify-center items-center text-gray-500">
        <hr className="w-5 mt-1 " />
        <span className="text-sm font-semibold ">or Get In with</span>
        <hr className="w-5 mt-1 " />
      </div>
      <div className="py-0 px-4 flex items-center justify-between">
        <Button style="cursor-pointer bg-transparent">
          <Icon icon={googleLogo} desc="google" style="w-5 h-5" />
        </Button>
        <Button style="cursor-pointer bg-transparent">
          <Icon icon={msLogo} desc="ms" style="w-5 h-5" />
        </Button>
        <Button style="cursor-pointer bg-transparent">
          <Icon icon={twitterLogo} desc="twitter" style="w-5 h-5" />
        </Button>
        <Button style="cursor-pointer bg-transparent">
          <Icon icon={fbLogo} desc="facebook" style="w-5 h-5" />
        </Button>
      </div>
      <div className="p-4 flex gap-2 justify-center items-center text-gray-500">
        <hr className="w-5 mt-1 " />
        <span className="text-sm font-semibold "> or haven't Joined ?</span>
        <hr className="w-5 mt-1 " />
      </div>
      <Button style="h-fit rounded-xl py-0.5 cursor-pointer shadow-[0px_2px_4px_rgba(0,0,0,0.2)] bg-amber-100 font-semibold text-md text-gray-700 ">
        <span>Join Now</span>
      </Button>
    </div>
  );
};

export default Login;
