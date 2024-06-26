"use client";

import React, { createRef } from "react";
import CodeAnimation from "./components/CodeAnimation";
import { FaGithub , FaLinkedin , FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {

  return (
    <main className="bg-base-200 dark:bg-midnight-950 w-screen h-screen ">
      {/* hero */}
      <section id="home" className="hero min-h-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
        <div className="lg:block hidden"><CodeAnimation /></div>
          <div className="dark:text-white text-midnight-950 w-full lg:w-1/2">
            <p className="pb-6">Hi, my name is</p>
            <h1 className="text-5xl font-bold ">Maulana Irfan</h1>
            <p className="py-6">Mahasiswa Rekayasa Perangkat Lunak dengan fokus pada pemrograman backend. Memiliki pengalaman dalam pengembangan aplikasi web dan mobile dengan berbagai bahasa pemrograman dan framework. </p>
            <div className="lg:hidden block "><CodeAnimation /></div>
            <a target="blank" href="https://wa.me/62081280513590" className="btn btn-outline hover:border-aquamarine-700 darkhover:border-aquamarine-500  hover:text-white text-midnight-950 dark:hover:text-midnight-950 dark:text-aquamarine-500  dark:ring-aquamarine-500 dark:hover:bg-aquamarine-500  outline-aquamarine-700 hover:bg-aquamarine-700 my-10 w-36">Get Started</a>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2  lg:pb-60 dark:text-white text-midnight-950">
      <h1 className="text-4xl flex justify-center font-bold py-20" >Tentang Saya</h1>
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white text-midnight-950">
          <img src="about-img.svg" className="dark:hidden" alt="" />
          <img src="about-img-dark.svg" className="hidden dark:block" alt="" />
          <div className="w-full flex flex-col gap-20">
          Saya adalah mahasiswa aktif IPB Vokasi jurusan Rekayasa Perangkat Lunak dengan bekal ilmu dari SMK Telkom Jakarta jurusan yang sama. Memiliki fokus di bidang backend development, dan telah mengantongi pengalaman magang selama 6 bulan sebagai frontend developer di CV. Kreatorkus.
          Selain fokus di bidang akademik, saya juga aktif dalam organisasi kemahasiswaan, yaitu MicroIT Divisi Webmaster dan Unit Produksi Telkom sebagai web developer. Saat ini, saya mendalami berbagai teknologi seperti : .
          <ul className="list-disc marker:text-aquamarine-500 flex gap-6 flex-wrap w-72 p-2">
            <li>NodeJS</li>
            <li>Angular</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>Laravel</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Python</li>
          </ul>
          </div>
        </div>
      </div>
      </section>


      {/* experience */}
      <section id="experience" className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-10 flex flex-col items-center justify-center dark:text-white text-midnight-950">
      <h1 className="text-4xl flex justify-center font-bold py-20">Pengalaman dan Edukasi</h1>
        <div className="">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full ">                  
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022 - Juli 2022</time>
              <h3 className="text-lg font-semibold dark:text-white text-midnight-950">Internship in CV.KREATORKU </h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Mengembangkan fitur tanya jawab (Q&A) dan landing page menggunakan Angular</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Membangun logika untuk bot Discord dengan API restful menggunakan Adonis</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Mengimplementasikan desain dari Figma ke dalam aplikasi</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022 - Juli 2023</time>
              <h3 className="text-lg font-semibold dark:text-white text-midnight-950">Web Developer (Unit Produksi SMK Telkom Jakarta)</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Berkontribusi dalam pengembangan profil sekolah untuk SLB Negeri 11 dengan Wordpress</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Berpartisipasi dalam pembuatan sistem administrasi menggunakan Laravel dan Tailwind CSS</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Memperbarui dan meningkatkan aplikasi administrasi sekolah dengan menggunakan Codeigniter</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
              <h3 className="text-lg font-semibold dark:text-white text-midnight-950">WebMaster (MicroIT IPB University)</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Memperdalam pengetahuan tentang React dan dasar-dasar pengembangan web</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Ikut serta dalam program kerja company visit</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
              <h3 className="text-lg font-semibold dark:text-white text-midnight-950">Telkom Digiup</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Belajar dan mengimplementasikan konsep MVC dengan framework Codeigniter</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
              <h3 className="text-lg font-semibold dark:text-white text-midnight-950">Devhandal</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Memperdalam teknologi Full Stack JavaScript seperti Node.js, Express, dan React</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Menggunakan layanan cloud Alibaba</li>
              </ul>
            </li>
          </ol>
          <div className="flex w-full">
          <a href="" className="group transition ease-in-out flex items-center gap-4 dark:hover:text-aquamarine-500 hover:text-aquamarine-700 hover:underline underline-offset-4">lihat selengkapnya <span><FaArrowRight className=" transition transform group-hover:translate-x-2  dark:group-hover:fill-aquamarine-500 group-hover:fill-aquamarine-700"/></span></a>
          </div>
        </div>
      </section>

      {/* projects */}
      <div id="projects" className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-10 flex flex-col items-center justify-center dark:text-white text-midnight-950">
        <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2  lg:pb-40 dark:text-white text-midnight-950">
        <h1 className="text-4xl flex justify-center font-bold py-20">Projects</h1>
        <div className="flex justify-center">
          <div className="flex lg:flex-row flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white text-midnight-950">
            <img src="arxist.png" alt="" />
            <div className="w-full flex flex-col gap-20">
            Website Arxist.id adalah platform yang bertujuan untuk membantu para kreator, talenta, dan agensi dalam memonetisasi basis penggemar mereka secara langsung. Berikut ini adalah beberapa kegunaan utama dari website Arxist:
            <ul className=" marker:text-aquamarine-500 flex gap-6 flex-wrap w-96 p-2">
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">Angular</div></li>
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">Cypress</div></li>
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">Adonis JS</div></li>
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">Discord JS</div></li>
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">TypeScript</div></li>
            </ul>
            </div>
          </div>
        </div>
        </section>
        <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2  lg:pb-60 dark:text-white text-midnight-950">
        <div className="flex justify-center">
          <div className="flex lg:flex-row-reverse flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white text-midnight-950">
            <img src="slb.png" alt="" />
            <div className="w-full flex flex-col gap-20">
            Aplikasi SLBN 11 Jakarta merupakan platform digital yang didesain dengan menggunakan WordPress untuk memfasilitasi komunikasi dan manajemen informasi di antara semua pihak terkait dengan sekolah. Diluncurkan seiring dengan berdirinya sekolah pada bulan Mei 2019 dengan SK Gubernur No. 469 tahun 2019, aplikasi ini dirancang untuk memberikan akses mudah dan informasi terbaru kepada siswa, orang tua, guru, dan staf sekolah.
            <ul className=" marker:text-aquamarine-500 flex gap-6 flex-wrap w-96 p-2">
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">Wordpress</div></li>
            </ul>
            </div>
          </div>
        </div>
        </section>
        <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2 pb-5 dark:text-white text-midnight-950">
        <div className="flex flex-col items-center justify-center">
          <div className="flex lg:flex-row flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white text-midnight-950">
            <img src="algo.png" width={'500px'} alt="" />
            <div className="w-full flex flex-col gap-20">
            Tujuan utama dari program ini adalah untuk menentukan rute tercepat yang
              harus ditempuh oleh penduduk di area rawan tsunami menuju titik evakuasi yang
              aman. Dengan menggunakan algoritma Dijkstra, program ini akan menghitung jalur
              terpendek berdasarkan waktu tempuh dari setiap titik di area tersebut ke titik-titik
              evakuasi
            <ul className=" marker:text-aquamarine-500 flex gap-6 flex-wrap w-80 p-2">
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">Python</div></li>
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">HTML</div></li>
              <li><div className="badge bg-aquamarine-500 border-aquamarine-500 font-bold text-black">Folium</div></li>
            </ul>
            </div>
          </div>
          <div className="flex w-3/4 pt-5">
            <a href="" className=" group transition ease-in-out flex items-center gap-4 dark:hover:text-aquamarine-500 hover:text-aquamarine-700 hover:underline underline-offset-4">lihat selengkapnya <span><FaArrowRight className=" transition transform group-hover:translate-x-2  dark:group-hover:fill-aquamarine-500 group-hover:fill-aquamarine-700"/></span></a>  
          </div>
        </div>
        </section>
      </div>

      

      {/* contact */}
      <section id="contact" className="hero min-h-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
          <div className="dark:text-white text-midnight-950 flex flex-col items-center justify-center gap-5 lg:w-full w-80">
            <h1 className="text-4xl font-bold">Kuy Kenalan</h1>
            <p className=" lg:w-1/2 w-full text-center">Saya siap menerima permintaan dan pertanyaan kapan saja. Jangan ragu untuk menghubungi saya untuk informasi lebih lanjut atau untuk memulai kerja sama.</p>
            <a target="blank" href="https://wa.me/62081280513590" className="btn btn-outline hover:border-aquamarine-700 darkhover:border-aquamarine-500  hover:text-white text-midnight-950 dark:hover:text-midnight-950 dark:text-aquamarine-500  dark:ring-aquamarine-500 dark:hover:bg-aquamarine-500  outline-aquamarine-700 hover:bg-aquamarine-700 my-10 w-80">Get Started</a>
            <ul className="flex gap-5 lg:hidden">
              <li><a href="https://github.com/mirfan777" target="blank"><FaGithub className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 w-8 h-8 " /></a></li>
              <li><a href="https://www.linkedin.com/in/maulana-irfan-bbb098209/" target="blank"><FaLinkedin className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 w-8 h-8 "/></a></li>
              <li><a href="https://www.instagram.com/maw_lana08/" target="blank"><FaInstagram className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 w-8 h-8 "/></a></li>
              <li><a href="https://www.twitter.com" target="blank"><FaSquareXTwitter className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 w-8 h-8 "/></a></li>
            </ul>
            <a href="mailto:fcmirfan122@gmail.com" className="dark:text-white dark:hover:text-aquamarine-500 hover:text-aquamarine-700 text-midnight-950">fcmirfan122@gmail.com</a>
          </div>
        </div>
      </section>

    </main>
  );
}
