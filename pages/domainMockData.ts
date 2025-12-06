// サービス全体の型・モックデータ集約

export type UserRole = 'USER' | 'ADMIN';
export type User = {
  id: string;
  email: string;
  passwordHash: string;
  nickname: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
};

export type Instructor = {
  id: string;
  name: string;
  profileText: string;
  career: string;
  avatarUrl: string;
  snsUrls?: string[];
  isActive: boolean;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  instructorId: string;
  isFree: boolean;
  durationSec: number;
  videoUrl: string;
  thumbnailUrl: string;
  publishedAt: string;
  status: 'DRAFT'|'PUBLISHED'|'ARCHIVED';
  createdAt: string;
};

export type LessonRequest = {
  id: string;
  userId: string;
  instructorId: string;
  videoId?: string;
  preferredDatetimeText: string;
  mode: 'ONLINE'|'OFFLINE'|'EITHER';
  budgetText: string;
  message: string;
  status: 'NEW'|'IN_PROGRESS'|'DONE';
  createdAt: string;
};

// ---------- モックデータ ----------

// ユーザー
export const users: User[] = [
  { id: "u1", email: "user1@example.com", passwordHash: "123456", nickname: "歌好き太郎", role: "USER", isActive: true, createdAt: "2024-01-01" },
  { id: "u2", email: "user2@example.com", passwordHash: "654321", nickname: "カラオケ娘", role: "USER", isActive: true, createdAt: "2024-02-01" },
  { id: "admin1", email: "admin@example.com", passwordHash: "admin", nickname: "管理者サンプル", role: "ADMIN", isActive: true, createdAt: "2024-01-01" }
];
// 講師
export const instructors: Instructor[] = [
  { id: "i1", name: "高木 先生", profileText: "発声法スペシャリスト", career: "ボイトレ歴20年", avatarUrl: "/file.svg", snsUrls: ["https://twitter.com/sensei1"], isActive: true },
  { id: "i2", name: "佐藤 コーチ", profileText: "楽しさ重視の歌唱指導", career: "音大卒/TV出演", avatarUrl: "/file.svg", snsUrls: ["https://instagram.com/sato"], isActive: true },
  { id: "i3", name: "鈴木先生", profileText: "ポップス専門", career: "カラオケバトル出演", avatarUrl: "/file.svg", isActive: true },
];
// カテゴリ
export const categories: Category[] = [
  { id: 'c1', name: '発声', slug: 'voice', sortOrder: 1 },
  { id: 'c2', name: 'リズム', slug: 'rhythm', sortOrder: 2 },
  { id: 'c3', name: '表現', slug: 'expression', sortOrder: 3 },
  { id: 'c4', name: '曲別解説', slug: 'song', sortOrder: 4 },
];
// 動画
export const videos: Video[] = [
  { id: 'v1', title: 'はじめてのボイトレ入門', description: '基本の姿勢から呼吸法まで', categoryId: 'c1', instructorId: 'i1', isFree: true, durationSec: 600, videoUrl: 'https://dummy.com/v1.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-01', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v2', title: '声量アップ集中トレ', description: '腹式呼吸と発声筋強化', categoryId: 'c1', instructorId: 'i2', isFree: false, durationSec: 800, videoUrl: 'https://dummy.com/v2.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-02', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v3', title: 'カラオケ得点UPリズム講座', description: 'リズム感と譜割り攻略', categoryId: 'c2', instructorId: 'i3', isFree: true, durationSec: 700, videoUrl: 'https://dummy.com/v3.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-03', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v4', title: '高音チャレンジ入門', description: '裏声習得テクニック', categoryId: 'c1', instructorId: 'i2', isFree: false, durationSec: 650, videoUrl: 'https://dummy.com/v4.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-04', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v5', title: '伝わる歌唱表現', description: '抑揚・ビブラート・表現力', categoryId: 'c3', instructorId: 'i1', isFree: false, durationSec: 900, videoUrl: 'https://dummy.com/v5.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-05', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v6', title: 'リップロール完全攻略', description: '滑舌と響き改善', categoryId: 'c1', instructorId: 'i3', isFree: true, durationSec: 740, videoUrl: 'https://dummy.com/v6.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-06', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v7', title: 'アニソンで学ぶリズム', description: '人気アニメ曲で練習', categoryId: 'c2', instructorId: 'i2', isFree: false, durationSec: 790, videoUrl: 'https://dummy.com/v7.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-06', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v8', title: '洋楽でボーカル強化', description: '英語曲で発音・リズム', categoryId: 'c4', instructorId: 'i1', isFree: false, durationSec: 820, videoUrl: 'https://dummy.com/v8.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-07', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v9', title: '中級者向け表現力UP', description: '心に届く歌声作り', categoryId: 'c3', instructorId: 'i2', isFree: false, durationSec: 900, videoUrl: 'https://dummy.com/v9.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-07', status: 'PUBLISHED', createdAt: '2024-04-10' },
  { id: 'v10', title: 'ヒット曲チャレンジ', description: '人気曲の歌いこなし', categoryId: 'c4', instructorId: 'i3', isFree: true, durationSec: 950, videoUrl: 'https://dummy.com/v10.mp4', thumbnailUrl: '/file.svg', publishedAt: '2024-05-07', status: 'PUBLISHED', createdAt: '2024-04-10' }
];
// レッスン依頼
export const lessonRequests: LessonRequest[] = [
  { id: 'lr1', userId: 'u1', instructorId: 'i1', videoId: 'v1', preferredDatetimeText: '6/15(土)18:00以降', mode: 'ONLINE', budgetText: '3000円以内', message: '高音の出し方強化したい', status: 'NEW', createdAt: '2024-06-05' }
];
