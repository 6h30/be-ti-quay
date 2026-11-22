# Bé Tí Quậy – Thiết kế & chiến lược giữ người chơi

## Vòng chơi cốt lõi (90 giây / ván)
1. Chạm đồ vật → bé bò tới, đẩy đổ → vỡ → điểm + combo (đến x3.5).
2. Đồ rơi đụng đồ khác → **dây chuyền** (+30%).
3. Mẹ sắp tới (cảnh báo 2.2s, tiếng bước chân) → **GIỮ nút "Ngây thơ"**. Thả tay = bị bắt, mất tim, mất combo.
4. Mẹ dọn nhà xong → đồ mọc lại → quậy tiếp. Hết giờ hoặc hết 3 tim = kết thúc, **vẫn giữ xu** (thất bại mềm, không bị phạt).

## Cơ chế giữ chân (dựa trên hành vi người chơi game casual)
| Hành vi / nguyên lý | Cơ chế trong game |
|---|---|
| Vòng ngắn, "thêm một ván nữa" | Ván 90s, nút Chơi lại to nhất trên màn kết quả, thanh "còn X điểm để lên sao" |
| Rủi ro – phần thưởng | Tham phá thêm hay giữ nút ngây thơ? Combo càng cao càng sợ mất |
| Phần thưởng ngẫu nhiên (variable reward) | Đồ VÀNG xuất hiện ngẫu nhiên, điểm ×5, báo toast |
| Thói quen hằng ngày | Điểm danh 7 ngày (ngày 7 thưởng 600), chuỗi 🔥, 3 nhiệm vụ mới mỗi ngày (theo seed ngày, ai cũng giống nhau) |
| Hiệu ứng sưu tầm (Zeigarnik) | Album 25 món, thiếu ô "???" gây ngứa; đủ bộ → mũ 👑 |
| Cảm giác tiến bộ | 4 nâng cấp cấp 1-5, 3 phòng, mũ trang phục, 3 sao mỗi phòng |
| Gần đạt mục tiêu (goal gradient) | Màn kết quả luôn nêu 1 mục tiêu gần nhất: nhiệm vụ gần xong / xu mở phòng |
| Thất bại không đau | Bị bắt chỉ mất tim & combo; xu vẫn được cộng |
| Cảm giác "juice" | Rung màn hình, hạt vỡ, chữ nổi, âm thanh, bé cười gian |
| Học nhanh | Hướng dẫn 2 dòng, ẩn khi phá ≥3 món; luật mẹ chỉ 1 điều: **giữ nút** |

## Đo lường (đã gắn sẵn `track()` → S.log)
`round_start, round_end(score, caught, combo), mom_warn, caught, new_day, daily_claim, mission_claim, buy_up`.
Chỉ số cần theo dõi: D1/D7 retention, số ván/phiên, thời điểm bỏ ván, tỉ lệ bị bắt (mục tiêu 1–2 lần/ván), tỉ lệ nhận quà ngày.

## Có thể thêm (bản sau)
- Bố, chó, mèo làm "mối nguy" khác; đồ thể loại mới (nhà tắm, vườn).
- Sự kiện tuần (Tết, Trung thu), bảng xếp hạng bạn bè.
- Thông báo đẩy "Bé đang chờ quậy" (bản app), quảng cáo thưởng (nhân đôi xu / hồi tim).
- Cốt truyện mini-comic giữa các phòng.

## Quyết định đã chốt (22/11/2026)
- Nền tảng: **app điện thoại** (giữ code web, đóng gói Capacitor cho Android/iOS; chưa cần viết lại Unity).
- Kiếm tiền: **quảng cáo thưởng** (nhân đôi xu cuối ván; sau này thêm hồi tim). Hàm `showRewardedAd()` là chỗ gắn SDK.
- Nội dung bản kế tiếp: bố/chó/mèo gây rối, phòng mới, nhạc & âm thanh thật, sự kiện tuần.
- Ảnh nền: nền trống, game tự vẽ kệ/bàn.

