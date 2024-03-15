import { type NextPage } from "next";
import Head from "next/head";
import React from "react";
import Navbar from "~/components/navbar/Navbar";
import MobileBottomBar from "~/components/mobileBottomBar/MobileBottomBar";
import { useRouter } from "next/router"

const Search: NextPage = () => {
	const router = useRouter()
	const searchQuery = router.query?.q

    	function handleSearchInputOnChange({currentTarget}: React.ChangeEvent<HTMLInputElement>) {
		console.log(router.query?.["q"])
		router.query.q = "cunt"
		return router.replace({
			query: {...router.query, q: currentTarget.value}
		})
	}

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-[70px] flex min-h-[calc(100vh-70px)] flex-col items-center justify-start overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col w-[60%] mt-5 space-y-4">
          <input className="placeholder:text-black text-black px-3 py-2 outline-none" onChange={void handleSearchInputOnChange} />
	  <span className="text-xl">Search for: &quot;{searchQuery}&quot;</span>
        </div>
        <MobileBottomBar />
      </main>
    </>
  );
};

export default Search;
