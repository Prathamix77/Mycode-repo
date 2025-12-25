// "use client";

// import type React from "react";

// import { useState } from "react";
// import Image from "next/image";
// import ProgressCircle from "@/components/ui/ProgressCircle";

// const validUsers = {
//   "prathamdixit7777@gmail.com": {
//     name: "Pratham Dixit",
//     email: "prathamdixit7777@gmail.com",
//     mobile: "8317009505",
//     domain: "Python Programming",
//     college: "University Of Lucknow Second Campus",
//     startDate: "2025-11-17T18:30:00.000Z",
//     duration: "1 Month",
//   },
// };

// export default function VerifyPage() {
//   const [isVerified, setIsVerified] = useState(false);
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [userData, setUserData] = useState<
//     (typeof validUsers)[keyof typeof validUsers] | null
//   >(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setIsVerified(false);
//     setUserData(null);

//     if (email.trim()) {
//       const user =
//         validUsers[email.toLowerCase().trim() as keyof typeof validUsers];
//       if (user) {
//         setUserData(user);
//         setIsVerified(true);
//       } else {
//         setError("No record found with this ID");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5F5]">
//       {/* Header */}
//       <header className="bg-white h-28 border-b border-gray-200">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-center gap-3">
//             <Image
//               src="/vaultofcodes-logo.png"
//               alt="VaultofCodes Logo"
//               width={180}
//               height={60}
//               className="h-12 mt-5 w-auto"
//             />
//             <h1 className="text-[25px] mt-4 font-bold font-[Open Sans] text-[#2C3E50]">
//               VaultofCodes
//             </h1>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-9">
//         <div className="min-w-2xl max-w-4xl mx-auto">
//           {/* Verification Form Card */}
//           <div className="bg-white rounded-lg shadow-sm shadow-gray-200 p-8">
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Enter your Email or ID"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder:text-gray-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full mx-auto bg-[#007BFF] cursor-pointer hover:bg-blue-700 text-white font-light py-2 rounded-md transition-colors"
//               >
//                 Verify
//               </button>
//               {error && (
//                 <div className="text-red-600 text-center mt-2 font-medium">
//                   {error}
//                 </div>
//               )}
//             </form>
//           </div>

//           {/* User Profile Card */}
//           {isVerified && userData && (
//             <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
//               {/* Photo placeholder */}
//               <div className="flex justify-center mb-6">
//                 <div className="w-20 h-3 bg-gray-200 rounded outline-1 outline-black flex items-center justify-center text-gray-500 text-sm">
//                   Photo
//                 </div>
//               </div>

//               {/* User Info */}
//               <div className="space-y-2 mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   {userData.name}
//                 </h2>
//                 <p className="text-gray-500">
//                   <span className="font-normal">Email:</span> {userData.email}
//                 </p>
//                 <p className="text-gray-500">
//                   <span className="font-normal">Mobile:</span>{" "}
//                   <span className="text-gray-500">{userData.mobile}</span>
//                 </p>
//                 <p className="text-gray-500">
//                   <span className="font-normal">Domain:</span> {userData.domain}
//                 </p>
//                 <p className="text-gray-500">
//                   <span className="font-normal">College:</span>{" "}
//                   {userData.college}
//                 </p>
//                 <p className="text-gray-500">
//                   <span className="font-normal">Start Date:</span>{" "}
//                   {userData.startDate}
//                 </p>
//                 <p className="text-gray-500">
//                   <span className="font-normal">Duration:</span>{" "}
//                   {userData.duration}
//                 </p>
//               </div>

//               {/* View Offer Letter Link */}
//               <a
//                 href="/pdfs/OFFER_LETTER.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline inline-block mb-4"
//               >
//                 View Offer Letter
//               </a>

//               {/* Assignment Status */}
//               <div className="mb-6">
//                 <h3 className="font-bold text-gray-900 mb-3">
//                   Assignment Status
//                 </h3>
//                 <div className="flex gap-4 mb-3">
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-700">A1:</span>
//                     <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white text-xs">
//                       ✓
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-700">A2:</span>
//                     <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white text-xs">
//                       ✓
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-700">A3:</span>
//                     <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white text-xs">
//                       ✓
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-700">A4:</span>
//                     <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white text-xs">
//                       ✓
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-3">
//                   <span className="font-medium">Status:</span> Completed
//                 </p>
//                 <a
//                   href="/pdfs/CERTIFICATE.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline inline-block mb-3"
//                 >
//                   View Certificate
//                 </a>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Remarks:</span> N/A
//                 </p>
//               </div>

