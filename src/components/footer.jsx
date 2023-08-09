import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white flex">
      <div className="flex flex-col">
        <h1 className="text-3xl">Abstract</h1>
        <a href="#">Start Trial</a>
        <a href="#">Pricing</a>
        <a href="#">Download</a>
      </div>
      <div className="flex flex-col">
        <h1>Resourcs</h1>
        <a href="#">Blog</a>
        <a href="#">Help Center</a>
        <a href="#">Release Notes</a>
        <a href="#">Status</a>
      </div>
      <div className="flex flex-col">
        <h1>Community</h1>
        <a href="#">Twitter</a>
        <a href="#">Linked In</a>
        <a href="#">Facebook</a>
        <a href="#">Dribble</a>
        <a href="#">Podcast</a>
      </div>
      <div className="flex flex-col">
        <h1>Company</h1>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Legal</a>
        <h2>Contact Us</h2>
        <a href="#">info@abstract.com</a>
      </div>
      <div className="flex flex-col">
        <p>© Copyright 2023 Abstract Studio Design, Inc. All rights reserved</p>
      </div>
    </div>
  );
}
