import { Component as BoxIcon } from "@/assets/box.svg?svgUse";
import { Component as ChatIcon } from "@/assets/chat.svg?svgUse";
import { Component as DocumentsIcon } from "@/assets/documents.svg?svgUse";
import { Component as HamburgerIcon } from "@/assets/hamburger.svg?svgUse";
import { Component as SettingsIcon } from "@/assets/settings.svg?svgUse";
import { Component as ThemeIcon } from "@/assets/theme.svg?svgUse";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="fixed bottom-12 flex w-full items-center justify-center">
      <ul className="shadow-primary bg-primary flex rounded-full border border-transparent p-1">
        <li className="flex aspect-square w-8 items-center justify-center rounded-full">
          <a href="#">
            <ChatIcon className="text-primary size-6"></ChatIcon>
          </a>
        </li>
        <li className="flex aspect-square w-8 items-center justify-center rounded-full">
          <a href="#">
            <BoxIcon className="text-primary size-6"></BoxIcon>
          </a>
        </li>
        <li className="flex aspect-square w-8 items-center justify-center rounded-full">
          <a href="#">
            <SettingsIcon className="text-primary size-6"></SettingsIcon>
          </a>
        </li>
        <li className="flex aspect-square w-8 items-center justify-center rounded-full">
          <a href="#">
            <DocumentsIcon className="text-primary size-6"></DocumentsIcon>
          </a>
        </li>
        <li className="flex aspect-square w-8 items-center justify-center rounded-full">
          <button className="theme-toggler">
            <span className="sr-only">Toggle Theme</span>
            <ThemeIcon className="theme-icon"></ThemeIcon>
          </button>
        </li>
        <li className="flex aspect-square w-8 items-center justify-center rounded-full">
          <button popovertarget="menu" popovertargetaction="toggle">
            <HamburgerIcon className="text-primary size-6"></HamburgerIcon>
            <span className="sr-only">Open menu</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
