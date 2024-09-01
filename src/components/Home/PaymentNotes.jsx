import React from 'react'

const PaymentNotes = () => {
    return (
        <div>
            <div className="border rounded-lg mt-3 animate-myFadeIn p-3">
                <p className='font-semibold text-[#696969]'>Notes</p>
                <p>
                    Due Date: Please ensure payment is made in full by August 31, 2024. Late payments may result in additional charges. <br />
                    Payment Location: Payments can be made at our office located at 123 Malaysia. Our operating hours are Monday to Friday, 9:00 AM - 5:00 PM. <br />
                    Receipt: Upon payment, you will receive an official receipt as proof of your transaction. Please keep this receipt for your records. <br />
                    Contact Information: For any questions or concerns regarding your payment, please contact our billing department at (021) 1234-5678 or email us at billing@company.com.
                </p>
            </div>
        </div>
    )
}

export default PaymentNotes