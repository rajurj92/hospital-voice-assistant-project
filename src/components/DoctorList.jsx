import { useEffect, useState } from 'react';
import api from '../services/api';

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get('/doctors').then(res => setDoctors(res.data));
  }, []);

  return (


    
    <div>
      {
        doctors.map(doc=>(
        <div key={doc.id} class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="../public/user_profile.png" alt="" />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">{doc.name}</p>
            <p class="font-medium text-gray-500">Specialist In : {doc.department}</p>
          </div>
          <button class="btn-primary">
            Message
          </button>
        </div>

</div>
        ))
      }



      {/* {doctors.map(doc => (
        <div key={doc.id}>
          <h3>{doc.name}</h3>
          <p>{doc.department}</p>
          <p>Room: {doc.room_no}</p>
        </div>
      ))} */}
    </div>
  );
}
