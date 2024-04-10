import React from "react";
import { Footer } from "flowbite-react";
export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://leetcode.com/Ankita_goyal-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leetcode
                </Footer.Link>

                <Footer.Link
                  href="https://github.com/AnkitaGoyalD2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Make Money Online" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Start a Blog
                </Footer.Link>

                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Blooging Tool
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>

                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ankita's blog"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
