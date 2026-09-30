/**
 * VALMOND — buyurtma arizalarini qabul qilish (Google Apps Script)
 *
 * Saytdagi forma shu skriptga POST so'rov yuboradi. Skript:
 *   1) arizani shu Google Sheets jadvalining "Arizalar" varag'iga yozadi;
 *   2) Telegram chatga bildirishnoma yuboradi.
 *
 * Telegram sozlamalari kodda emas, Script Properties'da saqlanadi:
 *   TELEGRAM_TOKEN   — @BotFather bergan bot tokeni
 *   TELEGRAM_CHAT_ID — arizalar keladigan chat/guruh ID raqami
 * (Loyiha sozlamalari ⚙️ → Script Properties)
 */

const SHEET_NAME = 'Arizalar';
const HEADERS = ['Sana', 'Turi', 'Ism', 'Telefon', 'Korobka', 'Shahar', 'Tabrik matni', 'Izoh', 'Holat'];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');

    // Honeypot: bu maydon faqat botlar tomonidan to'ldiriladi
    if (data.website) return json_({ ok: true });

    const order = {
      type: clean_(data.type, 20) || 'Shaxsiy',
      name: clean_(data.name, 80),
      phone: clean_(data.phone, 20),
      boxes: Math.min(99, Math.max(1, parseInt(data.boxes, 10) || 1)),
      city: clean_(data.city, 40),
      giftNote: clean_(data.giftNote, 200),
      comment: clean_(data.comment, 500),
    };

    if (order.name.length < 2 || order.phone.replace(/\D/g, '').length !== 12) {
      return json_({ ok: false, error: 'invalid' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      getSheet_().appendRow([
        new Date(),
        safe_(order.type),
        safe_(order.name),
        safe_(order.phone),
        order.boxes,
        safe_(order.city),
        safe_(order.giftNote),
        safe_(order.comment),
        'Yangi',
      ]);
    } finally {
      lock.releaseLock();
    }

    notifyTelegram_(order);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server' });
  }
}

/** Brauzerda URL ochilganda ishlayotganini tekshirish uchun */
function doGet() {
  return json_({ ok: true, service: 'valmond-orders' });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#F6F0E2');
    sheet.setFrozenRows(1);
    sheet.getRange('A:A').setNumberFormat('dd.mm.yyyy hh:mm');
  }
  return sheet;
}

function notifyTelegram_(o) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('TELEGRAM_TOKEN');
  const chatId = props.getProperty('TELEGRAM_CHAT_ID');
  if (!token || !chatId) return;

  const lines = [
    '<b>🧈 Yangi ariza — Valmond</b>',
    '',
    `<b>Turi:</b> ${esc_(o.type)}`,
    `<b>Ism:</b> ${esc_(o.name)}`,
    `<b>Telefon:</b> ${esc_(o.phone)}`,
    `<b>Korobka:</b> ${o.boxes} ta (${o.boxes * 4} × 200 g)`,
    `<b>Shahar:</b> ${esc_(o.city)}`,
  ];
  if (o.giftNote) lines.push(`<b>Tabrik matni:</b> ${esc_(o.giftNote)}`);
  if (o.comment) lines.push(`<b>Izoh:</b> ${esc_(o.comment)}`);

  UrlFetchApp.fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: chatId, text: lines.join('\n'), parse_mode: 'HTML' }),
    muteHttpExceptions: true,
  });
}

/** Sozlashni tekshirish: skript muharririda shu funksiyani ishga tushiring */
function testTelegram() {
  notifyTelegram_({
    type: 'Test', name: 'Sinov Arizasi', phone: '+998 90 000 00 00',
    boxes: 1, city: 'Toshkent', giftNote: '', comment: 'Sozlash tekshiruvi',
  });
}

function clean_(v, max) {
  return String(v == null ? '' : v).replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max);
}

// Jadvalda formula sifatida talqin qilinmasligi uchun (=, +, -, @ bilan boshlansa)
function safe_(v) {
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function esc_(v) {
  return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
