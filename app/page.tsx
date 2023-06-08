import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
        <h1 className="title">
          Welcome to my nice page!
        </h1>
        <h2 className="text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Officia fugit dolores, 
        tempore earum aliquid possimus nesciunt quam mollitia, 
        perferendis cum accusamus ullam rem distinctio inventore rerum ratione magni qui delectus.
        </h2>
        <div className="">
          <Image
            className=""
            src="/nice.png"
            alt="NiceLogo"
            width={500}
            height={400}
            priority
          />
      </div>
    </div>
  )
}