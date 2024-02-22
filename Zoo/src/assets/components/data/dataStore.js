import { makeObservable, observable, action } from 'mobx'

const appointments= [

    {
        service: "פינת ליטוף",
        date: "01/03/2024",
        name: "miri",
        email: "miri@gmail.com",
        countChild: "8",
        countAdult: "5",
    },

    {
        service: "רכיבה על סוסים",
        date: "21/02/2024",
        name: "dana",
        email: "dana@gmail.com",
        countChild: "3",
        countAdult: "1",
    },
    {
        service: "תרפיה בחיות",
        date: "19/02/2024",
        name: "riki",
        email: "riki@gmail.com",
        countChild: "9",
        countAdult: "2",
    }
];
const services = [
    {
        name: "אקווריום ישראל",
        descripition: "לכל הגילאים",
        adult: "90",
        child:"20",
        img: "https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/Animal_DSC_2255-Edit.jpg"

    }, {
        name: "כניסה לפארק",
        descripition: "לכל הגילאים",
        adult: "100",
        child:"50",
        img:"https://www.izikbi.com/files/catalog/item/thumb/611124_IBI_0490copy.jpg" 
    },
    {
        name: "רכיבה על סוסים ",
        descripition: "לחובבי הרפתקאות",
        adult: "60",
        child:"60",
        img: "https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/A0016263%20-%201.jpg"

    },
    {
        name: "תרפיה בחיות",
        descripition: "ילדים וילדות בליווי מבוגר",
        adult: "5",
        child:"42",
        img: "https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/P-110x90-3.jpg"

    },
   
    {

        name: "פינת ליטוף",
        descripition: "לעלדים שאוהבים חיות",
        adult: "0",
        child:"7",
        img: "https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/H-110x90-9.jpg"


    },

    {
        name: "האכלת חיות",
        descripition: "לכל גיל מותנה בכניסה לפארק",
        adult: "5",
        child:"5",
        img: "https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/A0016160.jpg"


    },
    {
        name: "נסיעה ברכבת חוויתית ",
        descripition: "אטרקציה חוויתית במיוחד",
        adult: "10",
        child:"10",
        img: "https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/Animal_IBI_0605.jpg"


    },
    {
        name: "רכבל בפארק",
        descripition: "מה שרואים משם זה משהו אחר",
        adult: "40",
        child:"40",
        img:"https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/pano_north-9.jpg"


    },
  
 
    
];
//npm i mobx
class DataStore {

    isLogin = false;
    services =[]
    appointments =[]
    businessDatas =
        {
            img: "https://www.izikbi.com/files/catalog/item/thumbsrc/c5012/pano_north-10.jpg",
            logo: "https://assets-global.website-files.com/5e26b63b5f16d0655843b3f5/657df1d58331325e7002e998_footer_logo_w_zoo_en.png",
            businessName: "גן החיות התנכי ירושלים",
            address: "אהרון שולוב 1 ירושלים",
            phone: "02-6750111",
            details: "שעות פתיחה א-ה בין השעות 9-16:30"

        };

    constructor() {
        makeObservable(this,
            {
                // --------------Login-----------------
                isLogin: observable,
                setIsLogin: action,
                // --------------services-----------------
                services: observable,
                setServices: action,
                addNewService: action,
                //--------------apointment----------------
                appointments: observable,
                setAppointment: action,
                addNewAppointment: action,
                //--------------BusinessData---------------
                businessDatas: observable,
                setBusinessData: action,
                addBusinessData: action,
            })
    }
    setIsLogin(status) {
        this.isLogin = status
    }
    setServices = (data) => {
        
            this.services = [...services, ...data];
        
    }
    addNewService = (service) => {
        this.services = [...this.services, service];
    }
    setAppointment = (data) => {
        
            this.appointments = [...appointments, ...data];
        
    }
    addNewAppointment = (appointment) => {
        this.appointments = [...this.appointments, appointment];
    }

   
    setBusinessData = (data) => {
    
        if (Object.entries(data).length) {

            this.businessDatas = data;

        }
    }
    addBusinessData = (businessData) => {

        this.businessDatas = businessData;
    }
}
export default new DataStore();

