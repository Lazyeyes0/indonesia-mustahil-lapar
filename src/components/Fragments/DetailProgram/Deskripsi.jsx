const Deskripsi = (props) => {
  const { desc } = props;
  return (
    <div className="h-[30vh] lg:h-[60vh] overflow-y-auto">
      <p>{desc}</p>
    </div>
  );
};
export default Deskripsi;
