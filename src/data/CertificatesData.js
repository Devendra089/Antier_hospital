// CertificatesData.js
import imglogo from '../assets/imgs/logo.avif';
import marutiImage from '../assets/imgs/maruti.jpg';

const certificationsList = [
    {
        title: "Hospital poc",
        image: imglogo,
        instructor: "Book appointment poc",
        link: "/appointmentpage",
        platform: 'udemy'
    },
    {
        title: "Maruti poc",
        instructor: "Maruti poc form",
        image: marutiImage,
        link: "/service-insight-pro",
        platform: 'udemy'
    },
    {
        title: "Heading 1",
        instructor: "Lorem Ipsum 1",
        image: "",
        link: "#",
        platform: 'udemy'
    },
    {
        title: "Heading 2",
        instructor: "Lorem Ipsum 2",
        image: "",
        link: "#",
        platform: 'udemy'
    },
    {
        title: "Heading 3",
        instructor: "Lorem Ipsum 3",
        image: "",
        link: "#",
        platform: 'udemy'
    },
    {
        title: "Heading 4",
        instructor: "Lorem Ipsum 4",
        image: "",
        link: "#",
        platform: 'udemy'
    }
];

const CertificatesData = {
    certificationsList
};

export default CertificatesData;
