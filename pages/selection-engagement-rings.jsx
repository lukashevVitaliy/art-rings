import Image from 'next/image';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

export default function SelectionEngagementRings() {
  return (
    <Layout title="Selection Engagement Rings">
      <Breadcrumbs
        title="О помолвочных кольцах"
        path={'/selection-engagement-rings'}
      />
      <div className="container mx-auto px-4 mb-6 md:mb-12">
        <h2 className="mb-3 md:mb-5">
          КАК ВЫБРАТЬ И НОСИТЬ ПОМОЛВОЧНОЕ КОЛЬЦО?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-32 text-sm md:text-base font-normal  ">
          <div className="overflow-x-auto col-span-1 md:col-span-2 text-sm md:text-base font-normal ">
            <p className="mb-2">
              Конечно же все видели, как в американских фильмах красиво делают
              предложение руки и сердца: в романтичной обстановке достают
              коробочку, а там потрясающее кольцо с бриллиантом!
            </p>
            <p className="mb-2">
              Однако ошибка думать, что помолвка-чисто западная традиция. На
              Руси существовал обычай &quot;замолвки&quot;, &quot;зарока&quot;,
              когда девочку или девушку сватали, а родители обещали выдать за
              этого молодого человека. В разных местностях
              &quot;замолвленная&quot;, то есть помолвленная девушка носила или
              особую гривну - шейное украшение, или кольцо, или одежду с
              определёнными узорами. Это было знаком того, что её через какое-то
              время обязательно ждёт свадьба. Со временем замолвка перестала
              сопровождаться дарением украшений или заменилась сватовством, при
              этом обходились устными договорённостями.
            </p>
            <p className="mb-2">
              Сказать любимой о силе своих чувств и серьёзности намерений можно,
              подарив ей помолвочное кольцо.
            </p>
            <p className="mb-2">Помолвочное кольцо выбрать не так сложно.</p>
            <ol className="list-decimal list-inside mb-2">
              <li className="list-item mb-2">
                Сначала определитесь с бюджетом. На Западе, например,
                помолвочное кольцо должно стоить не менее одной месячной
                зарплаты жениха и чем дороже кольцо, тем серьёзней считаются
                намерения. Советуем сначала подумать и решить, какую сумму вы
                готовы потратить, а затем приступать к выбору кольца.
                <p className="mt-2">
                  Классическое помолвочное кольцо сделано из драгоценного
                  металла и одного или нескольких бриллиантов. Так же это может
                  быть камень, например, привезённый из совместного путешествия.
                  Как правило, металл - белое золото, комбинация белого с жёлтым
                  или красным золотом, либо платина.
                </p>
              </li>
              <li className="list-item mb-2">
                Важно знать, каким металлам отдаёт предпочтение ваша любимая,
                чтобы кольцо не выбивалось из её стиля. В Art-Rings мы сделаем
                кольцо из любого драгоценного металла, так же возможно
                изготовление помолвочного кольца по вашему эскизу или идеям.
              </li>
              <li className="list-item mb-2">
                Подумайте о том, какие бы вам хотелось обручальные кольца,
                потому что после свадьбы девушка будет одевать помолвочное
                кольцо рядом с обручальным на правом безымянном или среднем
                пальце, либо на левой руке (в Art-Rings мы всегда бесплатно
                изменяем размер колец, сделанных у нас). Есть парные кольца,
                когда помолвочное и обручальное сделано в одном стиле.
              </li>
              <li className="list-item mb-2">
                Также нужно знать размер кольца. Помолвочное кольцо носят на
                безымянном пальце правой руки. Как определить размер кольца так,
                чтобы девушка не поняла о чем речь? Даже если невзначай, между
                делом, спросить её или её подругу, любимая может догадаться или
                подружка всё расскажет, тогда ореол сюрприза и романтики будет
                потерян.
                <p className="mt-2">
                  Поэтому здесь вам придётся прибегнуть к хитрости. Можно
                  примерить кольцо, которое девушка носит на среднем пальце, ей
                  на безымянный. Прикинуть, насколько оно велико, а затем
                  померить на свой палец, например, на мизинец. Запомните свои
                  ощущения, а в Art-Rings мы поможем определить, какой у неё
                  размер безымянного пальца. Можно померить на левый безымянный,
                  если девушка правша, разница составляет пол-размера. Были
                  случаи, когда размер приходилось измерять по кольцу из
                  конфетной обёртки или фольги. Такой способ легко преподнести
                  как игру, угостив девушку конфетой и скрутить из фантика для
                  неё колечко. В любом случае, в Art-Rings бесплатно
                  подкорректируют размер кольца.
                </p>
              </li>
            </ol>
            <p>
              После свадьбы помолвочное кольцо можно одевать часто либо отложить
              для особого случая. Помолвочное кольцо хорошо смотрится с
              обручальным, если они выполнены в едином стиле, а на пальце между
              ними нет промежутков, когда они рядом. Изменив размер кольца,
              можно носить помолвочное на среднем пальце или безымянном левой
              руки. Строгих правил на этот счёт не существует.
            </p>
          </div>
          <div className="mx-auto w-1/2 md:w-full">
            <Image
              src="/assets/image/rings/engagement/engagement-rings-343x343.jpg"
              width={399}
              height={345}
              alt="wedding ring"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
