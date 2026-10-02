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
  phone:     '8341012995',
  email:     'manishspacking1234@gmail.com',
  whatsapp:  '918341012995',               // digits only, e.g. '919876543210' — enables the WhatsApp buttons
  address:   ['15-7-419/2, Begum Bazar, Hyderabad, Telangana - 500012'],
  mapsUrl:   'https://www.google.com/maps/search/?api=1&query=15-7-419%2F2%2C+Begum+Bazar%2C+Hyderabad%2C+Telangana+-+500012',               // "Open in maps" button — built from the address below; the embedded map on the contact page also uses SITE.address automatically
  founded:   1993,
  // Web3Forms access keys (get one free at https://web3forms.com — takes 30 seconds, no card needed).
  // Until these are filled in, enquiries and leads are only saved in the visitor's own browser, not sent to you.
  formAccessKeyLeadGate: 'df7ef3ec-7b05-44dc-ae7f-40331883f5c5',   // the "Who are we sending this to?" popup that unlocks products/the brochure
  formAccessKeyContact:  '268b07b2-27cb-4c79-a0fb-144f45131503',   // the Contact page enquiry form
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
  {
    slug: 'chironji', name: 'Chironji (Charoli)', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Small, sweet, unmistakably festive', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CHIRONJI',
    lede: 'Small lentil-shaped kernels with a mild, sweet, almond-like flavour — the finishing touch on a sheera or a bowl of shrikhand.',
    body: 'Sold cleaned and sorted, free of husk. A little goes further than any other nut in the store, so it is bought in small quantities and used often.',
    bestFor: 'Garnishing, sheera, shrikhand', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight and cool; the natural oils turn if kept warm too long.',
    recipe: 'Toast lightly in ghee for thirty seconds before scattering over a sheera — it wakes up the sweetness.',
    uses: ['Sheera', 'Shrikhand', 'Mithai garnish', 'Festive sweets']
  },
  {
    slug: 'mixed-dry-fruit', name: 'Mixed Dry Fruit (M.D.F.)', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'A ready blend, no sorting needed', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: MIXED DRY FRUIT',
    lede: 'Our house blend of cashew, almond, raisin and other pieces, mixed to a consistent ratio so every scoop looks the same.',
    body: 'Built for kitchens that go through dry fruit fast and would rather not keep four separate tins on the shelf.',
    bestFor: 'Sheera, kheer, gift boxes', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Airtight and cool.',
    recipe: 'Stir a handful into warm milk with a pinch of saffron for a five-minute festive drink.',
    uses: ['Kheer', 'Sheera', 'Gift boxes', 'Snacking']
  },
  {
    slug: 'alubukhara', name: 'Alubukhara (Dried Plums)', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Tart, wine-dark, slow-cooked friendly', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: ALUBUKHARA',
    lede: 'Dried plums with a deep wine colour and a tartness that cuts through rich, slow-cooked food.',
    body: 'Sold whole with the stone in, as is traditional — ask if you need them pitted for a particular recipe.',
    bestFor: 'Kormas, chutneys, snacking', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight and cool; refrigerate in humid months.',
    recipe: 'Simmer a handful into a mutton korma for the last twenty minutes — they soften and lift the whole gravy.',
    uses: ['Korma', 'Chutney', 'Snacking', 'Stuffing']
  },
  {
    slug: 'salted-pistachios', name: 'Salted Pistachios', category: 'dry-fruits-nuts', group: 'Nuts & kernels',
    tagline: 'Roasted, salted, table ready', origin: 'GCC',
    image: '', imageNote: 'PHOTO: SALTED PISTACHIOS',
    lede: 'Naturally split pistachios roasted and salted to eat straight from the bowl — no shelling frustration, no bland patches.',
    body: 'A separate line from our plain pistachios, roasted in small batches so the salt sits evenly rather than pooling at the bottom of the bag.',
    bestFor: 'Table nuts, gifting, bar snacks', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight; once opened, best finished within a few weeks for peak crunch.',
    recipe: 'Serve slightly warm — a minute in a dry pan brings the aroma back if they have been sitting a while.',
    uses: ['Table nuts', 'Gift tins', 'Snacking', 'Bar snacks']
  },
  {
    slug: 'seedless-dates', name: 'Seedless Dates', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Ready to eat, nothing to spit out', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SEEDLESS DATES',
    lede: 'Pitted dates, ready to eat or chop straight into a dish without the extra step of removing the stone.',
    body: 'A practical everyday grade, bought by kitchens and canteens that get through dates quickly and do not need a premium eating grade.',
    bestFor: 'Everyday snacking, bulk kitchens', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Cool and airtight.',
    recipe: 'Blend with warm water into a smooth paste — a natural sweetener for laddus that needs no added sugar.',
    uses: ['Date paste', 'Snacking', 'Energy bars', 'Bulk kitchens']
  },
  {
    slug: 'black-dates', name: 'Black Dates', category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'Firmer, darker, distinctly different', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: BLACK DATES',
    lede: 'A firmer, darker date with a flavour closer to molasses than to the soft mazafati style.',
    body: 'Less common on the retail shelf, more common in kitchens that want a date with backbone for cooking rather than snacking alone.',
    bestFor: 'Cooking, snacking', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Cool and airtight.',
    recipe: 'Chop and stir into a spiced tea syrup for a dark, warming winter drink.',
    uses: ['Snacking', 'Spiced tea', 'Cooking', 'Gift boxes']
  },
  {
    slug: 'kimia-dates', name: "Manish's Kimia Dates", category: 'dry-fruits-nuts', group: 'Dried fruits',
    tagline: 'A house grade, chosen for consistency', origin: 'GCC',
    image: '', imageNote: 'PHOTO: KIMIA DATES',
    lede: 'A soft, dark date sold under our own name because it is graded and packed to a standard we are willing to put our name on.',
    body: 'Sits between mazafati and medjool in size and price — a good middle grade for shops that want quality without the medjool price tag.',
    bestFor: 'Retail, gifting, snacking', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Cool and airtight; refrigerate in summer.',
    recipe: 'Stuff with a walnut half for a simple sweet that needs no cooking at all.',
    uses: ['Snacking', 'Gift boxes', 'Stuffed dates', 'Retail counters']
  },

  /* --- Seeds ------------------------------------------------------------ */
  {
    slug: 'sesame-seeds', name: 'Sesame Seeds', category: 'seeds', group: 'Seeds',
    tagline: 'Tilli, 100% sortex clean', origin: '[ORIGIN]',
    image: 'assets/img/Front_Sesame-removebg-preview.png', back: 'assets/img/Back_Sesame-removebg-preview.png',
    lede: 'Hulled white sesame, sortex cleaned to 99.95% purity.',
    body: '[ADD DETAIL — varieties you stock, oil content, whether you also carry black sesame.]',
    bestFor: '[BEST FOR]', packing: '25 kg sacks and 1 kg retail packs',
    storage: 'Cool and dry in a sealed container.',
    recipe: '[A RECIPE TO TRY]', uses: ['Til laddu', 'Bakery', 'Tahini', 'Garnish']
  },
  {
    slug: 'poppy-seeds', name: 'Poppy Seeds (Khus Khus)', category: 'seeds', group: 'Seeds',
    tagline: 'Tiny, nutty, a gravy thickener', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: POPPY SEEDS',
    lede: 'Small ivory seeds with a mild, nutty flavour that mostly shows up as body rather than taste — the secret behind a rich, thick Bengali or Hyderabadi gravy.',
    body: 'Cleaned and free of husk. Best bought little and often, since the natural oils fade with long storage.',
    bestFor: 'Gravies, thickening, garnish', packing: 'Available in small retail packs through to bulk sacks.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Soak for twenty minutes, then grind to a smooth paste to thicken a korma without a trace of graininess.',
    uses: ['Korma', 'Bengali gravies', 'Garnish', 'Bakery']
  },
  {
    slug: 'chia-seeds', name: 'Chia Seeds', category: 'seeds', group: 'Seeds',
    tagline: 'Small seed, big swell', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CHIA SEEDS',
    lede: 'Tiny seeds that swell into a gel when soaked, which is exactly why they have become a pantry staple well beyond their traditional home.',
    body: 'Cleaned and sortex checked, sold in both retail and bulk quantities for juice bars and health-food kitchens.',
    bestFor: 'Puddings, smoothies, drinks', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight and dry; keeps well at room temperature.',
    recipe: 'Soak two tablespoons in a cup of milk overnight with honey for a pudding that is ready by morning.',
    uses: ['Chia pudding', 'Smoothies', 'Lemon water', 'Baking']
  },
  {
    slug: 'sunflower-seeds', name: 'Sunflower Seeds', category: 'seeds', group: 'Seeds',
    tagline: 'Hulled, crisp, everyday snacking', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SUNFLOWER SEEDS',
    lede: 'Hulled sunflower kernels with a mild, slightly sweet crunch — a working seed bought for snacking and for the bakery counter alike.',
    body: 'Sortex cleaned and free of shell fragments, sold in bulk to bakeries as often as in small packs to households.',
    bestFor: 'Snacking, bakery, trail mixes', packing: 'Available in small retail packs through to bulk sacks.',
    storage: 'Cool and airtight; refrigerate for long storage as the oil can turn.',
    recipe: 'Toast in a dry pan for two minutes and scatter over a salad for instant crunch.',
    uses: ['Snacking', 'Bakery', 'Trail mixes', 'Salads']
  },
  {
    slug: 'pumpkin-seeds', name: 'Pumpkin Seeds', category: 'seeds', group: 'Seeds',
    tagline: 'Flat, green, satisfying bite', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: PUMPKIN SEEDS',
    lede: 'Hulled pumpkin seeds, flat and deep green, with a firm bite that holds up whether roasted plain or spiced.',
    body: 'Sold raw for roasting at home or ready-roasted, depending on what a kitchen needs.',
    bestFor: 'Snacking, garnish, trail mixes', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Cool and airtight.',
    recipe: 'Toss with a little oil, salt and smoked paprika, then roast at 180°C for ten minutes.',
    uses: ['Snacking', 'Trail mixes', 'Soup garnish', 'Salads']
  },
  {
    slug: 'flax-seeds', name: 'Flax Seeds (Alsee)', category: 'seeds', group: 'Seeds',
    tagline: 'Glossy, small, a daily habit', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: FLAX SEEDS',
    lede: 'Small, glossy brown seeds bought in quantity by households that add a spoonful to their food daily as a habit rather than a special occasion.',
    body: 'Sortex cleaned, sold whole — grind just before use for the best flavour and freshness.',
    bestFor: 'Chutneys, baking, daily use', packing: 'Available in small retail packs through to bulk sacks.',
    storage: 'Airtight and cool; grind in small batches as needed.',
    recipe: 'Dry roast, grind coarse with garlic and chilli, and finish with salt for a classic flaxseed chutney podi.',
    uses: ['Chutney podi', 'Baking', 'Smoothies', 'Rotis']
  },
  {
    slug: 'sabja-seeds', name: 'Sabja Seeds (Basil Seeds)', category: 'seeds', group: 'Seeds',
    tagline: 'Cooling, gelatinous when soaked', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SABJA SEEDS',
    lede: 'Small black seeds that turn into little grey jelly beads within minutes of soaking — the base of a falooda and a hundred summer drinks.',
    body: 'Cleaned and free of stalk fragments, sold in small retail packs through to bulk for juice stalls.',
    bestFor: 'Faloodas, sherbets, summer drinks', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight and dry.',
    recipe: 'Soak a teaspoon in water for fifteen minutes, then stir into rose sherbet for an instant falooda base.',
    uses: ['Falooda', 'Sherbets', 'Lemonade', 'Milkshakes']
  },
  {
    slug: 'watermelon-seeds', name: 'Watermelon Seeds (Tarbuj)', category: 'seeds', group: 'Seeds',
    tagline: 'Roasted, cracked, a mukhwas favourite', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: WATERMELON SEEDS',
    lede: 'Roasted watermelon kernels with a mild, nutty crunch — as much at home in a mukhwas mix as in a bowl of trail mix.',
    body: 'Available husked or with a lightly cracked shell, cleaned to a consistent size.',
    bestFor: 'Mukhwas, snacking, garnish', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight and cool.',
    recipe: 'Toast lightly and stir through a fennel mukhwas mix with a little rock sugar.',
    uses: ['Mukhwas', 'Snacking', 'Trail mixes', 'Garnish']
  },
  {
    slug: 'muskmelon-seeds', name: 'Muskmelon Seeds (Kharbuj)', category: 'seeds', group: 'Seeds',
    tagline: 'Pale, delicate, kitchen thickener', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: MUSKMELON SEEDS',
    lede: 'Pale, slender kernels with a delicate flavour, used the way poppy seed is used — more for body than for taste.',
    body: 'Cleaned and husked, sold to kitchens that want a lighter-coloured thickener than poppy seed leaves behind.',
    bestFor: 'Gravies, thickening, garnish', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Soak, grind to a paste and stir into a white gravy for body without changing the colour.',
    uses: ['Gravies', 'Thickening', 'Garnish', 'Sherbets']
  },

  /* --- Spices & essentials ---------------------------------------------- */
  {
    slug: 'jeera', name: 'Jeera', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Whole cumin, cleaned and aromatic', origin: '[ORIGIN]',
    image: 'assets/img/Front_Jeera_2-removebg-preview.png', back: 'assets/img/Back_jeera_2-removebg-preview.png',
    lede: 'Whole cumin seed, machine cleaned and hand checked, with the oil still in it.',
    body: '[ADD DETAIL — grade, whether you also supply ground jeera, seasonal availability.]',
    bestFor: 'Tempering, masalas', packing: '25 kg sacks and 500g retail packs',
    storage: 'Airtight and away from light; whole seed keeps its aroma about a year.',
    recipe: 'Dry roast and grind fresh ground jeera loses half its aroma within a month.',
    uses: ['Tadka', 'Garam masala', 'Jeera rice', 'Buttermilk']
  },

   {
    slug: 'jeera ( 10 Rs) ', name: 'Jeera', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Whole cumin, cleaned and aromatic', origin: '[ORIGIN]',
    image: 'assets/img/Front_Jeera-removebg-preview.png', back: 'assets/img/Back_jeera-removebg-preview.png',
    lede: 'Whole cumin seed, machine cleaned and hand checked, with the oil still in it.',
    body: '[ADD DETAIL — grade, whether you also supply ground jeera, seasonal availability.]',
    bestFor: 'Tempering, masalas', packing: '25 kg sacks and 500g retail packs',
    storage: 'Airtight and away from light; whole seed keeps its aroma about a year.',
    recipe: 'Dry roast and grind fresh ground jeera loses half its aroma within a month.',
    uses: ['Tadka', 'Garam masala', 'Jeera rice', 'Buttermilk']
  },

  {
    slug: 'mustard-seeds', name: 'Mustard Seeds (Rai)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Sharp, essential, the tadka starter', origin: '[ORIGIN]',
    image: 'assets/img/Front_Rai-removebg-preview.png', back: 'assets/img/Back_Rai_-removebg-preview.png',
    lede: 'Small round seeds that crackle in hot oil and release the sharp, mustardy heat that opens almost every South Indian tempering.',
    body: 'Sortex cleaned, sold in both the everyday grade and the finer black variety see Black Mustard Seeds for the smaller grade.',
    bestFor: 'Tempering, pickles', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight and dry; keeps well for a year.',
    recipe: 'Pop in hot oil until they stop crackling, then add curry leaves and dried chilli the base of most South Indian tadkas.',
    uses: ['Tadka', 'Pickles', 'Dal', 'Chutneys']
  },
  {
    slug: 'fenugreek-seeds', name: 'Fenugreek Seeds (Methi)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Bitter-edged, essential in small doses', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: FENUGREEK SEEDS',
    lede: 'Small, hard, amber-brown seeds with a bitter edge that mellows into warmth once roasted used sparingly but almost everywhere.',
    body: 'Cleaned and free of stem fragments, sold whole for tempering or grinding into spice blends.',
    bestFor: 'Tempering, pickles, sambar powder', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight and dry.',
    recipe: 'Dry roast a spoonful until fragrant, then grind fine and stir a pinch into a dal for depth.',
    uses: ['Tadka', 'Pickles', 'Sambar powder', 'Methi water']
  },
  {
    slug: 'black-mustard-seeds', name: 'Black Mustard Seeds (Sanna Rai)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'The finer, sharper mustard grade', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: BLACK MUSTARD SEEDS',
    lede: 'A smaller, darker mustard seed with a sharper bite than the everyday grade the one pickle-makers ask for by name.',
    body: 'Sortex cleaned and sold separately from our standard mustard seed for kitchens that specifically want this finer grade.',
    bestFor: 'Pickles, tempering', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight and dry.',
    recipe: 'Grind coarse with dried chillies and salt for a base pickle masala that keeps for months.',
    uses: ['Pickles', 'Tempering', 'Chutneys', 'Podi']
  },
  {
    slug: 'coriander-seeds', name: 'Coriander Seeds (Dhaniya)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Citrusy, the base of most masalas', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CORIANDER SEEDS',
    lede: 'Round, ridged seeds with a warm, citrusy aroma the single largest ingredient by volume in most Indian masala blends.',
    body: 'Sortex cleaned to a consistent light-brown colour, sold whole for kitchens that grind their own masala fresh.',
    bestFor: 'Masalas, tempering, chutneys', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight and dry; grind in small batches as needed.',
    recipe: 'Dry roast until fragrant, then grind with cumin in equal parts for a fresh dhania-jeera powder.',
    uses: ['Masala powders', 'Tempering', 'Chutneys', 'Sambar']
  },
  {
    slug: 'carom-seeds', name: 'Carom Seeds (Ajwain)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Pungent, thyme-like, a little goes far', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CAROM SEEDS',
    lede: 'Small, ridged seeds with a sharp, thyme-like pungency that is unmistakable the moment they hit hot oil.',
    body: 'Sortex cleaned and sold whole; used by the pinch rather than the spoon in most recipes.',
    bestFor: 'Parathas, tempering, snacks', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight and dry.',
    recipe: 'Crush lightly between fingers and knead into paratha dough for a fragrant, digestive-friendly flatbread.',
    uses: ['Parathas', 'Tempering', 'Fried snacks', 'Ajwain water']
  },
  {
    slug: 'black-pepper', name: 'Black Pepper (Kali Mirchi)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Whole peppercorns, sharp and clean', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: BLACK PEPPER',
    lede: 'Whole black peppercorns, cleaned and graded for size — the everyday heat behind rasam, pepper chicken and a hundred masalas.',
    body: 'Sortex cleaned, sold whole so the heat and aroma stay locked in until the moment they are cracked.',
    bestFor: 'Masalas, rasam, tempering', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight, cool and dark; grind fresh for the best aroma.',
    recipe: 'Crush coarse with garlic and curry leaves for a quick pepper chicken masala base.',
    uses: ['Rasam', 'Pepper chicken', 'Masalas', 'Garam masala']
  },
  {
    slug: 'cloves', name: 'Cloves (Loung)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Warm, sweet, unmistakably aromatic', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CLOVES',
    lede: 'Dried unopened flower buds with a warm, sweet intensity — a handful is enough to perfume an entire pot of biryani.',
    body: 'Hand-picked and sorted for size and oil content, sold whole for the strongest aroma.',
    bestFor: 'Biryani, garam masala, chai', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Stud into an onion and drop into simmering biryani rice for the classic aroma without stray cloves in the plate.',
    uses: ['Biryani', 'Garam masala', 'Chai', 'Pulao']
  },
  {
    slug: 'cinnamon', name: 'Cinnamon (Dalchini)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'True quills, sweet and warm', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CINNAMON',
    lede: 'Rolled bark quills with a warm, sweet aroma that carries through both savoury gravies and a good cup of chai.',
    body: 'Sold whole in quill form; graded by thickness, with the thinner grades generally considered the finer aroma.',
    bestFor: 'Biryani, chai, garam masala', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Simmer a quill in milk with cardamom and sugar for a quick chai base.',
    uses: ['Chai', 'Biryani', 'Garam masala', 'Desserts']
  },
  {
    slug: 'shahi-jeera', name: 'Shahi Jeera (Caraway)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'The royal cumin, sweeter and finer', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SHAHI JEERA',
    lede: 'Slimmer and sweeter than ordinary cumin, with a more delicate aroma — the seed that signals a dish is meant to be special.',
    body: 'Sortex cleaned and sold whole; used more sparingly and more deliberately than regular jeera.',
    bestFor: 'Biryani, pulao, garam masala', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Airtight and dry.',
    recipe: 'Toast briefly in ghee before adding rice to a pulao — the aroma carries through the whole pot.',
    uses: ['Biryani', 'Pulao', 'Garam masala', 'Tempering']
  },
  {
    slug: 'green-cardamom', name: 'Green Cardamom (Elaichi)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'The queen of spices, sweet and floral', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: GREEN CARDAMOM',
    lede: 'Small green pods holding aromatic black seeds — sweet, floral and instantly recognisable in chai, kheer or a biryani.',
    body: 'Graded by pod size and colour; the plumper, greener pods carry the most oil and the best aroma.',
    bestFor: 'Chai, desserts, biryani', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Airtight, cool and dark — the aroma is the first thing to fade in poor storage.',
    recipe: 'Crush two pods and steep in warm milk for kheer that needs no other flavouring.',
    uses: ['Chai', 'Kheer', 'Biryani', 'Mithai']
  },
  {
    slug: 'fennel-seeds-fine', name: 'Fennel Seeds — Fine (Bareek Sounf)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Small, sweet, an everyday spice', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: FENNEL SEEDS FINE',
    lede: 'The smaller, everyday grade of fennel — sweet and mildly liquorice-like, used across cooking rather than saved for the end of a meal.',
    body: 'Sortex cleaned to a consistent size, sold separately from our bolder mukhwas-grade fennel.',
    bestFor: 'Cooking, masalas, tea', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight and dry.',
    recipe: 'Dry roast and simmer in water with grated ginger for a soothing fennel tea after a heavy meal.',
    uses: ['Masalas', 'Fennel tea', 'Pickles', 'Cooking']
  },
  {
    slug: 'fennel-seeds-bold', name: 'Fennel Seeds — Bold (Lava Sounf)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Plump, sweet, built for mukhwas', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: FENNEL SEEDS BOLD',
    lede: 'A larger, plumper fennel grade with a pronounced sweetness — the grade that goes into a mukhwas bowl rather than a cooking pot.',
    body: 'Hand-graded for size, often sugar-coated or roasted separately as a mouth freshener line.',
    bestFor: 'Mukhwas, after-meal freshener', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Airtight and dry.',
    recipe: 'Dry roast lightly, cool, and mix with a little rock sugar for a simple homemade mukhwas.',
    uses: ['Mukhwas', 'After-meal freshener', 'Garnish', 'Gift mixes']
  },
  {
    slug: 'bay-leaf', name: 'Bay Leaf (Tej Patta)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'The quiet backbone of a good biryani', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: BAY LEAF',
    lede: 'Dried Indian bay leaves with a warm, slightly clove-like aroma — rarely the star of a dish, but missed the moment it is left out.',
    body: 'Hand-sorted for whole, unbroken leaves, sold in both retail packs and bulk for restaurant kitchens.',
    bestFor: 'Biryani, pulao, garam masala', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Add two leaves to the oil before the onions in any pulao — they release their aroma slowly through the whole cook.',
    uses: ['Biryani', 'Pulao', 'Garam masala', 'Stocks']
  },
  {
    slug: 'patthar-phool', name: 'Stone Flower (Patthar Phool)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'A lichen, earthy and unique', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: STONE FLOWER',
    lede: 'A dried lichen with a smoky, earthy flavour found nowhere else in the spice box — the secret ingredient behind a proper Andhra-style masala.',
    body: 'Hand-sorted to remove grit and bark fragments before packing.',
    bestFor: 'Biryani masala, non-veg curries', packing: 'Available in small retail packs.',
    storage: 'Airtight and dry.',
    recipe: 'Dry roast briefly with other whole spices before grinding into a biryani masala for real depth.',
    uses: ['Biryani masala', 'Curry powders', 'Non-veg gravies', 'Podi']
  },
  {
    slug: 'kasuri-methi', name: 'Dried Fenugreek Leaves (Kasuri Methi)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Sun-dried leaves, restaurant-style finish', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: KASURI METHI',
    lede: 'Sun-dried fenugreek leaves with a distinctive bitter-sweet aroma — the finishing touch that gives restaurant gravies their signature smell.',
    body: 'Cleaned of stalks and packed for maximum aroma retention; crush between the palms just before adding.',
    bestFor: 'Gravies, parathas, marinades', packing: 'Available in small retail packs.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Crush a tablespoon between your palms and stir into a butter chicken gravy in the last five minutes.',
    uses: ['Butter chicken', 'Parathas', 'Marinades', 'Dal makhani']
  },
  {
    slug: 'split-coriander', name: 'Split Coriander (Dhaniya Dal)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Cracked seed, ready for the tadka', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SPLIT CORIANDER',
    lede: 'Coriander seed split into halves, a South Indian tempering staple that toasts faster and releases its aroma quicker than the whole seed.',
    body: 'Sold specifically for the tadka pan rather than for grinding — a different job from whole coriander.',
    bestFor: 'Tempering, chutneys', packing: 'Available in small retail packs through to bulk sacks.',
    storage: 'Airtight and dry.',
    recipe: 'Toast in hot oil until golden, then use as the base of a coconut chutney tempering.',
    uses: ['Tempering', 'Chutneys', 'Dal', 'Sambar']
  },
  {
    slug: 'mace', name: 'Mace (Javitri)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Delicate lattice, nutmeg\u2019s sibling', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: MACE',
    lede: 'The lacy, orange-red covering of the nutmeg seed — more delicate and slightly more floral than nutmeg itself.',
    body: 'Hand-sorted whole blades, sold for kitchens that grind their own garam masala rather than buying it ready-made.',
    bestFor: 'Garam masala, biryani, desserts', packing: 'Available in small retail packs.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Grind a blade or two into your garam masala mix for a rounder, more floral finish.',
    uses: ['Garam masala', 'Biryani', 'Desserts', 'Mughlai gravies']
  },
  {
    slug: 'nutmeg', name: 'Nutmeg (Jaiphal)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Warm, sweet, used by the pinch', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: NUTMEG',
    lede: 'Whole nutmeg seeds with a warm, sweet, slightly resinous flavour — grated fresh, a pinch changes a whole dish.',
    body: 'Sold whole rather than ground, since ground nutmeg loses its aroma within weeks.',
    bestFor: 'Kheer, biryani, baked goods', packing: 'Available in small retail packs.',
    storage: 'Airtight and dry; whole nutmeg keeps for years.',
    recipe: 'Grate fresh nutmeg directly over a finished kheer — it needs almost nothing else.',
    uses: ['Kheer', 'Biryani', 'Baking', 'Mughlai gravies']
  },
  {
    slug: 'star-anise', name: 'Star Anise (Chakri Phool)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Star-shaped, liquorice-sweet', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: STAR ANISE',
    lede: 'The star-shaped pod with a distinctly sweet, liquorice-like aroma that anchors a good biryani masala.',
    body: 'Hand-sorted for whole, unbroken stars — broken pods lose their oil and aroma faster.',
    bestFor: 'Biryani, masalas, stocks', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Add one whole star to the oil at the start of a biryani for a sweet undertone through the whole pot.',
    uses: ['Biryani', 'Garam masala', 'Stocks', 'Chinese five-spice']
  },
  {
    slug: 'turmeric-fingers', name: 'Raw Turmeric Fingers (Pasupu Kommulu)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'Whole roots, ground to order', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: TURMERIC FINGERS',
    lede: 'Dried whole turmeric roots, sold as fingers rather than powder for households and shops that prefer to grind their own.',
    body: 'Cleaned of soil and graded for size; grinding to order keeps the colour and aroma at their strongest.',
    bestFor: 'Home-ground turmeric powder, pooja', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Cool and dry.',
    recipe: 'Grind fresh in small batches — home-ground turmeric holds its colour and aroma far longer than pre-ground.',
    uses: ['Turmeric powder', 'Pooja', 'Pickles', 'Traditional medicine']
  },
  {
    slug: 'asafoetida', name: 'Asafoetida (L.G. Hing)', category: 'spices-essentials', group: 'Ground & essentials',
    tagline: 'A pinch changes everything', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: ASAFOETIDA',
    lede: 'A pungent resin ground into a fine powder — used by the smallest pinch, it rounds out a tadka the way nothing else can.',
    body: 'Sold in compounded form (blended with rice flour for easy dosing) as is standard across Indian kitchens.',
    bestFor: 'Tempering, dal, sambar', packing: 'Available in small retail tins.',
    storage: 'Airtight — it is pungent enough to flavour everything else in the cupboard if left open.',
    recipe: 'Add a pinch to hot oil right before the mustard seeds pop — it is the last thing that goes in before the vegetables.',
    uses: ['Tadka', 'Dal', 'Sambar', 'Pickles']
  },
  {
    slug: 'mix-masala', name: 'Mix Masala', category: 'spices-essentials', group: 'Masalas & blends',
    tagline: 'A ready blend of ground spices for everyday gravies', origin: '[ORIGIN]',
     image: 'assets/img/Mix_Masala_Open-removebg-preview.png', back: 'assets/img/Mic_Masala_Openn-removebg-preview.png',
    lede: 'A pre-blended masala built around the spices most everyday gravies need — a shortcut for kitchens that would rather not measure out ten jars for one dish.',
    body: 'Blended in-house and ground fresh in batches rather than kept sitting on a shelf for months.',
    bestFor: 'Curries, gravies, everyday cooking', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Stir two spoons into a browning onion-tomato base before adding the main ingredient, for a gravy with no further seasoning needed.',
    uses: ['Curries', 'Gravies', 'Everyday cooking', 'Biryani']
  },
  {
    slug: 'biryani-phool-mix', name: 'Whole Spice Mix (Phool Mix)', category: 'spices-essentials', group: 'Masalas & blends',
    tagline: 'The whole spices for one biryani, pre-measured', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: PHOOL MIX',
    lede: 'A ready-measured mix of the whole spices — bay leaf, star anise, cinnamon and the rest — that go into the rice for a proper biryani.',
    body: 'Saves reaching into six separate jars every time a pot goes on; each pack is measured for a standard batch.',
    bestFor: 'Biryani, pulao', packing: 'Available in small retail packs.',
    storage: 'Airtight, cool and dark.',
    recipe: 'Add the whole pack to the oil before the rice goes in — no measuring required.',
    uses: ['Biryani', 'Pulao', 'Rice dishes']
  },
  {
    slug: 'sweet-fennel', name: 'Sweet Fennel (Mukhwas Sounf)', category: 'spices-essentials', group: 'Masalas & blends',
    tagline: 'Sugar-coated, after-meal ready', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SWEET FENNEL',
    lede: 'Fennel seed coated in a thin sugar shell — the classic bowl left by the till at the end of a meal.',
    body: 'Roasted before coating, so the fennel stays crunchy rather than going soft under the sugar.',
    bestFor: 'After-meal freshener, gifting', packing: 'Available in small retail packs.',
    storage: 'Airtight and dry.',
    recipe: 'Serve straight from a small bowl — this one needs no preparation at all.',
    uses: ['After-meal freshener', 'Gift mixes', 'Retail counters']
  },
  {
    slug: 'sounf-mix', name: 'Fennel Mukhwas Mix (Sounf Mix)', category: 'spices-essentials', group: 'Masalas & blends',
    tagline: 'Fennel, seeds and a little sweetness', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SOUNF MIX',
    lede: 'A blended mukhwas of fennel with other seeds and a touch of sweetness — a fuller bowl than plain sweet fennel alone.',
    body: 'Blended in small batches so the mix stays fresh and the seeds do not go soft.',
    bestFor: 'After-meal freshener, gifting', packing: 'Available in small retail packs.',
    storage: 'Airtight and dry.',
    recipe: 'Serve straight from a small bowl after a meal.',
    uses: ['After-meal freshener', 'Gift mixes', 'Retail counters']
  },
  {
    slug: 'saffron', name: 'Saffron (Kesar)', category: 'spices-essentials', group: 'Whole spices',
    tagline: 'A few threads, unmistakable colour', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SAFFRON',
    lede: 'Deep red saffron threads — a handful of threads is enough to colour and perfume an entire pot of biryani or kheer.',
    body: 'Sold in small quantities given the price, and worth asking about grade if you are buying for a specific dish.',
    bestFor: 'Biryani, kheer, desserts', packing: 'Available in small retail sachets.',
    storage: 'Airtight, cool and dark, away from light which fades the colour.',
    recipe: 'Soak a few threads in two tablespoons of warm milk for ten minutes before stirring into rice or kheer.',
    uses: ['Biryani', 'Kheer', 'Desserts', 'Gifting']
  },

  /* --- Speciality ------------------------------------------------------- */
  {
    slug: 'citric-acid', name: 'Citric Acid', category: 'speciality', group: 'Speciality',
    tagline: 'Food grade, fine crystal', origin: '[ORIGIN]',
    image: 'assets/img/Front_Citric_Acid-removebg-preview.png', back: 'assets/img/Back_Citric_Acid-removebg-preview.png',
    lede: 'Food-grade citric acid in a fine crystal that dissolves cleanly.',
    body: '[ADD DETAIL — grade certification, pack sizes beyond 500g.]',
    bestFor: 'Preserving, confectionery', packing: '25 kg bags and 500g retail packs',
    storage: 'Sealed and dry — it cakes in humidity.',
    recipe: '[A RECIPE TO TRY]', uses: ['Pickling', 'Sherbets', 'Confectionery', 'Cleaning']
  },
  {
    slug: 'eating-soda', name: 'Eating Soda', category: 'speciality', group: 'Speciality',
    tagline: 'Sodium bicarbonate, food grade', origin: '[ORIGIN]',
    image: 'assets/img/Front_Eating_soda-removebg-preview.png', back: 'assets/img/Back_Eating_Soda-removebg-preview.png',
    lede: 'Food-grade sodium bicarbonate, milled fine and free flowing.',
    body: '[ADD DETAIL — grade certification, pack sizes beyond 500g.]',
    bestFor: 'Baking, snack manufacture', packing: '25 kg bags and 500g retail packs',
    storage: 'Sealed and dry.', recipe: '[A RECIPE TO TRY]',
    uses: ['Baking', 'Namkeen', 'Softening pulses', 'Cleaning']
  },
  {
    slug: 'desiccated-coconut-powder', name: 'Desiccated Coconut Powder', category: 'speciality', group: 'Speciality',
    tagline: 'Fine grade, for sweets and curries', origin: '[ORIGIN]',
    image: 'assets/img/Front_Coconut_Powder-removebg-preview.png', back: 'assets/img/Back_Coconut_Powder-removebg-preview.png',
    lede: 'Finely desiccated coconut, dried to a low moisture so it keeps without turning.',
    body: '[ADD DETAIL — fine and medium grades, fat content.]',
    bestFor: 'Mithai, curries, bakery', packing: '25 kg bags and 500g retail packs',
    storage: 'Sealed and cool; the fat turns if it gets warm.',
    recipe: '[A RECIPE TO TRY]', uses: ['Laddu', 'Barfi', 'Curries', 'Bakery']
  },
  {
    slug: 'ajinomoto', name: 'Ajinomoto (MSG)', category: 'speciality', group: 'Kitchen essentials',
    tagline: 'Food-grade taste enhancer', origin: '[ORIGIN]',
    image: 'assets/img/Front_Taste_Enhancer-removebg-preview.png', back: 'assets/img/Back_Taste_Enhancer-removebg-preview.png',
    lede: 'Food-grade monosodium glutamate, sold in fine crystal form as a taste enhancer for Indo-Chinese and street-food style cooking.',
    body: 'A standard kitchen ingredient in many commercial kitchens; used sparingly, by the pinch, in the final stages of cooking.',
    bestFor: 'Indo-Chinese cooking, snacks', packing: 'Available in small retail packs.',
    storage: 'Airtight and dry.',
    recipe: 'A small pinch stirred into fried rice or noodles at the end of cooking rounds out the savoury flavour.',
    uses: ['Fried rice', 'Noodles', 'Manchurian', 'Street food']
  },
  {
    slug: 'corn-flour', name: 'Corn Flour', category: 'speciality', group: 'Kitchen essentials',
    tagline: 'Fine, clean, a reliable thickener', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CORN FLOUR',
    lede: 'Fine white corn starch, milled to dissolve cleanly with no lumps — the everyday thickener for soups, gravies and batters.',
    body: 'Packed in a sealed pouch to keep out moisture, which is what causes corn flour to cake and clump.',
    bestFor: 'Thickening, batters, baking', packing: 'Available from small retail packs to bulk bags.',
    storage: 'Sealed and dry.',
    recipe: 'Mix with cold water to a smooth paste before adding to a hot gravy — never add the dry powder directly.',
    uses: ['Soups', 'Gravies', 'Batters', 'Baking']
  },
  {
    slug: 'barley', name: 'Barley (Barli)', category: 'speciality', group: 'Kitchen essentials',
    tagline: 'Whole grain, everyday cooking', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: BARLEY',
    lede: 'Whole pearl barley, cleaned and sortex checked — a grain that turns up equally in a simple soup and a glass of barley water.',
    body: 'Sold in both retail packs for the home and bulk for kitchens and canteens that cook it daily.',
    bestFor: 'Soups, barley water, khichdi', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Cool and dry.',
    recipe: 'Simmer with water and a little lemon for a simple barley water that keeps a couple of days chilled.',
    uses: ['Soups', 'Barley water', 'Khichdi', 'Porridge']
  },
  {
    slug: 'sabudana', name: 'Sabudana (Sago Pearls)', category: 'speciality', group: 'Kitchen essentials',
    tagline: 'The fasting-day staple', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: SABUDANA',
    lede: 'Small, pearly tapioca pearls that turn soft and glossy once soaked — the base of a fasting-day khichdi or vada.',
    body: 'Sortex cleaned and graded for even size, which is what keeps a batch of khichdi from turning gummy.',
    bestFor: 'Fasting dishes, khichdi, vada', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Cool and dry.',
    recipe: 'Soak for three to four hours until the pearls turn soft but separate, then drain well before cooking.',
    uses: ['Sabudana khichdi', 'Sabudana vada', 'Kheer', 'Fasting meals']
  },
  {
    slug: 'nimboo-sat', name: 'Nimboo Sat (Sour Salt)', category: 'speciality', group: 'Kitchen essentials',
    tagline: 'A pinch of pure sourness', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: NIMBOO SAT',
    lede: 'A crystalline sour salt used by the pinch to add a clean tartness where a fresh lemon is not on hand or not wanted.',
    body: 'Sold separately from our food-grade citric acid crystal for kitchens that specifically ask for this by its traditional name.',
    bestFor: 'Chaats, drinks, pickles', packing: 'Available in small retail packs.',
    storage: 'Sealed and dry — it cakes in humidity.',
    recipe: 'A small pinch stirred into a glass of jaljeera brightens it up instantly.',
    uses: ['Chaats', 'Jaljeera', 'Pickles', 'Sherbets']
  },
  {
    slug: 'dhora-misri', name: 'Dhora Misri (Coarse Rock Sugar)', category: 'speciality', group: 'Sweeteners',
    tagline: 'Unrefined, gentle sweetness', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: DHORA MISRI',
    lede: 'Coarse, lightly amber crystals of unrefined sugar — gentler and less processed than white sugar, with a faint caramel note.',
    body: 'Sold in coarse grade, distinct from the larger dalla misri crystal — ask for whichever suits your use.',
    bestFor: 'Sherbets, mukhwas, sweets', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Sealed and dry.',
    recipe: 'Dissolve in warm milk with saffron for a simple sweetened milk that needs nothing else.',
    uses: ['Sherbets', 'Mukhwas', 'Sweetened milk', 'Pooja prasad']
  },
  {
    slug: 'dalla-misri', name: 'Dalla Misri (Rock Sugar Crystals)', category: 'speciality', group: 'Sweeteners',
    tagline: 'Large crystals, traditional and pure', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: DALLA MISRI',
    lede: 'Large, translucent rock sugar crystals — the traditional sweetener handed out with a betel leaf or stirred into prasad.',
    body: 'Sold whole in the crystal, to be broken by hand or ground as a recipe requires.',
    bestFor: 'Prasad, mukhwas, sweets', packing: 'Available from small retail packs to bulk sacks.',
    storage: 'Sealed and dry.',
    recipe: 'Crush coarsely and mix with fennel seed for a simple after-meal mukhwas.',
    uses: ['Pooja prasad', 'Mukhwas', 'Sweetened drinks', 'Gifting']
  },
  {
    slug: 'papad', name: "Annapurna Papad", category: 'speciality', group: 'Ready to cook',
    tagline: 'Ready to roast or fry', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: PAPAD',
    lede: 'Thin, sun-dried lentil wafers, ready to roast over a flame or fry crisp in oil in under a minute.',
    body: 'Sold under our Annapurna line, a consistent everyday papad for the household table.',
    bestFor: 'Side dish, snacking', packing: 'Available in standard retail packs.',
    storage: 'Cool and dry; keep flat to avoid cracking.',
    recipe: 'Roast directly over a low flame, turning constantly, for a papad with no oil at all.',
    uses: ['Side dish', 'Snacking', 'Papad ki sabzi', 'Party platters']
  },
  {
    slug: 'dry-coconut-pieces', name: 'Dry Coconut Pieces (Kobbari Chinni)', category: 'speciality', group: 'Coconut products',
    tagline: 'Small pieces, ready to use', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: DRY COCONUT PIECES',
    lede: 'Dried coconut broken into small, even pieces — ready for cooking or for a pooja plate without further chopping.',
    body: 'Sold alongside our Desiccated Coconut Powder for kitchens and pooja purposes that need pieces rather than powder.',
    bestFor: 'Pooja, garnish, snacking', packing: 'Available in small retail packs through to bulk cartons.',
    storage: 'Sealed and cool.',
    recipe: 'Toast lightly in a dry pan and scatter over a curry just before serving for texture and aroma.',
    uses: ['Pooja', 'Garnish', 'Snacking', 'Prasad']
  },
  {
    slug: 'orange-goli', name: 'Orange Goli (Food Colour Pellets)', category: 'speciality', group: 'Food colours',
    tagline: 'A quick way to colour sweets and drinks', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: ORANGE GOLI',
    lede: 'Small food-colour pellets used sparingly to tint sweets, sherbets and festival treats a bright, consistent orange.',
    body: 'Used by the pellet, dissolved into whatever is being coloured — a little goes a long way.',
    bestFor: 'Sweets, sherbets, festival food', packing: 'Available in small retail packs.',
    storage: 'Sealed and dry, away from direct light.',
    recipe: 'Dissolve a single pellet in a spoon of warm water before adding, so the colour spreads evenly.',
    uses: ['Sherbets', 'Sweets', 'Festival snacks', 'Confectionery']
  },
  {
    slug: '999-colour', name: '999 Colour', category: 'speciality', group: 'Food colours',
    tagline: 'A trusted name for festival colour', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: 999 COLOUR',
    lede: 'A long-standing food-colour brand kept on hand for festival cooking and sweets that call for a specific, vivid shade.',
    body: 'Sold in small quantities, used the way any concentrated food colour is used — by the drop or the pinch.',
    bestFor: 'Sweets, festival food', packing: 'Available in small retail packs.',
    storage: 'Sealed and dry, away from direct light.',
    recipe: 'Add a drop at a time to sugar syrup, tasting the shade as you go rather than tipping the bottle.',
    uses: ['Sweets', 'Festival snacks', 'Confectionery']
  },
  {
    slug: 'marking-nut', name: 'Marking Nut (Mugga)', category: 'speciality', group: 'Traditional & pooja',
    tagline: 'A traditional marking and dye nut', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: MARKING NUT',
    lede: 'A traditional nut used for generations as a natural marking ink and dye, kept in stock for households and tailors who still use it the old way.',
    body: 'Sold as a raw nut — handle with care, as the sap can irritate skin on contact, which is part of why it works as a stain.',
    bestFor: 'Traditional marking, dyeing', packing: 'Available in small retail packs.',
    storage: 'Cool and dry, away from children.',
    recipe: '[NOT APPLICABLE — not a food ingredient]',
    uses: ['Cloth marking', 'Traditional dyeing', 'Craft use']
  },
  {
    slug: 'camphor', name: 'Camphor (Kapoor)', category: 'speciality', group: 'Pooja & ceremonial',
    tagline: 'Pure, for the aarti flame', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: CAMPHOR',
    lede: 'Pure camphor tablets that burn clean and bright — the flame lit at the close of most pooja rituals.',
    body: 'Sold in tablet form, sized for a standard aarti plate.',
    bestFor: 'Aarti, pooja', packing: 'Available in small retail packs.',
    storage: 'Sealed and away from any open flame or heat source.',
    recipe: '[NOT APPLICABLE — for ceremonial use, not food]',
    uses: ['Aarti', 'Pooja', 'Havan']
  },
  {
    slug: 'gopuram-kumkum', name: 'Gopuram Kumkum', category: 'speciality', group: 'Pooja & ceremonial',
    tagline: 'Temple-grade vermilion powder', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: GOPURAM KUMKUM',
    lede: 'A well-known kumkum brand, fine and evenly coloured, trusted for daily pooja and festival use.',
    body: 'Sold in the standard retail packet, the everyday choice for households across the region.',
    bestFor: 'Daily pooja, festivals', packing: 'Available in small retail packs.',
    storage: 'Sealed and dry.',
    recipe: '[NOT APPLICABLE — for ceremonial use, not food]',
    uses: ['Daily pooja', 'Festivals', 'Weddings']
  },
  {
    slug: 'ashtagandha', name: 'Ashtagandha', category: 'speciality', group: 'Pooja & ceremonial',
    tagline: 'A blend of eight fragrant powders', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: ASHTAGANDHA',
    lede: 'A traditional blend of eight fragrant powders, mixed with water and applied as a tilak or offered in worship.',
    body: 'Blended to the traditional recipe and sold in small quantities, as it is used sparingly.',
    bestFor: 'Tilak, pooja offerings', packing: 'Available in small retail packs.',
    storage: 'Sealed and dry.',
    recipe: '[NOT APPLICABLE — for ceremonial use, not food]',
    uses: ['Tilak', 'Pooja', 'Havan offerings']
  },
  {
    slug: 'ude-dhoop', name: 'Ude (Dhoop Resin)', category: 'speciality', group: 'Pooja & ceremonial',
    tagline: 'Fragrant resin for the incense burner', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: UDE DHOOP',
    lede: 'A fragrant resin burned as dhoop, filling a room with incense smoke the way loose resin does better than a stick ever can.',
    body: 'Sold loose, to be burned a pinch at a time on a charcoal disc or dhoop burner.',
    bestFor: 'Pooja, home fragrance', packing: 'Available in small retail packs.',
    storage: 'Sealed and dry, away from heat.',
    recipe: '[NOT APPLICABLE — for ceremonial use, not food]',
    uses: ['Pooja', 'Home fragrance', 'Festivals']
  },
  {
    slug: 'pooja-supari', name: 'Pooja Supari (Betel Nuts)', category: 'speciality', group: 'Pooja & ceremonial',
    tagline: 'Whole areca nuts for ritual use', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: POOJA SUPARI',
    lede: 'Whole areca nuts kept specifically for pooja and ceremonial use, sorted for a clean, even appearance.',
    body: 'Sold separately from any paan-related product, packed and graded for the pooja plate.',
    bestFor: 'Pooja, ceremonies, weddings', packing: 'Available in small retail packs.',
    storage: 'Cool and dry.',
    recipe: '[NOT APPLICABLE — for ceremonial use, not food]',
    uses: ['Pooja', 'Weddings', 'Ceremonies']
  },
  {
    slug: 'pooja-badam', name: 'Pooja Badam (Ceremonial Almonds)', category: 'speciality', group: 'Pooja & ceremonial',
    tagline: 'Whole almonds for the pooja plate', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: POOJA BADAM',
    lede: 'Whole almonds set aside specifically for pooja offerings, sorted for a clean, uniform look on the plate.',
    body: 'A distinct retail line from our everyday almonds, sold in the smaller quantities pooja typically calls for.',
    bestFor: 'Pooja, offerings', packing: 'Available in small retail packs.',
    storage: 'Cool and airtight.',
    recipe: '[NOT APPLICABLE — for ceremonial use, not food]',
    uses: ['Pooja', 'Offerings', 'Festivals']
  },
  {
    slug: 'betel-nuts', name: 'Areca Nuts (Popnut)', category: 'speciality', group: 'Pooja & ceremonial',
    tagline: 'Split areca, wedding and pooja grade', origin: '[ORIGIN]',
    image: '', imageNote: 'PHOTO: ARECA NUTS',
    lede: 'Split areca nuts, the grade typically bought in bulk for weddings and large ceremonies alongside pooja supari.',
    body: 'Sorted and packed to a consistent size, distinct from our whole-nut pooja supari line.',
    bestFor: 'Weddings, ceremonies, pooja', packing: 'Available from small retail packs to bulk cartons.',
    storage: 'Cool and dry.',
    recipe: '[NOT APPLICABLE — for ceremonial use, not food]',
    uses: ['Weddings', 'Pooja', 'Ceremonies']
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
  { quote: 'The prices are competitive and the product range is good. It has helped us manage our regular stock purchases from one place.', stars: 5 },
  { quote: 'What we value most is their quick response and service. When stock is needed, they make the process simple and efficient.', stars: 5 },
  { quote: 'We have been buying from Manish’s for a long time. The trust and relationship we have built over the years is what keeps us connected.', stars: 5 },
  { quote: 'From everyday grocery essentials to bulk requirements, we can find a wide range of products with reliable supply.', stars: 5 },
  { quote: 'For our business, consistent supply is important. Manish’s has always been dependable when it comes to availability and service.', stars: 5 }
];

const TRADE_REVIEWS = [
  { quote: 'Reliable supply and consistent quality make a real difference to our day-to-day business.' },
  { quote: 'Their team understands our requirements and makes regular ordering quick and straightforward.' },
  { quote: 'Good pricing, good service and a relationship we can depend on.' }
];