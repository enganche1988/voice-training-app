import Link from "next/link";
import React, { useState } from "react";
export default function RegisterPage() {
  const [values, setValues] = useState({ email: '', password: '', nickname: '', line: false });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues(v => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.email || !values.password || !values.nickname) {
      setError('全て入力してください'); return;
    }
    if (!/^.+@.+\..+$/.test(values.email)) {
      setError('正しいメールアドレスを入力してください'); return;
    }
    if (values.password.length < 6) {
      setError('パスワードは6文字以上'); return;
    }
    if (!values.line) {
      setError('LINE友だち追加が必須です'); return;
    }
    setError(''); setSuccess(true);
  };

  return (
    <main style={{ maxWidth: 380, margin: '0 auto', padding: 32 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 18 }}>無料会員登録</h1>
      {success ? (
        <>
          <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: 18 }}>登録が完了しました！</div>
          <div style={{ margin: '18px 0', fontSize: 14 }}>
            登録メールアドレスでログインできます
          </div>
          <Link href="/login"><span style={{ color: '#2563eb', textDecoration: 'underline', fontSize: 15 }}>ログイン画面へ</span></Link>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 14 }}>
            <input name="email" type="email" placeholder="メールアドレス" value={values.email} onChange={onChange} style={{ width: '100%', padding: 9, borderRadius: 6, border: '1px solid #ddd', marginBottom: 9 }} />
            <input name="password" type="password" placeholder="パスワード（6文字以上）" value={values.password} onChange={onChange} style={{ width: '100%', padding: 9, borderRadius: 6, border: '1px solid #ddd', marginBottom: 9 }} />
            <input name="nickname" type="text" placeholder="ニックネーム" value={values.nickname} onChange={onChange} style={{ width: '100%', padding: 9, borderRadius: 6, border: '1px solid #ddd', marginBottom: 5 }} />
          </div>
          <label style={{ fontSize: 14, color: '#333' }}>
            <input name="line" type="checkbox" checked={values.line} onChange={onChange} style={{ marginRight: 8 }} />
            LINE公式アカウントを友だち追加済みです
          </label>
          <div style={{ height: 18, color: '#dc2626', margin: '12px 0 6px' }}>{error}</div>
          <button type="submit" style={{ width: '100%', marginTop: 5, background: '#2563eb', color: '#fff', fontWeight: 600, borderRadius: 7, padding: '11px', fontSize: 17 }}>登録する</button>
        </form>
      )}
      <div style={{ marginTop: 32, fontSize:14, textAlign:'center' }}>
        すでに登録済みの方は<Link href="/login"><span style={{ color: '#2563eb', textDecoration:'underline', marginLeft: 4 }}>ログイン</span></Link>
      </div>
    </main>
  );
}

