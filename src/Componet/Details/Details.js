import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div>
           <p style={{padding:'10px'}}>ওয়েব ডেভেলপমেন্ট (Web Development) হলো ওয়েবসাইট এবং ওয়েব অ্যাপ্লিকেশন তৈরির প্রক্রিয়া যা ওয়েব ব্রাউজারে দেখা যায়। এটি সাধারণভাবে তিনটি প্রধান কাজে বিভক্ত হয়: <br /><br />

ফ্রন্টএন্ড ডেভেলপমেন্ট: ফ্রন্টএন্ড ডেভেলপার মূলত ওয়েবসাইটের ব্যবহারকারীর সাথে যোগাযোগ করে। এই কাজে উনি HTML, CSS, এবং JavaScript ব্যবহার করে ওয়েবসাইটের ডিজাইন এবং ব্যবহারকারীর ইন্টারফেস তৈরি করেন। <br /><br /><br /><br />

ব্যাকএন্ড ডেভেলপমেন্ট: ব্যাকএন্ড ডেভেলপার সার্ভার সাইড ডেভেলপমেন্টে নির্ধারিত। উনি ডেটাবেস, সার্ভার, এবং এপিআই তৈরি করেন যা ওয়েব অ্যাপ্লিকেশনের ডাটা প্রসেস করে। ব্যাকএন্ড ডেভেলপারের কাজের জন্য কিছু পোপুলার প্রোগ্রামিং ভাষা এবং ফ্রেমওয়ার্ক আছে, যেমন PHP, Python, Ruby, এবং Node.js। <br /><br /><br /><br />

ডাটাবেস ডেভেলপমেন্ট: এই অংশে ডেটাবেস ডেভেলপার ডেটাবেস ডিজাইন, ডেটা স্টোরেজ, এবং ডেটা ম্যানেজমেন্ট সিস্টেম তৈরি করেন। এই ডেটাবেস সাধারণভাবে SQL বা NoSQL ডেটাবেসে সংরক্ষিত হয়। <br />

ওয়েব ডেভেলপমেন্ট শেখার জন্য আপনি ওয়েবসাইট, বই, অনলাইন টিউটরিয়াল, এবং সাধারণ সংসাধনের সাথে অধ্যয়ন করতে পারেন। আপনি কোনও প্রোগ্রামিং ভাষা শেখতে পারেন যা আপনি পছন্দ করেন। সাথে থাকতে পারে গুরুত্বপূর্ণ কিছু টুল ওয়েব ডেভেলপমেন্টে যেমন টেক্সট এডিটর, এবং ওয়েব ব্রাউজার ডেভেলপমেন্টের জন্য উপযুক্ত প্লাগইন সেটআপ করা। <br /><br /><br /><br />

শেখার পর, আপনি ওয়েব ডেভেলপমেন্ট প্রকল্পে কাজ করতে পারেন অথবা একটি ওয়েব ডেভেলপার হিসেবে ক্যারিয়ার গড়তে পারেন। এটি আপনার সম্পূর্ণ ইউনিভার্সাল শ্রেষ্ঠতা পেতে সাহায্য করতে পারে, কারণ ওয়েব ডেভেলপমেন্ট একটি দ্বিধা হানির ব্যবসায় এবং তার জন্য বাড়তি মান দাওয়া হতে পারে। <br /><br /><br />

এই সারণির পরিপ্রেক্ষিপ্তে, ওয়েব ডেভেলপমেন্ট শিখার জন্য শুরু করার জন্য বেশি কোনও প্রশ্ন থাকলে অনুগ্রহ করে জিজ্ঞাসা করুন!</p>

                      <div className="hom" style={{textAlign:'center',backgroundColor:'green'}}>
                      <Link to='/shop'>Home</Link>
                        <Link to='/review'>Review</Link>
                      </div>

        </div>
    );
};

export default Details;