import CollectionHeader from "@/components/CollectionHeader";
import PortfolioData from "@/components/PortfolioData";
import PortfolioTitle from "@/components/PortfolioTitle";
import styles from "@/styles/Home.module.css";

export default function Portfolio() {
  return (
    <section className={styles.container}>
      <section>
        <section className={styles.portfolio_main}>
          <CollectionHeader />
          <PortfolioTitle />
          <PortfolioData />
        </section>
      </section>
    </section>
  );
}
