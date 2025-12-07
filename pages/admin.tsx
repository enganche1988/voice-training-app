import { useState } from 'react';
import Link from 'next/link';
import { users } from '../mock/domainMockData';
export default function AdminPage() {
  // MVPなので、メール admin@example.com / PW admin で認証(先頭ADMINユーザー想定)。
  const [mail,setMail] = useState('');
  const [pw,setPw] = useState('');
  const [user,setUser] = useState<any>(null);
  const tryLogin = (e:any) => {e.preventDefault();
    const found = users.find(u=>u.role==='ADMIN' && u.email===mail && u.passwordHash===pw);
    if (!found) return alert('管理権限がありません');
    setUser(found);
  };
  if (!user) return (<main style={{maxWidth:320,margin:'0 auto',padding:32}}><h1>管理画面ログイン</h1><form onSubmit={tryLogin}><input type="text" value={mail} onChange={e=>setMail(e.target.value)} placeholder="メール" style={{width:'100%',padding:8,marginBottom:8}}/><input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="パスワード" style={{width:'100%',padding:8,marginBottom:12}}/><button type="submit" style={{width:'100%',background:'#2563eb',color:'#fff',padding:'10px',fontWeight:700,borderRadius:6}}>ログイン</button></form></main>);
  return (
    <main style={{maxWidth:700,margin:'0 auto',padding:32}}>
      <h1 style={{fontSize:22,fontWeight:700}}>管理ダッシュボード</h1>
      <div style={{margin:'16px 0 18px',fontWeight:600}}>admin@example.com でログイン中</div>
      <ul style={{fontSize:16,margin:'19px 0 30px'}}>
        <li><Link href="#"><span style={{color:'#2563eb'}}>動画一覧/新規登録/編集（モック）</span></Link></li>
        <li><Link href="#"><span style={{color:'#2563eb'}}>講師一覧/新規登録/編集（モック）</span></Link></li>
        <li><Link href="#"><span style={{color:'#2563eb'}}>会員一覧（モック）</span></Link></li>
        <li><Link href="#"><span style={{color:'#2563eb'}}>レッスン依頼一覧（モック）</span></Link></li>
      </ul>
      <Link href="/"><span style={{color:'#2563eb',textDecoration:'underline',fontSize:15}}>戻る</span></Link>
    </main>
  );
}

