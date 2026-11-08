// ブラックラムズ東京 vs 豊田自動織機シャトルズ愛知（前半・8Kで撮影）。映像はCloudflare R2
// recordedAt は撮影開始のおおよその時刻（REPLAYの時計に使う）。分かり次第ここを直す
window.CAM360_VIDEOS_MULTI = [
  { label: 'ブラックラムズ東京 vs シャトルズ愛知（前半・8K）', recordedAt: '2026-11-08T13:00:00+09:00', chapters: [], multi: { base: 'https://cdn360.hometetsu.com/RAMS8K/base/index.m3u8', sets: {
      portrait: { hfov: 110, vfov: 120, tiles: [
        { lon: 180, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d180/index.m3u8' },
        { lon: 225, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d225/index.m3u8' },
        { lon: 270, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d270/index.m3u8' },
        { lon: 315, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d315/index.m3u8' },
        { lon: 0, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d0/index.m3u8' },
        { lon: 45, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d45/index.m3u8' },
        { lon: 90, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d90/index.m3u8' },
        { lon: 135, hls: 'https://cdn360.hometetsu.com/RAMS8K/p/d135/index.m3u8' } ] },
      landscape: { hfov: 140, vfov: 100, tiles: [
        { lon: 180, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d180/index.m3u8' },
        { lon: 210, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d210/index.m3u8' },
        { lon: 240, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d240/index.m3u8' },
        { lon: 270, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d270/index.m3u8' },
        { lon: 300, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d300/index.m3u8' },
        { lon: 330, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d330/index.m3u8' },
        { lon: 0, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d0/index.m3u8' },
        { lon: 30, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d30/index.m3u8' },
        { lon: 60, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d60/index.m3u8' },
        { lon: 90, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d90/index.m3u8' },
        { lon: 120, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d120/index.m3u8' },
        { lon: 150, hls: 'https://cdn360.hometetsu.com/RAMS8K/l/d150/index.m3u8' } ] }
  } } }
];