//               {/* Performance Metrics */}
//               <div className="grid grid-cols-4 gap-6 mt-8">
//                 <div className="flex flex-col items-center justify-center">
//                   {/* <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100">
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#e5e7eb"
//                       strokeWidth="8"
//                     /> */}
//                   {/* <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#22c55e"
//                       strokeWidth="8"
//                       strokeDasharray="251.2"
//                       strokeDashoffset="0"
//                       strokeLinecap="round"
//                       transform="rotate(-90 50 50)"
//                     />
//                   </svg> */}
//                   {/* <span className="text-sm text-gray-700">Attendance</span> */}
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="flex justify-center ml-35 gap-6">
//                     <ProgressCircle label="Attendance" value={95} size={70} />
//                     <ProgressCircle label="Tools" value={95} size={80} />
//                     <ProgressCircle
//                       label="Communication"
//                       value={90}
//                       size={100}
//                     />
//                     <ProgressCircle label="Performance" value={95} size={80} />
//                   </div>
//                   {/* <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100">
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#e5e7eb"
//                       strokeWidth="8"
//                     />
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#22c55e"
//                       strokeWidth="8"
//                       strokeDasharray="251.2"
//                       strokeDashoffset="0"
//                       strokeLinecap="round"
//                       transform="rotate(-90 50 50)"
//                     />
//                   </svg>
//                   <span className="text-sm text-gray-700">Tools</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100">
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#e5e7eb"
//                       strokeWidth="8"
//                     />
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#22c55e"
//                       strokeWidth="8"
//                       strokeDasharray="251.2"
//                       strokeDashoffset="0"
//                       strokeLinecap="round"
//                       transform="rotate(-90 50 50)"
//                     />
//                   </svg>
//                   <span className="text-sm text-gray-700">Communication</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100">
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#e5e7eb"
//                       strokeWidth="8"
//                     />
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       fill="none"
//                       stroke="#22c55e"
//                       strokeWidth="8"
//                       strokeDasharray="251.2"
//                       strokeDashoffset="0"
//                       strokeLinecap="round"
//                       transform="rotate(-90 50 50)"
//                     />
//                   </svg>
//                   <span className="text-sm text-gray-700">Performance</span> */}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import type React from "react";
// import { useState } from "react";
// import Image from "next/image";
// import ProgressCircle from "@/components/ui/ProgressCircle";

// export default function VerifyPage() {
//   const [isVerified, setIsVerified] = useState(false);
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [userData, setUserData] = useState<any>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setIsVerified(false);
//     setUserData(null);

//     if (email.trim() === "prathamdixit7777@gmail.com") {
//       setUserData({
//         name: "Pratham Dixit",
//         email,
//         mobile: "8317NNnnn5",
//         domain: "Python Programming",
//         college: "University Of Lucknow Second Campus",
//         startDate: "17 Nov 2025",
//         duration: "1 Month",
//       });
//       setIsVerified(true);
//     } else {
//       setError("No record found with this ID");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5F5]">
//       {/* Header */}
//       <header className="bg-white border-b">
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-center gap-2">
//             <Image
//               src="/vaultofcodes-logo.png"
//               alt="VaultofCodes Logo"
//               width={160}
//               height={50}
//               className="h-10 w-auto"
//             />
//             <h1 className="text-xl sm:text-2xl font-bold text-[#2C3E50]">
//               VaultofCodes
//             </h1>
//           </div>
//         </div>
//       </header>

//       {/* Main */}
//       <main className="max-w-4xl mx-auto px-4 py-6">
//         {/* Verification Card */}
//         <div className="bg-white rounded-lg shadow p-6 sm:p-8">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter your Email or ID"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black"
//             />

//             <button
//               type="submit"
//               className="w-full bg-[#007BFF] hover:bg-blue-700 text-white py-2 rounded-md"
//             >
//               Verify
//             </button>

