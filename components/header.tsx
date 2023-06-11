import Link from "next/link";
import Image from 'next/image';


const Header = () => {
    return (
        <header className="header">
            <Link href="https://github.com/illegalkris" className="link neon">
                nice
            </Link>
            <nav className="navbar">
                <Link href="/" className="link">home</Link>
                <Link href="#about" className="link">about</Link>
                <Link href="#feature" className="link">feature</Link>
                <Link href="#team" className="link">team</Link>
                <Link href="#contacts" className="link">contacts</Link>
            </nav>
        </header>
    )
}

export { Header };