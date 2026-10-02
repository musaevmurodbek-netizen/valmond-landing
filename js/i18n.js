/* =========================================================
   VALMOND — tillar (O'zbek · English · Русский)

   HTML'da matn bor-yo'g'i data-i18n="kalit" bilan belgilanadi.
   Yangi matn qo'shish: HTML'ga kalit yozing va uchala tilga ham tarjima qo'shing.
   O'zbekcha — asosiy til: sahifa shu tilda ochiladi, HTML ichidagi matn ham o'zbekcha.
   ========================================================= */

const I18N_LANGS = ['uz', 'en', 'ru'];
const I18N_DEFAULT = 'uz';
const I18N_KEY = 'valmond-lang';
const I18N_LOCALES = { uz: 'uz-UZ', en: 'en-GB', ru: 'ru-RU' };

const I18N = {
  uz: {
    'meta.title': 'Valmond — Premium sariyog‘',
    'meta.desc': 'Valmond — asl ta’mni qadrlaydiganlar uchun premium sariyog‘. Tilla naqshli korobkada 4 × 200 g. Saytda buyurtma qoldiring.',

    'logo.aria': 'Valmond — bosh sahifa',
    'nav.aria': 'Asosiy menyu',
    'nav.philosophy': 'Falsafa',
    'nav.taste': 'Ta’m',
    'nav.collection': 'Kolleksiya',
    'nav.gastronomy': 'Gastronomiya',
    'nav.faq': 'Savollar',
    'nav.order': 'Buyurtma berish',
    'theme.toDark': 'Qorong‘u rejimga o‘tish',
    'theme.toLight': 'Yorug‘ rejimga o‘tish',
    'menu.open': 'Menyuni ochish',
    'menu.close': 'Menyuni yopish',
    'lang.aria': 'Tilni tanlang',

    'u.g200': '200 g',
    'u.g800': '800 g',
    'u.pack': '4 × 200 g',

    'hero.eyebrow': 'Premium sariyog‘ · Maison Valmond',
    'hero.title': 'Ta’mning<br><em>oliy</em> darajasi',
    'hero.lead': 'Yevropa gastronomiyasining asl ta’mini sog‘inganlar va eng yaxshisiga o‘rganganlar uchun yaratilgan sariyog‘. Har bir bo‘lakda — qaymoqning nozik shirinligi va sof, baxmaldek tuzilma.',
    'hero.cta1': 'Buyurtma qoldirish',
    'hero.cta2': 'Ta’m bilan tanishish',
    'hero.f1': 'bir korobkada',
    'hero.f2': 'sut yog‘i',
    'hero.f3': 'tabiiy qaymoq',
    'hero.badge1': 'Tilla',
    'hero.badge2': 'tisneniya',
    'hero.scroll': 'Pastga o‘tish',

    'mq.1': 'Qaymoq shirinligi',
    'mq.2': 'Baxmaldek tuzilma',
    'mq.3': 'Yevropa an’anasi',
    'mq.4': 'Tilla naqshli korobka',
    'mq.5': 'Faqat tabiiy tarkib',

    'phil.eyebrow': 'Falsafamiz',
    'phil.quote': '“Haqiqiy hashamat — baland ovozda gapirmaydi. U <em>ta’mda</em> seziladi.”',
    'phil.p1': 'Valmond — bu shoshilmaslik madaniyati. Biz eng yaxshi qaymoqni tanlaymiz, uni sabr bilan pishiramiz va har bir bo‘lakni Yevropa oshxonalaridagi eng yuqori talablarga javob beradigan holatga keltiramiz.',
    'phil.p2': 'Parijdagi nonushtani, Kopengagendagi yangi pishgan nonni yoki Milandagi restoran sousini eslaysizmi? Valmond o‘sha ta’mni Toshkentdagi dasturxoningizga qaytaradi — hech qanday murosasiz.',

    'taste.eyebrow': 'Ta’m anatomiyasi',
    'taste.title': 'Nima uchun Valmond<br><em>boshqacha</em>',
    'taste.c1.t': 'Tanlangan qaymoq',
    'taste.c1.p': 'Faqat yangi, yuqori yog‘li sut qaymog‘i. Hech qanday o‘simlik yog‘i, bo‘yoq yoki konservant — tarkib qisqa va halol.',
    'taste.c2.t': 'Sekin pishirish',
    'taste.c2.p': 'Qaymoq shoshilmasdan, an’anaviy usulda ishlanadi. Natijada — chuqur, yoqimli va uzoq saqlanadigan ta’m izi.',
    'taste.c3.t': 'Baxmaldek tuzilma',
    'taste.c3.p': '82% sut yog‘i sariyog‘ni og‘izda sekin eriydigan, nonga tekis yoyiladigan va oshxonada barqaror qiladi.',
    'taste.c4.t': 'Toza nota',
    'taste.c4.p': 'Yengil qaymoq shirinligi, nozik yong‘oq ohangi va toza yakun. Premium sariyog‘ni oddiydan ajratib turuvchi aynan shu.',
    'notes.title': 'Degustatsiya notalari',
    'notes.1': 'Qaymoq shirinligi',
    'notes.2': 'Yong‘oq ohangi',
    'notes.3': 'Mayinlik',
    'notes.4': 'Yakun davomiyligi',

    'col.eyebrow': 'Kolleksiya',
    'col.title': 'Coffret<br><em>Signature</em>',
    'col.caption': 'Coffret Signature · 800 g',
    'col.p': 'Fil suyagi rangidagi qattiq korobka, qo‘lda his qilinadigan tilla tisneniya va ichida to‘rtta alohida qadoqlangan 200 grammlik sariyog‘. Oila dasturxoni uchun ham, qadrli insonga sovg‘a uchun ham bir xil darajada munosib.',
    'col.s1.l': 'Tarkib',
    'col.s1.v': '4 × 200 g sariyog‘',
    'col.s2.l': 'Umumiy og‘irlik',
    'col.s3.l': 'Sut yog‘i',
    'col.s4.l': 'Qadoq',
    'col.s4.v': 'Tilla tisneniyali premium korobka',
    'col.s5.l': 'Saqlash',
    'col.cta': 'Korobkaga buyurtma berish',

    'gast.eyebrow': 'Gastronomiya',
    'gast.title': 'Valmond bilan<br><em>kundalik marosimlar</em>',
    'gast.m1.t': 'Nonushta',
    'gast.m1.p': 'Issiq kruassan yoki tandir noni ustida sekin eriyotgan Valmond — kunning eng yaxshi boshlanishi.',
    'gast.m2.t': 'Steyk va baliq',
    'gast.m2.p': 'Tovaning so‘nggi daqiqasida sarimsoq va rozmarin bilan — restoran darajasidagi arrosé uyingizda.',
    'gast.m3.t': 'Souslar',
    'gast.m3.p': 'Beurre blanc va gollandez sousi uchun barqaror emulsiya — Valmondning toza tuzilmasi buni osonlashtiradi.',
    'gast.m4.t': 'Pishiriqlar',
    'gast.m4.p': 'Qatlamli xamir, briosh va shortbread — sariyog‘ sifati to‘g‘ridan to‘g‘ri natijada ko‘rinadi.',

    'aud.eyebrow': 'Kimlar uchun',
    'aud.title': 'Farqni biladiganlar<br><em>uchun</em>',
    'aud.p': 'Valmond — sifatni birinchi luqmadan ajrata oladigan insonlar tanlovi. Qarorlarni o‘zi qabul qiladigan, dunyoni ko‘rgan va dasturxonida faqat eng yaxshisini ko‘rishni istaydiganlar uchun.',
    'aud.1': 'Yevropada yashab, asl gastronomik ta’mni sog‘ingan vatandoshlar',
    'aud.2': 'Tadbirkorlar va top-menejerlar — o‘zi va oilasi uchun',
    'aud.3': 'Hamkor va mehmonlarga munosib sovg‘a izlayotganlar',
    'aud.4': 'Uyda restoran darajasida pishirishni sevuvchi gurmanlar',

    'order.eyebrow': 'Buyurtma',
    'order.title': 'Buyurtma<br><em>qoldiring</em>',
    'order.p': 'Arizani to‘ldiring — shaxsiy menejeringiz 30 daqiqa ichida siz bilan bog‘lanib, yetkazib berish vaqti va tafsilotlarni kelishib oladi.',
    'order.perk1': 'Toshkent bo‘ylab sovutgichli yetkazib berish',
    'order.perk2': 'Sovg‘a uchun shaxsiy tabrik kartochkasi',
    'order.perk3': 'Korporativ buyurtmalar uchun alohida shartlar',

    'form.type': 'Buyurtma turi',
    'form.type.personal': 'Shaxsiy',
    'form.type.gift': 'Sovg‘a',
    'form.type.corporate': 'Korporativ',
    'form.name': 'Ismingiz',
    'form.name.err': 'Iltimos, ismingizni kiriting',
    'form.phone': 'Telefon raqam',
    'form.phone.err': 'Raqamni to‘liq kiriting: +998 XX XXX XX XX',
    'form.qty': 'Korobkalar soni',
    'form.qty.dec': 'Kamaytirish',
    'form.qty.inc': 'Ko‘paytirish',
    'form.city': 'Shahar',
    'city.tashkent': 'Toshkent',
    'city.tashkentRegion': 'Toshkent viloyati',
    'city.samarkand': 'Samarqand',
    'city.bukhara': 'Buxoro',
    'city.fergana': 'Farg‘ona',
    'city.other': 'Boshqa shahar',
    'form.gift': 'Tabrik kartochkasi uchun matn',
    'form.comment': 'Izoh (ixtiyoriy)',
    'form.consent': 'Ma’lumotlarim buyurtmani rasmiylashtirish uchun ishlatilishiga roziman',
    'form.consent.err': 'Davom etish uchun rozilik belgisini qo‘ying',
    'form.submit': 'Arizani yuborish',
    'form.sending': 'Yuborilmoqda',
    'form.note': 'Hech qanday oldindan to‘lov talab qilinmaydi.',
    'form.error': 'Kechirasiz, arizani yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring yoki bizga qo‘ng‘iroq qiling.',

    'faq.eyebrow': 'Savollar',
    'faq.title': 'Ko‘p beriladigan<br><em>savollar</em>',
    'faq.1.q': 'Yetkazib berish qancha vaqt oladi?',
    'faq.1.a': 'Toshkent bo‘ylab odatda buyurtma kuni yoki ertasi kuni, sovutgichli transportda yetkaziladi. Viloyatlarga muddat menejer bilan kelishiladi.',
    'faq.2.q': 'To‘lov qanday amalga oshiriladi?',
    'faq.2.a': 'To‘lov mahsulotni qabul qilganda naqd pul yoki karta orqali amalga oshiriladi. Korporativ mijozlar uchun pul o‘tkazish orqali to‘lov mavjud.',
    'faq.3.q': 'Sariyog‘ni qanday saqlash kerak?',
    'faq.3.a': '+2 … +6 °C haroratda, yopiq qadoqda saqlang. Eng yaxshi ta’m uchun iste’moldan 10–15 daqiqa oldin xona haroratiga chiqarib qo‘ying.',
    'faq.4.q': 'Korporativ sovg‘a sifatida buyurtma bersa bo‘ladimi?',
    'faq.4.a': 'Albatta. Arizada “Korporativ” turini tanlang — menejerimiz miqdor, shaxsiy kartochkalar va yetkazib berish jadvali bo‘yicha alohida taklif tayyorlaydi.',
    'faq.5.q': 'Faqat bitta 200 g qadoqni olsa bo‘ladimi?',
    'faq.5.a': 'Valmond faqat Coffret Signature korobkasida — 4 × 200 g ko‘rinishida taqdim etiladi. Bu mahsulotning yangiligi va taqdimot sifatini saqlash uchun.',

    'foot.tagline': 'Ta’mning oliy darajasi.',
    'foot.contact': 'Aloqa',
    'foot.social': 'Ijtimoiy tarmoqlar',
    'foot.pages': 'Sahifalar',
    'foot.collection': 'Kolleksiya',
    'foot.order': 'Buyurtma',
    'foot.rights': 'Barcha huquqlar himoyalangan.',
    'foot.city': 'Toshkent, O‘zbekiston',

    'modal.title': 'Rahmat, {name}!',
    'modal.text': 'Arizangiz qabul qilindi. Shaxsiy menejeringiz tez orada <b>{phone}</b> raqamiga qo‘ng‘iroq qiladi.',
    'modal.ok': 'Yaxshi',

    'unit.g': 'g',
    'unit.kg': 'kg',
  },

  en: {
    'meta.title': 'Valmond — Premium Butter',
    'meta.desc': 'Valmond — premium butter for those who value authentic taste. A gold-embossed box of 4 × 200 g. Place your order on the website.',

    'logo.aria': 'Valmond — home',
    'nav.aria': 'Main menu',
    'nav.philosophy': 'Philosophy',
    'nav.taste': 'Taste',
    'nav.collection': 'Collection',
    'nav.gastronomy': 'Gastronomy',
    'nav.faq': 'FAQ',
    'nav.order': 'Order now',
    'theme.toDark': 'Switch to dark mode',
    'theme.toLight': 'Switch to light mode',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'lang.aria': 'Choose language',

    'u.g200': '200 g',
    'u.g800': '800 g',
    'u.pack': '4 × 200 g',

    'hero.eyebrow': 'Premium butter · Maison Valmond',
    'hero.title': 'The finest<br><em>level</em> of taste',
    'hero.lead': 'Butter made for those who miss the authentic taste of European gastronomy and are used to nothing but the best. In every piece — the delicate sweetness of cream and a pure, velvety texture.',
    'hero.cta1': 'Place an order',
    'hero.cta2': 'Discover the taste',
    'hero.f1': 'in one box',
    'hero.f2': 'milk fat',
    'hero.f3': 'natural cream',
    'hero.badge1': 'Gold',
    'hero.badge2': 'embossing',
    'hero.scroll': 'Scroll down',

    'mq.1': 'Sweetness of cream',
    'mq.2': 'Velvety texture',
    'mq.3': 'European tradition',
    'mq.4': 'Gold-embossed box',
    'mq.5': 'Only natural ingredients',

    'phil.eyebrow': 'Our philosophy',
    'phil.quote': '“True luxury never raises its voice. You feel it in the <em>taste</em>.”',
    'phil.p1': 'Valmond is a culture of unhurried craft. We choose the finest cream, churn it with patience, and bring every piece to the standard demanded by the best kitchens of Europe.',
    'phil.p2': 'Remember breakfast in Paris, fresh-baked bread in Copenhagen, or a restaurant sauce in Milan? Valmond brings that taste back to your table in Tashkent — without compromise.',

    'taste.eyebrow': 'Anatomy of taste',
    'taste.title': 'Why Valmond<br>is <em>different</em>',
    'taste.c1.t': 'Selected cream',
    'taste.c1.p': 'Only fresh, high-fat dairy cream. No vegetable fat, colourings or preservatives — a short, honest ingredient list.',
    'taste.c2.t': 'Slow churning',
    'taste.c2.p': 'The cream is worked unhurriedly, in the traditional way. The result is a deep, pleasant taste with a long finish.',
    'taste.c3.t': 'Velvety texture',
    'taste.c3.p': '82% milk fat makes the butter melt slowly in the mouth, spread evenly on bread and stay stable in the kitchen.',
    'taste.c4.t': 'A clean note',
    'taste.c4.p': 'Light creamy sweetness, a subtle hint of nuts and a clean finish. This is exactly what sets premium butter apart from the ordinary.',
    'notes.title': 'Tasting notes',
    'notes.1': 'Creamy sweetness',
    'notes.2': 'Nutty tone',
    'notes.3': 'Smoothness',
    'notes.4': 'Length of finish',

    'col.eyebrow': 'Collection',
    'col.title': 'Coffret<br><em>Signature</em>',
    'col.caption': 'Coffret Signature · 800 g',
    'col.p': 'A rigid ivory-coloured box with tactile gold embossing, holding four separately wrapped 200-gram bars of butter. Equally fitting for the family table and as a gift for someone you value.',
    'col.s1.l': 'Contents',
    'col.s1.v': '4 × 200 g butter',
    'col.s2.l': 'Total weight',
    'col.s3.l': 'Milk fat',
    'col.s4.l': 'Packaging',
    'col.s4.v': 'Premium gold-embossed box',
    'col.s5.l': 'Storage',
    'col.cta': 'Order the box',

    'gast.eyebrow': 'Gastronomy',
    'gast.title': 'Everyday rituals<br><em>with Valmond</em>',
    'gast.m1.t': 'Breakfast',
    'gast.m1.p': 'Valmond slowly melting over a warm croissant or fresh tandoor bread — the best start to the day.',
    'gast.m2.t': 'Steak and fish',
    'gast.m2.p': 'In the final minute in the pan, with garlic and rosemary — a restaurant-quality arrosé at home.',
    'gast.m3.t': 'Sauces',
    'gast.m3.p': 'A stable emulsion for beurre blanc and hollandaise — Valmond’s clean structure makes it effortless.',
    'gast.m4.t': 'Pastry',
    'gast.m4.p': 'Laminated dough, brioche and shortbread — the quality of the butter shows directly in the result.',

    'aud.eyebrow': 'Who it is for',
    'aud.title': 'For those who<br><em>know the difference</em>',
    'aud.p': 'Valmond is the choice of people who can tell quality from the very first bite. For those who make their own decisions, have seen the world and want only the best on their table.',
    'aud.1': 'Compatriots living in Europe who miss the authentic taste of its cuisine',
    'aud.2': 'Entrepreneurs and top managers — for themselves and their families',
    'aud.3': 'Those looking for a worthy gift for partners and guests',
    'aud.4': 'Gourmets who love cooking restaurant-quality dishes at home',

    'order.eyebrow': 'Order',
    'order.title': 'Place<br>your <em>order</em>',
    'order.p': 'Fill in the form — your personal manager will contact you within 30 minutes to agree on delivery time and details.',
    'order.perk1': 'Refrigerated delivery across Tashkent',
    'order.perk2': 'Personal greeting card for gifts',
    'order.perk3': 'Special terms for corporate orders',

    'form.type': 'Order type',
    'form.type.personal': 'Personal',
    'form.type.gift': 'Gift',
    'form.type.corporate': 'Corporate',
    'form.name': 'Your name',
    'form.name.err': 'Please enter your name',
    'form.phone': 'Phone number',
    'form.phone.err': 'Enter the full number: +998 XX XXX XX XX',
    'form.qty': 'Number of boxes',
    'form.qty.dec': 'Decrease',
    'form.qty.inc': 'Increase',
    'form.city': 'City',
    'city.tashkent': 'Tashkent',
    'city.tashkentRegion': 'Tashkent region',
    'city.samarkand': 'Samarkand',
    'city.bukhara': 'Bukhara',
    'city.fergana': 'Fergana',
    'city.other': 'Other city',
    'form.gift': 'Text for the greeting card',
    'form.comment': 'Comment (optional)',
    'form.consent': 'I agree that my details will be used to process the order',
    'form.consent.err': 'Please tick the consent box to continue',
    'form.submit': 'Send request',
    'form.sending': 'Sending',
    'form.note': 'No prepayment required.',
    'form.error': 'Sorry, something went wrong while sending your request. Please try again or give us a call.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked<br><em>questions</em>',
    'faq.1.q': 'How long does delivery take?',
    'faq.1.a': 'Within Tashkent, usually the same or the next day, in refrigerated transport. For other regions the timing is agreed with the manager.',
    'faq.2.q': 'How do I pay?',
    'faq.2.a': 'Payment is made on receipt, in cash or by card. Corporate clients can pay by bank transfer.',
    'faq.3.q': 'How should the butter be stored?',
    'faq.3.a': 'Store at +2 … +6 °C in its sealed packaging. For the best taste, take it out to room temperature 10–15 minutes before serving.',
    'faq.4.q': 'Can I order it as a corporate gift?',
    'faq.4.a': 'Of course. Choose the “Corporate” type in the form — our manager will prepare a tailored offer covering quantity, personal cards and the delivery schedule.',
    'faq.5.q': 'Can I buy just a single 200 g pack?',
    'faq.5.a': 'Valmond is offered only in the Coffret Signature box — 4 × 200 g. This keeps the product fresh and the presentation flawless.',

    'foot.tagline': 'The finest level of taste.',
    'foot.contact': 'Contact',
    'foot.social': 'Social media',
    'foot.pages': 'Pages',
    'foot.collection': 'Collection',
    'foot.order': 'Order',
    'foot.rights': 'All rights reserved.',
    'foot.city': 'Tashkent, Uzbekistan',

    'modal.title': 'Thank you, {name}!',
    'modal.text': 'Your request has been received. Your personal manager will call <b>{phone}</b> shortly.',
    'modal.ok': 'Great',

    'unit.g': 'g',
    'unit.kg': 'kg',
  },

  ru: {
    'meta.title': 'Valmond — Премиальное сливочное масло',
    'meta.desc': 'Valmond — премиальное сливочное масло для ценителей настоящего вкуса. Коробка с золотым тиснением 4 × 200 г. Оставьте заказ на сайте.',

    'logo.aria': 'Valmond — на главную',
    'nav.aria': 'Главное меню',
    'nav.philosophy': 'Философия',
    'nav.taste': 'Вкус',
    'nav.collection': 'Коллекция',
    'nav.gastronomy': 'Гастрономия',
    'nav.faq': 'Вопросы',
    'nav.order': 'Заказать',
    'theme.toDark': 'Включить тёмную тему',
    'theme.toLight': 'Включить светлую тему',
    'menu.open': 'Открыть меню',
    'menu.close': 'Закрыть меню',
    'lang.aria': 'Выберите язык',

    'u.g200': '200 г',
    'u.g800': '800 г',
    'u.pack': '4 × 200 г',

    'hero.eyebrow': 'Премиальное масло · Maison Valmond',
    'hero.title': 'Высший<br><em>уровень</em> вкуса',
    'hero.lead': 'Сливочное масло для тех, кто скучает по настоящему вкусу европейской гастрономии и привык к лучшему. В каждом кусочке — нежная сладость сливок и чистая, бархатистая текстура.',
    'hero.cta1': 'Оставить заказ',
    'hero.cta2': 'Познакомиться со вкусом',
    'hero.f1': 'в одной коробке',
    'hero.f2': 'молочного жира',
    'hero.f3': 'натуральные сливки',
    'hero.badge1': 'Золотое',
    'hero.badge2': 'тиснение',
    'hero.scroll': 'Прокрутить вниз',

    'mq.1': 'Сладость сливок',
    'mq.2': 'Бархатистая текстура',
    'mq.3': 'Европейская традиция',
    'mq.4': 'Коробка с золотым тиснением',
    'mq.5': 'Только натуральный состав',

    'phil.eyebrow': 'Наша философия',
    'phil.quote': '«Настоящая роскошь не говорит громко. Её чувствуешь во <em>вкусе</em>.»',
    'phil.p1': 'Valmond — это культура неспешности. Мы выбираем лучшие сливки, терпеливо работаем с ними и доводим каждый кусочек до уровня, которого требуют лучшие кухни Европы.',
    'phil.p2': 'Помните завтрак в Париже, свежий хлеб в Копенгагене или ресторанный соус в Милане? Valmond возвращает этот вкус на ваш стол в Ташкенте — без компромиссов.',

    'taste.eyebrow': 'Анатомия вкуса',
    'taste.title': 'Чем Valmond<br><em>отличается</em>',
    'taste.c1.t': 'Отборные сливки',
    'taste.c1.p': 'Только свежие жирные коровьи сливки. Никакого растительного жира, красителей и консервантов — короткий и честный состав.',
    'taste.c2.t': 'Медленное созревание',
    'taste.c2.p': 'Сливки обрабатываются без спешки, по традиционной технологии. Результат — глубокий, приятный вкус с долгим послевкусием.',
    'taste.c3.t': 'Бархатистая текстура',
    'taste.c3.p': '82% молочного жира делают масло таким, что оно медленно тает во рту, ровно намазывается на хлеб и стабильно ведёт себя на кухне.',
    'taste.c4.t': 'Чистая нота',
    'taste.c4.p': 'Лёгкая сливочная сладость, тонкий ореховый оттенок и чистое завершение. Именно это отличает премиальное масло от обычного.',
    'notes.title': 'Дегустационные ноты',
    'notes.1': 'Сливочная сладость',
    'notes.2': 'Ореховый оттенок',
    'notes.3': 'Мягкость',
    'notes.4': 'Длина послевкусия',

    'col.eyebrow': 'Коллекция',
    'col.title': 'Coffret<br><em>Signature</em>',
    'col.caption': 'Coffret Signature · 800 г',
    'col.p': 'Жёсткая коробка цвета слоновой кости с ощутимым на ощупь золотым тиснением, внутри — четыре отдельно упакованных масла по 200 граммов. Одинаково достойно и для семейного стола, и в подарок дорогому человеку.',
    'col.s1.l': 'Состав',
    'col.s1.v': '4 × 200 г сливочного масла',
    'col.s2.l': 'Общий вес',
    'col.s3.l': 'Молочный жир',
    'col.s4.l': 'Упаковка',
    'col.s4.v': 'Премиальная коробка с золотым тиснением',
    'col.s5.l': 'Хранение',
    'col.cta': 'Заказать коробку',

    'gast.eyebrow': 'Гастрономия',
    'gast.title': 'Ежедневные ритуалы<br><em>с Valmond</em>',
    'gast.m1.t': 'Завтрак',
    'gast.m1.p': 'Valmond, медленно тающий на тёплом круассане или свежей тандырной лепёшке, — лучшее начало дня.',
    'gast.m2.t': 'Стейк и рыба',
    'gast.m2.p': 'В последнюю минуту на сковороде, с чесноком и розмарином — арроже ресторанного уровня у вас дома.',
    'gast.m3.t': 'Соусы',
    'gast.m3.p': 'Стабильная эмульсия для бёр блан и голландского соуса — чистая структура Valmond делает это простым.',
    'gast.m4.t': 'Выпечка',
    'gast.m4.p': 'Слоёное тесто, бриошь и песочное печенье — качество масла напрямую видно в результате.',

    'aud.eyebrow': 'Для кого',
    'aud.title': 'Для тех, кто<br><em>чувствует разницу</em>',
    'aud.p': 'Valmond — выбор людей, способных отличить качество с первого кусочка. Для тех, кто сам принимает решения, повидал мир и хочет видеть на своём столе только лучшее.',
    'aud.1': 'Соотечественники, живущие в Европе и скучающие по настоящему гастрономическому вкусу',
    'aud.2': 'Предприниматели и топ-менеджеры — для себя и своей семьи',
    'aud.3': 'Те, кто ищет достойный подарок партнёрам и гостям',
    'aud.4': 'Гурманы, любящие готовить дома на ресторанном уровне',

    'order.eyebrow': 'Заказ',
    'order.title': 'Оставьте<br><em>заказ</em>',
    'order.p': 'Заполните заявку — ваш персональный менеджер свяжется с вами в течение 30 минут и согласует время доставки и детали.',
    'order.perk1': 'Доставка в холодильной камере по всему Ташкенту',
    'order.perk2': 'Персональная поздравительная открытка к подарку',
    'order.perk3': 'Особые условия для корпоративных заказов',

    'form.type': 'Тип заказа',
    'form.type.personal': 'Личный',
    'form.type.gift': 'Подарок',
    'form.type.corporate': 'Корпоративный',
    'form.name': 'Ваше имя',
    'form.name.err': 'Пожалуйста, введите ваше имя',
    'form.phone': 'Номер телефона',
    'form.phone.err': 'Введите номер полностью: +998 XX XXX XX XX',
    'form.qty': 'Количество коробок',
    'form.qty.dec': 'Уменьшить',
    'form.qty.inc': 'Увеличить',
    'form.city': 'Город',
    'city.tashkent': 'Ташкент',
    'city.tashkentRegion': 'Ташкентская область',
    'city.samarkand': 'Самарканд',
    'city.bukhara': 'Бухара',
    'city.fergana': 'Фергана',
    'city.other': 'Другой город',
    'form.gift': 'Текст для поздравительной открытки',
    'form.comment': 'Комментарий (необязательно)',
    'form.consent': 'Я согласен(на) на использование моих данных для оформления заказа',
    'form.consent.err': 'Чтобы продолжить, поставьте отметку согласия',
    'form.submit': 'Отправить заявку',
    'form.sending': 'Отправляем',
    'form.note': 'Предоплата не требуется.',
    'form.error': 'К сожалению, при отправке заявки произошла ошибка. Пожалуйста, попробуйте ещё раз или позвоните нам.',

    'faq.eyebrow': 'Вопросы',
    'faq.title': 'Частые<br><em>вопросы</em>',
    'faq.1.q': 'Сколько занимает доставка?',
    'faq.1.a': 'По Ташкенту обычно в день заказа или на следующий день, в холодильном транспорте. Сроки для областей согласуются с менеджером.',
    'faq.2.q': 'Как происходит оплата?',
    'faq.2.a': 'Оплата при получении — наличными или картой. Для корпоративных клиентов доступна оплата банковским переводом.',
    'faq.3.q': 'Как хранить масло?',
    'faq.3.a': 'Храните при температуре +2 … +6 °C в закрытой упаковке. Для лучшего вкуса достаньте масло за 10–15 минут до употребления, чтобы оно приобрело комнатную температуру.',
    'faq.4.q': 'Можно ли заказать как корпоративный подарок?',
    'faq.4.a': 'Конечно. Выберите в заявке тип «Корпоративный» — менеджер подготовит индивидуальное предложение по количеству, персональным открыткам и графику доставки.',
    'faq.5.q': 'Можно ли купить только одну упаковку 200 г?',
    'faq.5.a': 'Valmond поставляется только в коробке Coffret Signature — 4 × 200 г. Так мы сохраняем свежесть продукта и качество подачи.',

    'foot.tagline': 'Высший уровень вкуса.',
    'foot.contact': 'Контакты',
    'foot.social': 'Социальные сети',
    'foot.pages': 'Страницы',
    'foot.collection': 'Коллекция',
    'foot.order': 'Заказ',
    'foot.rights': 'Все права защищены.',
    'foot.city': 'Ташкент, Узбекистан',

    'modal.title': 'Спасибо, {name}!',
    'modal.text': 'Ваша заявка принята. Персональный менеджер скоро позвонит по номеру <b>{phone}</b>.',
    'modal.ok': 'Отлично',

    'unit.g': 'г',
    'unit.kg': 'кг',
  },
};

