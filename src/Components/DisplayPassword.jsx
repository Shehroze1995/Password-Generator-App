// eslint-disable-next-line react/prop-types
export function DisplayPassword({ password, passwordRef }) {
  return (
    <input
      className=" h-10 w-full rounded outline-none px-2 select-text text-black overflow-scroll"
      readOnly
      placeholder="Click Generate"
      type="text"
      value={password}
      ref={passwordRef}
    />
  );
}
