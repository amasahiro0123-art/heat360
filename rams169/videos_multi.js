// テスト版（ラムズの3分間・5.7K相当）。今のラムズ（../rams/?multi=1）と見比べるためのもの。映像はCloudflare R2の RAMS57
// 縦持ち：全画面 110°×120°・45°おき8本（cq18）／横持ち・PC：16:9 163°×81°・60°おき6本（cq18）。fadeは端のぼかしの幅（度）
// recordedAt は「撮影開始13:00＋切り出し開始10分」
window.CAM360_VIDEOS_MULTI = [
  { label: 'ラムズ テスト（3分・5.7K相当）', recordedAt: '2026-11-08T13:10:00+09:00', chapters: [], multi: { base: 'https://cdn360.hometetsu.com/RAMS57/base/index.m3u8', sets: {
      portrait: { hfov: 110, vfov: 120, fade: 4, tiles: [
        { lon: 180, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d180/index.m3u8' },
        { lon: 225, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d225/index.m3u8' },
        { lon: 270, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d270/index.m3u8' },
        { lon: 315, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d315/index.m3u8' },
        { lon: 0, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d0/index.m3u8' },
        { lon: 45, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d45/index.m3u8' },
        { lon: 90, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d90/index.m3u8' },
        { lon: 135, hls: 'https://cdn360.hometetsu.com/RAMS57/p/d135/index.m3u8' } ] },
      landscape: { hfov: 163, vfov: 81, fade: 4, tiles: [
        { lon: 180, hls: 'https://cdn360.hometetsu.com/RAMS57/l/d180/index.m3u8' },
        { lon: 240, hls: 'https://cdn360.hometetsu.com/RAMS57/l/d240/index.m3u8' },
        { lon: 300, hls: 'https://cdn360.hometetsu.com/RAMS57/l/d300/index.m3u8' },
        { lon: 0, hls: 'https://cdn360.hometetsu.com/RAMS57/l/d0/index.m3u8' },
        { lon: 60, hls: 'https://cdn360.hometetsu.com/RAMS57/l/d60/index.m3u8' },
        { lon: 120, hls: 'https://cdn360.hometetsu.com/RAMS57/l/d120/index.m3u8' } ] }
  } } }
];