let currentLang = I18N_DEFAULT;

const t = (key, vars) => {
  let s = (I18N[currentLang] && I18N[currentLang][key]) ?? I18N[I18N_DEFAULT][key] ?? key;
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
};

const escapeHtml = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const readStoredLang = () => {
  try { return localStorage.getItem(I18N_KEY); } catch (_) { return null; }
};

/* Boshlang'ich til: ?lang= → saqlangan tanlov → o'zbekcha */
const initialLang = () => {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (I18N_LANGS.includes(fromUrl)) return fromUrl;
  const stored = readStoredLang();
  return I18N_LANGS.includes(stored) ? stored : I18N_DEFAULT;
};

/**
 * Sahifani tanlangan tilga o'tkazadi.
 *   data-i18n="kalit"                     → elementning ichki matni (HTML qo'llanadi)
 *   data-i18n-attr="aria-label:kalit; …"  → atributlar
 * Dinamik matnlar (mavzu tugmasi, forma, modal) `langchange` hodisasi orqali main.js'da yangilanadi.
 */
const applyLang = (lang) => {
  currentLang = I18N_LANGS.includes(lang) ? lang : I18N_DEFAULT;
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.title = t('meta.title');
  document.querySelector('meta[name="description"]').setAttribute('content', t('meta.desc'));

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
};

const setLang = (lang) => {
  applyLang(lang);
  try { localStorage.setItem(I18N_KEY, currentLang); } catch (_) { /* saqlab bo'lmasa — faqat shu sessiya uchun */ }
};
