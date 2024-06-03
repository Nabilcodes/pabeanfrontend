import React, { useState } from 'react';
import './ImportDeclarationForm.css';

function ImportDeclarationForm() {
    const [formData, setFormData] = useState({
        kantorPabean: '',
        nomorPengajuan: '',
        tanggalPengajuan: '',
        jenisPIB: '',
        jenisImpor: '',
        caraPembayaran: '',
        namaPengirim: '',
        alamatPengirim: '',
        nomorPendaftaran: '',
        tanggalPendaftaran: '',
        caraPengangkutan: '',
        namaSaranaPengangkut: '',
        namaPenjual: '',
        alamatPenjual: '',
        perkiraanTanggalTiba: '',
        pelabuhanMuat: '',
        pelabuhanTransit: '',
        pelabuhanTujuan: '',
        identitasImportir: '',
        nomorInvoice: '',
        tanggalInvoice: '',
        namaImportir: '',
        alamatImportir: '',
        nomorHouseBL: '',
        tanggalHouseBL: '',
        nomorMasterBL: '',
        tanggalMasterBL: '',
        nomorBC11: '',
        tanggalBC11: '',
        npwpPemilikBarang: '',
        namaPemilikBarang: '',
        alamatPemilikBarang: '',
        tempatPenimbunan: '',
        npwpPPJK: '',
        namaPPJK: '',
        valuta: '',
        nilaiFOB: '',
        nilaiAsuransi: '',
        nilaiFreight: '',
        nilaiPabean: '',
        jenisBarang: '',
        negaraAsal: '',
        jumlahSatuan: '',
        beratBersih: '',
        jenisPungutan: '',
        nilaiPungutan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="form-wrapper">
            <form className="form-container" onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div className="form-group" key={key}>
                        <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
                        <input
                            type={key.includes('tanggal') ? 'date' : 'text'}
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ImportDeclarationForm;
