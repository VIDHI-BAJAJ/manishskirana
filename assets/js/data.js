/* ==========================================================================
   Manish's — site content
   --------------------------------------------------------------------------
   Everything you need to edit day to day lives in this one file: contact
   details, the product catalogue and the testimonials. Anything wrapped in
   [SQUARE BRACKETS] is a placeholder still waiting on real information.
   ========================================================================== */

/* --- business details ----------------------------------------------------
   These fill the footer, the contact page and the WhatsApp links.
   Replace the bracketed values and they update everywhere at once.        */

const SITE = {
  phone:     '[PHONE NUMBER]',
  email:     '[EMAIL ADDRESS]',
  whatsapp:  '',               // digits only, e.g. '919876543210' — enables the WhatsApp buttons
  address:   ['[STREET ADDRESS]', '[AREA]', '[CITY, PIN]'],
  hours:     '[OPENING HOURS]',
  mapsUrl:   '',               // paste a Google Maps link to activate "Open in maps"
  founded:   1993,
  social: { instagram: '', facebook: '', linkedin: '' }
};

/* --- catalogue -----------------------------------------------------------
   category  dry-fruits-nuts | seeds | spices-essentials | speciality
   image     a file in assets/img/ — leave empty to show a photo placeholder
   Each product gets its own page automatically at
   product.html?p=<slug>                                                    */

const CATEGORIES = [
  { id: 'dry-fruits-nuts',   name: 'Dry Fruits & Nuts' },
  { id: 'seeds',             name: 'Seeds' },
  { id: 'spices-essentials', name: 'Spices & Essentials' },
  { id: 'speciality',        name: 'Speciality Products' }
];

