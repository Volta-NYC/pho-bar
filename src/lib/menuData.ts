export type MenuItem = {
  name: string
  description?: string
  price: string
  signature?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  note?: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: "appetizers",
    label: "Appetizers / Sides",
    items: [
      { name: "Fried Spring Rolls (4 rolls)", description: "Minced pork, shrimp, & glass noodles wrapped in rice paper", price: "$9.95" },
      { name: "Fried Vegetable Spring Rolls (4 rolls)", price: "$9.95" },
      { name: "Fresh Summer Rolls (2 rolls)", description: "Choose one: pork, shrimp, chicken, or vegetarian (seasoned soy protein)", price: "$8.95" },
      { name: "Bao Bun (2 pcs)", description: "Choose one: pork, fried shrimp, chicken, or vegetarian", price: "$9.95" },
      { name: "Crispy Brussels Sprouts", price: "$8.00" },
      { name: "Fried Calamari", price: "$11.95" },
      { name: "Sautéed Vegetables", description: "Broccoli or bok choy w/ garlic, ginger, soy & oyster sauce", price: "$8.00" },
      { name: "Young Papaya & Mango Salad", price: "$9.95" },
      { name: "Garlic Bread", price: "$4.00" },
      { name: "Jasmine Rice / Vermicelli", price: "$4.00" },
      { name: "Broth", description: "Choose one: beef or vegetarian", price: "$6.00" },
    ],
  },
  {
    id: "sets",
    label: "Sets",
    note: "Half-and-half combos pairing a phở bowl with a bánh mì.",
    items: [
      { name: "Classic", description: "½ classic beef phở & ½ classic bánh mì", price: "$16.00" },
      { name: "Chicken", description: "½ chicken phở & ½ chicken bánh mì", price: "$18.00" },
      { name: "Pork", description: "½ pork chop phở & ½ pork chop bánh mì", price: "$18.00" },
      { name: "Vegetarian", description: "½ vegetarian phở & ½ vegetarian bánh mì", price: "$17.00" },
    ],
  },
  {
    id: "banhmi",
    label: "Bánh Mì",
    note: "Served w/ mayo, cucumber, cilantro, pickled carrots/daikon & shrimp chips. Add: fried egg $2.50, extra meat $6, extra sauce $0.50.",
    items: [
      { name: "Classic", description: "Vietnamese ham, house bacon & pâté", price: "$8.95" },
      { name: "Grilled Pork Chops", price: "$11.95" },
      { name: "Grilled Lemongrass Chicken", price: "$11.95" },
      { name: "Crispy Chicken", description: "Served with choice of house mayo, garlic aioli, or spicy mayo", price: "$12.95" },
      { name: "Crispy Catfish", description: "Served with house mayo sauce", price: "$12.95" },
      { name: "Spicy Brisket", description: "Hand-carved brisket topped w/ sautéed onion, pineapple & spicy au jus", price: "$13.95" },
      { name: "Vegetarian", description: "Seasoned soy protein, no mayo", price: "$11.95" },
    ],
  },
  {
    id: "pho",
    label: "Phở",
    note: "Served w/ bean sprouts, jalapeños, basil, lime — topped w/ scallions, cilantro and onions. Add: extra meat $6, egg $2.50, extra noodles $4, broccoli or bok choy $5.",
    items: [
      { name: "Classic Beef Phở", description: "Fresh thinly sliced raw beef", price: "$14.95" },
      { name: "Beef Ball Phở", price: "$14.95" },
      { name: "Brisket Phở", price: "$14.95" },
      { name: "Saigon Phở", description: "Fresh thinly sliced beef, beef balls & house brisket", price: "$16.95", signature: true },
      { name: "Grilled Pork Chops Phở", price: "$14.95" },
      { name: "Grilled Lemongrass Chicken Phở", price: "$14.95" },
      { name: "Vegetarian Phở", description: "Seasoned soy protein or mixed vegetables", price: "$14.95" },
      { name: "Shrimp Phở", price: "$17.95" },
      { name: "Spicy Special Phở", description: "Fresh thinly sliced raw beef, beef balls, house brisket & Vietnamese ham", price: "$17.95" },
      { name: "Bún Bò Huế", description: "Brisket, ham, beef shank", price: "$17.95", signature: true },
      { name: "Oxtail Phở", price: "$22.95" },
      { name: "Spicy Short Rib Phở", description: "Slow-braised short rib", price: "$23.95", signature: true },
    ],
  },
  {
    id: "buncom",
    label: "Bún or Cơm",
    note: "Served with cucumbers, lettuce, cherry tomatoes, pickled carrots/daikon & Vietnamese chili sauce. Topped w/ scallions and fried shallots. Add: egg $2.50, extra meat $6, extra sauce $0.50.",
    items: [
      { name: "Grilled Pork Chops", price: "$14.95" },
      { name: "Grilled Lemongrass Chicken", price: "$14.95" },
      { name: "Sautéed Shrimp (6 pcs)", price: "$15.95" },
      { name: "Sautéed Shrimp & Fried Spring Rolls", price: "$16.95" },
      { name: "Sautéed Shrimp & Fried Vegetarian Spring Rolls", price: "$16.95" },
      { name: "Grilled Pork Chops, Shrimp & Fried Spring Rolls", price: "$17.95" },
      { name: "Grilled Lemongrass Chicken, Shrimp & Spring Rolls", price: "$17.95" },
      { name: "Crispy Catfish", description: "Lightly battered catfish topped with sesame house mayo", price: "$13.95" },
      { name: "Spicy Oxtail", price: "$21.95" },
      { name: "Vegetarian", description: "Seasoned soy protein", price: "$14.95" },
      { name: "Spicy Brisket", description: "Slow-braised house brisket", price: "$17.95" },
      { name: "Spicy Short Rib", description: "Slow-braised 16 oz short rib", price: "$24.95" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Vietnamese Iced Coffee", price: "$6.00" },
      { name: "Vietnamese Coffee", price: "$5.00" },
      { name: "Thai Iced Tea", price: "$6.00" },
      { name: "Passion Fruit Soda", price: "$6.00" },
      { name: "Lemonade", description: "Mango, passion fruit, or strawberry", price: "$6.00" },
      { name: "Jasmine Iced Tea", description: "Mango, passion fruit, honey, or strawberry", price: "$6.00" },
      { name: "Arnold Palmer", price: "$6.00" },
      { name: "Bottled Water", price: "$2.00" },
      { name: "Soda", description: "Coke, Diet Coke, Ginger Ale, Seltzer", price: "$3.00" },
    ],
  },
]

