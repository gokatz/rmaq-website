import styles from '../styles/Hero.module.css';

const HeroIllustration = () => {

  let illustrations = [{
    imageUrl: './assets/images/p1.png',
    imageClass: '',
    className: ''
  }, {
    imageUrl: './assets/images/p2.png',
    imageClass: '',
    className: styles.i1
  }, {
    imageUrl: './assets/images/p3.png',
    imageClass: '',
    className: styles.i2
  }, {
    imageUrl: './assets/images/p4.png',
    imageClass: 'mt-5',
    className: styles.i3
  }];

  return (
    <div className="hidden lg:block">
      {
        illustrations.map((illustration) => {
          let { className, imageClass, imageUrl } = illustration;

          return (
            <div className={`absolute ${styles.illus} ${className}`} key={imageUrl}>
              <img src={imageUrl} width={`w-3/4 ${imageClass}`} className="transform -rotate-45" alt="product" />
            </div>
          );
        })
      }
    </div>
  )
};

export default HeroIllustration;