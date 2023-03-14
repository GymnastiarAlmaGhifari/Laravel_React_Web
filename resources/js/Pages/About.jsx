import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function About(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="About" />
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                            I am building a product that can
                            <span class="relative inline-block">
                                <span class="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                                <span class="relative">
                                    {" "}
                                    solve developer’s pain{" "}
                                </span>
                            </span>
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                        <div>
                            <img
                                class="w-full mx-auto sm:max-w-xs"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg"
                                alt=""
                            />
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">
                                Hey! I am Gymnastiar Alma Ghifari, Software
                                Enginer.
                            </h3>
                            <p class="mt-4 text-lg text-gray-700">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                            <p class="mt-4 text-lg text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>

                            <h3 class="mt-8 text-lg font-semibold text-gray-900">
                                How do I do this without any investment?
                            </h3>
                            <p class="mt-4 text-lg text-gray-700">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
