import { Footer } from './Components/Footer';
import { GenerateBtn } from "./Components/GenerateBtn";
import { CopyBtn } from "./Components/CopyBtn";
import { Symbols } from "./Components/Symbols";
import { Numbers } from "./Components/Numbers";
import { PasswordLength } from "./Components/PasswordLength";
import { DisplayPassword } from "./Components/DisplayPassword";
import { useCallback, useRef, useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState("10");
  const [includeNum, setIncludeNum] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNum) allCharacters += "0123456789";
    if (includeChar) allCharacters += "~!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
    setPassword(password);
    console.log(password.length);
  }, [length, includeChar, includeNum]);

  const copyPassword = useCallback(() => {
    if (password == "") return;
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="bg-[#94a3b8] w-full h-screen px-2 select-none flex flex-col justify-center items-center">
        <div className="bg-[#222629] max-w-sm w-full p-8 text-white rounded grid gap-4">
          <div>
            <DisplayPassword password={password} passwordRef={passwordRef} />
            <CopyBtn copyPassword={copyPassword} />
          </div>
          <div className="flex items-center justify-between">
            <PasswordLength setLength={setLength} length={length} />
            <p>Length: {length}</p>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="numbers">Include Numbers</label>
            <Numbers setIncludeNum={setIncludeNum} includeNum={includeNum} />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="characters">Include Special Characters</label>
            <Symbols
              setIncludeChar={setIncludeChar}
              includeChar={includeChar}
            />
          </div>
          <GenerateBtn generatePassword={generatePassword} />
        </div>
        <Footer     />
      </div>
    </>
  );
}
