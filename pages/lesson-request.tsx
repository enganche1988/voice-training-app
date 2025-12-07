import { useRouter } from 'next/router';
import Link from 'next/link';
import { instructors, videos } from '../mock/domainMockData';
import React, { useState } from 'react';
export default function LessonRequestPage() {
  const { query } = useRouter();
  const instructorId = query.instructor as string;
  const videoId = query.video as string;
  const [done,setDone] = useState(false);
  const instructor = instructors.find(i=>i.id===instructorId);
  const video = videos.find(v=>v.id===videoId);
  const [form, setForm] = useState({ datetime: '', mode: 'EITHER', budget: '', msg: '' });
  const handle = (e:any)=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const onSubmit = (e:any)=>{e.preventDefault();setDone(true);};
  return (
    <main style={{maxWidth:500,margin:'0 auto',padding:32}}>
      <Link href="/videos"><span style={{color:'#2563eb',fontSize:13,textDecoration:'underline'}}>← 動画一覧</span></Link>
      <h1 style={{fontSize:21,fontWeight:700,margin:'16px 0'}}>レッスン依頼フォーム</h1>
      {instructor && <div style={{marginBottom:10,fontWeight:600}}>依頼先講師: {instructor.name}</div>}
      {video && <div style={{marginBottom:10}}>参考動画: {video.title}</div>}
      {done ? <>
        <div style={{color:'#16a34a',fontWeight:700,fontSize:18}}>送信完了！</div>
        <div style={{fontSize:14,marginTop:18}}>ご依頼ありがとうございます（ダミーメッセージ）</div>
      </> : <form onSubmit={onSubmit}>
        <input name="datetime" type="text" placeholder="希望日時 (例: 6/15 18:00以降)" value={form.datetime} onChange={handle} style={{width:'100%',padding:8,marginBottom:7,borderRadius:6,border:'1px solid #ddd'}} />
        <div style={{margin:'10px 0'}}>希望方法: <label><input type="radio" name="mode" value="ONLINE" checked={form.mode==='ONLINE'} onChange={handle} /> オンライン</label>
        <label style={{marginLeft:12}}><input type="radio" name="mode" value="OFFLINE" checked={form.mode==='OFFLINE'} onChange={handle}/> オフライン</label>
        <label style={{marginLeft:12}}><input type="radio" name="mode" value="EITHER" checked={form.mode==='EITHER'} onChange={handle}/> どちらでも</label></div>
        <input name="budget" type="text" placeholder="希望予算(例: 3000円以内)" value={form.budget} onChange={handle} style={{width:'100%',padding:8,marginBottom:7,borderRadius:6,border:'1px solid #ddd'}} />
        <textarea name="msg" placeholder="依頼内容・自由記述" value={form.msg} onChange={handle} rows={4} style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginBottom:13}} />
        <button type="submit" style={{background:'#2563eb',color:'#fff',borderRadius:7,fontWeight:700,padding:'11px 39px',fontSize:15}}>送信する</button>
      </form>}
    </main>
  );
}

