import CollectionHeader from "@/components/CollectionHeader";
import CollectionHeroSection from "@/components/CollectionHeroSection";
import CollectionPurchaseSection from "@/components/CollectionPurchaseSection";
import styles from "@/styles/Home.module.css";

export default function ViewCollection() {
  return (
    <section className={styles.container}>
      <section>
        <section className={styles.viewCollection_main}>
          <CollectionHeader />
          <CollectionHeroSection />
          <CollectionPurchaseSection />
        </section>
      </section>
    </section>
  );
}
