import images from "./Menuimages";

const SALADS_BRUSCHETTAS=[
      {nameofArray:'Salads & Bruschettas'},
        {
        title: 'Smoked Salmon Salad',
        title_az: 'Hisə verilmiş qızıl balıq salatı',
        price: '14.8 AZN',
        desc_az: 'Hisə verilş qızıl balıq göyərtilər limon sousu çerri pamidoru portağal',
        desc_eng:'smoked salmon, mix salad,mix cheese, lemon sauce, cherry tomato,orange',
        },
        {
          title: "Beef Salad",
          title_az: "Biftek salatı",
          price: "12.8 AZN",
          desc_az: "Biftek, qarışıq salat, limon sousu, çerri pomidoru, lobya",
          desc_eng: "beef, mix salad, lemon sauce, cherry tomato, kidney beans"
        },
        {
          title: "Caesar Salad",
          title_az: "Sezar salatı",
          price: "10.14 AZN",
          desc_az: "Sezar sousu, tavuğun göyərti ilə doldurulmuşu, parmezan, çerri pomidoru, krutonlar",
          desc_eng: "Caesar sauce, iceberg, parmesan, cherry tomato, croutons with chicken fillet or prawn"
        },
        {
          title: "Vegetarian Salad",
          title_az: "Vegetarian salatı",
          price: "10.14 AZN",
          desc_az: "Qarışıq salat, göyərtilər, çerri pomidoru, zeytun, limon sousu, beyaz peynir",
          desc_eng: "mix salad, vegetables, cherry tomato, olive, lemon sauce, white cheese"
        },
        {
          title: "Tuna Salad",
          title_az: "Ton balığı salatı",
          price: "10.10 AZN",
          desc_az: "Ton balığı, qarışıq salat, yumurta, çerri pomidoru, zeytun, limon sousu",
          desc_eng: "tuna, mix salad, egg, cherry tomato, olive, lemon sauce"
        },
        {
          title: "Bruschetta Salmon",
          title_az: "Bruschetta qızıl balıq",
          price: "15 AZN",
          desc_az: "Qızıl balıq, qarışıq salat, peynir, limon sousu, çerri pomidoru, qırmızı soğan, kapris",
          desc_eng: "smoked salmon, mix salad, mix cheese, lemon sauce, cherry tomato, red onion, capers"
        },
        {
          title: "Bruschetta Tomato",
          title_az: "Bruschetta pomidor",
          price: "12 AZN",
          desc_az: "Pomidor, qarışıq salat, peynir, balzamik sousu, oriqan",
          desc_eng: "tomato, mix salad, mix cheese, balsamic sauce, oregano"
        },
        {
          title: "Bruschetta Beef",
          title_az: "Bruschetta biftek",
          price: "14 AZN",
          desc_az: "Biftek, qarışıq salat, peynir, limon sousu, çerri pomidoru, qırmızı soğan, kapris",
          desc_eng: "beef, mix salad, mix cheese, lemon sauce, cherry tomato, red onion, capers"
        },
        {
          title: "Bruschetta Chicken",
          title_az: "Bruschetta tavuğ",
          price: "13 AZN",
          desc_az: "Tavuğ, qarışıq salat, peynir, balzamik sousu, çerri pomidoru, kapris, mısır",
          desc_eng: "smoked chicken, mix salad, mix cheese, balsamic sauce, cherry tomato, capers, corn"
        }
      
];
const BURGERS_SANDWICHES=[
  {nameofArray:'Burgers & Sandwiches'},
    {
      title: "ETUD Big Burger",
      title_az: "ETUD Böyük Burger",
      price: "16.9 AZN",
      desc_az: "2mm alazda bişirilmiş biftek, 2x gedər karabəf, 2x çeddar peyniri, xüsusi sous, qaramaşdırılmış qırmızı soğan, pikel, pomidor, marul, fransız kartoflu ilə",
      desc_eng: "2mm flame-grilled beef patty, 2x cheddar cheese, special sauce, caramelized red onion, pickle, tomato, lettuce, with french fries",
      imgUrl: images.burger,
    },
    {
      title: "Beef Burger",
      title_az: "Biftek Burger",
      price: "12.9 AZN",
      desc_az: "Mal eti şişəsi qedər karabəf, xüsusi sous, çeddar peyniri, qaramaşdırılmış qırmızı soğan, pikel, pomidor, marul, fransız kartoflu ilə",
      desc_eng: "beef patty, special sauce, cheddar cheese, caramelized red onion, pickle, tomato, lettuce, with french fries"
    },
    {
      title: "Cheese Burger",
      title_az: "Peynirli Burger",
      price: "13.9 AZN",
      desc_az: "Mal eti şişəsi qedər karabəf, çeddar peyniri, xüsusi sous, qaramaşdırılmış qırmızı soğan, pikel, pomidor, marul, fransız kartoflu ilə",
      desc_eng: "beef patty, cheddar cheese, special sauce, caramelized red onion, pickle, tomato, lettuce, with french fries"
    },
    {
      title: "Chicken Burger",
      title_az: "Tavuğ Burger",
      price: "11.9 AZN",
      desc_az: "Toyuq fileti, mozzarella peyniri, xüsusi sous, çeddar peyniri, qaramaşdırılmış qırmızı soğan, pikel, pomidor, marul, fransız kartoflu ilə",
      desc_eng: "chicken fillet, mozzarella cheese, special sauce, cheddar cheese, caramelized red onion, pickle, tomato, lettuce, with french fries"
    },
    {
      title: "Mini Burgers",
      title_az: "Mini Burgerlar",
      price: "14.9 AZN",
      desc_az: "İki mini biftek burger, tartar sousu, mozzarella peyniri, pikel, marul, fransız kartoflu ilə",
      desc_eng: "two mini beef burgers, tartar sauce, mozzarella cheese, pickle, lettuce, with french fries"
    },
    {
      title: "Vegetarian Burger",
      title_az: "Vegetarian Burger",
      price: "11.9 AZN",
      desc_az: "Vegetarian köftə 200q qədiməli, xüsusi sous, çeddar peyniri, qaramaşdırılmış qırmızı soğan, pikel, pomidor, marul, fransız kartoflu ilə",
      desc_eng: "vegetarian patty 200g veggie patty, special sauce, cheddar cheese, caramelized red onion, pickle, tomato, lettuce, with french fries"
    },
    {
      title: "Mushroom Sandwich",
      title_az: "Göbələk Sendviç",
      price: "10.9 AZN",
      desc_az: "Göbələk, kəsmik, pomidor, pikel, marul, xüsusi sous, fransız kartoflu ilə",
      desc_eng: "mushroom, lettuce, tomato, pickle, lettuce, special sauce, with french fries"
    },
    {
      title: "Club Sandwich",
      title_az: "Klub Sendviç",
      price: "10.0 AZN",
      desc_az: "Toyuq fileti, yumurta, mozzarella peyniri, pomidor, pikel, marul, ketchap, aioli sous, fransız kartoflu ilə",
      desc_eng: "chicken fillet, egg, mozzarella cheese, tomato, pickle, lettuce, ketchup, aioli sauce, with french fries"
    },
    {
      title: "Chicken Sandwich",
      title_az: "Tavuğ Sendviç",
      price: "8.9 AZN",
      desc_az: "Toyuq fileti, mozzarella peyniri, pomidor, pikel, marul",
      desc_eng: "chicken fillet, mozzarella cheese, tomato, pickle, lettuce"
    },
    {
      title: "Salmon Sandwich",
      title_az: "Qızılbalıq Sendviç",
      price: "13.9 AZN",
      desc_az: "Hisə verilmiş qızılbalıq, bal pesto sous, xüsusi sous, dill, marul, zeytun yağı, kartoflu dilimləri ilə",
      desc_eng: "smoked salmon, pesto sauce, special sauce, dill, lettuce, olive oil, with potato wedges"
    },
    {
      title: "Caesar Roll",
      title_az: "Sezar Rulo",
      price: "10.9 AZN",
      desc_az: "Sezar sousu, kəsmik, qızarmış kürək, zeytun yağı, kartoflu dilimləri ilə",
      desc_eng: "Caesar sauce, lettuce, grilled croutons, olive oil, with potato wedges"
    },
    {
      title: "Mexican Burger",
      title_az: "Meksikan Burger",
      price: "13.9 AZN",
      desc_az: "Mal eti şişəsi qedər karabəf, xüsusi Meksikan sousu, peynir, pikel, pomidor, marul, fransız kartoflu ilə",
      desc_eng: "beef patty, special Mexican sauce, cheese, pickle, tomato, lettuce, with french fries"
    }
  ];
