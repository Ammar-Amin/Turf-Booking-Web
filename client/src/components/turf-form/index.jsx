import React, { useEffect, useState } from 'react'
import Input from '../input'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '@/firebase.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TurfForm = ({ data }) => {

    const [files, setFiles] = useState([])
    const [formData, setFormData] = useState({
        name: data?.name || '',
        desc: data?.desc || '',
        location: {
            address: data?.location?.address || '',
            city: data?.location?.city || '',
            state: data?.location?.state || '',
            pincode: data?.location?.pincode || '',
        },
        pricePerHour: data?.pricePerHour || '',
        openingTime: data?.openingTime || '',
        closingTime: data?.closingTime || '',
        imageUrls: data?.imageUrls || [],
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [uploading, setUploading] = useState(false)
    const navigate = useNavigate()


    function handleChange(e) {
        let { name, value } = e.target

        if (name.startsWith('location.')) {
            const locationField = name.split('.')[1];
            setFormData(prevState => ({
                ...prevState,
                location: {
                    ...prevState.location,
                    [locationField]: value
                }
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }

    }

    function uploadFiles() {
        setUploading(true)
        if (files.length > 0 && files.length <= 3) {
            const promises = []
            for (let i = 0; i < files.length; i++) {
                promises.push(
                    storeImage(files[i])
                )
            }

            Promise.all(promises).then((urls) => {
                setFormData({
                    ...formData,
                    imageUrls: formData.imageUrls.concat(urls)
                })
                setUploading(false)
            }).catch((err) => {
                console.log(err)
                setUploading(false)
            })
        } else {
            setUploading(false)
            setError('You can only upload 3 images per Turf');
        }
    }

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = file.name + new Date().getTime();
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + ' % done.');
                },
                (error) => {
                    reject(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            resolve(downloadURL);
                        })
                }
            )
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError(null)

        if (data) {
            try {
                const res = await axios.put(
                    `${import.meta.env.VITE_BASE_API}/api/turf/${data._id}`,
                    formData,
                    { headers: { "Content-Type": "application/json" } }
                )
                // console.log(res)
                if (res) {
                    setLoading(false)
                    navigate(`/turf/${data._id}`)
                }
            } catch (err) {
                setError(err.response.data.message)
                setLoading(false)
            }
        } else {
            try {
                console.log(document.cookie)
                const res = await axios.post(
                    `${import.meta.env.VITE_BASE_API}/api/turf`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${document.cookie}`,
                        }
                    }
                )
                console.log("RES ", res)
                if (res) {
                    setLoading(false)
                    navigate(`/turf/${res._id}`)
                }
            } catch (err) {
                setLoading(false)
                console.log(err)
                setError(err.response?.data?.message ?? "Failed to Create Turf")
            }
        }
    }

    const deleteImage = (index) => {
        const newImages = formData.imageUrls.filter((_, i) => i !== index)
        setFormData({ ...formData, imageUrls: newImages })
    }

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    if (loading) return <h1>Loading...</h1>


    return (
        <section className='w-full min-h-screen px-3 flex items-center justify-center'>
            <div className='md:w-[500px] lg:w-[700px] p-5 md:p-10 flex flex-col border bg-green-200 rounded-lg mt-28 mb-10'>

                <h2 className="my-4 text-center text-2xl lg:text-3xl font-bold leading-tight">{
                    data ? "Update your Turf" : "List a new Turf"
                }</h2>

                <form className='mt-3 flex flex-col lg:flex-row lg:gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:w-1/2'>
                        <Input
                            label='Turf Name'
                            name='name'
                            placeholder="Enter the Turf's name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div>
                            <label className='block mt-2 ml-2 mb-1'>Description</label>
                            <textarea
                                type='text'
                                name='desc'
                                rows='3'
                                placeholder='Enter the Description'
                                className='w-full rounded-lg px-4 py-2 outline-none'
                                value={formData.desc}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className='block mt-2 ml-2 mb-1'>Address</label>
                            <textarea
                                type='text'
                                name='location.address'
                                rows='2'
                                placeholder='Enter the Address'
                                className='w-full rounded-lg px-4 py-2 outline-none'
                                value={formData.location.address}
                                onChange={handleChange}
                            />
                        </div>
                        <Input
                            label='City'
                            name='location.city'
                            value={formData.location.city}
                            onChange={handleChange}
                        />
                        <Input
                            label='State'
                            name='location.state'
                            value={formData.location.state}
                            onChange={handleChange}
                        />
                        <Input
                            label='Pincode'
                            type='number'
                            name='location.pincode'
                            value={formData.location.pincode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col lg:w-1/2'>
                        <Input
                            label='Price Per Hour'
                            type='number'
                            name='pricePerHour'
                            placeholder='INR only /-'
                            value={formData.pricePerHour}
                            onChange={handleChange}
                        />
                        <Input
                            label='Opening Time'
                            type='time'
                            name='openingTime'
                            value={formData.openingTime}
                            onChange={handleChange}
                        />
                        <Input
                            label='Closing Time'
                            type='time'
                            name='closingTime'
                            value={formData.closingTime}
                            onChange={handleChange}
                        />
                        <label className='ml-2'>Max 3 Images allowed</label>
                        {
                            formData.imageUrls.length < 3 &&
                            <input
                                type='file'
                                accept='image/*'
                                required={formData.imageUrls.length === 0}
                                multiple
                                className='mt-2'
                                onChange={(e) => setFiles(e.target.files)}
                            />
                        }
                        <div className='flex gap-2 flex-wrap justify-center my-4'>
                            {formData.imageUrls.length > 0 && formData.imageUrls.map((url, i) => (
                                <div className=''>
                                    <img src={url} alt='image' key={i} className='w-[100px] h-[100px] object-cover rounded-t-lg' />
                                    <div className='cursor-pointer text-center p-1 text-xs text-white bg-red-400 rounded-b-lg' onClick={() => deleteImage(i)}>Delete</div>
                                </div>
                            ))}
                        </div>
                        {
                            formData.imageUrls.length < 3 &&
                            files.length > 0 &&
                            <button type='button' onClick={uploadFiles} disabled={uploading} className='w-[100px] mx-auto py-1 text-center bg-teal-400 rounded-lg'>
                                {uploading ? "Uploading" : "Upload"}
                            </button>
                        }
                        {uploading || formData.imageUrls.length > 0 &&
                            <span className='text-center text-green-700 mt-2'>Uploaded successfully</span>
                        }
                        {
                            error && <span className='mt-2 text-red-500 font-medium text-center'>{error}</span>
                        }
                        <div className='mt-5 flex justify-center'>
                            <button type='submit' disabled={uploading} className='px-8 py-2 bg-green-400 rounded-lg'>
                                {
                                    data ? 'Update' : 'Submit'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default TurfForm
