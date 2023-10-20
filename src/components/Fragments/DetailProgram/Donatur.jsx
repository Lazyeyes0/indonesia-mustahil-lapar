const Donatur = (props) => {
  const { donatur, satuan } = props;
  return (
    <div className="flex flex-col gap-5 h-[30vh] lg:h-[60vh] overflow-y-auto">
      {donatur.map((item) => (
        <div
          className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3"
          key={item.id}
        >
          <div className="w-[73px] h-[73px]">
            {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
            <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
          </div>
          <div className="w-[285px]">
            <h2 className="text-lg font-bold text-[#ED9E87]">{item.name}</h2>
            <h1 className="text-2xl font-bold text-[#1a2d57]">
              {item.jumlah} {satuan}
            </h1>
            <p className="text-[#AEABAB] text-xs">{item.doa}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Donatur;
