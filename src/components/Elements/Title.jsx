const Title = (props) => {
  const { h1, span, p } = props;
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-[#1A2D57] mb-4">
        {h1}
        <span className="text-[#ED9E87]">{span}</span>
      </h1>
      <p className="text-center text-sm text-[#AEABAB]">{p}</p>
    </>
  );
};
export default Title;
