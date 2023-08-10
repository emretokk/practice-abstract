import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col sm:flex-row justify-around py-20">
      <div className="flex flex-col">
        <h1 className="text-3xl mb-4">Abstract</h1>
        <a href="#">Start Trial</a>
        <a href="#">Pricing</a>
        <a href="#">Download</a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl mb-4">Resourcs</h1>
        <a href="#">Blog</a>
        <a href="#">Help Center</a>
        <a href="#">Release Notes</a>
        <a href="#">Status</a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl mb-4">Community</h1>
        <a href="#">Twitter</a>
        <a href="#">Linked In</a>
        <a href="#">Facebook</a>
        <a href="#">Dribble</a>
        <a href="#">Podcast</a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl mb-4">Company</h1>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Legal</a>
        <h2 className=" font-bold mt-8">Contact Us</h2>
        <a href="#">info@abstract.com</a>
      </div>
      <p className="text-lg w-[15rem] mt-52">
        © Copyright 2023 <br />
        Abstract Studio Design, Inc. All rights reserved
      </p>
    </footer>
  );
}
