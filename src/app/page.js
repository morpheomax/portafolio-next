


import { FadeInComponents } from '@/components/animated/Text/FadeInComponents';
import { HeaderComponent } from '@/components/HeaderComponent';
import { ProfilePicture } from '@/components/ProfilePicture';
import { Quote } from '@/components/Quote';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';


export default function Home() {
  return (
    <>
    
      <div className="w-full">
      {/* <ScrollProgress /> */}
      
       
          <HeaderComponent/>
          {/* <FadeInComponents text={<ProfilePicture/>} />
          <FadeInComponents text={<Quote/>} />
          <FadeInComponents text={<Services/>} />
          <FadeInComponents text={<Testimonials/>} /> */}
          
      </div>
    </>
  );
}
