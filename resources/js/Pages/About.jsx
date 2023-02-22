import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function About(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    About
                </h2>
            }
        >
            <Head title="About" />

            <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Hey 👋 I am{" "}
                                <span className="flex">
                                    Gymanstiar Alma Ghifari
                                </span>
                            </h2>
                            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                {/* im is  software  */}I am a software engineer
                                who loves to build products that help people. I
                                am currently working at{" "}
                                <a
                                    href="#"
                                    title=""
                                    class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                                >
                                    GOBLOks
                                </a>
                            </p>

                            <p class="mt-4 text-xl text-gray-600 md:mt-8">
                                <span class="relative inline-block">
                                    <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                    <span class="relative">
                                        {" "}
                                        Have a question ?{" "}
                                    </span>
                                </span>
                                <br class="block sm:hidden" />
                                Ask me on{" "}
                                <a
                                    href="#"
                                    title=""
                                    class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                                >
                                    Instagram
                                </a>
                            </p>
                        </div>

                        <div class="relative">
                            <img
                                class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                                alt=""
                            />

                            <img
                                class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84c9e6d2-5125-494f-8606-878bf5d4e69f/dfk1u3b-4be17893-a985-4809-ba18-6cfcaad976c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0YzllNmQyLTUxMjUtNDk0Zi04NjA2LTg3OGJmNWQ0ZTY5ZlwvZGZrMXUzYi00YmUxNzg5My1hOTg1LTQ4MDktYmExOC02Y2ZjYWFkOTc2YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EVAeHXRiRBWcdR9KSOx88DkPAO-pLRjIaeU7LFbUBuQ"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
