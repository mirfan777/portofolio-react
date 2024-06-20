"use client";

import React, { createRef } from "react";
import CodeAnimation from "./components/CodeAnimation";
import { FaGithub , FaLinkedin , FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {

  return (
    <main className="bg-base-200 dark:bg-midnight-950 w-screen h-screen ">
      {/* hero */}
      <section className="hero min-h-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
        <div className="lg:block hidden"><CodeAnimation /></div>
          <div className="dark:text-white w-full lg:w-1/2">
            <p className="pb-6">Hi, my name is</p>
            <h1 className="text-5xl font-bold ">Maulana Irfan</h1>
            <p className="py-6">Mahasiswa jurusan Teknik Informatika dengan fokus pada pemrograman backend. Memiliki pengalaman dalam pengembangan aplikasi web dan mobile dengan berbagai bahasa pemrograman dan framework. </p>
            <div className="lg:hidden block "><CodeAnimation /></div>
            <button className="btn btn-outline btn-success my-10 w-36">Get Started</button>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2  lg:pb-60 dark:text-white">
      <h1 className="text-4xl flex justify-center font-bold py-20">Tentang Saya</h1>
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white">
          <img src="about-img.svg" alt="" />
          <div className="w-full flex flex-col gap-20">
          Saya adalah mahasiswa aktif IPB Vokasi jurusan Rekayasa Perangkat Lunak dengan bekal ilmu dari SMK Telkom Jakarta jurusan yang sama. Memiliki fokus di bidang backend development, dan telah mengantongi pengalaman magang selama 6 bulan sebagai frontend developer di CV. Kreatorkus.
          Selain fokus di bidang akademik, saya juga aktif dalam organisasi kemahasiswaan, yaitu MicroIT Divisi Webmaster dan Unit Produksi Telkom sebagai web developer. Saat ini, saya mendalami berbagai teknologi seperti : .
          <ul className="list-disc marker:text-aquamarine-500 flex gap-6 flex-wrap w-96 p-2">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>NextJS</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
          </div>
        </div>
      </div>
      </section>


      {/* experiencec:\Users\home\Downloads\Group 46.png */}
      <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-10 flex flex-col items-center justify-center dark:text-white">
      <h1 className="text-4xl flex justify-center font-bold py-20">Pengalaman dan Edukasi</h1>
        <div className="">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full ">                  
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022 - Juli 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Internship in CV.KREATORKU </h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Create application Q&A and landing page feature with Angular</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Built the logic for discord bot restful api with Adonis</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Implements figma design into an application</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022 - Juli 2023</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer (Unit Produksi SMK Telkom Jakarta)</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Berkontribusi dalam membuat web school profile untuk SLB Negeri 11 dengan menggunakan Wordpress</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Bekerja sama dalam membuat web administrasi unit produksi dengan Laravel dan tailwind CSS</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Melakukan peningkatan dan pembaharuan aplikasi administrasi sekolah dengan Codeigniter</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">WebMaster (MicroIT IPB University)</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Mempelajari react dan dasar dasar web</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Ikut serta dalam program kerja company visit Course</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Telkom Digiup</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Mempelajari konsep MVC</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Mengimplementasikan konsep MVC dengan framework Codeigniter</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Devhandal</h3>
              <ul className="list-disc ml-5">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Mempelajari teknologi Full Stack JavaScript seperti node js, express, dan react</li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">Penggunaan cloud alibaba</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* projects */}
      <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2  lg:pb-40 dark:text-white">
      <h1 className="text-4xl flex justify-center font-bold py-20">Projects</h1>
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white">
          <img src="arxist.png" alt="" />
          <div className="w-full flex flex-col gap-20">
          Saya adalah mahasiswa aktif IPB Vokasi jurusan Rekayasa Perangkat Lunak dengan bekal ilmu dari SMK Telkom Jakarta jurusan yang sama. Memiliki fokus di bidang backend development, dan telah mengantongi pengalaman magang selama 6 bulan sebagai frontend developer di CV. Kreatorkus.
          Selain fokus di bidang akademik, saya juga aktif dalam organisasi kemahasiswaan, yaitu MicroIT Divisi Webmaster dan Unit Produksi Telkom sebagai web developer. Saat ini, saya mendalami berbagai teknologi seperti : .
          <ul className="list-disc marker:text-aquamarine-500 flex gap-6 flex-wrap w-96 p-2">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>NextJS</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
          </div>
        </div>
      </div>
      </section>
      <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2  lg:pb-60 dark:text-white">
      <div className="flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white">
          <img src="slb.png" alt="" />
          <div className="w-full flex flex-col gap-20">
          Saya adalah mahasiswa aktif IPB Vokasi jurusan Rekayasa Perangkat Lunak dengan bekal ilmu dari SMK Telkom Jakarta jurusan yang sama. Memiliki fokus di bidang backend development, dan telah mengantongi pengalaman magang selama 6 bulan sebagai frontend developer di CV. Kreatorkus.
          Selain fokus di bidang akademik, saya juga aktif dalam organisasi kemahasiswaan, yaitu MicroIT Divisi Webmaster dan Unit Produksi Telkom sebagai web developer. Saat ini, saya mendalami berbagai teknologi seperti : .
          <ul className="list-disc marker:text-aquamarine-500 flex gap-6 flex-wrap w-96 p-2">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>NextJS</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
          </div>
        </div>
      </div>
      </section>
      <section className="w-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 px-2  lg:pb-60 dark:text-white">
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col  justify-center items-center w-3/4 gap-10 lg:gap-40 dark:text-white">
          <img src="algo.png" width={'700px'} alt="" />
          <div className="w-full flex flex-col gap-20">
          Saya adalah mahasiswa aktif IPB Vokasi jurusan Rekayasa Perangkat Lunak dengan bekal ilmu dari SMK Telkom Jakarta jurusan yang sama. Memiliki fokus di bidang backend development, dan telah mengantongi pengalaman magang selama 6 bulan sebagai frontend developer di CV. Kreatorkus.
          Selain fokus di bidang akademik, saya juga aktif dalam organisasi kemahasiswaan, yaitu MicroIT Divisi Webmaster dan Unit Produksi Telkom sebagai web developer. Saat ini, saya mendalami berbagai teknologi seperti : .
          <ul className="list-disc marker:text-aquamarine-500 flex gap-6 flex-wrap w-96 p-2">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>NextJS</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
          </div>
        </div>
      </div>
      </section>

      {/* contact */}
      <section className="hero min-h-screen bg-base-200 dark:bg-midnight-950 xl:px-40 lg:px-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
          <div className="dark:text-white w-full flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="lg:w-1/2 w-full text-center">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <button className="btn btn-outline btn-success my-10 w-96">Get Started</button>
            <ul className="flex gap-5 lg:hidden">
              <li><a href=""><FaGithub className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 w-8 h-8 " /></a></li>
              <li><a href=""><FaLinkedin className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 w-8 h-8 "/></a></li>
              <li><a href=""><FaInstagram className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 w-8 h-8 "/></a></li>
              <li><a href=""><FaSquareXTwitter className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 w-8 h-8 "/></a></li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
