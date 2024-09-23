import blogSrc from "./icons/blog.svg";
import boxSrc from "./icons/box.svg";
import chatSrc from "./icons/chat.svg";
import contactSrc from "./icons/contact.svg";
import curlyArrowSrc from "./icons/curly-arrow.svg";
import documentsSrc from "./icons/documents.svg";
import hamburgerSrc from "./icons/hamburger.svg";
import instagramSrc from "./icons/instagram.svg";
import jheySrc from "./icons/jhey.svg";
import linkedinSrc from "./icons/linkedin.svg";
import mastodonSrc from "./icons/mastodon.svg";
import newsletterSrc from "./icons/newsletter.svg";
import settingsSrc from "./icons/settings.svg";
import sponsorSrc from "./icons/sponsor.svg";
import studySrc from "./icons/study.svg";
import themeSrc from "./icons/theme.svg";
import twitchSrc from "./icons/twitch.svg";
import worldSrc from "./icons/world.svg";
import xSrc from "./icons/x.svg";
import youtubeSrc from "./icons/youtube.svg";
// import "./popover.css";


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
                    <img src={studySrc} alt="" className="size-6" />
                    <span>CSS Animations Course</span>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={worldSrc} alt="" className="size-6" />
                    <span>jhey.dev</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/intent/follow?screen_name=jh3yy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={xSrc} alt="x" />
                    <span>Follow for more</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/jheytompkins"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtubeSrc} alt="YouTube" />
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hey@jhey.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={contactSrc} alt="" />
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://jhey.dev/writing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={blogSrc} className="size-6" alt="" />
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sponsors/jh3y"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={sponsorSrc} alt="" className="size-6" />
                    <span>Sponsor</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cubhouse.jhey.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={newsletterSrc} className="size-6" alt="" />
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
                    <img src={xSrc} alt="" />
                    <span>X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitch.tv/jh3yy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitchSrc} alt="" />
                    <span>Twitch</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://front-end.social/@jhey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={mastodonSrc} alt="" />
                    <span>Mastodon</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/jheytompkins"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinSrc} alt="" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/jh3yyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagramSrc} alt="" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ul aria-hidden="true">
          <li style="--i: 0">
            <img src={chatSrc} className="size-6" alt="" />
          </li>
          <li style="--i: 1">
            <img src={boxSrc} className="size-6" alt="" />
          </li>
          <li style="--i: 2">
            <img src={settingsSrc} className="size-6" alt="" />
          </li>
          <li style="--i: 3">
            <img src={documentsSrc} className="size-6" alt="" />
          </li>
          <li style="--i: 4">
            <img src={themeSrc} className="theme-icon" alt="" />
          </li>
          <li style="--i: 5">
            <img src={hamburgerSrc} className="size-6" alt="" />
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
            <img src={chatSrc} className="size-6" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={boxSrc} className="size-6" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={settingsSrc} className="size-6" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={documentsSrc} className="size-6" alt="" />
          </a>
        </li>
        <li>
          <button className="theme-toggler">
            <span className="sr-only">Toggle Theme</span>
            <img src={themeSrc} className="theme-icon" alt="" />
          </button>
        </li>
        <li>
          <button popovertarget="menu" popovertargetaction="toggle">
            <img src={hamburgerSrc} className="size-6" alt="" />
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
        <img src={curlyArrowSrc} alt="" />
      </div>
      <a
        className="bear-link"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={jheySrc} className="w-9" alt="" />
      </a>
    </>
  );
}
