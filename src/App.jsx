import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* HERO SECTION START */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari ketekunan.💖</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hai, Saya Aziz Rahmad Arifin
          </h1>
          <p className="text-base/loose mb-6 opacity-60">
            Saya memiliki ketertarikan pada bidang Artificial Intelligence
            dengan fokus pada Machine Learning, Natural Language Processing
            (NLP), dan MLOps. Saya senang membangun solusi AI secara end-to-end,
            mulai dari pengolahan data, pengembangan model, hingga deployment
            dan monitoring. Selain fokus utama tersebut, saya juga
            mengeksplorasi Computer Vision, khususnya untuk analisis citra
            geospasial, pemetaan wilayah, dan aplikasi di bidang pertambangan.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/assets/CV/CV_ATS_AZIZ.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat proyek <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Foto profil"
          className="mx-auto w-full max-w-sm object-contain md:ml-auto md:mr-0 lg:max-w-md animate__animated animate__fadeInRight animate__delay-3s"
          loading="lazy"
        />
      </div>
      {/* HERO SECTION END */}

      {/* TENTANG SECTION START */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Saya adalah mahasiswa yang memiliki ketertarikan pada pengembangan
            solusi Artificial Intelligence, khususnya di bidang Machine
            Learning, Natural Language Processing (NLP), dan MLOps. Saya
            menikmati proses mengubah data menjadi solusi yang bermanfaat
            melalui tahapan eksplorasi data, pelatihan model, evaluasi, hingga
            deployment dan monitoring. Selain fokus utama tersebut, saya juga
            mengeksplorasi Computer Vision, terutama pada analisis citra
            geospasial, pemetaan wilayah, dan aplikasi di sektor pertambangan.
            Saya senang mempelajari teknologi baru dan mengembangkan kemampuan
            lintas disiplin agar dapat membangun sistem AI yang end-to-end serta
            siap diterapkan pada permasalahan nyata.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="hidden sm:block w-12 rounded-md"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>

              <div>
                <h1 className="text-4xl">
                  0<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32 px-4 md:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl/snug font-bold">Tools yang dipakai</h1>

          <p className="w-full text-base/loose opacity-50 lg:w-2/5">
            Berikut ini beberapa tools yang sering saya gunakan dalam
            pengembangan solusi Artificial Intelligence:
          </p>

          <div className="tools-box mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="group flex items-center gap-2 rounded-md border border-zinc-600 p-3 hover:bg-zinc-800"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />

                <div>
                  <h4 className="text-lg font-semibold">{tool.nama}</h4>
                  <p className="text-sm opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* TENTANG SECTION START */}

      {/* PROYEK START */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut ini beberapa proyek yang telah saya kerjakan
        </p>

        <div className="proyek-box mt-14 grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-center">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />

              <div className="text-center">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>

                <p className="text-base/loose mb-4">{proyek.desk}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* PROYEK END */}

      {/* KONTAK START */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/azizrahmadarifin75@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="pesan"
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* KONTAK END */}
    </>
  );
}

export default App;
