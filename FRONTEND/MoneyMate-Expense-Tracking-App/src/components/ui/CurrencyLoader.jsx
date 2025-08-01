import styles from "./CurrencyLoader.module.css";

const CurrencyLoader = ({ currencySymbol = '₹' }) => {
    return (
        <div className={`${styles.coin}`}>
            <span className={`${styles.engraving}`}>{currencySymbol}</span>
        </div>
    )
};

export default CurrencyLoader;