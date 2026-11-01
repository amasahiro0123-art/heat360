// 試合まるごと（映像はCloudflare R2に置いています）
window.CAM360_VIDEOS_MULTI = [
  { label: '試合まるごと', chapters: [], multi: { base: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/base/index.m3u8', sets: {
      portrait: { hfov: 110, vfov: 120, tiles: [
        { lon: 180, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d180/index.m3u8' },
        { lon: 225, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d225/index.m3u8' },
        { lon: 270, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d270/index.m3u8' },
        { lon: 315, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d315/index.m3u8' },
        { lon: 0, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d0/index.m3u8' },
        { lon: 45, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d45/index.m3u8' },
        { lon: 90, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d90/index.m3u8' },
        { lon: 135, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/p/d135/index.m3u8' } ] },
      landscape: { hfov: 140, vfov: 100, tiles: [
        { lon: 180, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d180/index.m3u8' },
        { lon: 210, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d210/index.m3u8' },
        { lon: 240, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d240/index.m3u8' },
        { lon: 270, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d270/index.m3u8' },
        { lon: 300, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d300/index.m3u8' },
        { lon: 330, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d330/index.m3u8' },
        { lon: 0, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d0/index.m3u8' },
        { lon: 30, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d30/index.m3u8' },
        { lon: 60, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d60/index.m3u8' },
        { lon: 90, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d90/index.m3u8' },
        { lon: 120, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d120/index.m3u8' },
        { lon: 150, hls: 'https://pub-c0eb162437c64abf88571d399ffb0e73.r2.dev/FULL/l/d150/index.m3u8' } ] }
  } } }
];