export const ORDER_URL = "https://www.getsauce.com/order/phobar/menu"
export const PHONE = "(862) 310-6782"
export const ADDRESS = "80 6th Avenue, Brooklyn, NY 11217"
export const HOURS = "Mon–Sun · 11 AM – 9 PM"
export const INSTAGRAM = "https://instagram.com/phobarnyc"
export const FACEBOOK = "https://www.facebook.com/PhoBar-128359041278325/"
export const YELP = "https://www.yelp.com/biz/phobar-new-york-2"
export const LOGO = "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550261220890-QIYPEZ8HXBZQ4ZPYYUIF/PhoBar_LOGO.png"
export const PALM = "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550682551335-Q65DESGHGNKCDKX17UGC/palm.jpg"

export const HERO_IMAGES = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1561666195803-ES9JKULWEB1GTMCUV6P1/Pho_Bar-54.jpg",
    alt: "Overhead spread of grilled chicken rice bowl, spring rolls, and drinks",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550683234205-HRVX0F8GNHIB8OKPDT73/crazy.jpg",
    alt: "Yellow ‘Crazy’ neon sign on white crown-molded wall",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550683036065-EZI38OFD1IH0LLP8UJ3O/1L2A7493.jpg",
    alt: "Wide table spread with bánh mì, spring rolls, crawfish phở, and beer",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1561666697596-BL14RJ249HPY268OB7SF/L1210243.jpg",
    alt: "Phở bowls, rice dishes, and vegetables on a wood table",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550700383600-OGAV0KMCP4UWPR5IIKBM/IMG_4613_V2.jpg",
    alt: "Multiple dishes with PhoBar branded placemats and menus",
  },
]

export const ABOUT_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550682152493-2TCABLOG6902PMRX3YSF/0f8403f849cc1c17b870e02f210bec20.jpg"
export const INTERIOR_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1561666819045-O6E0HX01T1OL4CTNH08M/PhoBar_6.17.19-40.jpg"
export const BLACK_BRAND_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550598361625-2JFTWULUARYWTALS9V31/black01.jpg"
export const MENU_BANNER_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1561667241719-WFBT427Y3AA32O3U5633/L1210395.jpg"
export const NEON_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550683234205-HRVX0F8GNHIB8OKPDT73/crazy.jpg"