//             {error && (
//               <p className="text-red-600 text-center font-medium">{error}</p>
//             )}
//           </form>
//         </div>

//         {/* Profile Card */}
//         {isVerified && userData && (
//           <div className="bg-white rounded-lg shadow p-6 sm:p-8 mt-6">
//             {/* Photo */}
//             <div className="flex justify-center mb-6">
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
//                 Photo
//               </div>
//             </div>

//             {/* User Info */}
//             <div className="space-y-2 text-sm sm:text-base">
//               <h2 className="text-lg sm:text-xl font-bold">{userData.name}</h2>
//               <p>Email: {userData.email}</p>
//               <p>Mobile: {userData.mobile}</p>
//               <p>Domain: {userData.domain}</p>
//               <p>College: {userData.college}</p>
//               <p>Start Date: {userData.startDate}</p>
//               <p>Duration: {userData.duration}</p>
//             </div>

//             {/* Links */}
//             <div className="mt-4 space-y-2">
//               <a
//                 href="/pdfs/OFFER_LETTER.pdf"
//                 target="_blank"
//                 className="text-blue-600 hover:underline block"
//               >
//                 View Offer Letter
//               </a>

//               <a
//                 href="/pdfs/CERTIFICATE.pdf"
//                 target="_blank"
//                 className="text-blue-600 hover:underline block"
//               >
//                 View Certificate
//               </a>
//             </div>

//             {/* Assignment Status */}
//             <div className="mt-6">
//               <h3 className="font-bold mb-3">Assignment Status</h3>

//               <div className="flex flex-wrap gap-4">
//                 {["A1", "A2", "A3", "A4"].map((a) => (
//                   <div key={a} className="flex items-center gap-2">
//                     <span>{a}</span>
//                     <span className="w-5 h-5 bg-green-500 text-white rounded flex items-center justify-center text-xs">
//                       ✓
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Performance Metrics */}
//             <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
//               <ProgressCircle label="Attendance" value={95} size={80} />
//               <ProgressCircle label="Tools" value={95} size={80} />
//               <ProgressCircle label="Communication" value={90} size={80} />
//               <ProgressCircle label="Performance" value={95} size={80} />
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// /////////////////////////////////////////

"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import ProgressCircle from "@/components/ui/ProgressCircle";

