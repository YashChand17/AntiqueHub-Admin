/*

import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>

        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className=" px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
*/

import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();

  // Mock data
  const ordersData = {
    Today: 10,
    Yesterday: 15,
    Monthly: 120,
  };
  const revenueData = {
    Today: 50000,
    Yesterday: 75000,
    Monthly: 600000,
  };
  const averageOrderPrice = 50;
  const mostPurchasedProduct = "Product A";
  const leastPurchasedProduct = "Product B";

  return (
    <Layout>
      <div className="text-blue-900">
        <div className="flex items-center mb-8">
          <img
            src={session?.user?.image}
            alt=""
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold">
              Welcome, {session?.user?.name}!
            </h2>
            <p className="text-lg text-gray-600">
              Here's your dashboard overview.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Orders</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {Object.entries(ordersData).map(([period, count]) => (
              <div key={period} className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-sm font-semibold mb-2 text-gray-700">
                  {period}
                </h4>
                <p className="text-3xl font-bold text-blue-900">{count}</p>
                <p className="text-gray-700">{`${count} orders received ${period.toLowerCase()}`}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {Object.entries(revenueData).map(([period, amount]) => (
              <div key={period} className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-sm font-semibold mb-2 text-gray-700">
                  {period}
                </h4>
                <p className="text-3xl font-bold text-blue-900">Rs.{amount}</p>
                <p className="text-gray-700">{`Rs.${amount} revenue generated ${period.toLowerCase()}`}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Order Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="text-sm font-semibold mb-2 text-gray-700">
                Average Order Price
              </h4>
              <p className="text-3xl font-bold text-blue-900">
                Rs.{averageOrderPrice}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="text-sm font-semibold mb-2 text-gray-700">
                Most Purchased Product
              </h4>
              <p className="text-3xl font-bold text-blue-900">
                {mostPurchasedProduct}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="text-sm font-semibold mb-2 text-gray-700">
                Least Purchased Product
              </h4>
              <p className="text-3xl font-bold text-blue-900">
                {leastPurchasedProduct}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
