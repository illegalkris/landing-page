import Image from 'next/image';

const Feature = () => {
    return (
        <section id="feature" className='container'>
            <div className="text">
                <h3 className="title title-section ">Feature</h3>
                <ul className='list'>
                    <li>-I'm using next.js for the first time for development.</li>
                    <li>-All of arts on this page was created by me.</li>
                    <li>-I had never used typescript before either.</li>
                </ul>
            </div>
            <div>
                <Image
                    className=""
                    src="/feature.PNG"
                    alt="blue lines"
                    width={500}
                    height={490}
                    priority
                />
            </div>
        </section>
    )
}

export { Feature };