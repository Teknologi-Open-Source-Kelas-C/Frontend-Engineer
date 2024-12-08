'use client';

import React, { useEffect, useState } from 'react';
import { getLastSeen } from '../../services/lastSeenServices';
import Loading from '../../components/common/Loading';

const LastSeen = () => {
  const [lastSeen, setLastSeen] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLastSeen = async () => {
    try {
      setIsLoading(true);
      const response = await getLastSeen();
      console.log(response.data);
      setLastSeen(response.data || []); // Pastikan data valid atau array kosong
    } catch (error) {
      console.error(`Error fetching last seen: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLastSeen();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-black-700 mb-4">Last Seen</h2>
      {isLoading ? (
        <Loading /> // Tampilkan indikator loading saat memuat data
      ) : lastSeen.length > 0 ? (
        <div className="flex overflow-x-auto space-x-4">
          {lastSeen.map((item, index) => (
            <div key={index} className="w-72 h-52 bg-white border border-black rounded-lg flex-shrink-0 cursor-pointer">
              <div className="bg-[#2c4b82] w-full h-fit rounded-tl-lg rounded-tr-lg font-semibold text-black-000 p-4 text-white">
                <p className="text-lg text-white capitalize">{item.matakuliah.nama  }</p>
                <p className="text-sm font-light text-white">Semester {item.matakuliah.semester}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold text-gray-500">Belum ada data terakhir dilihat.</p>
      )}
    </section>
  );
};

export default LastSeen;
