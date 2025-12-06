import React from 'react';
type Props = { className?: string };
export default function AuthButtons({ className = "" }: Props) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-bold bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#3B82F6] text-white shadow transition focus:ring-2 ring-[#9F7AEA] ${className}`}
      onClick={() => alert('Googleでログイン（ダミー）')}
      type="button"
    >
      <svg width="19" height="19" fill="none" viewBox="0 0 18 18" className="-ml-1"><g clipPath="url(#a)"><path d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.8455H13.8436C13.6364 11.9527 12.9954 12.8981 12.0454 13.5127L14.6409 15.4382C16.1545 14.0455 17.64 11.9273 17.64 9.20454Z" fill="#4285F4"/><path d="M9 18C11.43 18 13.4545 17.1909 14.6409 15.4382L12.0454 13.5127C11.4136 13.9364 10.5718 14.1818 9 14.1818C6.65636 14.1818 4.68453 12.3636 3.96544 10.1818L1.27272 12.1909C2.61635 15.1273 5.57272 18 9 18Z" fill="#34A853"/><path d="M3.96545 10.1818C3.77272 9.75817 3.65909 9.29363 3.65909 8.81817C3.65909 8.34272 3.77272 7.87817 3.96545 7.45454V5.36363L1.27272 3.31818C0.772722 4.29363 0.5 5.51817 0.5 6.81818C0.5 8.27272 0.772722 9.49817 1.27272 10.4727L3.96545 10.1818Z" fill="#FBBC05"/><path d="M9 3.81818C10.3273 3.81818 11.2909 4.36363 11.7818 4.81818L14.6818 2.01818C13.4545 0.872719 11.43 0 9 0C5.57272 0 2.61635 2.87272 1.27272 5.81818L3.96545 7.45454C4.68453 5.27272 6.65636 3.81818 9 3.81818Z" fill="#EA4335"/></g><defs><clipPath id="a"><rect width="17.1429" height="18" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
      Googleでログイン
    </button>
  );
}

