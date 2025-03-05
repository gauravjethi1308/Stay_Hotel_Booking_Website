import React from 'react'
import Content from '../Content/content.json';

const Footer = () => {
  return (
    <footer className='bg-[#111111] px-9 md:px-10 mt-16 '> 
   
    
    <div className=' text-primaryFont font-primaryType grid grid-cols-1 md:grid-cols-3 gap-16 mb-28 ' >




<div className='mt-14'>
{Content.mainHeading.map((mainHeading)=>(

  <div className='text-4xl mb-2 '>
<h1 >{mainHeading.content}</h1>
</div>
))}

<div>
<p className='mt-5'>
Established in 1998, CozyStay Hotel is a boutique hotel in the
 heart of the Swiss Alps, offering contemporary accommodation
  and unrivaled access to ski and hiking trails, immersing you in an
   idyllic setting against pristine skies in search of a truly serene
    experience.
</p>
</div>
</div>



<div className='mt-14'>
<div>
<h1 className='text-4xl mb-2 '>Reach Out</h1>
</div>
<div>
{Content.footerReachOut.map((footerReachOut)=>(

<div className='mt-5' >
  <ul>
 <li className='mb-2'><a className=  ' hover:text-orange-600'>{footerReachOut.reachout1}</a></li>

 <li className='mb-2'><a className=' hover:text-orange-600'>{footerReachOut.reachout2}</a></li>
 <li  className='mb-2' ><a className='hover:text-orange-600'>{footerReachOut.reachout3}</a></li>
 <li  className='mb-2'><a className='hover:text-orange-600'>{footerReachOut.reachout4}</a></li>
</ul>
</div>
))}
</div>
</div>


<div className='mt-14'>
<div className='text-4xl mb-2 '>
  <h1>Sign up for newsletter</h1>
</div>

<div className='flex justify-between'>
  <p>Your Email Address</p>
  
  <p>Subscribe</p>
</div>

</div>

    

</div>
<hr></hr>



<div className=' grid grid-cols-1 md:grid-rows-4  place-items-center  text-primaryFont font-primaryType h-full '>
{Content.links.map((links)=>(

  <div className='mt-2' >
    <ul className='flex  md:grid-cols-3 gap-6 '>
      
<li><a href="/home" className=' hover:underline hover:underline-offset-8 '>{links.text1}</a></li>
<li><a href="/stay"className=' hover:underline hover:underline-offset-8'>{links.text2}</a></li>
<li><a href="/contact"className=' hover:underline hover:underline-offset-8'>{links.text3}</a></li>

</ul>
</div>
))}
<div className='mt-4 '>
  <p className='test-sm'>&copy; Copyright STAY IRIAFARM Theme For Hotel booking</p>
</div>
</div>

</footer>
  );
};

export default Footer
