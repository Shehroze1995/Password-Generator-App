// eslint-disable-next-line react/prop-types
export function CopyBtn({copyPassword}) {
  return <button onClick={copyPassword} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded mt-2">
              Copy
            </button>;
}
  