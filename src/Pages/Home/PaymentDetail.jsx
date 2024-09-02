import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HomeRoomDetails from '@/components/Home/HomeRoomDetails';
import { PiCopySimple } from 'react-icons/pi';
import { GoUpload } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoImageOutline } from 'react-icons/io5';
import PaymentNotes from '@/components/Home/PaymentNotes';
import { usePaymentContext } from '@/context/PaymentContext';
import { PLACES } from '@/assets/Home/Places';
import { FaArrowLeftLong } from 'react-icons/fa6';

const PaymentDetail = () => {
    const banks = [
        {
            name: 'Maybank',
            accountName: 'Kolej Ibu Zain',
            accountNumber: '0014-1477-1992-203',
            logo: '/Assets/Home/Places/SubPlaces/bank1.png',
        },
        {
            name: 'Affin Bank',
            accountName: 'Kolej Ibu Zain',
            accountNumber: '0014-1477-1992-203',
            logo: '/Assets/Home/Places/SubPlaces/bank2.png',
        },
        {
            name: 'OCBC',
            accountName: 'Kolej Ibu Zain',
            accountNumber: '0014-1477-1992-203',
            logo: '/Assets/Home/Places/SubPlaces/bank3.png',
        },
    ];

    const { selectedMethod, handleMethodSelect, uploadedFile, handleFileChange, handleFileDelete } = usePaymentContext();
    const { placeName, subCardId } = useParams();


    // const [uploadedFile, setUploadedFile] = useState(null);
    // const [selectedMethod, setSelectedMethod] = useState('Transfer'); // State to manage selected payment method

    // // Handle file upload
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setUploadedFile(file);
    //     }
    // };

    // // Handle file delete
    // const handleFileDelete = () => {
    //     setUploadedFile(null);
    // };

    // // Handle payment method selection
    // const handleMethodSelect = (method) => {
    //     setSelectedMethod(method);
    // };

    return (
        <div>
            <div className="bg-blue p-5 pt-10">
                <div className="container flex items-center gap-4">
                    <Link to={"/home"}>
                        <FaArrowLeftLong className="bg-[#5082ef] p-3 text-5xl rounded-full text-white" />
                    </Link>
                    <h1 className="text-2xl font-medium text-white">Payment Details</h1>
                </div>
            </div>

            <div className="bg-[#eff6ff]">
                <div className="max-w-[960px] mx-auto p-4 min-h-[85vh] bg-white">
                    <Card className="overflow-hidden border-none shadow-none">
                        <HomeRoomDetails />

                        <h2 className='font-semibold text-lg mt-6'>Payment Method</h2>

                        <div className="grid grid-cols-2 p-2 border-[1.5px] border-[#BFDBFE] rounded-lg mt-3 gap-2">
                            <Button
                                className={`p-7 text-[1rem] font-semibold ${selectedMethod === 'Transfer' ? 'bg-[#dbeafe]' : 'bg-white'} text-blue hover:bg-[#dbeafe]`}
                                onClick={() => handleMethodSelect('Transfer')}
                            >
                                Transfer
                            </Button>
                            <Button
                                className={`p-7 text-[1rem] font-semibold ${selectedMethod === 'Cash' ? 'bg-[#dbeafe]' : 'bg-white'} text-blue hover:bg-[#dbeafe]`}
                                onClick={() => handleMethodSelect('Cash')}
                            >
                                Cash
                            </Button>
                        </div>

                        {/* Cash */}
                        {selectedMethod === 'Cash' && (
                            <PaymentNotes />
                        )}

                        {/* Transfer */}
                        {selectedMethod === 'Transfer' && (
                            <div className="py-5 animate-myFadeIn">
                                {banks.map((bank, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 mb-4 bg-white border rounded-lg">
                                        <div className="flex ">
                                            <img src={bank.logo} alt={`${bank.name} logo`} className="h-10 w-10 mr-4" />
                                            <div>
                                                <h4 className="font-semibold">{bank.name}</h4>
                                                <p className="text-sm">{bank.accountName}</p>
                                                <p className="text-sm">{bank.accountNumber}</p>
                                            </div>
                                        </div>
                                        <button className="text-blue hover:bg-slate-100 p-2 rounded-lg flex items-center gap-1">
                                            <PiCopySimple className='text-lg' />
                                            Copy
                                        </button>
                                    </div>
                                ))}
                                <div className="mt-6">
                                    {!uploadedFile && (
                                        <div className="animate-myFadeIn">
                                            <label className="block mb-2 text-sm font-bold">
                                                Upload Proof of Transaction
                                            </label>
                                            <div className="flex bg-[#eff6ff] justify-center items-center w-full">
                                                <label
                                                    htmlFor="upload-file"
                                                    className="flex flex-col justify-center items-center w-full h-20 border-2 border-[#93C5FD] rounded-lg cursor-pointer hover:bg-[#d8e9ff]"
                                                >
                                                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                        <p className="text-sm flex items-center justify-center gap-2 text-blue">
                                                            <GoUpload className='text-xl' />
                                                            Upload File or Select File
                                                        </p>
                                                    </div>
                                                    <input id="upload-file" type="file" className="hidden" onChange={handleFileChange} />
                                                </label>
                                            </div>
                                        </div>
                                    )}

                                    {/* Show uploaded file details */}
                                    {uploadedFile && (
                                        <div className="flex items-center animate-myFadeIn justify-between mt-4 bg-white p-2 border rounded-lg">
                                            <div className="flex items-center gap-2 text-blue">
                                                <IoImageOutline className='text-xl' />
                                                <span className="">{uploadedFile.name}</span>
                                            </div>
                                            <button onClick={handleFileDelete} className="text-red-500 transition-all hover:bg-red-100 p-2 rounded-full">
                                                <RiDeleteBinLine className="text-lg" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="">
                            <Link to={`payment-confirmed`} >
                                <Button className="bg-[#2463EB] mt-4 w-full justify-center hover:bg-darkBlue text-white flex items-center tracking-wide gap-2 px-4 py-7 rounded-full text-[1rem]">
                                    Continue
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetail;
