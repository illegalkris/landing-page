import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="container">
            <div>
                <Image
                    className=""
                    src="/about.PNG"
                    alt="blue lines"
                    width={395}
                    height={454}
                    priority
                />
            </div>
            <div>
                <h3 className="title title-section text-even">
                    About this nice page.
                </h3>
                <p className="text text-even">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam libero nemo ad qui deserunt maiores in fuga odio non error natus commodi praesentium modi dolor deleniti atque, iste facilis.
                    Natus cupiditate quisquam qui culpa consequatur, placeat soluta quis facilis, aliquam modi beatae neque laudantium nulla veniam corporis? Aspernatur facere dolorum facilis ipsam adipisci tenetur in distinctio. Odio, vel voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil eaque labore! Temporibus maxime, sed in voluptatum, itaque non quis possimus tenetur iste ratione nobis? Ratione quasi corrupti quam mollitia!
                </p>
            </div> 
        </section>
    )
}

export { About };