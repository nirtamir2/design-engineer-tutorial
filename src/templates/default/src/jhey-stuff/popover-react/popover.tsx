import { Component as BlogIcon } from "@/assets/blog.svg?svgUse";
import { Component as BoxIcon } from "@/assets/box.svg?svgUse";
import { Component as ChatIcon } from "@/assets/chat.svg?svgUse";
import { Component as ContactIcon } from "@/assets/contact.svg?svgUse";
import { Component as CurlyArrowIcon } from "@/assets/curly-arrow.svg?svgUse";
import { Component as DocumentsIcon } from "@/assets/documents.svg?svgUse";
import { Component as HamburgerIcon } from "@/assets/hamburger.svg?svgUse";
import { Component as InstagramIcon } from "@/assets/instagram.svg?svgUse";
import { Component as JheyIcon } from "@/assets/jhey.svg?svgUse";
import { Component as LinkedinIcon } from "@/assets/linkedin.svg?svgUse";
import { Component as MastodonIcon } from "@/assets/mastodon.svg?svgUse";
import { Component as NewsletterIcon } from "@/assets/newsletter.svg?svgUse";
import { Component as SettingsIcon } from "@/assets/settings.svg?svgUse";
import { Component as SponsorIcon } from "@/assets/sponsor.svg?svgUse";
import { Component as StudyIcon } from "@/assets/study.svg?svgUse";
import { Component as ThemeIcon } from "@/assets/theme.svg?svgUse";
import { Component as TwitchIcon } from "@/assets/twitch.svg?svgUse";
import { Component as WorldIcon } from "@/assets/world.svg?svgUse";
import { Component as XIcon } from "@/assets/x.svg?svgUse";
import { Component as YoutubeIcon } from "@/assets/youtube.svg?svgUse";
import "./popover.css";

function Popover() {
  return (
    <div popover="auto" id="menu">
      <div className="content">
        <div className="content__content">
          <div className="heading">
            <a
              href="https://cubhouse.jhey.dev/"
              target="blank"
              rel="noopener noreferrer"
              className="pill"
            >
              CSS && UI Tricks
            </a>
            <input type="search" placeholder="What are you searching for?" />
          </div>
          <hr />
          <div className="links">
            <nav>
              <h3>Links</h3>
              <ul>
                <li>
                  <a
                    href="https://cubhouse.jhey.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StudyIcon className="size-6" />
                    <span>CSS Animations Course</span>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <WorldIcon className="size-6"></WorldIcon>
                    <span>jhey.dev</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/intent/follow?screen_name=jh3yy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <XIcon alt="x"></XIcon>
                    <span>Follow for more</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/jheytompkins"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon alt="YouTube"></YoutubeIcon>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hey@jhey.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactIcon></ContactIcon>
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://jhey.dev/writing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BlogIcon className="size-6"></BlogIcon>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sponsors/jh3y"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SponsorIcon className="size-6"></SponsorIcon>
                    <span>Sponsor</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cubhouse.jhey.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NewsletterIcon className="size-6"></NewsletterIcon>
                    <span>Newsletter</span>
                  </a>
                </li>
              </ul>
              <h3>Socials</h3>
              <ul>
                <li>
                  <a
                    href="https://x.com/intent/follow?screen_name=jh3yy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <XIcon></XIcon>
                    <span>X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitch.tv/jh3yy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitchIcon></TwitchIcon>
                    <span>Twitch</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://front-end.social/@jhey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MastodonIcon></MastodonIcon>
                    <span>Mastodon</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/jheytompkins"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon></LinkedinIcon>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/jh3yyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon></InstagramIcon>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ul aria-hidden="true">
          <li style={{ "--i": 0 }}>
            <ChatIcon className="size-6"></ChatIcon>
          </li>
          <li style={{ "--i": 1 }}>
            <BoxIcon className="size-6"></BoxIcon>
          </li>
          <li style={{ "--i": 2 }}>
            <SettingsIcon className="size-6"></SettingsIcon>
          </li>
          <li style={{ "--i": 3 }}>
            <DocumentsIcon className="size-6"></DocumentsIcon>
          </li>
          <li style={{ "--i": 4 }}>
            <ThemeIcon className="theme-icon"></ThemeIcon>
          </li>
          <li style={{ "--i": 5 }}>
            <HamburgerIcon className="size-6"></HamburgerIcon>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
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

export function Main() {
  return (
    <>
      <Popover />
      <Navbar />
      <div className="arrow">
        <label>play with me.</label>
        <CurlyArrowIcon></CurlyArrowIcon>
      </div>
      <a
        className="bear-link"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <JheyIcon className="w-9"></JheyIcon>
      </a>
    </>
  );
}
