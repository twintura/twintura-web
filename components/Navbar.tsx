"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b border-default bg-primary/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">

          {/* 🔥 LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="logo" width={36} height={36} />
            <span className="font-heading tracking-tight text-lg">
              TWINTURA
            </span>
          </Link>

          {/* 🧭 DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="text-muted hover:text-white transition">
              Home
            </Link>
            <Link href="/projects" className="text-muted hover:text-white transition">
              Projects
            </Link>
            <Link href="/services" className="text-muted hover:text-white transition">
              Services
            </Link>
            <Link href="/about" className="text-muted hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-muted hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* 🚀 CTA */}
          <div className="hidden md:block">
            <button className="bg-brand px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg hover:opacity-90 transition">
              Start Project
            </button>
          </div>

          {/* 🍔 HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* 🌑 OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-card border-l border-default z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">

          <Link href="/" onClick={() => setOpen(false)} className="text-lg">
            Home
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="text-lg">
            Projects
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="text-lg">
            Services
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-lg">
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-lg">
            Contact
          </Link>

          <Button>
            Start Project
          </Button>
        </div>
      </div>
    </>
  );
}