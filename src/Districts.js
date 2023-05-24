import React, { useState } from 'react';
import './District.css';
const DistrictTalukSelector = () => {
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedTaluk, setSelectedTaluk] = useState('');

    const districts = ["Salem", "Erode", "Chennai", "Coimbatore","Namakkal","Thanjavur", "Krishnagiri","Agastheeswaram","Chengalpattu"];
    const taluksByDistrict = {
        Salem: ["Salem", "Mettur", "Attur", "Edappadi"],
        Erode: ["Erode", "Gobichettipalayam", "Perundurai", "Sathyamangalam"],
        Chennai: ["Chennai Central", "Ambattur", "Madhavaram", "Tambaram"],
        Coimbatore: ["Coimbatore North", "Coimbatore South", "Mettupalayam", "Sulur"],
        Krishnagiri: ["Krishnagiri", "Hosur", "Denkanikottai", "Uthangarai"],
        Chengalpattu: ["Chengalpattu", "Thiruporur", "Tambaram"],
        Agastheeswaram:["Agastheeswaram", "Thovalai", "Kanyakumari", "Padmanabhapuram"],
        Namakkal: ["Namakkal", "Rasipuram", "Paramathi", "Tiruchengode"],
        Thanjavur:["Thanjavur", "Kumbakonam", "Pattukkottai", "Peravurani"]
    };

    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedTaluk('');
    };
    const handleTalukChange = (event) => {
        setSelectedTaluk(event.target.value)
    }
    const filteredTaluks = taluksByDistrict[selectedDistrict] || [];

    return (
        <div>
            <h2>Select District:</h2>
            <div className='select-box'>
                <select value={selectedDistrict} onChange={handleDistrictChange}>
                    <option value="">Select</option>
                    {districts.map((district, index) => (
                        <option key={index} value={district}>
                            {district}
                        </option>
                    ))}
                </select>
                {selectedDistrict && (
                    <div className='taluk-box'>
                        <select value={selectedTaluk} onChange={handleTalukChange}>
                            <option value="">Select Taluk</option>
                            {filteredTaluks.map((taluk, index) => (
                                <option key={index} value={taluk}>
                                    {taluk}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
            {selectedDistrict && selectedTaluk && (
                <div>
                    <h2>Selected District:</h2>
                    <p>{selectedDistrict}</p>
                    <h2>Selected Taluk:</h2>
                    <p>{selectedTaluk}</p>
                </div>
            )}
        </div>
    );
};

export default DistrictTalukSelector;

// export default Districts;