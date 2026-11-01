// 360 リモートカメラの設定。ここを書き換えて保存するだけで反映されます。
window.CAM360_CONFIG = {
  // 映像の一覧は make_hls.bat が videos.js に自動で書き出します（ここは videos.js が無いときの予備）
  videos: [],

  // true：全員の再生位置を現在時刻に合わせる（ライブ中継らしく見せる）／false：開いた人ごとに最初から再生
  sync: false,

  // 同期の基準時刻（この時刻に0秒目が始まった扱いでループ）
  epoch: '2026-10-31T00:00:00+09:00',

  // フレーム画像（透過PNG）。null なら表示しない
  // frame：スマホ縦向き用（1080×2340）／frameLandscape：スマホ横向き用（2340×1080）
  // frameWide：PCやタブレットのブラウザ用（1920×1080）
  frame: null,
  frameLandscape: null,
  frameWide: null,

  // true にするとLIVE表示・時刻・角度などの文字を消す（フレームに任せたいとき）
  hideHud: false,

  // 接続画面の「CONNECTING…」の下に出すチームロゴ（透過PNG）。null なら出さない
  teamLogo: 'team_logo.png',

  // 接続画面のスポンサー（presented by ○○）。どちらも null ならスポンサー表示なし
  // sponsorLogo：透過PNG（横600×高さ200 くらい推奨）／sponsorName：ロゴがないときの文字
  sponsorLogo: 'sponsor.png',
  sponsorName: null,

  // 画面左上に出すカメラ名
  camName: 'Heater CAM ・ 01'
};