## v0.2 – Nhân vật gây rối (mỗi 14–22s, tối đa 1 con, chỉ khi mẹ chưa sắp tới)
| Con | Hành vi | Người chơi làm gì |
|---|---|---|
| 🐈 Mèo | Leo lên kệ, tự đẩy rơi 1 món (tính dây chuyền) | Hưởng điểm miễn phí |
| 🐕 Chó | Chạy vào, sủa 1.8s; sủa xong thì **mẹ tới sớm** (cảnh báo 1.2s) | Chạm chó kịp lúc → +50 & hết sủa |
| 👨 Bố | Đi ngang xem điện thoại | Chạm → bố vấp, +300 ×combo, nhưng **mẹ tới ngay** (rủi ro/thưởng) |
Nhiệm vụ mới: "Làm bố vấp ngã", "Dỗ chó nín sủa".

## v0.3 – 5 phòng, 25 món
Phòng khách (miễn phí) → Nhà bếp 400🪙 → Phòng ngủ 900🪙 → Nhà tắm 1400🪙 → Phòng đồ chơi 2000🪙. Thêm 10 món đồ mới vào Album.

## v0.4 – Âm thanh
Nhạc nền vui tự tổng hợp, **chuyển sang giai điệu căng thẳng khi mẹ sắp tới**; 11 hiệu ứng (vỡ, chó sủa, mèo kêu, bố ngã, bé cười...). Nút riêng tắt nhạc 🎵 / hiệu ứng 🔊. Tự dùng MP3 trong `assets/audio/` nếu có.

## v0.5 – Sự kiện tuần (đổi tên app: **Bé Tí Quậy**)
5 sự kiện xoay vòng theo tuần (Thứ Hai–Chủ nhật): Tuần Vàng, Nhà Loạn, Siêu Combo, Phú Hộ, Mẹ Buồn Ngủ. Mỗi tuần 1 luật chơi riêng + 3 mốc "phá 100/250/450 món" (150/350/500🪙, mốc cuối tặng mũ độc quyền). Lý do giữ chân: lý do quay lại theo tuần, cảm giác khan hiếm (mũ chỉ lấy được đúng tuần đó), tiến độ hiện ở màn kết quả.

## v0.6 – Giao diện & nhân vật cute hơn
Tông hồng kẹo, phông Baloo 2 (cần mạng, không có thì dùng phông hệ thống), nút bo tròn viền trắng, tiêu đề lắc lư, tim/sao bay ở menu. Bé: đầu to, mắt long lanh biết chớp, má hồng, tóc xoăn, mặt khác nhau theo trạng thái. Mẹ, bố vẽ kiểu kawaii (mẹ có tạp dề tim, bố đồ ngủ kẻ sọc, ngái ngủ). Nền có hoa chấm bi, rèm, cờ đuôi nheo, thảm; đồ vật có bóng và viền sáng như sticker. Hình GPT sẽ thay thế khi có, nhưng bản vẽ tạm này đã đủ dễ thương để chơi thử.

## v0.7 – Sự kiện mùa: Noel & Tết
- **Noel** 15–31/12 hằng năm: tuyết rơi, cờ đỏ-xanh, đồ vật đổi thành quà/cây thông/chuông; xu ×1.25, đồ vàng nhiều hơn; mũ Ông già Noel.
- **Tết** (14 ngày trước đến 8 ngày sau mùng 1; bảng ngày có sẵn 2027–2030, **cần thêm năm sau**): cánh hoa rơi, cờ đỏ-vàng, đồ đổi thành lì xì/đèn lồng/pháo/dê; xu ×1.5, combo +0.5s, đồ vàng nhiều hơn; mũ Dê Vàng (Tết 2027 là năm Đinh Mùi).
- Mốc thưởng mùa cao hơn: phá 150/400/800 món → 250/500/1000💰 (Tết 300/600/1200) + mũ độc quyền.
- Sự kiện mùa thay sự kiện tuần trong thời gian diễn ra. Thử sớm: thêm `?event=noel` hoặc `?event=tet` vào địa chỉ (khi chạy qua máy chủ/ app).
