import Button from '../Button/Button'
import styles from './PricingCard.module.css'



function PricingCard(props) {
    const{
            label,
            price, 
            duration = '',
            image,
            imageAlt,
            benefits
         } = props

         const themeClasses = {
            'Start-Up': styles.card__startUp,
            'Pro': styles.card__pro,
            'Enterprise': styles.card__enterprise
         }

         const themeClass = themeClasses[label]


    return(
        <div className={styles.card + ' ' + themeClass}>
            
            <div className={styles.card__wrapper}>

                <span className={`${styles.card__label} center-vertical`}>{label}</span>
                <div className={styles.card__image}>
                    <img src={image} alt={imageAlt} />
                </div>
                <div className={styles.card__priceLabel}>
                    <span className={styles.card__priceFigure}> {price} </span>
                    <span className={styles.card__priceDuration}> {duration} </span>
                </div>
                <span className={styles.card__benefitsLabel}>see details below</span>
                <ul className={styles.card__benefits}>
                    {
                        benefits.map((benfit)=> (
                            <li key={benfit} className={styles.card__benefit + ' center-horizontal'}>
                                <img className={styles.card__benefitIcon}  src="/icons/check.png" alt="" />
                                {benfit}
                            </li>
                        ))
                    }

                </ul>
                <Button addClass={styles.card__button}> Choose </Button>

            </div>
            
        </div>
    )
}

export default PricingCard