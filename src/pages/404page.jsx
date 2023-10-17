import Anchor from "../components/Elements/Anchor";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center mt-[40px] items-center h-screen text-center h-screen gap-4">
      <h1 className="text-5xl font-bold">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-xl">Maaf, halaman yang Anda cari tidak ada.</p>
      <Anchor link="/">Kembali ke Beranda</Anchor>
    </div>
  );
};

export default NotFound;
