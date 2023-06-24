import styles from './page.module.css';
import { TextBlock } from '@/components/text-block/text-block';

export default function QuestionsAndAnswersPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Вопросы-ответы</h2>
      <ul className={styles.questions}>
        <li>
          <TextBlock
            question={'Что такое Билетопоиск?'}
            answer={
              'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
            }
          />
        </li>
        <li>
          <TextBlock
            question={'Какой компании принадлежит Билетопоиск?'}
            answer={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit nulla sequi! Aut beatae cupiditate deleniti eligendi illo placeat tenetur? A atque dolore ducimus ea eligendi enim itaque possimus quae similique tenetur? Aliquid cum distinctio, earum expedita iusto officiis temporibus! Alias, aperiam architecto distinctio dolore dolores eius fuga illum inventore ipsum iure minima molestiae nesciunt nisi, nobis nostrum pariatur perspiciatis praesentium, provident quasi sed veniam vitae voluptatum! Ab amet beatae corporis dolorem ducimus ea eaque eligendi enim, eos exercitationem facilis, fugiat illo itaque laborum laudantium maiores nesciunt nisi nostrum pariatur perspiciatis provident quam quis quisquam rem repellendus sint tenetur ut.'
            }
          />
        </li>
        <li>
          <TextBlock
            question={'Как купить билет на Билетопоиск?'}
            answer={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit nulla sequi! Aut beatae cupiditate deleniti eligendi illo placeat tenetur? A atque dolore ducimus ea eligendi enim itaque possimus quae similique tenetur? Aliquid cum distinctio, earum expedita iusto officiis temporibus! Alias, aperiam architecto distinctio dolore dolores eius fuga illum inventore ipsum iure minima molestiae nesciunt nisi, nobis nostrum pariatur perspiciatis praesentium, provident quasi sed veniam vitae voluptatum! Ab amet beatae corporis dolorem ducimus ea eaque eligendi enim, eos exercitationem facilis, fugiat illo itaque laborum laudantium maiores nesciunt nisi nostrum pariatur perspiciatis provident quam quis quisquam rem repellendus sint tenetur ut.'
            }
          />
        </li>
        <li>
          <TextBlock
            question={'Как оставить отзыв на Билетопоиск?'}
            answer={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit nulla sequi! Aut beatae cupiditate deleniti eligendi illo placeat tenetur? A atque dolore ducimus ea eligendi enim itaque possimus quae similique tenetur? Aliquid cum distinctio, earum expedita iusto officiis temporibus! Alias, aperiam architecto distinctio dolore dolores eius fuga illum inventore ipsum iure minima molestiae nesciunt nisi, nobis nostrum pariatur perspiciatis praesentium, provident quasi sed veniam vitae voluptatum! Ab amet beatae corporis dolorem ducimus ea eaque eligendi enim, eos exercitationem facilis, fugiat illo itaque laborum laudantium maiores nesciunt nisi nostrum pariatur perspiciatis provident quam quis quisquam rem repellendus sint tenetur ut.'
            }
          />
        </li>
      </ul>
    </main>
  );
}
