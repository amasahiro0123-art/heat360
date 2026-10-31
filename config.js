// 360 リモートカメラの設定。ここを書き換えて保存するだけで反映されます。
window.CAM360_CONFIG = {
  // 切り替えられる映像の一覧（index.html と同じ場所に置く）。最初のものが自動で再生されます
  videos: [
    { file: 'HL1.mp4', label: 'ハイライト1' },
    { file: 'HL2.mp4', label: 'ハイライト2' }
  ],

  // true：全員の再生位置を現在時刻に合わせる（ライブ中継らしく見せる）
  sync: true,

  // 同期の基準時刻（この時刻に0秒目が始まった扱いでループ）
  epoch: '2026-10-31T00:00:00+09:00',

  // フレーム画像（透過PNG）。null なら表示しない
  // frame：スマホ縦向き用（1080×2340 推奨）／frameLandscape：横向き用（2340×1080 推奨）
  frame: null,
  frameLandscape: null,

  // true にするとLIVE表示・時刻・角度などの文字を消す（フレームに任せたいとき）
  hideHud: false,

  // 画面左上に出すカメラ名
  camName: 'Heater CAM ・ 01'
};
