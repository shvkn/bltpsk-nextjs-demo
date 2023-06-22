import Image from 'next/image'
import styles from './page.module.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
    return (
        <div className={styles.root}>
            <Header/>
            <main className={styles.mainContainer}>
                <aside className={styles.sidebar}>
                    <div className={styles.sticky}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, fuga fugit impedit ipsa ipsum iusto natus nisi non ratione vel?</p>
                    </div>
                </aside>
                <div className={styles.main}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aperiam asperiores dignissimos dolorem exercitationem facere illum incidunt ipsa itaque laudantium, magni maxime minus nisi odio omnis, pariatur placeat porro possimus quaerat quasi quis sapiente sed similique tempora tempore ut vero vitae voluptatibus! Amet, aperiam at consequatur consequuntur est explicabo fugiat fugit laborum laudantium maiores minima molestiae nemo nihil, nulla quam qui quo quod quos ratione repudiandae tempora vel, veritatis. Ad, aperiam, consequuntur cum ipsa libero nihil nisi non nulla obcaecati omnis perspiciatis possimus vero voluptates. Consequuntur, debitis enim in inventore ipsa ipsum iste numquam perferendis quidem soluta ut vitae, voluptatibus! Accusantium aliquam at autem corporis, dicta eveniet excepturi iure numquam omnis possimus sed tenetur voluptatum! Deleniti iste, similique. Ab accusamus alias aspernatur atque beatae, commodi, consectetur consequatur corporis delectus dolorum ducimus eaque exercitationem facilis fugit hic impedit ipsum maiores minima nam natus nihil obcaecati odit pariatur perspiciatis placeat praesentium quae quam quisquam quod recusandae rem sapiente sed sit suscipit totam vitae voluptatibus. Aliquam ea eaque iste, omnis possimus quam voluptas. Consectetur ex libero maxime nam nisi odio omnis quas reiciendis ullam veniam. Animi aspernatur necessitatibus quia sequi. Ab accusamus aliquam consequatur dignissimos est fugit ipsa iusto labore nemo nisi obcaecati odit officiis quae quaerat qui quod sapiente temporibus, velit veritatis voluptate? Autem deserunt ea nisi officiis quidem quos sapiente? At aut rem ullam? Deleniti dignissimos dolorum et impedit ipsam, iste nulla tempora tenetur. Dolorum, fuga ipsam magni molestias quibusdam ut! Autem consectetur consequuntur deleniti dignissimos eius illum inventore iste laborum obcaecati quam, quidem sed ullam, veritatis. Accusamus aperiam assumenda blanditiis eaque, enim fuga inventore ipsum iure maiores, maxime neque quis, repellendus totam! Autem, dolorum ea eaque esse exercitationem incidunt laboriosam nesciunt numquam provident rem repudiandae tenetur. Animi dolorum eius, illo laboriosam magni perferendis placeat quaerat. Alias aliquid atque aut cum doloribus eaque error ex exercitationem expedita explicabo fuga hic inventore ipsam, iure laborum, minus modi molestias mollitia numquam provident quae quod saepe sed tempora tempore ullam ut! At aut facere fuga maiores odio quae quis quisquam similique sunt, tempore tenetur vitae. Alias aperiam atque cum enim et ex expedita ipsa itaque magni reiciendis! Animi consequatur excepturi magni sint! Alias amet asperiores beatae cumque ducimus enim et eveniet hic, impedit maxime minus mollitia natus non perspiciatis, placeat quam quidem suscipit temporibus vero voluptates? Alias architecto beatae distinctio error est fuga illum ipsa, nam nihil nisi, officia optio porro quod reprehenderit sequi tempora veniam? Ab accusantium alias asperiores beatae deleniti dicta dolor doloremque ducimus ea eius eos eveniet excepturi, exercitationem explicabo fuga fugit in inventore ipsa ipsam perferendis quae quibusdam repudiandae, sit ullam ut velit voluptas. A aliquam aut cumque dolores, dolorum et expedita id maiores minima molestiae non obcaecati odio, officia pariatur porro provident quam ratione repellendus sed sit ullam vel voluptas. Ab accusantium alias amet animi asperiores consectetur culpa cum deserunt dolor dolore dolorem eveniet exercitationem facere ipsam laudantium maiores minus nemo provident quo, quod ratione similique sint vel veniam veritatis voluptas voluptatum? Earum eum facilis ipsum repellat.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
