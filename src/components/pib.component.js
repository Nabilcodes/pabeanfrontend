import React, { useState } from 'react';
import './ImportDeclarationForm.css';

function ImportDeclarationForm() {
    const [formData, setFormData] = useState({
        // kantorPabean: '',
        // nomorPengajuan: '',
        // tanggalPengajuan: '',
        // jenisPIB: '',
        // jenisImpor: '',
        // caraPembayaran: '',
        emailPengirim: '',
        namaPengirim: '',
        // alamatPengirim: '',
        // nomorPendaftaran: '',
        // tanggalPendaftaran: '',
        // caraPengangkutan: '',
        // namaSaranaPengangkut: '',
        namaPenjual: '',
        // alamatPenjual: '',
        // perkiraanTanggalTiba: '',
        // pelabuhanMuat: '',
        // pelabuhanTransit: '',
        // pelabuhanTujuan: '',
        // identitasImportir: '',
        // nomorInvoice: '',
        // tanggalInvoice: '',
        // namaImportir: '',
        // alamatImportir: '',
        // nomorHouseBL: '',
        // tanggalHouseBL: '',
        // nomorMasterBL: '',
        // tanggalMasterBL: '',
        // nomorBC11: '',
        // tanggalBC11: '',
        // npwpPemilikBarang: '',
        // namaPemilikBarang: '',
        // alamatPemilikBarang: '',
        // tempatPenimbunan: '',
        // npwpPPJK: '',
        // namaPPJK: '',
        // valuta: '',
        nilaiFOB: 0,
        // nilaiAsuransi: '',
        // nilaiFreight: '',
        nilaiPabean: 0
        // jenisBarang: '',
        // negaraAsal: '',
        // jumlahSatuan: '',
        // beratBersih: '',
        // jenisPungutan: '',
        // nilaiPungutan: ''
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
        fetch('http://35.213.145.155:8000/orchestrate-get-billing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    billed_name: formData.namaPengirim, 
                    billed_email: formData.emailPengirim,
                    nilai_fob: formData.nilaiFOB,
                    nilai_pabean: formData.nilaiPabean
                }),
        })
            .then((response) => {
                if (response.ok) {
                console.log(response);
                } else {
                console.error('Billing creation failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
