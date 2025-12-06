import Link from "next/link";
export default function Subscribe() {
  return (
    <main style={{maxWidth:420,margin:'0 auto',padding:32}}>
      <h1 style={{fontSize:22,fontWeight:700,marginBottom:13}}>有料会員登録</h1>
      <div style={{fontWeight:600,fontSize:16,marginBottom:16}}>月額980円（税込）ですべての動画が見放題！</div>
      <div style={{fontSize:14,color:'#555',marginBottom:18}}>登録後、すぐに有料コンテンツもご利用いただけます。</div>
      <a href="#" style={{display:'inline-block',background:'#2563eb',color:'#fff',fontWeight:700,padding:'12px 32px',borderRadius:9,fontSize:17,textDecoration:'none',margin:'18px 0 32px'}}>外部決済サービスへ進む</a>
      <div style={{margin:'22px 0',color:'#888',fontSize:13}}>※決済サービス連携はMVPでは実装例のみです</div>
      <Link href="/"><span style={{color:'#2563eb',textDecoration:'underline',fontSize:14}}>トップページへ</span></Link>
    </main>
  );
}