/* ------------------ Mock Database ------------------ */
const validUsers = {
  "prathamdixit7777@gmail.com": {
    name: "Pratham Dixit",
    email: "prathamdixit7777@gmail.com",
    mobile: "8317009505",
    domain: "Python Programming",
    college: "University Of Lucknow Second Campus",
    startDate: "2025-08-09T18:30:00.000Z",
    duration: "1 Month",
    offerLetterUrl:
      "https://drive.google.com/file/d/18T2inOdWLY966uQIoq8oyJ-k5Z0liLyN/view?usp=drive_link",
    certifcateUrl:
      "https://drive.google.com/file/d/1tjkIXS_lC9YIXklaZFbb_wWv17LOYYuo/view?usp=drive_link",
  },
  "shivamtiwari007700@gmail.com": {
    name: "Shivam Tiwari",
    email: "shivamtiwari007700@gmail.com",
    mobile: "9161646919",
    domain: "Python Programming",
    college: "University Of Lucknow Second Campus",
    startDate: "2025-08-10T18:30:00.000Z",
    duration: "1 Month",
    offerLetterUrl:
      "https://drive.google.com/file/d/1gppImsg68aw4R44s70h02eT_3PnQHf0X/view?usp=drive_link",
    certifcateUrl:
      "https://drive.google.com/file/d/15xwDD_NEhpJ649_hPQKXwWkDY9KoDfEk/view?usp=drive_link",
  },
  "pratapsingh202004@gmail.com": {
    name: "Pratap Kumar Singh",
    email: "pratapsingh202004@gmail.com",
    mobile: "7318214780",
    domain: "Web Development",
    college: "University Of Lucknow Second Campus",
    startDate: "2025-08-10T18:30:00.000Z",
    duration: "1 Month",
    offerLetterUrl:
      "https://drive.google.com/file/d/11pLi9llurKXYAJZlzZDKTLZIwObLhBk5/view?usp=drive_link",
    certifcateUrl:
      "https://drive.google.com/file/d/1vYwQ4Jw5A7CoE3sKoMf-VbkykTy3-ALr/view?usp=drive_link",
  },
};
// ✅ PUT THIS AT THE TOP OF THE FILE (above VerifyPage)

  function Toast({
  show,
  message,
  }: {
  show: boolean;
  message: string;
}) {
  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-[#333333] text-white px-5 py-3 rounded-sm shadow-md text-sm whitespace-nowrap max-w-sm backdrop-opacity-55 font-normal">
        <span className="text-green-500">✅</span>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [userData, setUserData] = useState<
    (typeof validUsers)[keyof typeof validUsers] | null
  >(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ------------------ Toast ------------------ */
  const showSuccessToast = () => {
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  },4000); // auto hide in 3 seconds
};

    /* ------------------ Submit Handler ------------------ */
  const handleRetry = () => {
    setError("");
    setEmail("");
    setLoading(false); // ⬅️ CRITICAL
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setError("");
    setIsVerified(false);
    setUserData(null);
    setLoading(true);

    // ⏱ Loader for exactly 3 seconds
    setTimeout(() => {
      setLoading(false);

      const user =
        validUsers[email.toLowerCase().trim() as keyof typeof validUsers];

      if (user) {
        setUserData(user);
        setIsVerified(true);
        setUserData(user);
        setLoading(false);
        showSuccessToast();
      } else {
        setError("No records found for the provided ID.");
      }
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* ================= Header ================= */}
      <header className="bg-white h-28 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-full">
          <div className="flex items-center justify-center gap-3 h-full invert-0 brightness-100 dark:invert-0 dark:brightness-100">
            <Image
              src="/vaultofcodes-logo.png"
              alt="VaultofCodes Logo"
              width={160}
              height={50}
              className="h-10 w-auto block invert-0 brightness-100 dark:invert-0 dark:brightness-100"
            />
            <h1 className="text-[25px] sm:text-[25px] font-sans font-[730] text-[#2C3E50] text-center sm:text-left leading-none">
              VaultofCodes
            </h1>
          </div>
        </div>
      </header>

      {/* ================= Main ================= */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Verification Card */}
        {/* <div className="bg-white rounded-lg shadow p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Email or ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#007BFF] hover:bg-blue-700 text-white py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Verify" : "Verify"}
            </button>

            {error && (
              <p className="text-red-600 text-center font-medium">{error}</p>
            )}
          </form>
        </div> */}
        <div className="bg-white rounded-lg shadow p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Email or ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#007BFF] hover:bg-blue-700 text-white py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Verify" : "Verify"}
            </button>
          </form>
        </div>

        {/* Error Box */}
        {error && !loading && (
          <div className="mt-10 mx-auto max-w-lg max-sm:min-w-85 border border-red-500 bg-[#FFECEC] rounded-sm px-3 py-2 text-center text-[15px] ">
            <p className="text-red-700 font-light mb-3">{error}</p>

            <button
              type="button"
              onClick={handleRetry}
              className="w-full mt-4 max-sm:h-9 bg-[#ce030d] hover:bg-red-700 py-1 text-white  rounded-sm font-normal"
            >
              Retry
            </button>
          </div>
        )}

        {/* ================= Loader ================= */}
        {loading && (
          <div className="flex justify-center mt-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-600 text-sm"></p>
            </div>
          </div>
        )}

        {/* ================= Profile ================= */}
        {isVerified && userData && (
          <div className="bg-white rounded-lg shadow p-6 sm:p-8 mt-6">
            {/* Photo */}
            <div className="flex justify-center mb-6">
              <div className="w-27 h-4 bg-white outline-black  ring-black rounded-sm flex items-center justify-start text-black border-b border-gray-200 border-r">
                <img

                  src="capture-jpg.jpg"
                  className="object-cover"
                  width={13}
                  height={11}
                ></img>
                Photo
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-2 text-sm sm:text-base">
              <h2 className="text-lg sm:text-xl font-bold">{userData.name}</h2>
              <p>Email: {userData.email}</p>
              <p>Mobile: {userData.mobile}</p>
              <p>Domain: {userData.domain}</p>
              <p>College: {userData.college}</p>
              <p>Start Date: {userData.startDate}</p>
              <p>Duration: {userData.duration}</p>
            </div>
            <div>
              <a
                href={userData.offerLetterUrl}
                target="_blank"
                className="text-[#007BFF] max-sm:font-semibold hover:underline block mt-3"
              >
                View Offer Letter
              </a>
            </div>
            {/* Assignment Status */}
            <div className=" mb-4">
              <h3 className="font-bold mb-3">Assignment Status</h3>
              <div className="flex flex-nowrap gap-3 text-sm">
                {["A1:", "A2:", "A3:", "A4:"].map((a) => (
                  <div
                    key={a}
                    className=" flex-nowrap items-center bg-[#EAEAEA] rounded-sm px-2 py-1 mt-4 "
                  >
                    <span>{a}</span>
                    <span className="w-5 h-5 text-white rounded items-center justify-center text-sm">
                      ✅
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="">Status:Completed</div>

            {/* Links */}
            <div className="mt-4 space-y-2">
              <a
                href={userData.certifcateUrl}
                target="_blank"
                className="text-[#007BFF] hover:underline block max-sm:font-semibold"
              >
                View Certificate
              </a>
            </div>
            <div className="font-normal">Remarks : N/A</div>

            {/* Performance Metrics */}
            <div className="mt-8 flex flex-wrap ml-13 max-md:20 gap-x-4 gap-y-8 justify-items-center-start">
              <ProgressCircle label="Attendance" value={95} size={80} />
              <ProgressCircle label="Tools" value={95} size={80} />
              <ProgressCircle label="Communication" value={90} size={105} />
              <ProgressCircle label="Performance" value={95} size={80} />
            </div>
          </div>
        )}
        <Toast
  show={showToast}
  message="Certificate details loaded."
/>

      </main>
    </div>
  );
}

// "use client";

// import type React from "react";
// import { useState } from "react";
// import Image from "next/image";
// import ProgressCircle from "@/components/ui/ProgressCircle";

// /* ------------------ Mock Database ------------------ */
// const validUsers = {
//   "prathamdixit7777@gmail.com": {
//     name: "Pratham Dixit",
//     email: "prathamdixit7777@gmail.com",
//     mobile: "8317005505",
//     domain: "Python Programming",
//     college: "University Of Lucknow Second Campus",
//     startDate: "2025-08-09",
//     duration: "1 Month",
//     offerLetterUrl: "https://drive.google.com/file/d/18T2inOdWLY966uQIoq8oyJ-k5Z0liLyN/view?usp=drive_link",
//     certifcateUrl: "https://drive.google.com/file/d/1-ssfLvBkrpFxmY8Ldt4n1kNWi70A1L2N/view?usp=drive_link",
//   },
//   "shivamtiwari007700@gmail.com": {
//     name: "Shivam Tiwari",
//     email: "shivamtiwari007700@gmail.com",
//     mobile: "9161646919",
//     domain: "Python Programming",
//     college: "University Of Lucknow Second Campus",
//     startDate: "2025-08-10",
//     duration: "1 Month",
//     offerLetterUrl:
//       "https://drive.google.com/file/d/1gppImsg68aw4R44s70h02eT_3PnQHf0X/view?usp=drive_link",
//     certifcateUrl: "https://drive.google.com/file/d/15xwDD_NEhpJ649_hPQKXwWkDY9KoDfEk/view?usp=drive_link",
//   },
//   "pratapsingh202004@gmail.com": {
//     name: "Pratap Singh",
//     email: "pratapsingh202004@gmail.com",
//     mobile: "7318214780",
//     domain: "Web Development",
//     college: "University Of Lucknow Second Campus",
//     startDate: "2025-08-10",
//     duration: "1 Month",
//     offerLetterUrl:
//       "https://drive.google.com/file/d/11pLi9llurKXYAJZlzZDKTLZIwObLhBk5/view?usp=drive_link",
//     certifcateUrl: "https://drive.google.com/file/d/1vYwQ4Jw5A7CoE3sKoMf-VbkykTy3-ALr/view?usp=drive_link",
//   },
// };

// export default function VerifyPage() {
//   const [email, setEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [userData, setUserData] = useState<
//     (typeof validUsers)[keyof typeof validUsers] | null
//   >(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.trim()) return;

//     setError("");
//     setIsVerified(false);
//     setUserData(null);
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       const user =
//         validUsers[email.toLowerCase().trim() as keyof typeof validUsers];

//       if (user) {
//         setUserData(user);
//         setIsVerified(true);
//       } else {
//         setError("No record found with this ID");
//       }
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5F5]">
//       {/* ================= Header ================= */}
//       <header className="bg-white min-h-22 border-b border-gray-200">
//         <div className="max-w-6xl mx-auto px-4 sm:px-12 mt-5 mr-4">
//           <div className="flex items-center justify-center sm:justify-center sm:items-center gap-1.5 py-4 ">
//             <Image
//               src="/vaultofcodes-logo.png"
//               alt="VaultofCodes Logo"
//               width={160}
//               height={50}
//               className="h-10 w-auto block invert-0 brightness-100 dark:invert-0 dark:brightness-100"
//             />
//             <h1 className="text-[25px] sm:text-[25px] font-sans font-[730] text-[#2C3E50] text-center sm:text-left leading-none">
//               VaultofCodes
//             </h1>
//           </div>
//         </div>
//       </header>

//       {/* ================= Main ================= */}
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
//         {/* Verification Card */}
//         <div className="bg-white rounded-lg shadow p-5 sm:p-8">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter your Email or ID"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black"
//             />

//               <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#007BFF] hover:bg-blue-700 text-white py-2 rounded-md pointer-cursor disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? "Verify" : "Verify"}
//             </button>

//             {error && (
//               <p className="text-red-600 text-center font-medium">{error}</p>
//             )}
//           </form>
//         </div>

//         {/* ================= Loader ================= */}
//         {loading && (
//           <div className="flex justify-center mt-6">
//             <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//           </div>
//         )}

//         {/* ================= Profile ================= */}
//         {isVerified && userData && (
//           <div className="bg-white rounded-lg shadow p-5 sm:p-8 mt-6">
//             <h2 className="text-lg sm:text-xl font-bold mb-4">
//               {userData.name}
//             </h2>

//             <div className="space-y-2 text-sm sm:text-base">
//               <p>Email: {userData.email}</p>
//               <p>Mobile: {userData.mobile}</p>
//               <p>Domain: {userData.domain}</p>
//               <p>College: {userData.college}</p>
//               <p>Start Date: {userData.startDate}</p>
//               <p>Duration: {userData.duration}</p>
//             </div>

//             <a
//               href={userData.offerLetterUrl}
//               target="_blank"
//               className="text-blue-600 hover:underline block mt-3"
//             >
//               View Offer Letter
//             </a>

//             <div className="mt-1">
//               <h3 className="font-bold mb-3">Assignment Status</h3>
//               <div className="flex flex-nowrap gap-2  mt-4 text-xs">
//                 {["A1:", "A2:", "A3:", "A4:"].map((a) => (
//                   <div
//                     key={a}
//                     className="flex items-center gap-1 bg-[#EAEAEA] rounded-sm px-3 py-1"
//                   >
//                     <span>{a}</span>
//                     <span className="w-5 h-5 bg-[#58D58D] text-white rounded flex items-center justify-center text-xs">
//                       ✓
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-2 font-normal">Status:Completed</div>

//             {/* Links */}
//             <div className="mt-4 space-y-2">
//                 <a
//                 href={userData.certifcateUrl}
//                 target="_blank"
//                 className="text-blue-600 hover:underline block"
//               >
//                 View Certificate
//               </a>
//             </div>
//             <div>Remarks: N/A</div>

//              <div className="mt-8 flex flex-wrap gap-13 justify-items-center">
//                <ProgressCircle label="Attendance" value={95} size={80} />
//                <ProgressCircle label="Tools" value={95} size={80} />
//                <ProgressCircle label="Communication" value={95} size={110} />
//                <ProgressCircle label="Performance" value={95} size={80} />
//              </div>
//            </div>
//         )}
//       </main>
//     </div>
//   );
// }
