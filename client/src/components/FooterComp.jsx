import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Footer } from "flowbite-react";
export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div>
        <div>
          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup row>
              <Footer.Link
                href="https://leetcode.com/Ankita_goyal-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </Footer.Link>

              <Footer.Link
                href="https://github.com/AnkitaGoyalD2004/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup row>
              <Footer.Link
                href="https://leetcode.com/Ankita_goyal-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </Footer.Link>

              <Footer.Link
                href="https://github.com/AnkitaGoyalD2004/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
