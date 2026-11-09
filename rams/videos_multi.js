// ブラックラムズ東京 vs 豊田自動織機シャトルズ愛知（前半・8Kで撮影）。映像はCloudflare R2
// levels: [最高画質（8K）, 高画質（4K相当）]。回線に合わせてビューアが選ぶ（だめなら低画質＝土台）
// recordedAt は撮影開始のおおよその時刻（REPLAYの時計に使う）。分かり次第ここを直す
window.CAM360_VIDEOS_MULTI = [
  { label: 'ブラックラムズ東京 vs シャトルズ愛知（前半・8K）', recordedAt: '2026-11-08T13:00:00+09:00', chapters: [], multi: { base: 'https://cdn360.hometetsu.com/RAMS8K/base/index.m3u8', sets: {
      portrait: { hfov: 110, vfov: 120, tiles: [
        { lon: 180, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d180/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d180/index.m3u8'] },
        { lon: 225, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d225/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d225/index.m3u8'] },
        { lon: 270, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d270/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d270/index.m3u8'] },
        { lon: 315, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d315/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d315/index.m3u8'] },
        { lon: 0, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d0/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d0/index.m3u8'] },
        { lon: 45, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d45/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d45/index.m3u8'] },
        { lon: 90, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d90/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d90/index.m3u8'] },
        { lon: 135, levels: ['https://cdn360.hometetsu.com/RAMS8K/p/d135/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/p/d135/index.m3u8'] } ] },
      landscape: { hfov: 140, vfov: 100, tiles: [
        { lon: 180, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d180/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d180/index.m3u8'] },
        { lon: 210, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d210/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d210/index.m3u8'] },
        { lon: 240, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d240/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d240/index.m3u8'] },
        { lon: 270, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d270/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d270/index.m3u8'] },
        { lon: 300, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d300/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d300/index.m3u8'] },
        { lon: 330, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d330/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d330/index.m3u8'] },
        { lon: 0, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d0/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d0/index.m3u8'] },
        { lon: 30, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d30/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d30/index.m3u8'] },
        { lon: 60, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d60/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d60/index.m3u8'] },
        { lon: 90, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d90/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d90/index.m3u8'] },
        { lon: 120, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d120/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d120/index.m3u8'] },
        { lon: 150, levels: ['https://cdn360.hometetsu.com/RAMS8K/l/d150/index.m3u8', 'https://cdn360.hometetsu.com/RAMS4K/l/d150/index.m3u8'] } ] }
  } } }
];
