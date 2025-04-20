import { Link } from "react-router";
import { useContext, useReducer, useRef } from "react";
import { credInit, credReducer } from "./credReducer";
import {
  Button,
  Box,
  Divider,
  Icon,
  LogoText,
  TextField,
  Input,
} from "@components";
import {
  brandLogo,
  exclaimationIcon,
  fbLogo,
  googleLogo,
  msLogo,
  twitterLogo,
} from "@assets";
import { AuthContext } from "@contexts/AuthContext";
import { EStatus } from "@typelib/contexts";

const GetIn = () => {
  const [creds, dispatch] = useReducer(credReducer, credInit);
  const { username, password } = creds;
  const { loginStatus, login } = useContext(AuthContext);
  const loginCheck = useRef(false);

  const handleUserLogin = () => {
    loginCheck.current = true;
    login(creds);
  };

  return (
    <>
      {/* <header></header> */}

      <main className="bg-gray-100">
        <Box style="min-h-fit h-dvh flex flex-col items-center justify-center *:w-68 xl:*:w-1/5 overflow-y-hidden">
          <Box style="flex justify-center">
            <LogoText
              style="pb-2"
              icon={brandLogo}
              iconStyle="w-6 h-6"
              text="Workon"
              textStyle="text-xl font-semibold text-gray-600"
            />
          </Box>

          <Box style=" p-4 flex flex-col gap-4 justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.2)] bg-linear-to-br from-blue-300/65 to-gray-400/65 rounded-xl">
            <Box>
              {loginCheck.current && loginStatus === EStatus.Failed && (
                <Box style="flex justify-center">
                  <LogoText
                    style="pb-1"
                    icon={exclaimationIcon}
                    text="Invalid username/password"
                    textStyle="text-sm text-red-500 font-semibold"
                  />
                </Box>
              )}

              <Input
                placeholder="username"
                value={username}
                onChange={(text) =>
                  dispatch({ type: "USERNAME", payload: text })
                }
              />
            </Box>

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(text) => dispatch({ type: "PASSWORD", payload: text })}
            />

            <Button
              onClick={handleUserLogin}
              style="w-full h-fit rounded-md py-0.5 cursor-pointer shadow-md bg-amber-100 font-semibold text-md text-gray-700 "
            >
              <TextField text="GetIn" />
            </Button>
          </Box>

          <Divider text="or GetIn with" />

          <Box style="py-0 px-4 flex items-center justify-between">
            <Button style="cursor-pointer bg-transparent group">
              <Icon
                icon={googleLogo}
                desc="google"
                style="w-5 h-5 transition-transform duration-100 group-hover:scale-140 ease-in "
              />
            </Button>
            <Button style="cursor-pointer bg-transparent group">
              <Icon
                icon={msLogo}
                desc="ms"
                style="w-5 h-5 transition-transform duration-100 group-hover:scale-140 ease-in "
              />
            </Button>
            <Button style="cursor-pointer bg-transparent group">
              <Icon
                icon={twitterLogo}
                desc="twitter"
                style="w-5 h-5 transition-transform duration-100 group-hover:scale-140 ease-in "
              />
            </Button>
            <Button style="cursor-pointer bg-transparent group">
              <Icon
                icon={fbLogo}
                desc="facebook"
                style="w-5 h-5 transition-transform duration-100 group-hover:scale-140 ease-in "
              />
            </Button>
          </Box>
          <Box style="pt-4 flex justify-center items-center">
            <Link
              to="/"
              className="text-sm px-1 text-blue-800 font-semibold hover:underline w-fit"
            >
              Can't Get In?
            </Link>
            <TextField
              text="or"
              style="mx-1 text-gray-600 text-sm font-semibold"
            />
            <Link
              to="/join"
              className="text-sm px-1 text-blue-800 font-semibold hover:underline w-fit"
            >
              Haven't Joined?
            </Link>
          </Box>
        </Box>
      </main>

      {/* <footer></footer> */}
    </>
  );
};

export default GetIn;
