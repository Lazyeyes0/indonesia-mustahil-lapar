import { footer, social, contact } from "../../assets";
const Footer = () => {
  return (
    <footer className="w-full bg-[#3C4344] text-white p-[70px]">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <img src={footer} alt="Indonesia Mustahil Lapar" className="-mt-6" />
          <p className="mt-10 text-sm text-white">
            Kuburaya Jalah Sui raya Dalam No 234 Kalimantan Barat
          </p>
          <div className="flex my-6 gap-4 items-center">
            {social.map((social) => (
              <a href="#" key={social.id}>
                <img src={social.image} alt="" />
              </a>
            ))}
          </div>
          <p className="text-sm text-white">© 2022 Indonesia Mustahil Lapar</p>
        </div>

        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-6">Link</h3>
          <ul>
            <li className="mb-4">
              <a href="#">Tentang</a>
            </li>
            <li className="mb-4">
              <a href="#">Layanan</a>
            </li>
            <li className="mb-4">
              <a href="#">Berita</a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-6">Kontak</h3>
          <ul>
            {contact.map((contact) => (
              <li key={contact.id} className="flex items-center gap-2 mb-4">
                <img src={contact.image} alt="" />
                <p>{contact.content}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold mb-6">Tentang Aplikasi</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            eligendi odio, similique adipisci exercitationem et eos aperiam.
            Enim inventore reprehenderit quos incidunt saepe, nihil reiciendis
            facere. Molestias id ducimus laborum, totam atque dolor in sed
            repellat, expedita voluptas officia adipisci.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
