const newcubes = [
  {
    img: "https://www.speedcube.rs/files/8293/moyu-meilong-pyraminx.jpg",
    title: "MoYu Meilong Pyraminx 3x3",
    price: 5,
    description: "Perfect pyraminx for begginers",
    id: "pyramixs3x3",
  },
  {
    img: "https://www.speedcube.rs/files/8231/qiyi-2345-box-sticker.jpg",
    title: "Qiyi 2345 Box Puzzle Stickerless",
    price: 40,
    description: "All you need to step into the world of speedcubes",
    id: "2345cubes",
  },
  {
    img: "https://www.speedcube.rs/files/7640/qiyi-mirror-2x2-kocka.jpg",
    title: "QiYi Mirror 2x2 Cube",
    price: 5,
    description: "Simple version of mirror cube",
    id: "mirror 2x2",
  },
  {
    img: "https://www.speedcube.rs/files/7426/yuxin-little-magic-2x2-speed.jpg",
    title: "Little Magic 2x2 Cube Stickerless",
    price: 5,
    description: "New 2x2 od yuxi with name of famos series of puzzles",
    id: "magic2x2",
  },
  {
    img: "https://www.speedcube.rs/files/7415/QiYi-Pyraminx-2x2.jpg",
    title: "QiYi Pyraminx 2x2",
    price: 8,
    description: "Small pryraminx 2x2 is something similar to 3x3",
    id: "pyraminx2x2",
  },
  {
    img: "https://www.speedcube.rs/files/6720/speed-kocka-privezak.jpg",
    title: "Cube Keychain",
    price: 6,
    description: "Keychain 3x3 cube for you and your friends",
    id: "keychain3x3",
  },
];
const bestsellers = [
  {
    img: "https://www.speedcube.rs/files/7426/yuxin-little-magic-2x2-speed.jpg",
    title: "Little Magic 2x2 Cube Stickerless ",
    price: 6,
    description: "New 2x2 from yuxi with a name of a famous puzzle",
    id: "littlemagic2x2",
  },
  {
    img: "https://www.speedcube.rs/files/6930/shengshou-mr-m-speed.jpg",
    title: "ShengShou Mr.M 3x3 Stickerless",
    price: 11,
    description: "First magnetic cube from Shengshou company",
    id: "Mr.M3x3",
  },
  {
    img: "https://www.speedcube.rs/files/6943/YX-Black-Kylin-Pyraminx.jpg",
    title: "YX Black Kirin Pyraminx",
    price: 6,
    description: "Cheap but good puzzle for pyraminx begginers",
    id: "YXBlackKirinPyraminx",
  },
  {
    img: "https://www.speedcube.rs/files/5616/yj_guanpo_2x2_kocka.jpg",
    title: "YJ Guanpo V2 2x2 Cube",
    price: 5,
    description:
      "New low-priced 2x2 cube from YJ will satisfy begginers and those advaced cubers",
    id: "YJGuanpoV22x2",
  },
  {
    img: "https://www.speedcube.rs/files/5916/Qiyi-Warrior-W-Stickerless.jpg",
    title: "QiYi Warrior W Stickerless Cube",
    price: 4,
    description: "One of the best cubes for begginers",
    id: "QiYiWarriorW",
  },
  {
    img: "https://www.speedcube.rs/files/5612/shengshou-legend-3x3-kocka.jpg",
    title: "ShenShou Legend S 3x3 Cube",
    price: 6,
    description:
      "Cheapest 3x3 cube from Shengshou build to stand up for Guanlong company rival",
    id: "ShengShouLegendS3x3Cube",
  },
];

const allcubes = [...newcubes, ...bestsellers];

