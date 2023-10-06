// eslint-disable-next-line react/prop-types
export function Numbers({setIncludeNum,includeNum}) {
  return <input onChange={() => setIncludeNum(!includeNum)} type="checkbox" id="numbers" className="w-4 h-4" />;
}
  