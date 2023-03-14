import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({ auth, errors }) => {
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />
            <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 ">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Hey 👋 I am{" "}
                                <span classNameName="flex">
                                    {auth.user.name}
                                </span>
                            </h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                I'm a developer who's passionate about both
                                front-end and back-end development, with a knack
                                for API management. I aspire to be a full-stack
                                developer who is proficient in the latest
                                technologies and tools. While still a student,
                                I'm committed to continuous learning and honing
                                my skills in application development. I'm
                                excited to contribute and learn more in the
                                technology industry.
                            </p>

                            <p className="mt-4 text-xl text-gray-600 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                    <span className="relative">
                                        {" "}
                                        Have a question ?{" "}
                                    </span>
                                </span>
                                <br className="block sm:hidden" />
                                Ask me on{" "}
                                <a
                                    href="#"
                                    title=""
                                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                                >
                                    Instagram
                                </a>
                            </p>
                        </div>

                        <div className="relative ">
                            <img
                                className="absolute inset-x-0 bottom-0 -mb-36 -translate-x-1/2 left-1/2"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                                alt=""
                            />

                            <img
                                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                src="https://res.cloudinary.com/rhizomaspices/image/upload/v1677065800/coffe/agim_hynalb.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};
export default Index;
