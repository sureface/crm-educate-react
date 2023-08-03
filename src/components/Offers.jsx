import React from 'react'
import DisCount from '../assets/icons/discount.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'


const Offers = () => {

    const data = [
        {
            name: 'Oylik shartnoma',
            price: '400 000 so’m',
            offers: [
                {
                    text: "30 kun bepul"
                },
                {
                    text: "Cheklanmagan foydalanuvchilar"
                },
                {
                    text: "Tizimni sizning qoidalaringiz bo'yicha sozlash"
                },
                {
                    text: "Tizimni sizning qoidalaringiz bo'yicha sozlash"
                },
                {
                    text: "Doimiy texnik xizmat"
                },
                {
                    text: "Bepul trening darslar"
                },
                {
                    text: "Mobil ilovadan foydalanish"
                },
                {
                    text: "Telegram bot xizmati"
                },
            ]
        },
        {
            name: 'Yillik shartnoma',
            price: '3 840 000 so’m',
            offers: [
                {
                    text: "30 kun bepul"
                },
                {
                    text: "Cheklanmagan foydalanuvchilar"
                },
                {
                    text: "500 ta SMS paket"
                },
                {
                    text: "Tizimni sizning qoidalaringiz bo'yicha sozlash"
                },
                {
                    text: "Yangi versiyalardan foydalanish;"
                },
                {
                    text: "Doimiy texnik xizmat"
                },
                {
                    text: "Bepul trening darslar"
                },
                {
                    text: "Mobil ilovadan foydalanish"
                },
                {
                    text: "Telegram bot xizmati"
                },
            ]
        },
    ]

  return (
    <div>
        <div className="crm-offers">
            <div className="container">
                <div className="row crm-offers__wrapper">
                    <div className="col">
                        <div className="crm-offers__header">
                            <div className="crm-offers__title" data-aos="fade-right" data-aos-duration="500">{ data[0].name }</div>
                            <button type="button" className="crm-offers__btn" data-aos="fade-right" data-aos-duration="500"> { data[0].price } </button>
                        </div>
                        {
                            data[0].offers.map((item, key) => (
                                <div className="d-flex align-items-center crm-offers__body" key={key} data-aos="zoom-in-right" data-aos-duration="500">
                                    <div className="crm-offers__check">
                                        <FontAwesomeIcon icon={faSquareCheck} className='crm-offers__check_box'/>
                                    </div>
                                    <div className="crm-offers__plans">{ item.text }</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col">
                        <div className="crm-offers__header">
                            <div className="crm-offers__title" data-aos="fade-left" data-aos-duration="500">{ data[1].name }</div>
                            <button type="button" className="crm-offers__btn" data-aos="fade-left" data-aos-duration="500">
                                { data[1].price }
                                <img src={DisCount} alt="err" className="crm-offers__discount" data-aos="flip-right" data-aos-duration="500" />
                            </button>
                        </div>
                        {
                            data[1].offers.map((item, key) => (
                                <div className="d-flex align-items-center crm-offers__body" key={key} data-aos="zoom-in-left" data-aos-duration="500">
                                    <div className="crm-offers__check">
                                        <FontAwesomeIcon icon={faSquareCheck} className='crm-offers__check_box'/>
                                    </div>
                                    <div className="crm-offers__plans">{ item.text }</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers