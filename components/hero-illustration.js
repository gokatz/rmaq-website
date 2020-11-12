import styles from '../styles/Hero.module.css';

const HeroIllustration = () => {
  return (
    <>
      <div className={`absolute ${styles.illus}`}>
        <img src="./assets/images/p1.png" width="w-3/4" className="transform -rotate-45" />
      </div>

      <div className={`absolute ${styles.illus} ${styles.i1}`}>
        <img src="./assets/images/p2.png" width="w-3/4" className="transform -rotate-45" />
      </div>

      <div className={`absolute ${styles.illus} ${styles.i2}`}>
        <img src="./assets/images/p3.png" width="w-3/4" className="transform -rotate-45" />
      </div>
    </>
  )
};

export default HeroIllustration;