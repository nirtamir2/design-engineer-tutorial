import { Component as BoxIcon } from "@/assets/box.svg?svgUse";
import { Component as ChatIcon } from "@/assets/chat.svg?svgUse";
import { Component as DocumentsIcon } from "@/assets/documents.svg?svgUse";
import { Component as HamburgerIcon } from "@/assets/hamburger.svg?svgUse";
import { Component as SettingsIcon } from "@/assets/settings.svg?svgUse";
import { Component as ThemeIcon } from "@/assets/theme.svg?svgUse";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#">
            <ChatIcon className="size-6"></ChatIcon>
          </a>
        </li>
        <li>
          <a href="#">
            <BoxIcon className="size-6"></BoxIcon>
          </a>
        </li>
        <li>
          <a href="#">
            <SettingsIcon className="size-6"></SettingsIcon>
          </a>
        </li>
        <li>
          <a href="#">
            <DocumentsIcon className="size-6"></DocumentsIcon>
          </a>
        </li>
        <li>
          <button className="theme-toggler">
            <span className="sr-only">Toggle Theme</span>
            <ThemeIcon className="theme-icon"></ThemeIcon>
          </button>
        </li>
        <li>
          <button popovertarget="menu" popovertargetaction="toggle">
            <HamburgerIcon className="size-6"></HamburgerIcon>
            <span className="sr-only">Open menu</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
