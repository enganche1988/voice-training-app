import Link from "next/link";
export default function MyPage() {
  const user = { nickname: "歌好き太郎", email: "user@example.com", status: "無料会員", registered: "2024-05-01", nextPayment: null };
  const videos = [{ id: 'v1', title: 'はじめてのボイトレ入門', watched: true }];
  return (
    <main style={{maxWidth:430,margin:'0 auto',padding:32}}>
      <h1 style={{fontSize:22,fontWeight:700,marginBottom:10}}>マイページ</h1>
      <div style={{fontSize:15,marginBottom:17}}>
        <div><b>ニックネーム:</b> {user.nickname}</div>
        <div><b>メール:</b> {user.email}</div>
        <div><b>会員ステータス:</b> {user.status}</div>
        <div><b>登録日:</b> {user.registered}</div>
        {user.status !== '無料会員' && (<div><b>次回決済日:</b> {user.nextPayment}</div>)}
      </div>
      <div style={{margin:'23px 0 10px',fontWeight:600}}>最近視聴・お気に入り動画</div>
      <ul style={{color:'#2563eb',fontSize:15}}>
        {videos.map(v => <li key={v.id}>{v.title}</li>)}
      </ul>
      <Link href="/"><span style={{color:'#2563eb',textDecoration:'underline',fontSize:14}}>トップへ戻る</span></Link>
      <div style={{marginTop:18}}>
        <button style={{background:'#ef4444',color:'#fff',border:'none',borderRadius:7,padding:'11px 36px',fontWeight:700,fontSize:15}}>ログアウト</button>
      </div>
    </main>
  );
}

