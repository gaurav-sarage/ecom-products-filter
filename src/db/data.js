import { AiFillStar } from "react-icons/ai";

const data = [
    {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jp",
        title: "Nike Air Monarch IV",
        star: <AiFillStar className="rating-star" />,
        reviews: "(10 reviews)",
        prevPrice: "$139.99",
        newPrice: "$199.99",
        company: "Nike",
        color: "White",
        category: "Sneakers"
    },
    {
        img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
        title: "Nike Air Vapormax Plus",
        star: <AiFillStar className="rating-star" />,
        reviews: "(30 reviews)",
        prevPrice: "$119.99",
        newPrice: "$149.99",
        company: "Nike",
        color: "Red",
        category: "Running"
    }
]

export default data;