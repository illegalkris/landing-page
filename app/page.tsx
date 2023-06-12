import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <section>
      <div className="home">
        <div className="home-title">
            <h1 className="title">
              Welcome to my nice page!
            </h1>
            <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Officia fugit dolores, 
            tempore earum aliquid possimus nesciunt quam mollitia, 
            perferendis cum accusamus ullam rem distinctio inventore rerum ratione magni qui delectus.
            </p>
            <div className="touch">
            <a href="#contacts">get in touch</a>
            </div>
        </div>
        <div className="">
              <Image
                className=""
                src="/nice.png"
                alt="NiceLogo"
                width={600}
                height={300}
                priority
              />
        </div>
      </div>
    </section>
  )
}