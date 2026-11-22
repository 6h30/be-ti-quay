// Gom file web vào thư mục www/ để Capacitor đóng gói (index.html + assets/)
const fs=require('fs'),path=require('path');
const out='www';fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
fs.copyFileSync('index.html',path.join(out,'index.html'));
fs.cpSync('assets',path.join(out,'assets'),{recursive:true,filter:s=>!s.endsWith('.md')});
console.log('www/ sẵn sàng');
