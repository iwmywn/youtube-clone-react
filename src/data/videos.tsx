const videos = [
  {
    id: 0,
    urlId: "25ROFXjoaAU",
    thumbnail:
      "https://i.ytimg.com/vi/25ROFXjoaAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrYNeFH1-Itch350uHZyHMn4gB4w",
    Avatar:
      "https://yt3.ggpht.com/bhG7T_FzfLoxqmJwGobKF1B9u9FhIXiYA8JYRPPoHcOASht0psOD3LZHZ3HqPEICEn30FWkDfg=s68-c-k-c0x00ffffff-no-rj",
    title: "The Chainsmokers - Closer (Lyrics) ft. Halsey",
    channelName: "7clouds",
    channelId: "UCNqFDjYTexJDET3rPDrmJKg",
    duration: "4:06",
    stats: {
      views: "434M views",
      postDay: "5 years ago",
    },
    theme: "Music",
  },
  {
    id: 1,
    urlId: "f1r0XZLNlGQ",
    thumbnail:
      "https://i.ytimg.com/vi/f1r0XZLNlGQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhLIGUoXzAP&rs=AOn4CLBo5rthjSKqiOuiVqs_aD_JTH41ow",
    Avatar:
      "https://yt3.ggpht.com/E9LfgUnjdf7A_d8_9iqVvai4HSwIvrE6NE6yKXOIQjHNXzWdWg5NNU7-a1flZGspflBmYXKtxw=s88-c-k-c0x00ffffff-no-rj",
    title:
      "The Weeknd, JENNIE & Lily Rose Depp - One Of The Girls (Official Audio)",
    channelName: "The Weeknd",
    channelId: "UC0WP5P-ufpRfjbNrmOWwLBQ",
    duration: "4:05",
    stats: {
      views: "214M views",
      postDay: "1 year ago",
    },
    theme: "Music",
  },
  {
    id: 2,
    urlId: "dNCWe_6HAM8",
    thumbnail:
      "https://i.ytimg.com/vi/dNCWe_6HAM8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBA_lDCZ4UnvroB4C1avbxehLFWOg",
    Avatar:
      "https://yt3.ggpht.com/EMHEc8vNqHUC-eBFl_RrLcla7_NH6hEohpi0RrMABe6cOcmCabmnxcqfVFmONWTQg5LtbpNkQg=s88-c-k-c0x00ffffff-no-rj",
    title: "LISA - 'MONEY' EXCLUSIVE PERFORMANCE VIDEO",
    channelName: "BLACKPINK",
    channelId: "UCOmHUn--16B90oW2L6FRR3A",
    duration: "2:51",
    stats: {
      views: "1B views",
      postDay: "3 years ago",
    },
    theme: "Music",
  },
  {
    id: 3,
    urlId: "FLGCGc7sAUw",
    thumbnail:
      "https://i.ytimg.com/vi/FLGCGc7sAUw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3p-6wR-0epY_9XvJAzH65pabNIw",
    Avatar:
      "https://yt3.ggpht.com/w6fcGksrjdgwkHPm4MEVtBGH-mf3fEvGX-GgJdA6BWfh5atriGItMdJCjyn7SKXnXmB63gs4UQ=s88-c-k-c0x00ffffff-no-rj",
    title: "Bella Poarch - Build a B*tch (Official Music Video)",
    channelName: "Bella Poarch",
    channelId: "UCCY_8y1FjtOegxKB4s2bWqw",
    duration: "2:50",
    stats: {
      views: "501M views",
      postDay: "3 years ago",
    },
    theme: "Music",
  },
  {
    id: 4,
    urlId: "wcjc7YTkWWI",
    thumbnail:
      "https://i.ytimg.com/vi/wcjc7YTkWWI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm_akddYIzo6Xa2maCYLC-56V7LA",
    Avatar:
      "https://yt3.ggpht.com/K-QEq_EqK87lT5enX_PMNPMEIaifuXxF8z7Ma8C_aLmDcZDsBPsyh0Ja6PsGytKs2_Pb45KaQg=s68-c-k-c0x00ffffff-no-rj",
    title: "Fukuoka's most FAMOUS Yatai 2AM Breakdown and Cleanup",
    channelName: "Japanese Food Craftsman",
    channelId: "UCdfhVbZsOMwRn4A0LO5k0ww",
    duration: "28:25",
    stats: {
      views: "2.4M views",
      postDay: "5 months ago",
    },
    theme: "Japanese Cuisine",
  },
  {
    id: 5,
    urlId: "QKP1zLojrr0",
    thumbnail:
      "https://i.ytimg.com/vi/QKP1zLojrr0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZPhm4XeMpkMkB8ESww40ywixnxw",
    Avatar:
      "https://yt3.ggpht.com/T1D5_Qor7oaG6FqDwtHFR6NON0un43W5wW-zN17vBQ-dppqGw2qacbeOve2OccKnoRvdx_GS=s68-c-k-c0x00ffffff-no-rj",
    title:
      "屋台ラーメン A Day in the Life of a Ramen Chef - Old Style Ramen Stall - Japanese Street Food - 阪神軒 兵庫",
    channelName: "MOGUMOGU - Food Entertainment - モグモグ",
    channelId: "UCA1Aytg9Rvn_krFQGv9XDRA",
    duration: "18:11",
    stats: {
      views: "5.8M views",
      postDay: "2 years ago",
    },
    theme: "Japanese Cuisine",
  },
  {
    id: 6,
    urlId: "5g2zEZoVfDg",
    thumbnail:
      "https://i.ytimg.com/vi/5g2zEZoVfDg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCS50_CkLxn6GEZAwluS4tZg7Epnw",
    Avatar:
      "https://yt3.ggpht.com/T1D5_Qor7oaG6FqDwtHFR6NON0un43W5wW-zN17vBQ-dppqGw2qacbeOve2OccKnoRvdx_GS=s68-c-k-c0x00ffffff-no-rj",
    title: "美人ラーメン店長 - Beautiful Ramen Master - Japanese Street Food",
    channelName: "MOGUMOGU - Food Entertainment - モグモグ",
    channelId: "UCA1Aytg9Rvn_krFQGv9XDRA",
    duration: "8:11",
    stats: {
      views: "14M views",
      postDay: "2 years ago",
    },
    theme: "Japanese Cuisine",
  },
  {
    id: 7,
    urlId: "6rioJ_5MoGk&t=4s",
    thumbnail:
      "https://i.ytimg.com/vi/6rioJ_5MoGk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKLmef_Q5Eircw9h96a3tPLhmWIA",
    Avatar:
      "https://yt3.ggpht.com/ytc/AIdro_kYdVG603ZWgmRiJERyQUi_N_HPVk70Fja-g8GvMY1Bmwg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Amazing Japanese Ramen that won the 1st place in Japan  - Korean street food",
    channelName: "끼룩푸드 seagull food",
    channelId: "UCa0aTySoJBHXpHigv5tsxbQ",
    duration: "21:39",
    stats: {
      views: "28M views",
      postDay: "1 year ago",
    },
    theme: "Japanese Cuisine",
  },
  {
    id: 8,
    urlId: "WxiYbLw55cE",
    thumbnail:
      "https://i.ytimg.com/vi/WxiYbLw55cE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnbisOnrEhQWisIznGcMG5cCHM8Q",
    Avatar:
      "https://yt3.ggpht.com/ytc/AIdro_mW7XptZkENb0ioh_oSF60CTX1y_Ftk9ZD-vY4I2LbJ-kE=s68-c-k-c0x00ffffff-no-rj",
    title: "Rare Miyazaki Wagyu A5 - Teppanyaki in Japan",
    channelName: "Aden Films",
    channelId: "UCu9g5OmzcCpcJnmSYyHnIVw",
    duration: "18:59",
    stats: {
      views: "23M views",
      postDay: "4 years ago",
    },
    theme: "Grilling",
  },
  {
    id: 9,
    urlId: "eJOkAxHCVpw",
    thumbnail:
      "https://i.ytimg.com/vi/eJOkAxHCVpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCorJ3RYsgTwKYm98f3b9aHL7qc2Q",
    Avatar:
      "https://yt3.ggpht.com/nuauwuN8sxUEDQxXD9TLLYW7JJ1VHgGOPbZgY4JboCWwLGxjbFt-JS_3zWElI3Shw-awxBQ6=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Secrets Of Wild Cuisine! Discover New Facets Of Taste With Fish And Meat",
    channelName: "WILDERNESS COOKING",
    channelId: "UCj4KP216972cPp2w_BAHy8g",
    duration: "1:09:49",
    stats: {
      views: "23M views",
      postDay: "1 year ago",
    },
    theme: "Grilling",
  },
  {
    id: 10,
    urlId: "pCddEgU0R8E",
    thumbnail:
      "https://i.ytimg.com/vi/pCddEgU0R8E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlS0usyU9XmPVF83xpipyqmfLvGQ",
    Avatar:
      "https://yt3.ggpht.com/ytc/AIdro_k_TiZkZTuY-9xYCsDds4wQi7oagAaJeVZEhEnwyVls8ZV0=s68-c-k-c0x00ffffff-no-rj",
    title:
      "How a Master Chef Runs one of NYC's Best Vietnamese Restaurants — Mise En Place",
    channelName: "Eater",
    channelId: "UCRzPUBhXUZHclB7B5bURFXw",
    duration: "15:01",
    stats: {
      views: "3M views",
      postDay: "2 years ago",
    },
    theme: "Grilling",
  },
  {
    id: 11,
    urlId: "h7CiEUzF3bQ",
    thumbnail:
      "https://i.ytimg.com/vi/h7CiEUzF3bQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLu6CL212VwMr3n5e9NZdrIUtJeQ",
    Avatar:
      "https://yt3.ggpht.com/WJrZL8crsiMhYSUN1fAeHG4ZmNzW_uwPj__1yt1lLqQBYDK8w5Zd3Aq2hbWGjoHH9Q91IGDFXg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Most EXTREME Seafood in Bangkok Chinatown | STREET FOOD tour in Thailand",
    channelName: "STREET FOOD KING",
    channelId: "UC9R0LMKOd34FDk_BsAUQpUQ",
    duration: "32:14",
    stats: {
      views: "4.8M views",
      postDay: "1 year ago",
    },
    theme: "Grilling",
  },
  // {
  //   id: ,
  // urlId: "",
  //   thumbnail:
  //     "",
  //   Avatar:
  //     "",
  //   title:
  //     "",
  //   channelName: "",
  //   channelId: "",
  //   duration: "",
  //   stats: {
  //     views: " views",
  //     postDay: " ago",
  //   },
  //   theme: "",
  // },
];

export default videos;
