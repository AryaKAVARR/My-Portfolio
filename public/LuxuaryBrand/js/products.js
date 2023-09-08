/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "A1",
    name: "Tommy - Men's",
    imagePath: "https://m.media-amazon.com/images/I/713JwalCheS._AC_UX425_.jpg",
    description:
      "Tommy hilfiger lifestyle brands for cool style, featuring men's tshirt and jeans.",
    price: 79,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "A2",
    name: "Tommy - Winter wear",
    imagePath:
      "https://www.thefashionisto.com/wp-content/uploads/2018/11/Tommy-Hilfiger-Rossignol-Campaign-2018-001.jpg",
    description:
      "Tommy hilfiger lifestyle brands for cool style, featuring winter wear attires for both Men and Women .",
    price: 150,
    discontinued: false,
    categories: ["c1", "c2"]
  },

  {
    id: "A3",
    name: "Tommy - Women's",
    imagePath:
      "https://i5.walmartimages.com/asr/879cb187-d749-4ffe-ac7d-8b136dca0a68.0ea3e44f174964d40bfe691ca4641b10.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    description: "Tommy hilfiger featuring Women's tshirt and jeans",
    price: 65,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "A4",
    name: "Tommy - kids winter wear",
    imagePath:
      "https://global.tommy.com/tommy-global-images/collection/_size_2250x1228/C_Collection_overview_kids_banner_1126x614.jpg",
    description:
      "Tommy hilfiger lifestyle brands for cool style, featuring winter wear attires for kids.",
    price: 89,
    discontinued: false,
    categories: ["c3", "c4"]
  },

  {
    id: "A5",
    name: "Addidas",
    imagePath:
      "https://i.etsystatic.com/19141424/r/il/5fbda5/2419694192/il_570xN.2419694192_f2ig.jpg",
    description:
      "Addidas is known for its good quality of manufacturing. Addidas has a large variety of clothes.",
    price: 30,
    discontinued: false,
    categories: ["c2", "c1", "c3", "c4"]
  },

  {
    id: "A6",
    name: "Armani - Men",
    imagePath: "https://cache.mrporter.com/variants/images/43769801097480756/ou/w358_q60.jpg",
    description:
      "Armani is originated in Italy and spread world wide as one of the luxury brands. Armani is all about opulent finishing touches that produce timeless looks and accentuate a person's inherent charm. Here are the suites and formals for the men for buisness uses and much more.",
    price: 80,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "A7",
    name: "Armani - Women",
    imagePath:
      "https://www.fashiongonerogue.com/wp-content/uploads/2022/08/Giorgio-Armani-Fall-Winter-2022-Collection04.jpg",
    description:
      "Armani is originated in Italy and spread world wide as one of the luxury brands. Armani is all about opulent finishing touches that produce timeless looks and accentuate a person's inherent charm. Presenting women's collection",
    price: 99,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "A8",
    name: "Hermes",
    imagePath: "https://static.purseblog.com/images/2022/07/Hermes-Men-s-RTW-SS-23-1.jpg",
    description:
      "A French maker of luxury products, Hermes International SA, or just Hermes, was founded in 1837. The French design house specialises in ready-to-wear, jewellery, watches, leather goods, lifestyle accessories, home decor, and ready-to-wear.",
    price: 65,
    discontinued: false,
    categories: ["c2", "c1", "c4"]
  },

  {
    id: "A9",
    name: "Nike - Men's athletic wear",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0ifdacemu8dbiyveth6/dri-fit-fitness-t-shirt-0VRmcF.png",
    description:
      "Nike is an American multinational firm that designs, develops, manufactures, markets, and sells shoes, clothes, equipment, accessories, and services on a global scale. Here are some of the collections of the tracks and tshirts for the men.",
    price: 79,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "A101",
    name: "Nike - Women's athletic wear",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/483dc9a1-a23f-435e-81c7-fb91e540bf37/pro-dri-fit-training-tank-Fcstwq.png",
    description:
      "Nike is an American multinational firm that designs. Here are some of the collections of the tracks, tshirts and much more for the Women.",
    price: 69,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "A102",
    name: "Hollister",
    imagePath:
      "https://img.businessoffashion.com/resizer/fpyYznIeDGef3rzFZIaTXG3xISs=/1600x1200/filters:format(jpg):quality(70):focal(-5x10:5x20)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/5EVGFSZBKVH7HEAJAYUDR4YJWA.jpg",
    description:
      "The retail brand Hollister Co., frequently referred to as Hollister or HCo., is owned by Abercrombie & Fitch Co. and sells clothing, accessories. Products are offered both in-person and online by the business.",
    price: 52,
    discontinued: false,
    categories: ["c2", "c1"]
  },

  {
    id: "A10_3",
    name: "H&M - kids",
    imagePath:
      "https://www2.hm.com/content/dam/TOOLBOX/PRE_SEASON/2022_s06/october_2022/TCK6018-3x2.jpg",
    description:
      "With everything from homewares to adorable kidswear, H&M is truly a one-stop shop for stylish pieces as affordable prices.",
    price: 39,
    discontinued: false,
    categories: ["c3", "c4"]
  },

  {
    id: "A104",
    name: "H&M",
    imagePath: "https://s3.r29static.com/bin/entry/86c/0,472,3150,3780/960xbm,70/1661850/image.jpg",
    description:
      "The 1947-founded retailer H&M's design team makes affordable, ecological clothing. For women, men, teenagers, the collections cover every style and occasion, from glitzy party attire to classic essentials and practical sportswear. ",
    price: 64,
    discontinued: false,
    categories: ["c1", "c2"]
  },

  {
    id: "A105",
    name: "Reiss",
    imagePath:
      "https://cdn.rt.emap.com/wp-content/uploads/sites/2/2021/10/15112928/Reiss-kids-index3-1024x683.jpg",
    description:
      "A contemporary brand including coats, jackets, knits, skirts, and more for fashion-conscious kids.",
    price: 49,
    discontinued: false,
    categories: ["c3", "c4"]
  },

  {
    id: "A106",
    name: "Canada Goose",
    imagePath:
      "https://cdn.shoplightspeed.com/shops/638138/files/36103371/268x348x2/canada-goose-canada-goose-ms-armstrong-hoody.jpg",
    description:
      "Customers of this Canadian company can purchase unique jackets and sweatshirts. These are offered for adults, women, and children.",
    price: 74,
    discontinued: false,
    categories: ["c1", "c2", "c3"]
  },

  {
    id: "A107",
    name: "Canada Goose",
    imagePath:
      "https://images.canadagoose.com/image/upload/w_800,c_scale,f_auto,q_auto:best/v1634998203/product-image/2318B_61.jpg",
    description:
      "Customers of this Canadian company can purchase unique jackets and sweatshirts. These are offered for adults, women, and children.",
    price: 74,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "A108",
    name: "Reigning Champ - Women",
    imagePath: "https://www.backcountry.com/images/items/1200/REI/REIE055/BLA.jpg",
    description:
      "The Reigning Champ, a Toronto-based business, offers the top Canadian apparel. It creates and produces some of the most distinctive apparel. Here we presents track-suits, hoodies and shirts for Women.",
    price: 44,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "A109",
    name: "Stanfield's",
    imagePath:
      "https://cdn.shopify.com/s/files/1/0249/4260/8461/products/mens-antimicrobial-work-t-shirt_5771-grey-mix-sw_600x.png?v=1655427079",
    description:
      "Since 1856, the great company Stanfield's has been selling amazing clothing. Popularity of this fantastic clothing line is attributed to how comfortable the clothes are.",
    price: 90,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "A11",
    name: "Reigning Champ - Men",
    imagePath: "https://imagescdn.simons.ca/images/13945-41028-1-A1_3/monochrome-t-shirt.jpg?__=15",
    description:
      "The Reigning Champ, a Toronto-based business, offers the top Canadian apparel. It creates and produces some of the most distinctive apparel. Here we presents track-suits, hoodies and shirts for Men.",
    price: 45,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "A12",
    name: "Wing Plus Horns",
    imagePath: "https://wingsandhorns.com/app/uploads/2021/04/Archive_Looks_Featured_FW20_v2.jpg",
    description:
      "Customers can choose from a selection of clothes at Wings Plus Horns. It also emphasises the newest trends in style. You'll be astounded by the services and apparel quality.",
    price: 29,
    discontinued: false,
    categories: ["c2", "c1"]
  }
];
