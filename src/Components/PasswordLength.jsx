// eslint-disable-next-line react/prop-types
export function PasswordLength({setLength,length}) {
  const handleChange = (e)=>{
    setLength(e.target.value)
  }
  return <input className="w-1/2" onChange={handleChange} type="range" min={10} max={50} value={length} />;
}
  