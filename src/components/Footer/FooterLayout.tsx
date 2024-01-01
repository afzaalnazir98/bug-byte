import React, { ReactNode, lazy } from "react";

interface FooterLayoutProps {
  children: ReactNode;
}
const FooterLayout: React.FC<FooterLayoutProps> = ({ children }) => {
  return (
    <>
      <footer>{children}</footer>
    </>
  );
};
export default FooterLayout;
