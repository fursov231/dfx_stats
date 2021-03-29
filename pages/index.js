import Head from 'next/head';
import Layout from '../components/Layout';


import SmallCard from '../components/SmallCard'; // Small detail cards
import XWideCard from '../components/XWideCard'; // 3/3 display cards

import BeatLoader from "react-spinners/BeatLoader"; // Loading animation
import TransactionList from '../components/Transaction';

import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = url => fetch(url).then(r => r.json())

export default function DFX() {
  const { data: data_info } = useSWR('/api/dfx/info', fetcher);
  const { data: data_transaction } = useSWR('/api/dfx/transaction', fetcher)
  const { data: data_candles } = useSWR("/api/dfx/chart", fetcher);

  return (
    <div className="container">
      <Head>
        <title>Stats | DFX</title>
      </Head>
      <Layout>
        <div>
          <p className="data-retrieved"><span className="status-light"></span>Данные загружаются в реальном времени</p>
        </div>
        <div>
          <SmallCard name="Цена DFX токена" content={data_info ? "$" + data_info.current_price : <CustomLoader />} />
          <SmallCard name="Рыночная капитализация" content={data_info ? "$" + (data_info.market_cap).toLocaleString() : <CustomLoader />} />
          <SmallCard name="Суточный оборот" content={data_info ? "$" + parseInt(data_info.total_volume).toLocaleString() : <CustomLoader />}/>
        </div>
        <div>
          <XWideCard name="Последние 10 транзакций">
            {data_candles ? <TransactionList data={data_transaction} /> : <CustomLoader />}
          </XWideCard>
        </div>
      </Layout>
      <style global jsx>{`
      .centerize {
        width: 100%;
        height: 100%;
        text-align: center;
      }
      .centerize > div {
        transform: translateY(200px);
      }
      `}</style>

      <style jsx>{`
      .data-retrieved {
        display: inline-block;
        width: calc(100% - 55px);
        margin-block-end: 0px;
        background-color: #fff;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #e7eaf3;
        box-shadow: 0 0 35px rgba(127,150,174,.125);
        line-height: 40px;
      }
      .status-light {
        height: 8px;
        width: 8px;
        display: inline-block;
        border-radius: 50%;
        transform: scale(1);
        vertical-align: middle;
        margin-right: 5px;
        margin-top: -2px;
        background-color: rgb(0, 190, 0);
        box-shadow: 0 0 0 0 rgba(0, 190, 0, 1);
        animation: pulsegreen 2s infinite;
      }
      @media screen and (max-width: 600px) {
        .data-retrieved {
          width: calc(100% - 40px);
        }
      }
      @keyframes pulsegreen {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 190, 0, 0.7);
        }
      
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 5px rgba(0, 190, 0, 0);
        }
      
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 190, 0, 0);
        }
      }
      `}</style>

    </div>
  )
}

// Loading animation
function CustomLoader() {
  return <BeatLoader
    size={10}
    color={"#F01716"}
    loading={true}
  />
}