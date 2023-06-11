import Image from 'next/image';


const Contacts = () => {
    return (
        <section id="contacts" className="container">
            <div className="text">
                <h3 className="title title-section ">Contacts</h3>
                <ul className="text list">
                    <li>You can contact with me on telegram - @illegalkris.</li>
                    <li>Or you can email me - bks-kristin@gmail.com.</li>
                </ul>
            </div>  
            <div>
                <Image
                    className=""
                    src="/contacts.PNG"
                    alt="blue lines"
                    width={400}
                    height={400}
                    priority
                />
            </div>          
        </section>
    )
}

export { Contacts };