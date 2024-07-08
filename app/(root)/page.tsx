"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className=" text-gray-900 px-10 mt-20 lg:mt-20">
        <h1 className="mt-5 lg:mt-10 max-w-3xl pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-black to-gray-400 bg-clip-text text-5xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Build your developer portfolio
        </h1>
        <p className="mt-5 lg:mt-10 text-gray-500 max-w-xl text-sm md:text-base ">
          Weather you are a student, seasoned developer or a tech enthusiast.
          Having a personal showcase website is the best way to show your skills
          and experience. Get yours now!
        </p>
        <div className="border w-max p-4 rounded-lg mt-5 lg:mt-10 shadow-2xl shadow-zinc-300">
          <span className="font-bold">
            Devloper<span className="text-violet-500">Portfol.io/</span>
          </span>
          <input
            type="text"
            className="outline-none w-32"
            placeholder="yourname"
            name="username"
          ></input>
          <Link
            href="#"
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300 text-sm"
          >
            Claim
          </Link>
        </div>
      </main>
    </div>
  );
}
