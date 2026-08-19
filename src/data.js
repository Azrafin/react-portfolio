import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/python.png";
import Tools2 from "/assets/tools/jupyter.png";
import Tools3 from "/assets/tools/collab.png";
import Tools4 from "/assets/tools/tensorflow.png";
import Tools5 from "/assets/tools/Pytorch.png";
import Tools6 from "/assets/tools/scikitlearn.png";
import Tools7 from "/assets/tools/figma.png";
import Tools8 from "/assets/tools/Pandas.png";
import Tools9 from "/assets/tools/vscode.png";
import Tools10 from "/assets/tools/tailwind.png";
import Tools11 from "/assets/tools/github.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Python",
    ket: "Programming Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Jupyter Notebook",
    ket: "Data Science",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Google Colab",
    ket: "AI Development",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "TensorFlow",
    ket: "Deep Learning",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "PyTorch",
    ket: "Deep Learning",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Scikit-learn",
    ket: "Machine Learning",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Figma",
    ket: "Graphic Desaign",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Pandas",
    ket: "Data Analysis",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Vscode",
    ket: "Code Editor",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Tailwind",
    ket: "Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "GitHub",
    ket: "Version Control",
    dad: "1100",
  },
];

// export const listTools = [
//   {
//     id: 1,
//     gambar: Tools1,
//     nama: "Visual Studio Code",
//     ket: "Code Editor",
//     dad: "100",
//   },
//   {
//     id: 2,
//     gambar: Tools2,
//     nama: "React JS",
//     ket: "Framework",
//     dad: "200",
//   },
//   {
//     id: 3,
//     gambar: Tools3,
//     nama: "Next JS",
//     ket: "Framework",
//     dad: "300",
//   },
//   {
//     id: 4,
//     gambar: Tools4,
//     nama: "Tailwind CSS",
//     ket: "Framework",
//     dad: "400",
//   },
//   {
//     id: 5,
//     gambar: Tools5,
//     nama: "Bootstrap",
//     ket: "Framework",
//     dad: "500",
//   },
//   {
//     id: 6,
//     gambar: Tools6,
//     nama: "Javascript",
//     ket: "Language",
//     dad: "600",
//   },
//   {
//     id: 7,
//     gambar: Tools7,
//     nama: "Node JS",
//     ket: "Javascript Runtime",
//     dad: "700",
//   },
//   {
//     id: 8,
//     gambar: Tools8,
//     nama: "Github",
//     ket: "Repository",
//     dad: "800",
//   },
//   {
//     id: 9,
//     gambar: Tools9,
//     nama: "Adobe Illustrator",
//     ket: "Design App",
//     dad: "900",
//   },
//   {
//     id: 10,
//     gambar: Tools10,
//     nama: "Canva",
//     ket: "Design App",
//     dad: "1000",
//   },
//   {
//     id: 11,
//     gambar: Tools11,
//     nama: "Figma",
//     ket: "Design App",
//     dad: "1100",
//   },
// ];

import Proyek1 from "/assets/proyek/Proyek_deteksi-diabetes.webp";
// import Proyek2 from "/assets/proyek/proyek4.webp";
// import Proyek3 from "/assets/proyek/proyek3.webp";
// import Proyek4 from "/assets/proyek/proyek4.webp";
// import Proyek5 from "/assets/proyek/proyek5.webp";
// import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Deteksi Risiko Diabetes",
    desk: "Simulasi website deteksi risiko diabetes dengan menggunakan model Machine Learning berbasis KNN",
    tools: ["ReactJS", "Python", "Jupyter Notebook", "Vercel"],
    link: "https://deteksi-diabetes.vercel.app/",
    dad: "200",
  },
  // {
  //   id: 2,
  //   gambar: Proyek2,
  //   nama: "Company Profile",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
  //   link:"",
  //   dad: "300",
  // },
  // {
  //   id: 3,
  //   gambar: Proyek3,
  //   nama: "Web Pernikahan 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
  //   dad: "400",
  // },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
