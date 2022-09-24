import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/sites/max.png"
          alt="alt EZ"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm EastZero</h1>
      <p>Something Write</p>
    </section>
  );
}

export default Hero;
