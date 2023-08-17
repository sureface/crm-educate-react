import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPeopleLine, 
    faLaptop,
    faDesktop,
    faCalendarCheck,
    faCalendar, 
    faUserGraduate,
    faCalendarDays, 
    faEnvelope, 
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {

    const data = [
        {
            icon: faPeopleLine,
            title: "Markazlashtirilgan boshqaruv",
            description: "Barcha o'quvchilar, xodimlar, o'quv jarayoni bilan bog'liq bo'lgan barcha ma'lumotlar yagona elektron bazada"
        },
        {
            icon: faLaptop,
            title: "Avtomatlashtirilgan hisob-kitob",
            description: "Barcha to'lovlar, qarzdorliklar, o'qituvchilarning oylik maoshlari va chiqimlarni avtomatik hisoblash"
        },
        {
            icon: faDesktop,
            title: "Statistik ma'lumotlar diagrammasi",
            description: "Kunlik qabul, umumiy o'quvchilar soni, oylik tushum va qarzdorliklarni statistik diagrammalar asosida ko'rish"
        },
        {
            icon: faCalendarCheck,
            title: "Intellektual dars jadvali",
            description: "Aqlli dars jadvali yordamida dars soatlarini to'g'ri taqsimlash va ularga mos xonalarni aniq belgilash imkoniyati"
        },
        {
            icon: faCalendar,
            title: "Elektron davomat tizimi",
            description: "O'quvchilarni dars jarayonlariga qatnashishlarini doimiy belgilab borish hamda hisobotlarni shakllantirish"
        },
        {
            icon: faUserGraduate,
            title: "O'quvchilar bilimini baholash",
            description: "Fanlar bo'yicha rejali imtihonlar tashkillashtirish, imtihon natijalarini avtomatik hisoblash va tartiblash"
        },
        {
            icon: faCalendarDays,
            title: "Topshiriqlar (menejer) kalendari",
            description: "Rahbar yoki menejer tomonidan o'qituvchi va xodimlarga muddatli topshiriqlar berish va bajarilishini nazorat qilish"
        },
        {
            icon: faEnvelope,
            title: "SMS xabarnomalar",
            description: "O'quvchilarga oylik to'lovlar, qarzdorlik, imtihon natijalari, tug'ilgan kun va bayramlarda sms xabarnomalar yuborish"
        },
        {
            icon: faPaperPlane,
            title: "Telegram bot orqali muloqot",
            description: "Yangi tashkil etilgan o'quv kurslari, O'quvchilar davomati va boshqa yangiliklarni telegram bot orqali yuborish"
        }
    ]

  return (
    <main id="main" className="main">
    <div className="container">
        <div className="main-header" data-aos="fade-up" data-aos-anchor-placement="top-bottom">O’zgarishlarga tayyormisiz?</div>
        <div className="main-description" data-aos="fade-up" data-aos-anchor-placement="top-center">
            Eskicha boshqaruvdan voz kechish vaqti keldi. Endi siz emas kompyuterlar ishlaydi.
        </div>
        <div className="row g-3 g-lg-5">

            {
                data.map((item, key) => (
                    <div className="main-box col-lg-4 col-md-6 col-12" key={key} data-aos="fade-up" data-aos-duration="3000">
                        <FontAwesomeIcon icon={item.icon} className='main-box__icon' />
                        <div className="main-box_title"> { item.title } </div>
                        <div className="main-box_text"> { item.description } </div>
                    </div>
                ))
            }

        </div>
    </div>
</main>
  )
}

export default HeroSection