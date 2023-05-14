import CollectionHeader from "@/components/CollectionHeader";
import MMCollectionHeroSection from "@/components/MMCollectionHeroSection";
import MMCollectionPurchaseSection from "@/components/MMCollectionPurchaseSection";
import styles from "@/styles/Home.module.css";

export default function MMCollection() {
  return (
    <section className={styles.container}>
      <section>
        <section className={styles.viewCollection_main}>
          <CollectionHeader />
          <MMCollectionHeroSection />
          <MMCollectionPurchaseSection />
        </section>
      </section>
    </section>
  );
}
