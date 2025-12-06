import Link from "next/link";
import React, { useState } from "react";
import { users } from "./domainMockData";

export default function LoginPage() {
  const [mail, setMail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mail || !pw) { setError('全て入力してください'); return }
    // このMVPでは実際のハッシュ認証はスキップ
    const u = users.find(u => u.email === mail && u.passwordHash === pw);
    if (!u) { setError('メールアドレスまたはパスワードが違います'); return }
    setError(""); setOk(true);
  };
  return (
    <main style={{ maxWidth: 340, margin: '0 auto', padding: 32 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 14 }}>ログイン</h1>
      {ok ? <>
        <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: 18 }}>ログイン成功！</div>
        <div style={{ margin: '16px 0 24px', fontSize: 14 }}>マイページ機能は今後拡張</div>
        <Link href="/mypage"><span style={{ color: '#2563eb', textDecoration:'underline', fontSize: 15 }}>マイページへ</span></Link>
      </> : (
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 11 }}>
          <input name="email" type="email" placeholder="メールアドレス" value={mail} onChange={e=>setMail(e.target.value)} style={{ width: '100%', padding: 9, borderRadius: 6, border: '1px solid #ddd', marginBottom: 8 }} />
          <input name="pw" type="password" placeholder="パスワード" value={pw} onChange={e=>setPw(e.target.value)} style={{ width: '100%', padding: 9, borderRadius: 6, border: '1px solid #ddd' }} />
        </div>
        <div style={{ minHeight:18, color: '#dc2626', marginBottom: 6 }}>{error}</div>
        <button type="submit" style={{ width: '100%', background: '#2563eb', color: '#fff', fontWeight: 600, borderRadius: 7, padding: '11px', fontSize: 17 }}>ログイン</button>
      </form>
      )}
      <div style={{ marginTop: 32, textAlign:'center', fontSize:14 }}>
        初めての方は<Link href="/register"><span style={{ color: '#2563eb', textDecoration:'underline', marginLeft: 4 }}>無料会員登録</span></Link>
      </div>
    </main>
  );
}

