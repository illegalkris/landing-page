import Link from "next/link";
import Image from 'next/image';


const Header = () => {
    return (
        <header className="container header">
            <Link href="/about" className="link">about</Link>
            <Link href="/feature" className="link">feature</Link>
            <Link href="/hero" className="link">hero</Link>
            <Link href="/contacts" className="link">contacts</Link>
            <Link href="https://github.com/illegalkris" className="link">
                <Image
                    className="logo"
                    src="/nice.png"
                    alt="NiceLogo"
                    width={150}
                    height={100}
                    priority
                />
            </Link>
        </header>
    )
}

export { Header };