const PRODUCTS = [
  {
    slug: 'golden-raisins', name: 'Golden Raisins', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Amber, seedless, sun-cured', origin: 'GCC, family vineyards',
    image: 'assets/img/p-golden-raisins.png',
    lede: 'Plump seedless raisins cured in the sun to a clear amber, sweet without being cloying.',
    body: 'Sorted for even colour and size, so a handful looks as good on a mithai counter as it tastes in a pilaf.',
    bestFor: 'Sweets, baking, trail mixes', packing: '10 kg bulk cartons and 400g retail packs',
    storage: 'Airtight and cool. Refrigerate in humid months to keep them from clumping.',
    recipe: 'Bloom a handful in warm water for ten minutes before folding into kheer — they plump up and release their sugar into the milk.',
    uses: ['Kheer and halwa', 'Baking', 'Trail mixes', 'Pulao']
  },
  {
    slug: 'sultana-raisins', name: 'Sultana Raisins', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Soft, bright, the everyday sweet', origin: 'GCC',
    image: 'assets/img/p-sultana-raisins.png',
    lede: 'Softer and tangier than golden raisins, and the one most kitchens reach for first.',
    body: 'A dependable everyday grade — consistent moisture, no stems, no grit.',
    bestFor: 'Everyday cooking, breakfast', packing: '10 kg bulk cartons and 400g retail packs',
    storage: 'Airtight and cool; refrigerate after opening.',
    recipe: 'Scatter over warm porridge with a spoon of honey and a pinch of cinnamon.',
    uses: ['Porridge', 'Baking', 'Snacking', 'Chutneys']
  },
  {
    slug: 'green-raisins', name: 'Green Raisins', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Shade-dried, emerald, delicate', origin: 'GCC',
    image: 'assets/img/p-green-raisins.png',
    lede: 'Dried in shade rather than sun, which is what keeps the colour green and the flavour delicate.',
    body: 'A speciality grade — slower to produce, and priced accordingly. Worth it where the look matters.',
    bestFor: 'Premium mithai, gifting', packing: '5 kg cartons and 250g retail packs',
    storage: 'Airtight, cool and out of direct light — light dulls the colour.',
    recipe: 'Fold through a shrikhand at the last moment so the green stays bright.',
    uses: ['Mithai', 'Gift boxes', 'Shrikhand', 'Garnish']
  },
  {
    slug: 'black-raisins', name: 'Black Raisins', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Deep, caramel-rich intensity', origin: 'GCC',
    image: 'assets/img/p-black-raisins.png',
    lede: 'Dark, intensely sweet and faintly smoky, with far more depth than a standard raisin.',
    body: 'Seedless and soft-textured, they hold up well to long cooking.',
    bestFor: 'Rich gravies, cakes', packing: '10 kg bulk cartons and 400g retail packs',
    storage: 'Airtight and cool.', recipe: 'Soak in warm water, blend to a paste, and use to sweeten a korma gravy without sugar.',
    uses: ['Korma', 'Fruit cake', 'Soaking water', 'Snacking']
  },
  {
    slug: 'dried-figs', name: 'Dried Figs', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Tender, honeyed, tiny crunch', origin: 'GCC',
    image: 'assets/img/p-dried-figs.png',
    lede: 'Soft sun-dried figs with a mellow honeyed taste and their signature gentle crunch of tiny seeds. Chosen for size, colour and softness.',
    body: 'Figs are among the most fibre-rich fruits you can keep in the pantry, with calcium, potassium and magnesium in every chewy bite. Their honeyed flesh makes them a dessert that needs nothing added.',
    bestFor: 'Snacking, cheese boards, breakfast', packing: '10 kg bulk cartons and 400g retail packs',
    storage: 'Airtight and cool; refrigerate after opening and enjoy within a few months for the softest texture.',
    recipe: 'Warm fig and cheese board: halve the figs, warm them briefly in a pan with honey, and serve over soft cheese with crushed walnuts. Ready in five minutes.',
    uses: ['Cheese boards', 'Breakfast bowls', 'Fig and walnut bites', 'Tagines', 'Warm porridge']
  },
  {
    slug: 'dried-apricots', name: 'Dried Apricots', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Sun-dried, bright and tangy', origin: 'GCC and Türkiye',
    image: 'assets/img/p-dried-apricots.png',
    lede: 'Bright, tangy and soft enough to eat straight from the pack.',
    body: 'Available sulphured for colour or unsulphured for a darker, more natural fruit — tell us which you need.',
    bestFor: 'Snacking, stews, compotes', packing: '10 kg bulk cartons and 400g retail packs',
    storage: 'Airtight and cool.', recipe: 'Simmer with a cinnamon stick and a strip of orange peel for a compote that keeps a week.',
    uses: ['Snacking', 'Lamb stews', 'Compote', 'Granola']
  },
  {
    slug: 'mazafati-dates', name: 'Mazafati Dates', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Soft, dark, honey-caramel', origin: 'GCC',
    image: 'assets/img/p-mazafati-dates.png',
    lede: 'Very soft, very dark, and closer to caramel than to fruit.',
    body: 'A fresh date, so it travels and stores cold. Best eaten within the season.',
    bestFor: 'Snacking, date shakes', packing: '5 kg cartons and 500g retail packs',
    storage: 'Refrigerate. Freezes well for up to a year.',
    recipe: 'Blend four dates with cold milk and a pinch of cardamom for a shake that needs no sugar.',
    uses: ['Snacking', 'Milkshakes', 'Stuffed with nuts', 'Ramadan']
  },
  {
    slug: 'medjool-dates', name: 'Medjool Dates', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'The king of dates', origin: 'Select orchards',
    image: 'assets/img/p-medjool-dates.png',
    lede: 'Large, fleshy and richly sweet — the date people buy when they mean to impress.',
    body: 'Graded by size: Jumbo, Large and Medium. We will send the grade you ask for, not the grade we have spare.',
    bestFor: 'Gifting, premium retail', packing: '5 kg cartons and 500g retail packs',
    storage: 'Cool and airtight; refrigerate in summer.',
    recipe: 'Split, stuff with a walnut half and a little soft cheese, and serve with coffee.',
    uses: ['Gift boxes', 'Stuffed dates', 'Energy balls', 'Snacking']
  },
  {
    slug: 'sayer-dates', name: 'Sayer Dates', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Semi-dry, amber, versatile', origin: 'GCC',
    image: 'assets/img/p-sayer-dates.png',
    lede: 'A semi-dry date that keeps well and works as hard in a factory as it does in a kitchen.',
    body: 'The practical choice for syrup, paste and bulk processing — good sugar content, reliable supply.',
    bestFor: 'Processing, date syrup, bulk', packing: '10 kg bulk cartons',
    storage: 'Cool and dry; no refrigeration needed.',
    recipe: 'Simmer with water and strain for a date syrup that replaces refined sugar in most baking.',
    uses: ['Date syrup', 'Date paste', 'Bakery', 'Bulk supply']
  },
  {
    slug: 'barberries', name: 'Barberries', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Ruby-red zereshk, bright and tart', origin: 'GCC',
    image: 'assets/img/p-barberries.png',
    lede: 'Tiny, jewel-red and sharply sour — the thing that makes a zereshk polow taste like itself.',
    body: 'Cleaned and sorted. Tart enough that a little goes a long way.',
    bestFor: 'Rice dishes, garnish', packing: '5 kg cartons and 200g retail packs',
    storage: 'Refrigerate to keep the colour bright.',
    recipe: 'Rinse, then warm for one minute in butter with a spoon of sugar before scattering over rice. Any longer and they burn.',
    uses: ['Zereshk polow', 'Garnish', 'Salads', 'Stuffing']
  },
  {
    slug: 'pistachios', name: 'Pistachios', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Naturally open, roasted or raw', origin: 'GCC',
    image: 'assets/img/p-pistachios.png',
    lede: 'Naturally split shells, which means they ripened properly rather than being forced open.',
    body: 'Available raw, roasted, or roasted and salted. Grade by count per ounce on request.',
    bestFor: 'Table nuts, mithai', packing: '10 kg bulk cartons and 250g retail packs',
    storage: 'Cool and airtight — the oil turns if they get warm.',
    recipe: 'Toast lightly, crush coarse, and finish a kulfi with them just before serving.',
    uses: ['Table nuts', 'Mithai', 'Kulfi', 'Baklava']
  },
  {
    slug: 'pistachio-kernels', name: 'Pistachio Kernels', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Shelled, for sweets and gelato', origin: 'GCC',
    image: 'assets/img/p-pistachio-kernels.png',
    lede: 'Shelled and sorted for colour — the greener the kernel, the higher the grade.',
    body: 'Bought by confectioners and gelato makers who need the colour to carry without dye.',
    bestFor: 'Confectionery, gelato, garnish', packing: '10 kg bulk cartons and 250g retail packs',
    storage: 'Refrigerate or freeze for long storage.',
    recipe: 'Blend with a little sugar and nothing else for a pistachio paste that keeps three weeks cold.',
    uses: ['Gelato', 'Pistachio paste', 'Mithai', 'Garnish']
  },
  {
    slug: 'cashew-w320', name: 'Cashew Nuts W320 / W240', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Whole, creamy, export grades', origin: 'Vietnam and India',
    image: 'assets/img/p-cashew-w320.png',
    lede: 'Whole white cashews in the two grades most kitchens actually use.',
    body: 'W320 is the workhorse; W240 is larger and priced above it. Both graded to export standard — the count per pound is what you are paying for.',
    bestFor: 'Gravies, mithai, table nuts', packing: '10 kg vacuum tins and 400g retail packs',
    storage: 'Airtight and cool; they absorb odours, so keep them away from spices.',
    recipe: 'Soak twenty minutes and blend with hot water for a cream that thickens a gravy without dairy.',
    uses: ['Cashew gravy', 'Mithai', 'Table nuts', 'Cashew cream']
  },
  {
    slug: 'roasted-cashews', name: 'Roasted Cashews', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Golden, crisp, table ready', origin: 'Vietnam and India',
    image: 'assets/img/p-roasted-cashews.png',
    lede: 'Roasted to a even gold and ready to serve — plain, salted or lightly spiced.',
    body: 'Roasted in small batches so they arrive crisp rather than soft.',
    bestFor: 'Snacking, hospitality', packing: '5 kg cartons and 200g retail packs',
    storage: 'Airtight. Once opened they soften within a fortnight in humid weather.',
    recipe: 'Toss warm with black pepper, a little salt and a squeeze of lime.',
    uses: ['Snacking', 'Hotel minibars', 'Gift tins', 'Bar snacks']
  },
  {
    slug: 'almonds', name: 'Almonds', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Whole, blanched or roasted', origin: 'Select origins',
    image: 'assets/img/p-almonds.png',
    lede: 'Whole almonds with a clean snap — available in shell, blanched, sliced or roasted.',
    body: 'The most-reordered line we carry, which means we watch its grade more closely than any other.',
    bestFor: 'Everything — snacking to baking', packing: '10 kg bulk cartons and 400g retail packs',
    storage: 'Cool and airtight; refrigerate for long storage.',
    recipe: 'Soak overnight, slip the skins off in the morning, and blend with water for fresh almond milk.',
    uses: ['Snacking', 'Almond milk', 'Badam halwa', 'Baking']
  },
  {
    slug: 'walnuts', name: 'Walnuts', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Light halves, fresh crop', origin: 'GCC and Chile',
    image: 'assets/img/p-walnuts.png',
    lede: 'Light-coloured halves from the current crop, with none of the bitterness of old stock.',
    body: 'Walnuts turn faster than any other nut we carry, so we buy them in smaller, more frequent lots.',
    bestFor: 'Baking, salads, snacking', packing: '10 kg cartons and 250g retail packs',
    storage: 'Refrigerate or freeze. At room temperature they go bitter within months.',
    recipe: 'Toast in a dry pan for three minutes before using — it wakes the flavour up entirely.',
    uses: ['Baking', 'Salads', 'Cheese boards', 'Walnut chutney']
  },
  {
    slug: 'hazelnuts', name: 'Hazelnuts', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: "Round, aromatic, chocolate's ally", origin: 'Türkiye',
    image: 'assets/img/p-hazelnuts.png',
    lede: 'Round Turkish hazelnuts, roasted to bring out the aroma that makes them belong with chocolate.',
    body: 'Available raw, roasted, or roasted and skinned. Sized on request.',
    bestFor: 'Chocolate, praline, bakery', packing: '10 kg cartons and 250g retail packs',
    storage: 'Cool and airtight.', recipe: 'Roast, rub in a cloth to skin them, then blend with dark chocolate for a praline paste.',
    uses: ['Praline', 'Chocolate', 'Bakery', 'Granola']
  },
  {
    slug: 'peanuts', name: 'Peanuts', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Blanched, roasted, dependable', origin: 'Select origins',
    image: 'assets/img/p-peanuts.png',
    lede: 'The least glamorous line we carry and one of the most consistent.',
    body: 'Blanched or with skins, raw or roasted, in bulk. Sortex cleaned in every grade.',
    bestFor: 'Chikki, chutneys, snacking', packing: '25 kg sacks and 10 kg cartons',
    storage: 'Cool and dry, off the floor.',
    recipe: 'Roast, crush coarse, and stir into a poha with curry leaves and lime.',
    uses: ['Chikki', 'Peanut chutney', 'Poha', 'Bar snacks']
  },

  /* --- Seeds ------------------------------------------------------------ */
  {
    slug: 'sesame-seeds', name: 'Sesame Seeds', category: 'seeds', group: 'Seeds',
    tagline: 'Tilli, 100% sortex clean', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SESAME SEEDS',
    lede: 'Hulled white sesame, sortex cleaned to 99.95% purity.',
    body: '[ADD DETAIL — varieties you stock, oil content, whether you also carry black sesame.]',
    bestFor: '[BEST FOR]', packing: '25 kg sacks and 1 kg retail packs',
    storage: 'Cool and dry in a sealed container.',
    recipe: '[A RECIPE TO TRY]', uses: ['Til laddu', 'Bakery', 'Tahini', 'Garnish']
  },

  /* --- Spices & essentials ---------------------------------------------- */
  {
    slug: 'jeera', name: 'Jeera', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Whole cumin, cleaned and aromatic', origin: '[ORIGIN]',
    image: 'assets/img/cat-whole.jpg', imageFit: 'cover',
    lede: 'Whole cumin seed, machine cleaned and hand checked, with the oil still in it.',
    body: '[ADD DETAIL — grade, whether you also supply ground jeera, seasonal availability.]',
    bestFor: 'Tempering, masalas', packing: '25 kg sacks and 500g retail packs',
    storage: 'Airtight and away from light; whole seed keeps its aroma about a year.',
    recipe: 'Dry roast and grind fresh — ground jeera loses half its aroma within a month.',
    uses: ['Tadka', 'Garam masala', 'Jeera rice', 'Buttermilk']
  },

  /* --- Speciality ------------------------------------------------------- */
  {
    slug: 'citric-acid', name: 'Citric Acid', category: 'speciality', group: 'Speciality',
    tagline: 'Food grade, fine crystal', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CITRIC ACID PACK',
    lede: 'Food-grade citric acid in a fine crystal that dissolves cleanly.',
    body: '[ADD DETAIL — grade certification, pack sizes beyond 500g.]',
    bestFor: 'Preserving, confectionery', packing: '25 kg bags and 500g retail packs',
    storage: 'Sealed and dry — it cakes in humidity.',
    recipe: '[A RECIPE TO TRY]', uses: ['Pickling', 'Sherbets', 'Confectionery', 'Cleaning']
  },
  {
    slug: 'eating-soda', name: 'Eating Soda', category: 'speciality', group: 'Speciality',
    tagline: 'Sodium bicarbonate, food grade', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: EATING SODA PACK',
    lede: 'Food-grade sodium bicarbonate, milled fine and free flowing.',
    body: '[ADD DETAIL — grade certification, pack sizes beyond 500g.]',
    bestFor: 'Baking, snack manufacture', packing: '25 kg bags and 500g retail packs',
    storage: 'Sealed and dry.', recipe: '[A RECIPE TO TRY]',
    uses: ['Baking', 'Namkeen', 'Softening pulses', 'Cleaning']
  },
  {
    slug: 'desiccated-coconut-powder', name: 'Desiccated Coconut Powder', category: 'speciality', group: 'Speciality',
    tagline: 'Fine grade, for sweets and curries', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: COCONUT POWDER PACK',
    lede: 'Finely desiccated coconut, dried to a low moisture so it keeps without turning.',
    body: '[ADD DETAIL — fine and medium grades, fat content.]',
    bestFor: 'Mithai, curries, bakery', packing: '25 kg bags and 500g retail packs',
    storage: 'Sealed and cool; the fat turns if it gets warm.',
    recipe: '[A RECIPE TO TRY]', uses: ['Laddu', 'Barfi', 'Curries', 'Bakery']
  }
];

