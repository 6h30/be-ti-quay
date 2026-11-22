# Đóng gói Bé Tí Quậy thành app Android

Dự án Capacitor đã dựng sẵn (thư mục `android/`). Máy này **chưa có JDK và Android SDK** nên chưa build ra APK được.

## Cài một lần
1. Cài **Android Studio** (https://developer.android.com/studio) – đã kèm JDK và SDK. Mở lần đầu để nó tải SDK.
2. Điện thoại: bật *Tuỳ chọn nhà phát triển → Gỡ lỗi USB* (hoặc dùng máy ảo trong Android Studio).

## Mỗi lần sửa game rồi đóng gói lại
```powershell
cd "E:\02_KIEN_TRUC\Dự án\2026\KOMO SPA\baby-quay-pha"
npm run sync      # copy index.html + assets vào app
npm run open      # mở Android Studio, bấm nút ▶ Run để cài lên máy
```
Hoặc build APK thử bằng dòng lệnh (sau khi có Android Studio): `npm run apk` → file `android\app\build\outputs\apk\debug\app-debug.apk` (gửi qua Zalo/USB cài thẳng được).

## Việc cần làm trước khi lên Google Play
- **Icon & màn hình chờ:** tạo ảnh icon 1024×1024 bằng GPT, dùng Android Studio → *Image Asset* để sinh các cỡ.
- **Quảng cáo thưởng thật:** hiện `showRewardedAd()` trong index.html là bản giả. Cài plugin AdMob (vd. `@capacitor-community/admob`), thay hàm đó bằng quảng cáo thật, dùng ID quảng cáo **thử** khi test.
- **Ký app (release):** Android Studio → *Build → Generate Signed Bundle (AAB)*, giữ kỹ file keystore. Cần tài khoản Google Play Console (phí 25 USD một lần).
- **Chính sách riêng tư:** bắt buộc khi có quảng cáo; game hướng tới trẻ em cần tuân chính sách *Families* của Google (quảng cáo phải phù hợp trẻ em).
- Phông Baloo 2 tải từ mạng; offline sẽ dùng phông hệ thống. Muốn đẹp cả khi offline thì tải file phông về `assets/` (nhờ mình làm).
- iOS: cần máy Mac + Xcode (`npm i @capacitor/ios` rồi `npx cap add ios`).
