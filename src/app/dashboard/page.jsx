'use client'
import React, { useEffect, useState, useCallback } from 'react'
import LastSeen from './components/LastSeen'
import ListMatakuliahMahasiswa from './components/ListMatakuliahMahasiswa'
import ListMatakuliahDosen from './components/ListMatakuliahDosen'
import { fetchMatakuliah, fetchMatakuliahDosen } from '../services/matakuliahService'
import { getCookie } from '../utils/authHelper'
import { useFilter } from '../contexts/FileFilterContext'

const dashboardPage = () => {
    const role = getCookie('userRole');
    const [listMatakuliah, setListMatakuliah] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { selectedSemester, searchQuery } = useFilter();


    const getListMatakuliah = useCallback(async () => {
        setIsLoading(true);
        try {
            const response =
                role === 'dosen'
                    ? await fetchMatakuliahDosen()
                    : await fetchMatakuliah();
            setListMatakuliah(response.data);
        } catch (error) {
            console.error(`Error fetching matakuliah: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    }, [role]);

    useEffect(() => {
        getListMatakuliah();
    }, [getListMatakuliah]);

    const filteredMatakuliah = listMatakuliah.filter((matakuliah) => {
        const matchSemester = selectedSemester
            ? matakuliah.semester === parseInt(selectedSemester)
            : true;
        const matchQuery = matakuliah.nama
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        return matchSemester && matchQuery;
    });
    return (
        <div className='container mx-auto p-4'>
            {role === 'mahasiswa' && <LastSeen />}


            {role === 'dosen' ? <ListMatakuliahDosen listMatakuliah={filteredMatakuliah} isLoading={isLoading} /> : <ListMatakuliahMahasiswa listMatakuliah={filteredMatakuliah} isLoading={isLoading} />}

        </div>
    )
}

export default dashboardPage
