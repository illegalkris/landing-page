import Image from 'next/image';

const Team = () => {
    return (
        <section id="team" className="container">
            <div>
                <Image
                    className=""
                    src="/kristina.PNG"
                    alt="blue lines"
                    width={357}
                    height={573}
                    priority
                />
            </div>
            <div>
                    <h3 className="title title-section text-even">Our team.</h3>
                    <p className="text text-even">
                    designer - Kristina
                    </p>
                    <p className="text text-even">developer - Kristina</p>
                </div>
        </section>
    )
}

export { Team };