import { useContext, useReducer, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Box, Button, Divider, Input, LogoText, TextField } from "@components";
import { brandLogo, exclaimationIcon } from "@assets";
import { newUserCredInit, newUserCredReducer } from "./newUserCredReducer";
import { AuthContext } from "@contexts/AuthContext";
import { EStatus } from "@typelib/contexts";

const Join = () => {
  const [{ email, username, password }, dispatch] = useReducer(
    newUserCredReducer,
    newUserCredInit
  );
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const { signUpStatus, signUp } = useContext(AuthContext);
  const signUpCheck = useRef(false);
  const navigate = useNavigate();

  const handleUserSignUp = () => {
    if (password !== confirmPassword) {
      setIsPasswordMismatch(true);
      return;
    }

    setIsPasswordMismatch(false);
    signUpCheck.current = true;
    signUp({ email, username, password }, () => navigate("/getin"));
  };

  return (
    <>
      {/* <header></header> */}

      <main className="bg-gray-100">
        <Box style="min-h-fit h-dvh flex flex-col items-center justify-center *:w-68 xl:*:w-1/5">
          <Box style="flex justify-center">
            <LogoText
              style="pb-2"
              icon={brandLogo}
              iconStyle="w-6 h-6"
              text="Workon"
              textStyle="text-xl font-semibold text-gray-600"
            />
          </Box>

          <Box style="p-4 flex flex-col gap-4 justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.2)] bg-linear-to-br from-blue-300/65 to-gray-400/65 rounded-xl">
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(text) => dispatch({ type: "EMAIL", payload: text })}
            />

            <Box>
              <Input
                placeholder="set username"
                value={username}
                onChange={(text) =>
                  dispatch({ type: "USERNAME", payload: text })
                }
              />
              {signUpCheck.current && signUpStatus === EStatus.Failed && (
                <LogoText
                  icon={exclaimationIcon}
                  text="Username already taken"
                  textStyle="text-sm text-red-500 font-semibold"
                />
              )}
            </Box>

            <Input
              type="password"
              placeholder="set password"
              value={password}
              onChange={(text) => dispatch({ type: "PASSWORD", payload: text })}
            />

            <Box>
              <Input
                type="password"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(text) => setConfirmPassword(text ?? "")}
              />
              {isPasswordMismatch && (
                <LogoText
                  icon={exclaimationIcon}
                  text="Password mismatch"
                  textStyle="text-sm text-red-500 font-semibold"
                />
              )}
            </Box>

            <Button
              onClick={handleUserSignUp}
              style="w-full h-fit rounded-md py-0.5 cursor-pointer shadow-md bg-amber-100 font-semibold text-md text-gray-700 "
            >
              <TextField text="Join" />
            </Button>
          </Box>

          <Divider text="or" />

          <Link
            to="/getin"
            className="text-sm text-center px-1 text-blue-800 font-semibold hover:underline w-fit"
          >
            Already Joined?
          </Link>
        </Box>
      </main>

      {/* <footer></footer> */}
    </>
  );
};

export default Join;
