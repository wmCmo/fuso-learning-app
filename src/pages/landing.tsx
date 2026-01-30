import LPGraph from "@/components/lp-graph";
import { Link } from "react-router-dom";

const LPSection = ({ swap, h1Pre, h1Suf, h2, p, highlight, imgSrc, imgAlt }: { swap: boolean, h1Pre: string, h1Suf: string, h2: string, p: string, highlight: string, imgSrc: string, imgAlt: string; }) => {
    return (
        <section className={`flex ${swap ? "flex-row-reverse" : ""} justify-between`}>
            <div id="here" className="space-y-2 my-auto w-fit min-w-0">
                <h1 className="text-5xl font-bold">{h1Pre}<span className="text-megaman">{highlight}</span>{h1Suf}</h1>
                <h2 className="text-3xl font-bold text-foreground/50">{h2}</h2>
                <p className="text-foreground/50 max-w-lg">{p}</p>
            </div>
            <img src={imgSrc} alt={imgAlt} className="h-60 transition-transform duration-200 ease-in-out" />
        </section>
    );
};

const LPNumbers = ({ imgSrc, imgAlt, h2, h3 }: { imgSrc: string, imgAlt: string, h2: string, h3: string; }) => {
    return (
        <div className="space-y-1">
            <div className="flex justify-center items-center font-bold gap-2"><img src={imgSrc} alt={imgAlt} className="h-10" /><h2 className="text-5xl">{h2}</h2></div>
            <h3 className="text-center text-xl">{h3}</h3>
        </div>
    );
};

const LPTestimonials = ({ imgSrc, imgAlt, message, name }: { imgSrc: string, imgAlt: string, message: string, name: string; }) => {
    return (
        <div className="space-y-4">
            <img src={imgSrc} alt={imgAlt} className="rounded-full h-60 mx-auto" />
            <div className="space-y-2 text-center max-w-sm">
                <p className="italic">"{message}"</p>
                <p className="font-bold">-{name}</p>
            </div>
        </div>
    );
};

export const CoolButton = ({ to, txt }: { to: string, txt: string; }) => {
    return (
        <Link to={to} className="inline-flex w-fit text-white bg-foreground px-4 py-2 rounded-sm drop-shadow-foreground shadow-xl hover:-translate-y-1 transition-transform duration-200 ease-in-out font-bold">{txt}</Link>
    );
};

const Landing = () => {
    return (
        <>
            <main className="flex justify-between items-center h-1/5">
                <div className="space-y-8">
                    <div className="text-7xl space-y-6 italic">
                        <h1>One team</h1>
                        <h1>One platform</h1>
                        <h1 className="font-black"><span className="text-megaman">One</span> Finance</h1>
                    </div>
                    <div className="flex items-center font-bold gap-6">
                        <CoolButton to="/signin" txt="Start Now" />
                        <p className="ml-3 text-foreground/50">Start your journey here</p>
                    </div>
                </div>
                <img src="/hero.svg" alt="Hero Image: People collaborating" width={600} />
            </main>
            <div className="space-y-16">
                <LPSection
                    swap={false}
                    h1Pre="Over "
                    highlight="60"
                    h1Suf=" Experts"
                    h2="Gathered from 3 different systems"
                    p="They are experts in different fields. Together, you can strengthen your skills and learn something new"
                    imgSrc="/experts-art.svg"
                    imgAlt="Picture of cards with business people"
                />
                <LPSection
                    swap={true}
                    h1Pre="More than"
                    highlight=" 200 "
                    h1Suf="courses"
                    h2="Curated from one of the best learning platforms"
                    p="Explore courses that fit your interests and matches with your goals. Ranging from beginner to intermediate."
                    imgSrc="/desk-art.svg"
                    imgAlt="A person having a video call on their productive desk"
                />
            </div>
            <LPGraph />
            <section className="flex items-center justify-around mt-32">
                <img src="/laurel.svg" alt="Laurel art" className="h-40" />
                <div className="flex justify-center items-center gap-16">
                    <LPNumbers
                        imgSrc="https://raw.githubusercontent.com/microsoft/fluentui-emoji/refs/heads/main/assets/Handshake/Color/handshake_color.svg"
                        imgAlt="Fluent emoji: Handshake"
                        h2="300"
                        h3="Active Users"
                    />
                    <LPNumbers
                        imgSrc="https://raw.githubusercontent.com/microsoft/fluentui-emoji/refs/heads/main/assets/Star/Color/star_color.svg"
                        imgAlt="Fluent emoji: Star"
                        h2="4.5/5"
                        h3="Average Review"
                    />
                    <LPNumbers
                        imgSrc="https://raw.githubusercontent.com/microsoft/fluentui-emoji/refs/heads/main/assets/Hourglass%20not%20done/Color/hourglass_not_done_color.svg"
                        imgAlt="Fluent emoji: Hourglass (not done)"
                        h2="200"
                        h3="HRs of Lessons"
                    />
                </div>
                <img src="/laurel.svg" alt="Laurel art" className="h-40 scale-x-[-1]" />
            </section>
            <section className="flex gap-8 mt-24">
                <LPTestimonials
                    imgSrc="https://api.dicebear.com/7.x/notionists/svg?seed=Zach"
                    imgAlt="Place holder avatar"
                    message="This is the place that helps me grow and become more productive"
                    name="Zachariah"
                />
                <LPTestimonials
                    imgSrc="https://api.dicebear.com/7.x/notionists/svg?seed=Vijay"
                    imgAlt="Place holder avatar"
                    message="This is the place that helps me grow and become more productive"
                    name="Zachariah"
                />
                <LPTestimonials
                    imgSrc="https://api.dicebear.com/7.x/notionists/svg?seed=Ikeda-san"
                    imgAlt="Place holder avatar"
                    message="This is the place that helps me grow and become more productive"
                    name="Zachariah"
                />
            </section>
            <section className="flex justify-around items-center mt-32 ">
                <div className="space-y-8">
                    <h1 className="text-5xl font-bold"><span className="text-megaman">Join Now.</span> For Free.</h1>
                    <CoolButton to="/signin" txt="Register" />
                </div>
                <img src="/one-finance-logo.svg" alt="One Finance SVG Logo" className="" />
            </section>
        </>
    );
};

export default Landing;
