import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Layout from '../components/layout';
import { getSortedList } from '../library/data2';
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = getSortedList(); 
  return {
    props: { allData }
  };
}
// export our gome page component Home
export default function Home( {allData} ) {
  return(
    <Layout home>
      <h1>List of names</h1>
      <div className="list-group">
        {allData.map(
            ({id, name}) => (
              <Link key={id} href={`/familyguy/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}