/* --- testimonials --------------------------------------------------------
   Publish only what the customer has given you permission to publish.
   Delete any entry you have not collected yet rather than leaving it blank. */

const FEATURED_REVIEW = {
  quote: '[FEATURED QUOTE — two or three lines from the customer you most want to lead with. Keep it specific: what they buy, how long they have bought it, and what changed when they switched.]',
  name: '[CUSTOMER NAME]',
  role: '[ROLE, BUSINESS] · [CITY]',
  photo: ''
};

const REVIEWS = [
  { quote: '[CUSTOMER QUOTE — two or three lines. Name the product if you can: which raisins, which dates, and what they noticed.]', name: '[NAME]', meta: '[CITY] · buys [PRODUCT]', stars: 5 },
  { quote: '[CUSTOMER QUOTE]', name: '[NAME]', meta: '[CITY] · buys [PRODUCT]', stars: 5 },
  { quote: '[CUSTOMER QUOTE]', name: '[NAME]', meta: '[CITY] · buys [PRODUCT]', stars: 5 },
  { quote: '[CUSTOMER QUOTE]', name: '[NAME]', meta: '[CITY] · buys [PRODUCT]', stars: 5 },
  { quote: '[CUSTOMER QUOTE]', name: '[NAME]', meta: '[CITY] · buys [PRODUCT]', stars: 5 }
];

const TRADE_REVIEWS = [
  { quote: '[TRADE QUOTE — one or two lines about grade consistency, packing or delivery.]', name: '[BUYER NAME]', meta: '[BUSINESS] · buying since [YEAR]' },
  { quote: '[TRADE QUOTE]', name: '[BUYER NAME]', meta: '[BUSINESS] · buying since [YEAR]' },
  { quote: '[TRADE QUOTE]', name: '[BUYER NAME]', meta: '[BUSINESS] · buying since [YEAR]' }
];
