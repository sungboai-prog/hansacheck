// =====================================================================
//  핸사췍 설정 파일 — 우리 가족 정보는 이 파일에만 있어요
//  앱을 업데이트할 때는 index.html만 바꾸고, 이 파일은 그대로 두면 돼요.
// =====================================================================

// 1) Firebase 설정값: Firebase 콘솔 → 프로젝트 설정 → 내 앱에서 복사해 붙여넣어요.
//    (지금 쓰시는 index.html 위쪽의 FIREBASE_CONFIG 값을 그대로 옮겨도 돼요)
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBjCenthQXBF-VOdY0xd2Wb33XA8YcPk4M",
  authDomain: "hansacheck-a3c85.firebaseapp.com",
  projectId: "hansacheck-a3c85",
  storageBucket: "hansacheck-a3c85.firebasestorage.app",
  messagingSenderId: "259931622766",
  appId: "1:259931622766:web:e4e0efd4626048adbec57f"
};

// 2) 우리 가족만의 이름표 — 지금 쓰시는 index.html의 FAMILY_CODE와 똑같이 써야
//    지금까지의 기록이 이어져요.
const FAMILY_CODE = "woo-son-0220";

// 3) 아이들 (이름은 별명으로 써도 돼요)
const KIDS = [
  { id: "k1", name: "준영", sub: "", ink: "#1E4FB8", tint: "#DCE6FB" },
  { id: "k2", name: "서연", sub: "", ink: "#9A4515", tint: "#FBE3D3" },
  { id: "k3", name: "준서", sub: "", ink: "#0F6B5A", tint: "#D5F0EA" }
];
const PARENTS = [ { id: "dad", name: "아빠" }, { id: "mom", name: "엄마" } ];

// 4) 처음 규칙 (앱 안 '규칙 바꾸기'로 언제든 바꿀 수 있어요) — 월 화 수 목 금 토 일
const DEFAULT_RULES = { days: [false, false, false, false, true, true, true], total: 480, session: 120, rest: 120 };

window.HSC_CONFIG = { FIREBASE_CONFIG, FAMILY_CODE, KIDS, PARENTS, DEFAULT_RULES };
