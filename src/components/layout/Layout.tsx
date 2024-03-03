import React from "react";
import Navbar from "src/components/navbar/Navbar";
import Footer from "src/components/footer/Footer";

interface ILayoutProps extends React.PropsWithChildren {}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between antialiased">
      <Navbar />
      <main className="flex-1 bg-white p-6">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
