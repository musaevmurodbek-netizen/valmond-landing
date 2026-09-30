# Arizalarni ulash: Google Sheets + Telegram

Saytdagi forma → Google Apps Script → **Google Sheets jadvali** + **Telegram xabar**.
Hammasi bepul, bot tokeni saytda ko'rinmaydi. Sozlash ~10 daqiqa.

## 1. Telegram bot yaratish

1. Telegram'da **@BotFather** ni oching → `/newbot` yuboring.
2. Bot nomini kiriting (masalan, `Valmond Arizalar`) va username (`valmond_orders_bot` kabi, oxiri `bot` bilan tugashi shart).
3. BotFather bergan **token**ni saqlab qo'ying (`123456789:AA...` ko'rinishida). Uni hech kimga yubormang.

## 2. Chat ID ni olish

**Shaxsiy chatga kelsa:** yangi botingizga istalgan xabar yuboring (`/start`).
**Guruhga kelsa:** botni menejerlar guruhiga qo'shing va guruhda istalgan xabar yozing.

So'ng brauzerda oching (TOKEN o'rniga o'z tokeningiz):

```
https://api.telegram.org/botTOKEN/getUpdates
```

Javobdagi `"chat":{"id": ... }` raqami — sizning **Chat ID**. Guruh ID'si minus bilan boshlanadi (`-100...`).

## 3. Google Sheets va skript

1. [sheets.new](https://sheets.new) — yangi jadval yarating, nomini `Valmond — Arizalar` qo'ying.
2. Menyu: **Kengaytmalar (Extensions) → Apps Script**.
3. Ochilgan muharrirdagi kodni to'liq o'chirib, [`Code.gs`](Code.gs) faylidagi kodni joylashtiring. 💾 Saqlang.
4. Chap panelda ⚙️ **Loyiha sozlamalari (Project Settings)** → pastda **Script Properties** → **Add script property**:
   - `TELEGRAM_TOKEN` = 1-qadamdagi token
   - `TELEGRAM_CHAT_ID` = 2-qadamdagi ID

   **Save script properties** ni bosing.
5. Muharrirga qayting, yuqoridagi ro'yxatdan `testTelegram` funksiyasini tanlab **▶ Run** bosing.
   Google ruxsat so'raydi → akkauntingizni tanlang → *Advanced → Go to ... (unsafe)* → **Allow**.
   Telegram'ga "Sinov Arizasi" xabari kelishi kerak.

## 4. Web App sifatida chiqarish

1. O'ng yuqorida **Deploy → New deployment**.
2. ⚙️ belgisidan turi: **Web app**.
3. Sozlamalar:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. **Deploy** → hosil bo'lgan **Web app URL**ni nusxalang (`https://script.google.com/macros/s/.../exec`).

## 5. Saytga ulash

URL'ni [`js/main.js`](../js/main.js) boshidagi `CONFIG.endpoint` ga yozing:

```js
const CONFIG = {
  endpoint: 'https://script.google.com/macros/s/.../exec',
  ...
};
```

Tayyor — endi har bir ariza jadvalga tushadi va Telegram'ga keladi.

## Kodni o'zgartirsangiz

Apps Script kodini tahrirlagandan keyin: **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**.
Aks holda sayt eski versiya bilan ishlashda davom etadi (URL o'zgarmaydi).

## Jadval ustunlari

| Sana | Turi | Ism | Telefon | Korobka | Shahar | Tabrik matni | Izoh | Holat |
|---|---|---|---|---|---|---|---|---|

**Holat** ustuni `Yangi` bilan yoziladi — menejerlar uni `Qo'ng'iroq qilindi`, `Yetkazildi` kabi o'zgartirib borishlari mumkin.
