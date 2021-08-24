/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright {year} {company-name} (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className='footer'>
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href='https://www.creative-tim.com/?ref=bdr-user-archive-footer'>
              {`<DivOps  />`}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://divoperations.com/resources'>
              Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://www.creative-tim.com/blog?ref=bdr-user-archive-footer'>
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className=''>
          <footer-signature></footer-signature>© {new Date().getFullYear()} made
          with <i className='tim-icons icon-heart-2' /> by{""}
          <a
            href='https://www.creative-tim.com/?ref=bdr-user-archive-footer'
            target='_blank'
          >
            Creative Tim
          </a>{" "}
          for a better web.
          </div>
            <div>
              logo={{
                outterLink: "https://divoperations.com/",
                text: "DIVOPS",
                imgSrc:
                  "https://divoperations.com/resources/wedding-images/logos/purple-crystals.svg",
              }}
            </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
