/* 舊站資料救援：只讀指定 IndexedDB，不載入遊戲、不改寫任何探險檔。 */
'use strict';
(() => {
  const DB_NAME = 'research-expedition-v1';
  const readButton = document.getElementById('read-backups');
  const status = document.getElementById('backup-status');
  const list = document.getElementById('backup-list');
  const objectUrls = new Set();

  function message(text, error = false) {
    status.textContent = text;
    status.classList.toggle('error', error);
  }

  function readExistingProfiles() {
    return new Promise((resolve, reject) => {
      let request, missing = false, settled = false;
      const fail = text => { if (!settled) { settled = true; reject(new Error(text)); } };
      try { request = indexedDB.open(DB_NAME, 1); }
      catch { fail('瀏覽器不允許讀取本機紀錄。請改用之前作答的瀏覽器與一般瀏覽模式。'); return; }
      // open 可能試圖建立資料庫；立即中止升級交易，不留下新的空資料庫。
      request.onupgradeneeded = () => { missing = true; request.transaction.abort(); };
      request.onerror = () => {
        if (settled) return;
        if (missing) { settled = true; resolve([]); }
        else fail('無法開啟舊探險檔，原有紀錄未變更。請確認瀏覽器允許本機儲存後重試。');
      };
      request.onblocked = () => fail('讀取被其他分頁阻擋。請先關閉其他舊站分頁，再按一次讀取。');
      request.onsuccess = () => {
        const db = request.result;
        if (settled) { db.close(); return; }
        db.onversionchange = () => db.close();
        if (!db.objectStoreNames.contains('profiles')) {
          db.close(); fail('找到了舊資料庫，但沒有探險檔資料表。原資料保持不變，請聯絡老師協助。'); return;
        }
        let transaction, records;
        try {
          transaction = db.transaction('profiles', 'readonly');
          records = transaction.objectStore('profiles').getAll();
        } catch {
          db.close(); fail('無法讀取舊探險檔，原有紀錄未變更。請稍後重試。'); return;
        }
        transaction.oncomplete = () => {
          db.close();
          if (!settled) { settled = true; resolve(records.result); }
        };
        transaction.onerror = transaction.onabort = () => {
          db.close(); fail('讀取沒有完成，原有紀錄未變更。請保留此瀏覽器的網站資料並重新讀取。');
        };
      };
    });
  }

  function downloadProfile(profile, index) {
    try {
      // 與舊站 backup() 一致：完整 JSON.stringify，不改版本、不重建欄位、不省略附件。
      const json = JSON.stringify(profile);
      if (typeof json !== 'string') throw new Error('資料格式無法轉成 JSON');
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      objectUrls.add(url);
      const link = document.createElement('a');
      const originalId = typeof profile?.profileId === 'string' ? profile.profileId : 'profile-' + (index + 1);
      const filenameId = originalId.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 80) || 'profile-' + (index + 1);
      link.href = url;
      link.download = `研究探險隊_${filenameId}_${Date.now()}.json`;
      link.hidden = true; document.body.append(link); link.click(); link.remove();
      setTimeout(() => { URL.revokeObjectURL(url); objectUrls.delete(url); }, 2000);
      message('已準備完整 JSON 下載。請確認檔案已保存在裝置，再到 Moodle 遊戲匯入；此處的原檔仍保留。');
    } catch {
      message('無法產生這份備份，原有紀錄未變更。請勿清除瀏覽器資料，並聯絡老師協助。', true);
    }
  }

  function showProfiles(profiles) {
    list.replaceChildren();
    for (const [index, profile] of profiles.entries()) {
      const item = document.createElement('li'); item.className = 'backup-file';
      const info = document.createElement('div');
      const heading = document.createElement('h3');
      const label = typeof profile?.profileLabel === 'string' && profile.profileLabel.trim() ? profile.profileLabel : `未命名探險檔 ${index + 1}`;
      heading.textContent = label;
      const detail = document.createElement('p');
      const validDate = typeof profile?.updatedAt === 'string' && Number.isFinite(Date.parse(profile.updatedAt));
      detail.textContent = validDate ? '最後保存：' + new Intl.DateTimeFormat('zh-TW', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Taipei' }).format(new Date(profile.updatedAt)) : '最後保存時間不明；仍可下載完整原檔。';
      const button = document.createElement('button'); button.type = 'button';
      button.textContent = '下載完整 JSON';
      button.setAttribute('aria-label', `下載 ${label} 的完整 JSON`);
      button.addEventListener('click', () => downloadProfile(profile, index));
      info.append(heading, detail); item.append(info, button); list.append(item);
    }
    message(profiles.length ? `找到 ${profiles.length} 份本機探險檔。請辨認自己的名稱，再逐份下載。` : '這個瀏覽器沒有找到舊探險檔。若曾作答，請換回原本的裝置、瀏覽器與網站網址，或使用已下載的 JSON 備份。');
  }

  readButton.addEventListener('click', async () => {
    readButton.disabled = true; list.replaceChildren(); message('正在讀取這個瀏覽器的舊探險檔…');
    try { showProfiles(await readExistingProfiles()); }
    catch (error) { message(error instanceof Error ? error.message : '讀取失敗，原有紀錄未變更。', true); }
    finally { readButton.disabled = false; }
  });
  window.addEventListener('pagehide', () => { objectUrls.forEach(url => URL.revokeObjectURL(url)); objectUrls.clear(); });
})();
