import { Link } from "react-router-dom";

const socials = [
    {
        to: "https://github.com/omangm",
        name: "Github",
    },
    {
        to: "https://www.linkedin.com/in/omang-morekar",
        name: "Linkedin",
    },
    {
        to: "https://twitter.com",
        name: "Twitter",
    },
];

const Socials = () => {

    return (
        <div className="shadow-md p-4 bg-slate-50">
            <h3 className="font-serif font-bold italic text-3xl pb-2">Socials</h3>
            {
                socials.map(s => (
                    <div className="py-1" key={s.to}>
                        <Link target="_blank" to={s.to} className="text-blue-700 hover:underline transition-all hover:text-blue-800">{s.name}</Link>
                    </div>
                ))
            }
        </div>
    )
};


export default Socials;