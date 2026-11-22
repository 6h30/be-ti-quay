# Danh sách hình cần tạo (GPT / ảnh) – thả vào thư mục này

Game tự dùng file nếu có, thiếu thì vẽ tạm. **Tất cả PNG nền trong suốt** (trừ bg_*), tên file chính xác.

## Phong cách chung (dán vào đầu mọi prompt)
> Cute chibi 2D cartoon game art, thick soft outlines, bright pastel colors, glossy highlights, funny expressive faces, clean vector look, transparent background, no text, no watermark.

## Nhân vật (đứng quay mặt sang phải, chân chạm đáy ảnh, tỉ lệ 150×160)
| File | Prompt thêm |
|---|---|
| baby_idle.png | chubby baby with big head, round cheeks, tuft of hair, blue onesie and white diaper, CRAWLING ON ALL FOURS in side view facing right, diaper butt sticking up high in the air, hands and knees on the ground, head raised looking forward, mischievous smile |
| baby_push.png | same crawling baby (butt up, side view facing right), one arm raised high in front pushing something, evil giggle, sparkling eyes |
| baby_innocent.png | same baby sitting, golden halo, huge innocent eyes, hands in lap, angelic smile |
| baby_stun.png | same baby, dizzy swirl eyes, tears, sitting on floor, stars around head |
| mom_calm.png | tall mom in apron, hands on hips, suspicious raised eyebrow (180×330, đứng cạnh cửa) |
| mom_angry.png | same mom, furious, steam from ears, pointing finger |

## Đồ vật (60×60, nhìn chính diện) – `item_<id>.png`
vase, cup, plant, photo, clock, lamp, books, phone, teddy, pot, egg, cake, plate, bottle, perfume, soap, duck, brush, mirror, towel, car, paint, puzzle, balloon, ball
Prompt mẫu: "cute cartoon *<tên món>*, glossy, game item icon, centered".

## Mũ (60×50) – `hat_<id>.png`: cap, bow, cow, grad, top, crown

## Nền phòng (540×960, không có đồ nội thất nổi vì kệ được game vẽ riêng) – `bg_living.png`, `bg_kitchen.png`, `bg_bedroom.png`, `bg_bath.png`, `bg_kids.png`
"Cozy cartoon *<phòng khách/nhà bếp/phòng ngủ>* interior, flat side view, wall with window, wooden floor in the bottom 17% of the image, empty (no furniture), portrait 9:16."
- Sàn phải bắt đầu ở y≈800/960. Cửa mẹ ở góc dưới bên phải (x 462–538, y 610–800).
- Nếu muốn tự vẽ kệ/bàn trong ảnh nền, báo mình để chuyển toạ độ kệ cho khớp.

## Nhân vật gây rối – `pest_cat.png`, `pest_dog.png` (90×90, nhìn sang TRÁI), `pest_dad.png` (120×190, đứng, cúi nhìn điện thoại)
- pest_cat: "cute chubby cat sneaking, mischievous grin, side view facing left"
- pest_dog: "cute fluffy puppy, big eyes, tongue out, side view facing left"
- pest_dad: "tired funny dad in pajamas walking while staring at smartphone, holding a tray of dishes, front view"

## Âm thanh (tuỳ chọn) – thả MP3 vào `assets/audio/`
Không có file thì game dùng nhạc/âm tổng hợp sẵn. Tên file: `music_game` (nhạc nền lặp, ~60–90s, vui nhộn, 120–130 BPM), `sfx_break` (đồ vỡ), `sfx_pop` (đẩy đổ), `sfx_coin`, `sfx_steps` (bước chân mẹ), `sfx_caught` (bị mẹ bắt), `sfx_ok` (ngây thơ thành công), `sfx_gold`, `sfx_bark`, `sfx_meow`, `sfx_crash` (bố ngã), `sfx_giggle` (bé cười khúc khích).
Gợi ý nguồn: Suno/Udio cho nhạc nền ("playful ukulele and pizzicato, funny cartoon chaos, loopable"), ElevenLabs Sound Effects cho hiệu ứng. Lưu ý: khi mở bằng file:// trình duyệt chặn nạp MP3, cần chạy qua máy chủ (hoặc trong app đóng gói).

## Còn thiếu (game đang vẽ tạm bằng emoji) – mũ sự kiện, 60×50, nền trong suốt
`hat_ev_noel.png` (mũ ông già Noel), `hat_ev_tet.png` (mũ dê vàng / khăn đóng Tết), `hat_ev_gold.png` (mũ vàng lấp lánh), `hat_ev_house.png` (mũ nhà loạn, mũ hề), `hat_ev_combo.png` (mũ lửa), `hat_ev_coin.png` (mũ đồng xu vàng), `hat_ev_calm.png` (mũ ngủ có sao).
Đã có sẵn (dư dùng được): baby_walk, baby_laugh, baby_sulk, baby_cry.
