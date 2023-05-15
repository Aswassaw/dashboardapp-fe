import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import dataPenggunaBaru from "../data/pengguna.json";
import dataJumlahTransaksi from "../data/jumlahTransaksi.json";
import dataPelangganPerDaerah from "../data/pelanggan.json";

export default function Charts() {
  const [tabActive, setTabActive] = useState(1);

  const optionsPenggunaBaru = {
    chart: {
      type: "column",
    },
    title: {
      text: "Grafik Jumlah Pengguna Baru Dalam Setiap Bulan",
    },
    xAxis: {
      categories: dataPenggunaBaru.data.map(
        (penggunaBaru) => penggunaBaru.bulan
      ),
    },
    yAxis: {
      title: {
        text: "Jumlah",
      },
    },
    series: [
      {
        name: "Pengguna Baru",
        data: dataPenggunaBaru.data.map((penggunaBaru) => penggunaBaru.jumlah),
      },
    ],
  };

  const optionsJumlahTransaksi = {
    chart: {
      type: "column",
    },
    title: {
      text: "Grafik Jumlah Transaksi Dalam Setiap Bulan",
    },
    xAxis: {
      categories: dataJumlahTransaksi.data.map(
        (penggunaBaru) => penggunaBaru.bulan
      ),
    },
    yAxis: {
      title: {
        text: "Jumlah",
      },
    },
    series: [
      {
        name: "Pengguna Baru",
        data: dataJumlahTransaksi.data.map(
          (penggunaBaru) => penggunaBaru.jumlah
        ),
      },
    ],
  };

  const optionsPenggunaPerWilayah = {
    chart: {
      type: "column",
    },
    title: {
      text: "Grafik Jumlah Pelanggan Dalam Setiap Wilayah",
    },
    xAxis: {
      categories: dataPelangganPerDaerah.data.map(
        (penggunaBaru) => penggunaBaru.provinsi
      ),
    },
    yAxis: {
      title: {
        text: "Jumlah",
      },
    },
    series: [
      {
        name: "Pengguna Baru",
        data: dataPelangganPerDaerah.data.map(
          (penggunaBaru) => penggunaBaru.jumlah
        ),
      },
    ],
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item pointer" onClick={() => setTabActive(1)}>
          <p className={`nav-link ${tabActive === 1 && "active"}`}>
            Pengguna Baru
          </p>
        </li>
        <li className="nav-item pointer" onClick={() => setTabActive(2)}>
          <p className={`nav-link ${tabActive === 2 && "active"}`}>
            Jumlah Transaksi
          </p>
        </li>
        <li className="nav-item pointer" onClick={() => setTabActive(3)}>
          <p className={`nav-link ${tabActive === 3 && "active"}`}>
            Pelanggan Setiap Wilayah
          </p>
        </li>
      </ul>

      {tabActive === 1 && (
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsPenggunaBaru}
        />
      )}
      {tabActive === 2 && (
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsJumlahTransaksi}
        />
      )}
      {tabActive === 3 && (
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsPenggunaPerWilayah}
        />
      )}
    </div>
  );
}
