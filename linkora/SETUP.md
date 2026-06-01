# Linkora - Setup & Kurulum Rehberi

## 📋 Gereksinimler
- **Node.js** v16+ ([Buradan indir](https://nodejs.org/))
- **npm** (Node.js ile birlikte gelir)

## 🚀 Hızlı Başlangıç

### Adım 1: Server'ı Başlat (Terminal 1)
```bash
cd linkora/server
npm install
npm run dev
```
✅ Server `http://localhost:5000` üzerinde çalışacak

### Adım 2: Client'ı Başlat (Terminal 2)
```bash
cd linkora/client
npm install
npm run dev
```
✅ Client `http://localhost:3000` üzerinde çalışacak

## ✅ Çalışıp Çalışmadığını Test Et

1. **Tarayıcıyı aç**: `http://localhost:3000`
2. **Konsolu kontrol et** (F12 > Console):
   - Hata yoksa başarılı! ✅
3. **Chat'i test et**:
   - Mesaj yaz ve "Gönder" butonuna tıkla
   - Yeni tarayıcı sekmesi aç: `http://localhost:3000`
   - Diğer sekmede mesaj gönder
   - Mesajlar iki tarafta da görünmeli

## 📁 Proje Yapısı

```
linkora/
├── client/                 # React + Vite
│   ├── src/
│   │   ├── App.jsx        # Ana uygulama
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js     # ⭐ Vite ayarları
├── server/                # Express + Socket.io
│   ├── index.js
│   ├── models/
│   └── package.json
└── SETUP.md
```

## 🛠️ Sorun Giderme

| Hata | Çözüm |
|------|-------|
| `Cannot find module 'vite'` | `cd client && npm install` |
| `Cannot find module '@vitejs/plugin-react'` | `npm install @vitejs/plugin-react --save-dev` |
| `Cannot find module 'nodemon'` | `cd server && npm install` |
| `Connection refused at localhost:5000` | Server çalışıyor mu kontrol et |
| `EADDRINUSE: address already in use :::3000` | `lsof -i :3000` ile process ID bul, `kill -9 <PID>` yap |
| `Mesajlar görünmüyor` | Browser konsolunda hata var mı kontrol et (F12) |

## 📝 Sonraki Adımlar

- [ ] Database (MongoDB) kurulumu
- [ ] Authentication sistemi (JWT)
- [ ] Kullanıcı kayıt/giriş
- [ ] Post/Paylaşım sistemi
- [ ] Real-time bildirimler
- [ ] UI/UX iyileştirmeleri

## 💡 Debug İpuçları

### Server loglarını görmek için:
```javascript
// server/index.js'de ekle
console.log("🔌 Socket bağlantısı:", socket.id);
console.log("📨 Mesaj alındı:", data);
```

### Client'ta Socket bağlantısını debug etmek için:
```javascript
// App.jsx'de ekle
socket.on("connect", () => console.log("✅ Bağlandı"));
socket.on("disconnect", () => console.log("❌ Bağlantı kesildi"));
```

## 🎯 Başarılı Kurulum Belirtileri
- ✅ Server: `Server running on port 5000` mesajı
- ✅ Client: Sayfa yükleniyor ve hata yok
- ✅ Mesaj gönderme çalışıyor
- ✅ Tarayıcı konsolunda hata yok

---

**Hala sorun mu var? Terminal çıktısını bize gönder!** 🆘
