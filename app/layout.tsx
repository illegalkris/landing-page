import './globals.css';
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { About } from "../components/about";
import { Contacts } from "../components/contacts";
import { Feature } from "../components/feature";
import { Hero } from "../components/hero";

export const metadata = {
  title: 'Simple Landing Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main className="container">
          {children}
        </main>

        <About/>
        <Feature />
        <Hero />
        <Contacts/>
        <Footer />
      </body>
    </html>
  )
}