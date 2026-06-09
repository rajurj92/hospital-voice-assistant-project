import CtaSection from '../components/CtaSection';
import DoctorList from '../components/DoctorList';
import Header from '../components/Header';
// import VoiceAssistant from '../components/VoiceAssistant';

export default function Dashboard() {
  return (
    <>
          <Header/>
   
 
    
      <div className='flex flex-col'>
      <CtaSection/>
      {/* <VoiceAssistant /> */}
      <DoctorList />
      </div>
 
     </>
  );
}