const Snacks_Sets=[
  {nameofArray:'Snack Sets'},
    {
      title: "ETUD's Special Set",
      title_az: "ETUD Xüsusi Sety",
      price: "34 AZN",
      desc_az: "Panko karides, panko kalamar, nugget kanatlar, mozzarella sticks, peynir topları, soğan halkaları",
      desc_eng: "panko prawns, panko calamari, nuggets wings, mozzarella sticks, cheese balls, onion rings"
    },
    {
      title: "Sausage Assortment",
      title_az: "Sosiskə Assortimenti",
      price: "16 AZN",
      desc_az: "Toulogne sosis, liveria sosis, avcı sosis, servelade sosis",
      desc_eng: "Toulogne sausage, liveria sausage, hunter sausage, servelade sausage"
    },
    {
      title: "Cheese Board",
      title_az: "Peynir Təsnifatı",
      price: "16 AZN",
      desc_az: "Toulogne sosis, liveria sosis, avcı sosis, servelade sosis",
      desc_eng: "Toulogne sausage, liveria sausage, hunter sausage, servelade sausage"
    },
    {
      title: "Meat Board",
      title_az: "Ət Təsnifatı",
      price: "16 AZN",
      desc_az: "Toulogne sosis, liveria sosis, avcı sosis, servelade sosis",
      desc_eng: "Toulogne sausage, liveria sausage, hunter sausage, servelade sausage"
    },
    {
      title: "Fruit Plate",
      title_az: "Meva Tabağı",
      price: "12 AZN",
      desc_az: "Mövzulu meva təsnifatı",
      desc_eng: "assorted seasonal fruits"
    },
    {
      title: "Nachos / Minced Meat",
      title_az: "Naços / Doğranmış Ət",
      price: "12 / 15 AZN",
      desc_az: "Naços ilə xidmət edilən doğranmış ət",
      desc_eng: "nachos served with minced meat"
    },
    {
      title: "Panko Prawns",
      title_az: "Panko Karides",
      price: "12 AZN",
      desc_az: "Panko ilə örtülmüş karides",
      desc_eng: "panko prawns"
    },
    {
      title: "Panko Calamari",
      title_az: "Panko Kalamar",
      price: "12 AZN",
      desc_az: "Panko ilə örtülmüş kalamar",
      desc_eng: "panko calamari"
    },
    {
      title: "Fish & Chips",
      title_az: "Balık və Çips",
      price: "12 AZN",
      desc_az: "Balık fileto, kartof çipsi",
      desc_eng: "fish fillet, potato chips"
    },
    {
      title: "Chicken Schnitzel",
      title_az: "Toyuq Şnitzel",
      price: "9.9 AZN",
      desc_az: "Toyuq əti, köftə şəkli, qızarmış",
      desc_eng: "chicken meat, shaped as patty, fried"
    },
    {
      title: "Mozzarella Sticks",
      title_az: "Mozzarella Çubuqları",
      price: "8.9 AZN",
      desc_az: "Mozzarella peyniri çubuqları, qızarmış",
      desc_eng: "mozzarella cheese sticks, fried"
    },
    {
      title: "Cheese Balls",
      title_az: "Peynir Topları",
      price: "7 AZN",
      desc_az: "Peynir ilə doldurulmuş qızarmış toplar",
      desc_eng: "cheese-filled fried balls"
    },
    {
      title: "Nuggets",
      title_az: "Nuggetlar",
      price: "8 AZN",
      desc_az: "Toyuq ətindən hazırlanmış nuggetlar",
      desc_eng: "chicken meat nuggets"
    },
    {
      title: "Chicken Wings",
      title_az: "Toyuq Kanatları",
      price: "8 AZN",
      desc_az: "Qızarmış toyuq kanatları",
      desc_eng: "fried chicken wings"
    },
    {
      title: "Onion Rings",
      title_az: "Soğan Halkaları",
      price: "5 AZN",
      desc_az: "Qızarmış soğan halkaları",
      desc_eng: "fried onion rings"
    },
    {
      title: "Potato Fries",
      title_az: "Kartof Çipsi",
      price: "6 AZN",
      desc_az: "Qızarmış kartof çipsi",
      desc_eng: "fried potato fries"
    },
    {
      title: "French Fries",
      title_az: "Fransız Kartoflu",
      price: "4 AZN",
      desc_az: "Qızarmış fransız kartoflu",
      desc_eng: "fried french fries"
    },
    {
      title: "Potato Wedges",
      title_az: "Kartof Dilimləri",
      price: "4 AZN",
      desc_az: "Qızarmış kartof dilimləri",
      desc_eng: "fried potato wedges"
    },
    {
      title: "Peanuts",
      title_az: "Fıstıqlar",
      price: "4 AZN",
      desc_az: "Düz yersıfalı fıstıqlar",
      desc_eng: "plain peanuts"
    },
    {
      title: "Dushbara",
      title_az: "Dünbərə",
      price: "4 AZN",
      desc_az: "Kiçik ətli manta, qaynadılmış",
      desc_eng: "small meat dumplings, boiled"
    },
    {
      title: "Fried String Cheese",
      title_az: "Qızarmış İp Peyniri",
      price: "4 AZN",
      desc_az: "Qızarmış ip şəkli peyniri",
      desc_eng: "fried string cheese"
    },
    {
      title: "Chips",
      title_az: "Çips",
      price: "4 AZN",
      desc_az: "Qızarmış kartof çipsi",
      desc_eng: "fried potato chips"
    },
    {
      title: "Olive",
      title_az: "Zeytun",
      price: "5 AZN",
      desc_az: "Təzə zeytun",
      desc_eng: "fresh olives"
    },
    {
      title: "Cucumber Pickle",
      title_az: "Xiyar Turşusu",
      price: "5 AZN",
      desc_az: "Turşu xiyar",
      desc_eng: "pickled cucumber"
    },
  ];
const New =[
  {nameofArray:'New Items'},
    {
        title: "Lazanya / Lasagna",
        title_az: "YENİ Lazanya / Lasagna",
        price: "15 AZN",
        desc_az: "Bolognese bəşəmel sousu, lasagna xəmiri",
        desc_eng: "Bolognese Béchamel sauce, lasagna dough"
      },
      {
        title: "Toyuq Pastet",
        title_az: "Toyuq Pastet",
        price: "15 AZN",
        desc_az: "Pastet bağet çörək, karabəf, toyuq əti, peynir, xüsusi sous",
        desc_eng: "pastry baguette bread, beef, chicken meat, cheese mix, special sauce"
      },
      {
        title: "BBQ Wings",
        title_az: "BBQ Kanatlar",
        price: "15 AZN",
        desc_az: "BBQ sousunda toyuq kanatları, peynir, xüsusi sous",
        desc_eng: "BBQ sauce chicken wings, cheese mix, special sauce"
      }
];
export default {SALADS_BRUSCHETTAS,BURGERS_SANDWICHES,Snacks_Sets,New};