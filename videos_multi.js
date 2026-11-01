// 試合まるごと（映像はCloudflare R2に置いています）
window.CAM360_VIDEOS_MULTI = [
  { label: '試合まるごと', chapters: [], multi: { base: 'https://cdn360.hometetsu.com/FULL/base/index.m3u8', sets: {
      portrait: { hfov: 110, vfov: 120, tiles: [
        { lon: 180, hls: 'https://cdn360.hometetsu.com/FULL/p/d180/index.m3u8' },
        { lon: 225, hls: 'https://cdn360.hometetsu.com/FULL/p/d225/index.m3u8' },
        { lon: 270, hls: 'https://cdn360.hometetsu.com/FULL/p/d270/index.m3u8' },
        { lon: 315, hls: 'https://cdn360.hometetsu.com/FULL/p/d315/index.m3u8' },
        { lon: 0, hls: 'https://cdn360.hometetsu.com/FULL/p/d0/index.m3u8' },
        { lon: 45, hls: 'https://cdn360.hometetsu.com/FULL/p/d45/index.m3u8' },
        { lon: 90, hls: 'https://cdn360.hometetsu.com/FULL/p/d90/index.m3u8' },
        { lon: 135, hls: 'https://cdn360.hometetsu.com/FULL/p/d135/index.m3u8' } ] },
      landscape: { hfov: 140, vfov: 100, tiles: [
        { lon: 180, hls: 'https://cdn360.hometetsu.com/FULL/l/d180/index.m3u8' },
        { lon: 210, hls: 'https://cdn360.hometetsu.com/FULL/l/d210/index.m3u8' },
        { lon: 240, hls: 'https://cdn360.hometetsu.com/FULL/l/d240/index.m3u8' },
        { lon: 270, hls: 'https://cdn360.hometetsu.com/FULL/l/d270/index.m3u8' },
        { lon: 300, hls: 'https://cdn360.hometetsu.com/FULL/l/d300/index.m3u8' },
        { lon: 330, hls: 'https://cdn360.hometetsu.com/FULL/l/d330/index.m3u8' },
        { lon: 0, hls: 'https://cdn360.hometetsu.com/FULL/l/d0/index.m3u8' },
        { lon: 30, hls: 'https://cdn360.hometetsu.com/FULL/l/d30/index.m3u8' },
        { lon: 60, hls: 'https://cdn360.hometetsu.com/FULL/l/d60/index.m3u8' },
        { lon: 90, hls: 'https://cdn360.hometetsu.com/FULL/l/d90/index.m3u8' },
        { lon: 120, hls: 'https://cdn360.hometetsu.com/FULL/l/d120/index.m3u8' },
        { lon: 150, hls: 'https://cdn360.hometetsu.com/FULL/l/d150/index.m3u8' } ] }
  } } }
];
