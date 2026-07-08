import DataImage from  "./data"

function App() {
  return (
    <>
    {/* HERO SECTION START */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Kode yang indah, lahir dari ketekunan.💖</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hai, Saya Aziz Rahmad arifin</h1>
          <p className="text-base/loose mb-6 opacity-60">Saya memiliki ketertarikan pada bidang Artificial Intelligence dengan fokus pada Machine Learning, Natural Language Processing (NLP), dan MLOps. Saya senang membangun solusi AI secara end-to-end, mulai dari pengolahan data, pengembangan model, hingga deployment dan monitoring. Selain fokus utama tersebut, saya juga mengeksplorasi Computer Vision, khususnya untuk analisis citra geospasial, pemetaan wilayah, dan aplikasi di bidang pertambangan.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i class="ri-download-line ri-lg"></i>
            </a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat proyek <i class="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-125 md:ml-auto" />
      </div>
    {/* HERO SECTION END */}

    {/* TENTANG SECTION START */}
    <div className="tentang mt-32 py-10">
      <div>
        <p>Saya adalah mahasiswa yang memiliki ketertarikan pada pengembangan solusi Artificial Intelligence, khususnya di bidang Machine Learning, Natural Language Processing (NLP), dan MLOps. Saya menikmati proses mengubah data menjadi solusi yang bermanfaat melalui tahapan eksplorasi data, pelatihan model, evaluasi, hingga deployment dan monitoring.

        Selain fokus utama tersebut, saya juga mengeksplorasi Computer Vision, terutama pada analisis citra geospasial, pemetaan wilayah, dan aplikasi di sektor pertambangan. Saya senang mempelajari teknologi baru dan mengembangkan kemampuan lintas disiplin agar dapat membangun sistem AI yang end-to-end serta siap diterapkan pada permasalahan nyata.</p>
        <div>
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md" />
          <div>
            <div>
              <h1>45 <span>+</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
