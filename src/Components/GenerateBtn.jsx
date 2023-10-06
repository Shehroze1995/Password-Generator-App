// eslint-disable-next-line react/prop-types
export function GenerateBtn({generatePassword}) {
  return <button onClick={generatePassword} className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-2 px-4 rounded">
            Generate Password
          </button>;
}