const news = [
  {
    img: "https://www.speedcube.rs/files/4007/speedcubing_takmicenja.jpg",
    title: "What is speedcubing",
    description:
      " Speedcubing is solving a Rubik's cube or similar puzzle as quickly as possible. Stacking is defined as a series of rotations of the moving parts of the cube in order to achieve a final solution - a cube with one color on one side of the cube.Most dice are sold in variations such as 2x2, 3x3, 4x4, 5x5, 6x6 and 7x7. Although there are also cubes that have as many as 17 layers.The current record for solving the most popular 3x3 Rubik's cube is held by Mats Valk, a Dutchman, with a time of 5.55 seconds and was set in March 2013 in Belgium at the Zonhoven Open.Speedcubing is very popular in the world and lovers of this puzzle gather at organized competitions, in order to improve the methods of solving the cube. ",
    time: "2.April.2021",
    id: 1,
  },
  {
    img: "https://www.speedcube.rs/userfiles/erne-rubik2.jpg",
    title: "Meet the Rubik's Cube",
    description:
      "This year marks the 45th anniversary of the appearance of the magic cube created by the Hungarian inventor and professor of architecture Erna Rubik. This anniversary is an opportunity for the Embassy of Hungary to draw the attention of the audience to this fact, and at the same time to `infect` the younger generations with this game of skill. On the original classic Rubik's Cube, each of the six faces was covered by nine stickers, each of one of six solid colours: white, red, blue, orange, green, and yellow. Some later versions of the cube have been updated to use coloured plastic panels instead, which prevents peeling and fading.",
    time: "21.May.2021",
    id: 2,
  },
  {
    img: "https://m.media-amazon.com/images/I/51qAYT9vTkL._AC_UF894,1000_QL80_.jpg",
    title: "MoYu WeiLong 3x3",
    description:
      "The new cube in the already huge cube market is the new cube from Moyu. It is a second generation cube and uses the combined technology of Zhanchi and Fangshi cubes.It has the best corner cut so far - cutting the corners of all the cubes. It is very fast, even too fast and is on par with Zhanchi and Fangshi cubes.The only downside to the Moyu cube is that it is loud.",
    time: "21.December.2021",
    id: 3,
  },
  {
    img: "https://www.speedcube.rs/userfiles/speedcubing.jpg",
    title: "History of speedcubing",
    description:
      "We owe everything to Erno Rubik, who invented the Rubik's Cube in 1974. Then the era of solving the Rubik's cube begins.The first world championship in stacking the cube was held in Budapest in 1982, and then the American Minh Thai won with a time of 22.95 seconds.What is interesting is that the then unknown Lars Petrus from Sweden and Jessica Fridrich from the Czech Republic participated in that competition.They would become best known for perfecting two of the most famous methods for solving the Rubik's Cube.After that, interest waned and revived again in Toronto in 2003 at the world competition.The cubes that were used were still based on the Rubik's design and were quite slow.Competitors used advanced stacking systems called the Petrus method or the Friedrich method after their creators.Dan Knights won with a time of 16.71 seconds.Since then, the world championships have been organized every two years with many competitions in between.With new types of dice with advanced mechanisms, competitors are able to achieve times under 6 seconds.The current record is held by Mats Valk from the Netherlands with an incredible time of 5.55 seconds.",
    time: "13.January.2022",
    id: 4,
  },
  {
    img: "https://www.speedcube.rs/files/4017/speedcube_tehnike_za_brzo_okretanje.jpg",
    title: "Tehnices for fast solving",
    description:
      "How is it possible that they spin the cube so fast that it cannot be seen with the naked eye. This is done using various techniques called finger tricks.From this video you can learn the basics - moves and finger positions when turning different sides of the 3x3 Rubik's cube.You practice to the point of unconsciousness until your brain memorizes the movements of your fingers, so you don't even have to think when you do them. Do them automatically.That's how the Speedcubers solve the cube.",
    time: "2.June.2022",
    id: 5,
  },
];
const reviews = [
  {
    img: "https://www.geocities.ws/homer564/homerrubix.gif",
    name: "Mark",
    p: "My cube arrived in one day! Well done, thank you.",
    grade: "9/10",
  },
  {
    img: "https://st.depositphotos.com/1695366/1400/v/950/depositphotos_14001287-stock-illustration-cartoon-boy-playing-rubiks-cube.jpg",
    name: "Jake",
    p: "Got my 4x4 cube and it moves like crazy. ",
    grade: "8.5/10",
  },
  {
    img: "https://res.cloudinary.com/teepublic/image/private/s--7AAkt639--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1641856206/production/designs/27106104_1",
    name: "Blake",
    p: "MyCube has them all, they delivered them all on time. I am very satisfied and will definitely buy again!",
    grade: "10/10",
  },
];
const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-150%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
export {
  fadeIn,
  staggerContainer,
  slideIn,
  newcubes,
  bestsellers,
  allcubes,
  news,
  reviews,
};
