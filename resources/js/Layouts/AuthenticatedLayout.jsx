import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href={route("about")}
                                    active={route().current("about")}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    href={route("blog")}
                                    active={route().current("blog")}
                                >
                                    Blog
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                {children}
                <section class="py-10 bg-white sm:pt-16 lg:pt-24">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
                            <div class="col-span-2 md:col-span-4 xl:pr-8">
                                <div className="flex flex-row gap-4 items-center">
                                    <img
                                        class="w-24 h-24"
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84c9e6d2-5125-494f-8606-878bf5d4e69f/dfk1u3b-4be17893-a985-4809-ba18-6cfcaad976c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0YzllNmQyLTUxMjUtNDk0Zi04NjA2LTg3OGJmNWQ0ZTY5ZlwvZGZrMXUzYi00YmUxNzg5My1hOTg1LTQ4MDktYmExOC02Y2ZjYWFkOTc2YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EVAeHXRiRBWcdR9KSOx88DkPAO-pLRjIaeU7LFbUBuQ"
                                        alt=""
                                    />

                                    <span>Portofolio</span>
                                </div>
                                <p class="text-base leading-relaxed text-gray-600 mt-7">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                </p>
                                <a
                                    href={route("about")}
                                    title=""
                                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                                    role="button"
                                >
                                    {" "}
                                    Start Live Chat{" "}
                                </a>
                            </div>

                            <div class="lg:col-span-2">
                                <p class="text-base font-semibold text-gray-900">
                                    Company
                                </p>

                                <ul class="mt-6 space-y-5">
                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            About{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Features{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Works{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Career{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="lg:col-span-2">
                                <p class="text-base font-semibold text-gray-900">
                                    Help
                                </p>

                                <ul class="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Customer Support{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Delivery Details{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Terms & Conditions{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Privacy Policy{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="lg:col-span-2">
                                <p class="text-base font-semibold text-gray-900">
                                    Resources
                                </p>

                                <ul class="mt-6 space-y-5">
                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Free eBooks{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Development Tutorial{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            How to - Blog{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            YouTube Playlist{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="lg:col-span-2">
                                <p class="text-base font-semibold text-gray-900">
                                    Extra Links
                                </p>

                                <ul class="mt-6 space-y-5">
                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Customer Support{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Delivery Details{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Terms & Conditions{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            title=""
                                            class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                        >
                                            {" "}
                                            Privacy Policy{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr class="mt-16 mb-10 border-gray-200" />

                        <div class="sm:flex sm:items-center sm:justify-between">
                            <p class="text-sm text-gray-600">
                                © Copyright 2021, All Rights Reserved by
                                Gymnastiar Alma Ghifari
                            </p>

                            <ul class="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                                    >
                                        <svg
                                            class="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                                    >
                                        <svg
                                            class="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                                    >
                                        <svg
                                            class="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                            <circle
                                                cx="16.806"
                                                cy="7.207"
                                                r="1.078"
                                            ></circle>
                                            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                                    >
                                        <svg
                                            class="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
