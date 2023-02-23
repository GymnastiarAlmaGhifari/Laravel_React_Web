import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 ">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Hey 👋 I am{" "}
                                <span classNameName="flex">
                                    Gymanstiar Alma Ghifari
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

            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div className="relative mb-12">
                            <img
                                className="w-full rounded-md"
                                src="https://storage.googleapis.com/ekrutassets/blogs/images/000/001/542/original/software-engineer-EKRUT.jpg"
                                alt=""
                            />

                            <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                                <div className="overflow-hidden bg-white rounded">
                                    <div className="px-10 py-6">
                                        <div className="flex items-center">
                                            <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                                                100%
                                            </p>
                                            <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                                                Love develeopment
                                                <br />
                                                and design
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                <svg
                                    className="w-8 h-8 text-orange-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                                My Learning Journey
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                My journey as a developer began when I graduated
                                high school and continued through my studies at
                                the State Polytechnic of Jember......
                            </p>
                            <a
                                href={route("about")}
                                title=""
                                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                                role="button"
                            >
                                {" "}
                                Explore more{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                All My Blog
                            </h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                                {/* just telling about my blog */}i have a blog
                                where i write about my product development, my
                                life style,
                                <br />
                                and my journey as a developer.
                                <br />
                                this just a small part of my blog
                            </p>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <button
                                type="button"
                                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-5">
                                <div className="relative">
                                    <a
                                        href="#"
                                        title=""
                                        className="block aspect-w-4 aspect-h-3"
                                    >
                                        <img
                                            className="object-cover w-full h-full"
                                            src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
                                            alt=""
                                        />
                                    </a>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                                            {" "}
                                            Lifestyle{" "}
                                        </span>
                                    </div>
                                </div>
                                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                    {" "}
                                    March 21, 2020{" "}
                                </span>
                                <p className="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" className="text-black">
                                        {" "}
                                        How to build coffee inside your home in
                                        5 minutes.{" "}
                                    </a>
                                </p>
                                <p className="mt-4 text-base text-gray-600">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                </p>
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                                >
                                    Continue Reading
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-5">
                                <div className="relative">
                                    <a
                                        href="#"
                                        title=""
                                        className="block aspect-w-4 aspect-h-3"
                                    >
                                        <img
                                            className="object-cover w-full h-full"
                                            src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
                                            alt=""
                                        />
                                    </a>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                                            {" "}
                                            Product{" "}
                                        </span>
                                    </div>
                                </div>
                                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                    {" "}
                                    April 04, 2020{" "}
                                </span>
                                <p className="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" className="text-black">
                                        {" "}
                                        Ho7 Tips to run your remote team faster
                                        and better.{" "}
                                    </a>
                                </p>
                                <p className="mt-4 text-base text-gray-600">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                </p>
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                                >
                                    Continue Reading
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-5">
                                <div className="relative">
                                    <a
                                        href="#"
                                        title=""
                                        className="block aspect-w-4 aspect-h-3"
                                    >
                                        <img
                                            className="object-cover w-full h-full"
                                            src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                                            alt=""
                                        />
                                    </a>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                                            {" "}
                                            Learning{" "}
                                        </span>
                                    </div>
                                </div>
                                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                    {" "}
                                    May 12, 2020{" "}
                                </span>
                                <p className="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" className="text-black">
                                        {" "}
                                        5 Productivity tips to write faster at
                                        morning.{" "}
                                    </a>
                                </p>
                                <p className="mt-4 text-base text-gray-600">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                </p>
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                                >
                                    Continue Reading
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                        <button
                            type="button"
                            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Programming language learned
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            {/* i have laearned  */}i have learned many
                            programming languages in my college life and i have
                            also learned some of them in my free time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 w-16 mr-4 h-auto"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
                                        alt=""
                                    />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-black">
                                            PHP
                                        </p>
                                        <p className="mt-px text-sm text-gray-600">
                                            Direct Integration
                                        </p>
                                    </div>
                                    <svg
                                        className="hidden w-5 h-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 mt-7">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipis cing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 w-20 h-auto"
                                        src="https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png"
                                        alt=""
                                    />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-black">
                                            Javascript
                                        </p>
                                        <p className="mt-px text-sm text-gray-600">
                                            Direct Integration
                                        </p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 mt-7">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipis cing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 w-20 h-auto"
                                        src="https://assets-a1.kompasiana.com/items/album/2015/10/20/java-562625ff63afbd671e342041.jpg"
                                        alt=""
                                    />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-black">
                                            Java
                                        </p>
                                        <p className="mt-px text-sm text-gray-600">
                                            Direct Integration
                                        </p>
                                    </div>
                                    <svg
                                        className="hidden w-5 h-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 mt-7">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipis cing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 w-12 mr-8 h-auto"
                                        src="https://trpc.io/img/logo.svg"
                                        alt=""
                                    />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-black">
                                            tRPC
                                        </p>
                                        <p className="mt-px text-sm text-gray-600">
                                            Direct Integration
                                        </p>
                                    </div>
                                    <svg
                                        className="hidden w-5 h-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 mt-7">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipis cing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 w-12 mr-4 h-auto"
                                        src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
                                        alt=""
                                    />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-black">
                                            Next
                                        </p>
                                        <p className="mt-px text-sm text-gray-600">
                                            Direct Integration
                                        </p>
                                    </div>
                                    <svg
                                        className="hidden w-5 h-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 mt-7">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipis cing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 w-12 h-auto"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                                        alt=""
                                    />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-black">
                                            Laravel
                                        </p>
                                        <p className="mt-px text-sm text-gray-600">
                                            Direct Integration
                                        </p>
                                    </div>
                                    <svg
                                        className="hidden w-5 h-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 mt-7">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipis cing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            title=""
                            className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                        >
                            {" "}
                            Check all 1,593 applications{" "}
                        </a>
                    </div>
                </div>
            </section>

        </AuthenticatedLayout>
    );
}
