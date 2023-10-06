// eslint-disable-next-line react/prop-types
export function Symbols({setIncludeChar,includeChar}) {
  return <input onChange={() => setIncludeChar(!includeChar)} type="checkbox" id="characters" className="w-4 h-4" />;
}
  