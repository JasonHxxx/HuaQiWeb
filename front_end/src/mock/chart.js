import Mock from "mockjs";
const data = Mock.mock({
  chart_data: [
    ["2021/10/24", 2320.26, 2320.26, 2287.3, 2362.94],
    ["2021/10/25", 2300, 2291.3, 2288.26, 2308.38],
    ["2021/10/28", 2295.35, 2346.5, 2295.35, 2346.92],
    ["2021/10/29", 2347.22, 2358.98, 2337.35, 2363.8],
    ["2021/10/30", 2360.75, 2382.48, 2347.89, 2383.76],
    ["2021/10/31", 2383.43, 2385.42, 2371.23, 2391.82],
    ["2021/11/2", 2170.78, 2174.12, 2161.14, 2179.65],
    ["2021/11/3", 2179.05, 2205.5, 2179.05, 2222.81],
    ["2021/11/6", 2212.5, 2231.17, 2212.5, 2236.07],
    ["2021/11/7", 2227.86, 2235.57, 2219.44, 2240.26],
    ["2021/11/8", 2242.39, 2246.3, 2235.42, 2255.21],
    ["2021/11/9", 2246.96, 2232.97, 2221.38, 2247.86],
    ["2021/11/10", 2228.82, 2246.83, 2225.81, 2247.67],
    ["2021/11/13", 2247.68, 2241.92, 2231.36, 2250.85],
    ["2021/11/14", 2238.9, 2217.01, 2205.87, 2239.93],
    ["2021/11/15", 2217.09, 2224.8, 2213.58, 2225.19],
    ["2021/11/16", 2221.34, 2251.81, 2210.77, 2252.87],
    ["2021/11/17", 2249.81, 2282.87, 2248.41, 2288.09],
    ["2021/11/20", 2286.33, 2299.99, 2281.9, 2309.39],
    ["2021/11/21", 2297.11, 2305.11, 2290.12, 2305.3],
    ["2021/11/22", 2303.75, 2302.4, 2292.43, 2314.18],
    ["2021/11/23", 2293.81, 2275.67, 2274.1, 2304.95],
    ["2021/11/24", 2281.45, 2288.53, 2270.25, 2292.59],
    ["2021/11/27", 2286.66, 2293.08, 2283.94, 2301.7],
    ["2021/11/28", 2293.4, 2321.32, 2281.47, 2322.1],
    ["2021/11/29", 2323.54, 2324.02, 2321.17, 2334.33],
    ["2021/11/30", 2316.25, 2317.75, 2310.49, 2325.72],
    ["2021/11/31", 2320.74, 2300.59, 2299.37, 2325.53],
    ["2021/12/1", 2364.54, 2359.51, 2330.86, 2369.65],
    ["2021/12/4", 2332.08, 2273.4, 2259.25, 2333.54],
    ["2021/12/5", 2274.81, 2326.31, 2270.1, 2328.14],
    ["2021/12/6", 2333.61, 2347.18, 2321.6, 2351.44],
    ["2021/12/7", 2340.44, 2324.29, 2304.27, 2352.02],
    ["2021/12/8", 2326.42, 2318.61, 2314.59, 2333.67],
    ["2021/12/11", 2314.68, 2310.59, 2296.58, 2320.96],
    ["2021/12/12", 2309.16, 2286.6, 2264.83, 2333.29],
    ["2021/12/13", 2282.17, 2263.97, 2253.25, 2286.33],
    ["2021/12/14", 2255.77, 2270.28, 2253.31, 2276.22],
    ["2021/12/15", 2269.31, 2278.4, 2250, 2312.08],
    ["2021/12/18", 2267.29, 2240.02, 2239.21, 2276.05],
    ["2021/12/19", 2244.26, 2257.43, 2232.02, 2261.31],
    ["2021/12/20", 2257.74, 2317.37, 2257.42, 2317.86],
    ["2021/12/21", 2318.21, 2324.24, 2311.6, 2330.81],
    ["2021/12/22", 2321.4, 2328.28, 2314.97, 2332],
    ["2021/12/25", 2334.74, 2326.72, 2319.91, 2344.89],
    ["2021/12/26", 2318.58, 2297.67, 2281.12, 2319.99],
    ["2021/12/27", 2299.38, 2301.26, 2289, 2323.48],
    ["2021/12/28", 2273.55, 2236.3, 2232.91, 2273.55],
    ["2021/12/29", 2238.49, 2236.62, 2228.81, 2246.87],
    ["2022/1/1", 2229.46, 2234.4, 2227.31, 2243.95],
    ["2022/1/2", 2234.9, 2227.74, 2220.44, 2253.42],
    ["2022/1/3", 2232.69, 2225.29, 2217.25, 2241.34],
    ["2022/1/8", 2196.24, 2211.59, 2180.67, 2212.59],
    ["2022/1/9", 2215.47, 2225.77, 2215.47, 2234.73],
    ["2022/1/10", 2224.93, 2226.13, 2212.56, 2233.04],
    ["2022/1/11", 2236.98, 2219.55, 2217.26, 2242.48],
    ["2022/1/12", 2218.09, 2206.78, 2204.44, 2226.26],
    ["2022/1/15", 2199.91, 2181.94, 2177.39, 2204.99],
    ["2022/1/16", 2169.63, 2194.85, 2165.78, 2196.43],
    ["2022/1/17", 2195.03, 2193.8, 2178.47, 2197.51],
    ["2022/1/18", 2181.82, 2197.6, 2175.44, 2206.03],
    ["2022/1/19", 2201.12, 2244.64, 2200.58, 2250.11],
    ["2022/1/22", 2236.4, 2242.17, 2232.26, 2245.12],
    ["2022/1/23", 2242.62, 2184.54, 2182.81, 2242.62],
    ["2022/1/24", 2187.35, 2218.32, 2184.11, 2226.12],
    ["2022/1/25", 2213.19, 2199.31, 2191.85, 2224.63],
    ["2022/1/26", 2203.89, 2177.91, 2173.86, 2210.58],
    ["2022/2/1", 2377.41, 2419.02, 2369.57, 2421.15],
    ["2022/2/4", 2425.92, 2428.15, 2417.58, 2440.38],
    ["2022/2/5", 2411, 2433.13, 2403.3, 2437.42],
    ["2022/2/6", 2432.68, 2434.48, 2427.7, 2441.73],
    ["2022/2/7", 2430.69, 2418.53, 2394.22, 2433.89],
    ["2022/2/8", 2416.62, 2432.4, 2414.4, 2443.03],
    ["2022/2/18", 2441.91, 2421.56, 2415.43, 2444.8],
    ["2022/2/19", 2420.26, 2382.91, 2373.53, 2427.07],
    ["2022/2/20", 2383.49, 2397.18, 2370.61, 2397.94],
    ["2022/2/21", 2378.82, 2325.95, 2309.17, 2378.82],
    ["2022/2/22", 2322.94, 2314.16, 2308.76, 2330.88],
    ["2022/2/25", 2320.62, 2325.82, 2315.01, 2338.78],
    ["2022/2/26", 2313.74, 2293.34, 2289.89, 2340.71],
    ["2022/2/27", 2297.77, 2313.22, 2292.03, 2324.63],
    ["2022/2/28", 2322.32, 2365.59, 2308.92, 2366.16],
    ["2022/3/3", 2300.21, 2299.25, 2294.11, 2313.43],
    ["2022/3/4", 2297.1, 2272.42, 2264.76, 2297.1],
    ["2022/3/5", 2270.71, 2270.93, 2260.87, 2276.86],
    ["2022/3/6", 2264.43, 2242.11, 2240.07, 2266.69],
    ["2022/3/7", 2242.26, 2210.9, 2205.07, 2250.63],
    ["2022/3/13", 2190.1, 2148.35, 2126.22, 2190.1]
  ],
  chart_data2: [
    ["2021/10/24", 2320.26, 2320.26, 2287.3, 2362.94],
    ["2021/10/25", 2300, 2291.3, 2288.26, 2308.38],
    ["2021/10/28", 2295.35, 2346.5, 2295.35, 2346.92],
    ["2021/11/1", 2377.41, 2419.02, 2369.57, 2421.15],
    ["2021/11/4", 2425.92, 2428.15, 2417.58, 2440.38],
    ["2021/11/5", 2411, 2433.13, 2403.3, 2437.42],
    ["2021/11/6", 2432.68, 2434.48, 2427.7, 2441.73],
    ["2021/11/7", 2430.69, 2418.53, 2394.22, 2433.89],
    ["2021/11/8", 2416.62, 2432.4, 2414.4, 2443.03],
    ["2021/11/18", 2441.91, 2421.56, 2415.43, 2444.8],
    ["2021/11/19", 2420.26, 2382.91, 2373.53, 2427.07],
    ["2021/11/20", 2383.49, 2397.18, 2370.61, 2397.94],
    ["2021/11/21", 2378.82, 2325.95, 2309.17, 2378.82],
    ["2021/11/22", 2322.94, 2314.16, 2308.76, 2230.88],
    ["2021/11/25", 2320.62, 2325.82, 2315.01, 2338.78],
    ["2021/11/26", 2313.74, 2293.34, 2289.89, 2340.71],
    ["2021/11/27", 2297.77, 2353.22, 2212.03, 2224.63],
    ["2021/11/28", 2322.32, 2365.59, 2308.92, 2366.16],
    ["2021/12/7", 2340.44, 2324.29, 2304.27, 2352.02],
    ["2021/12/8", 2326.42, 2318.61, 2314.59, 2333.67],
    ["2021/12/11", 2314.68, 2310.59, 2296.58, 2320.96],
    ["2021/12/12", 2309.16, 2216.6, 2264.83, 2333.29],
    ["2021/12/13", 2282.17, 2263.97, 2253.25, 2286.33],
    ["2021/12/14", 2255.77, 2270.28, 2253.31, 2276.22],
    ["2021/12/15", 2269.31, 2238.4, 2150, 2312.08],
    ["2021/12/18", 2267.29, 2240.02, 2239.21, 2276.05],
    ["2021/12/19", 2244.26, 2257.43, 2232.02, 2261.31],
    ["2021/12/20", 2257.74, 2317.37, 2257.42, 2317.86],
    ["2021/12/21", 2318.21, 2324.24, 2311.6, 2330.81],
    ["2022/1/1", 2229.46, 2234.4, 2127.31, 2243.95],
    ["2022/1/2", 2234.9, 2227.74, 2220.44, 2253.42],
    ["2022/1/3", 2232.69, 2225.29, 2217.25, 2241.34],
    ["2022/1/8", 2196.24, 2211.59, 2180.67, 2212.59],
    ["2022/1/9", 2215.47, 2235.77, 2115.47, 2234.73],
    ["2022/1/10", 2224.93, 2226.13, 2212.56, 2233.04],
    ["2022/1/11", 2236.98, 2219.55, 2217.26, 2242.48],
    ["2022/1/12", 2218.09, 2306.78, 2204.44, 2226.26],
    ["2022/1/18", 2181.82, 2197.6, 2175.44, 2206.03],
    ["2022/1/19", 2201.12, 2244.64, 2200.58, 2250.11],
    ["2022/1/22", 2236.4, 2242.17, 2232.26, 2245.12],
    ["2022/1/23", 2242.62, 2184.54, 2182.81, 2242.62],
    ["2022/1/24", 2187.35, 2218.32, 2184.11, 2226.12],
    ["2022/2/10", 2228.82, 2346.83, 2225.81, 2247.67],
    ["2022/2/13", 2347.68, 2341.92, 2231.36, 2250.85],
    ["2022/2/14", 2238.9, 2217.01, 2205.87, 2239.93],
    ["2022/2/15", 2217.09, 2224.8, 2213.58, 2225.19],
    ["2022/2/16", 2221.34, 2251.81, 2210.77, 2252.87],
    ["2022/2/17", 2199.81, 2322.87, 2248.41, 2288.09],
    ["2022/2/20", 2286.33, 2299.99, 2281.9, 2309.39],
    ["2022/2/30", 2316.25, 2317.75, 2310.49, 2325.72],
    ["2022/2/31", 2320.74, 2300.59, 2299.37, 2325.53],
    ["2022/3/3", 2200.21, 2199.25, 2294.11, 2313.43],
    ["2022/3/4", 2297.1, 2272.42, 2264.76, 2297.1],
    ["2022/3/5", 2270.71, 2270.93, 2260.87, 2276.86],
    ["2022/3/6", 2264.43, 2342.11, 2240.07, 2266.69],
    ["2022/3/7", 2192.26, 2270.9, 2205.07, 2250.63],
    ["2022/3/13", 2190.1, 2148.35, 2126.22, 2190.1]
  ],
  chart_data3: [
    ["2021/10/24", 2378.82, 2440.38, 2282.17, 2250.11],
    ["2021/10/25", 2181.82, 2224.63, 2217.25, 2217.26],
    ["2021/10/28", 2261.31, 2297.77, 2224.93, 2270.9],
    ["2021/11/1", 2318.21, 2224.8, 2430.69, 2197.6],
    ["2021/11/4", 2236.98, 2418.53, 2306.78, 2230.88],
    ["2021/11/5", 2205.07, 2342.11, 2317.75, 2310.59],
    ["2021/11/6", 2309.17, 2420.26, 2295.35, 2226.26],
    ["2021/11/7", 2253.42, 2289.89, 2217.09, 2248.41],
    ["2021/11/8", 2225.19, 2211.59, 2295.35, 2347.68],
    ["2021/11/18", 2397.18, 2218.32, 2200.58, 2243.95],
    ["2021/11/19", 2115.47, 2272.42, 2346.83, 2313.74],
    ["2021/11/20", 2257.42, 2428.15, 2286.33, 2352.02],
    ["2021/11/21", 2227.74, 2234.4, 2427.07, 2308.92],
    ["2021/11/22", 2322.32, 2234.73, 2234.9, 2421.15],
    ["2021/11/25", 2325.82, 2192.26, 2264.76, 2286.33],
    ["2021/11/26", 2231.36, 2196.24, 2416.62, 2365.59],
    ["2021/11/27", 2244.64, 2190.1, 2397.94, 2257.43],
    ["2021/11/28", 2419.02, 2313.43, 2215.47, 2320.74],
    ["2021/12/7", 2276.05, 2206.03, 2216.6, 2299.37],
    ["2021/12/8", 2304.27, 2205.87, 2383.49, 2182.81],
    ["2021/12/11", 2421.56, 2225.29, 2239.93, 2190.1],
    ["2021/12/12", 2240.07, 2441.91, 2324.24, 2320.26],
    ["2021/12/13", 2326.42, 2373.53, 2270.71, 2239.21],
    ["2021/12/14", 2296.58, 2353.22, 2126.22, 2382.91],
    ["2021/12/15", 2212.56, 2263.97, 2325.95, 2225.81],
    ["2021/12/18", 2433.13, 2281.9, 2180.67, 2378.82],
    ["2021/12/19", 2199.81, 2325.72, 2253.31, 2411],
    ["2021/12/20", 2276.22, 2250.63, 2255.77, 2309.16],
    ["2021/12//21", 2270.28, 2201.12, 2415.43, 2341.92],
    ["2022/1/1", 2311.6, 2242.17, 2213.58, 2270.93],
    ["2022/1/2", 2276.86, 2233.04, 2333.67, 2242.48],
    ["2022/1/3", 2312.08, 2240.02, 2293.34, 2241.34],
    ["2022/1/8", 2229.46, 2297.1, 2244.26, 2318.61],
    ["2022/1/9", 2184.11, 2340.71, 2200.21, 2269.31],
    ["2022/1/10", 2260.87, 2314.16, 2252.87, 2204.44],
    ["2022/1/11", 2294.11, 2414.4, 2212.59, 2291.3],
    ["2022/1/12", 2257.74, 2300, 2308.38, 2437.42],
    ["2022/1/18", 2324.29, 2338.78, 2346.5, 2417.58],
    ["2022/1/19", 2314.68, 2226.13, 2433.89, 2320.26],
    ["2022/1/22", 2187.35, 2150, 2228.82, 2226.12],
    ["2022/1/23", 2297.1, 2299.99, 2242.62, 2232.02],
    ["2022/1/24", 2362.94, 2330.81, 2232.69, 2245.12],
    ["2022/2/10", 2235.77, 2199.25, 2322.94, 2394.22],
    ["2022/2/13", 2443.03, 2444.8, 2175.44, 2403.3],
    ["2022/2/14", 2288.09, 2300.59, 2432.68, 2264.43],
    ["2022/2/15", 2232.26, 2434.48, 2427.7, 2238.9],
    ["2022/2/16", 2308.76, 2148.35, 2441.73, 2218.09],
    ["2022/2/17", 2320.62, 2267.29, 2322.87, 2210.77],
    ["2022/2/20", 2251.81, 2236.4, 2247.67, 2317.86],
    ["2022/2/30", 2220.44, 2250.85, 2309.39, 2310.49],
    ["2022/2/31", 2184.54, 2325.53, 2221.34, 2425.92],
    ["2022/3/3", 2264.83, 2340.44, 2288.26, 2315.01],
    ["2022/3/4", 2219.55, 2287.3, 2242.62, 2266.69],
    ["2022/3/5", 2369.57, 2127.31, 2377.41, 2346.92],
    ["2022/3/6", 2317.37, 2320.96, 2333.29, 2212.03],
    ["2022/3/7", 2238.4, 2432.4, 2253.25, 2370.61],
    ["2022/3/13", 2316.25, 2314.59, 2366.16, 2217.01]
  ],
  chart_data4: [
    ["2021-04-17", 7.66, 7.77, 7.58, 7.96],
    ["2021-04-20", 7.78, 7.77, 7.62, 7.9],
    ["2021-04-21", 7.71, 7.66, 7.62, 7.74],
    ["2021-04-22", 7.62, 7.66, 7.42, 7.74],
    ["2021-04-23", 7.66, 7.79, 7.61, 7.82],
    ["2021-04-24", 7.83, 7.66, 7.62, 7.85],
    ["2021-04-27", 7.65, 7.53, 7.51, 7.71],
    ["2021-04-28", 7.52, 7.44, 7.3, 7.54],
    ["2021-04-29", 7.4, 7.43, 7.36, 7.58],
    ["2021-04-30", 7.4, 7.34, 7.32, 7.55],
    ["2022-04-31", 7.32, 7.47, 7.32, 7.53]
    ["2021-05-20", 3.781, 3.81, 3.761, 3.82],
    ["2021-05-23", 3.81, 3.84, 3.81, 3.849],
    ["2021-05-24", 3.84, 3.81, 3.8, 3.84],
    ["2021-05-25", 3.83, 3.81, 3.8, 3.849],
    ["2021-05-26", 3.81, 3.82, 3.781, 3.84],
    ["2021-05-27", 3.82, 3.81, 3.8, 3.84],
    ["2021-05-30", 3.81, 3.83, 3.781, 3.83],
    ["2021-05-31", 3.8, 3.938, 3.79, 3.958],
    ["2021-06-01", 3.928, 3.909, 3.899, 3.938],
    ["2021-06-02", 3.909, 3.899, 3.869, 3.918],
    ["2021-06-03", 3.899, 3.909, 3.879, 3.928],
    ["2021-06-06", 3.909, 3.899, 3.869, 3.918],
    ["2021-06-07", 3.899, 3.879, 3.869, 3.899],
    ["2021-06-08", 3.889, 3.859, 3.84, 3.889],
    ["2021-06-13", 3.83, 3.781, 3.771, 3.84],
    ["2021-06-14", 3.761, 3.8, 3.761, 3.8],
    ["2021-06-15", 3.771, 3.82, 3.761, 3.84],
    ["2021-06-16", 3.81, 3.781, 3.761, 3.83],
    ["2021-06-17", 3.781, 3.781, 3.761, 3.8],
    ["2021-06-20", 3.781, 3.781, 3.761, 3.79],
    ["2021-06-21", 3.79, 3.761, 3.731, 3.81],
    ["2021-06-22", 3.751, 3.771, 3.731, 3.781],
    ["2021-06-23", 3.771, 3.781, 3.751, 3.889],
    ["2021-06-24", 3.79, 3.761, 3.692, 3.81],
    ["2021-06-27", 3.731, 3.79, 3.721, 3.8],
    ["2021-06-28", 3.79, 3.79, 3.741, 3.79],
    ["2021-06-29", 3.79, 3.8, 3.771, 3.849],
    ["2021-06-30", 3.82, 3.81, 3.79, 3.82],
    ["2021-07-01", 3.82, 3.82, 3.81, 3.84],
    ["2021-07-04", 3.81, 3.87, 3.8, 3.88],
    ["2021-07-05", 3.87, 3.91, 3.86, 3.95],
    ["2021-07-06", 3.89, 3.91, 3.86, 3.92],
    ["2021-07-07", 3.91, 3.94, 3.88, 3.97],
    ["2021-07-08", 3.94, 3.91, 3.89, 3.94],
    ["2021-07-11", 3.91, 3.9, 3.89, 3.95],
    ["2021-07-12", 3.9, 4.05, 3.9, 4.09],
    ["2021-07-13", 4.06, 4.34, 4.05, 4.46],
    ["2021-07-14", 4.28, 4.26, 4.21, 4.3],
    ["2021-07-15", 4.25, 4.25, 4.21, 4.28],
    ["2021-07-18", 4.28, 4.29, 4.22, 4.38],
    ["2021-07-19", 4.27, 4.24, 4.18, 4.29],
    ["2021-07-20", 4.23, 4.21, 4.2, 4.25],
    ["2021-07-21", 4.21, 4.21, 4.18, 4.24],
    ["2021-07-22", 4.21, 4.2, 4.16, 4.22],
    ["2021-07-25", 4.19, 4.16, 4.15, 4.2],
    ["2021-07-26", 4.17, 4.29, 4.16, 4.33],
    ["2021-07-27", 4.29, 4.33, 4.15, 4.36],
    ["2021-07-28", 4.29, 4.4, 4.26, 4.49],
    ["2021-07-29", 4.36, 4.26, 4.25, 4.45],
    ["2021-08-01", 4.22, 4.19, 4.14, 4.23],
    ["2021-08-02", 4.19, 4.24, 4.18, 4.24],
    ["2021-08-03", 4.23, 4.26, 4.22, 4.31],
    ["2021-08-04", 4.26, 4.28, 4.2, 4.29],
    ["2021-08-05", 4.27, 4.24, 4.21, 4.28],
    ["2021-08-08", 4.22, 4.25, 4.19, 4.25],
    ["2021-08-09", 4.24, 4.25, 4.21, 4.27],
    ["2021-08-10", 4.25, 4.27, 4.25, 4.34],
    ["2021-08-11", 4.27, 4.22, 4.21, 4.3],
    ["2021-08-12", 4.22, 4.29, 4.21, 4.29],
    ["2021-08-15", 4.28, 4.42, 4.27, 4.47],
    ["2021-08-16", 4.44, 4.48, 4.43, 4.63],
    ["2021-08-17", 4.49, 4.44, 4.4, 4.55],
    ["2021-08-18", 4.44, 4.57, 4.41, 4.63],
    ["2021-08-19", 4.55, 4.56, 4.47, 4.59],
    ["2021-08-22", 4.56, 4.46, 4.44, 4.58],
    ["2021-08-23", 4.45, 4.42, 4.38, 4.48],
    ["2021-08-24", 4.41, 4.38, 4.37, 4.44],
    ["2021-08-25", 4.37, 4.33, 4.29, 4.37],
    ["2021-08-26", 4.33, 4.34, 4.3, 4.37],
    ["2021-08-29", 4.33, 4.26, 4.21, 4.34],
    ["2021-08-30", 4.26, 4.28, 4.25, 4.28],
    ["2021-08-31", 4.27, 4.28, 4.25, 4.29],
    ["2021-09-01", 4.29, 4.23, 4.22, 4.29],
    ["2021-09-02", 4.23, 4.23, 4.21, 4.24],
    ["2021-09-05", 4.24, 4.24, 4.22, 4.27],
    ["2021-09-06", 4.24, 4.28, 4.2, 4.29],
    ["2021-09-07", 4.28, 4.27, 4.26, 4.32],
    ["2021-09-08", 4.28, 4.27, 4.25, 4.29],
    ["2021-09-09", 4.27, 4.24, 4.23, 4.28],
    ["2021-09-12", 4.2, 4.16, 4.09, 4.2],
    ["2021-09-13", 4.16, 4.13, 4.12, 4.17],
    ["2021-09-14", 4.13, 4.09, 4.08, 4.13],
    ["2021-09-19", 4.11, 4.11, 4.09, 4.13],
    ["2021-09-20", 4.11, 4.08, 4.06, 4.11],
    ["2021-09-21", 4.08, 4.09, 4.07, 4.11],
    ["2021-09-22", 4.1, 4.11, 4.09, 4.13],
    ["2021-09-23", 4.12, 4.19, 4.12, 4.22],
    ["2021-09-26", 4.18, 4.11, 4.09, 4.18],
    ["2021-09-27", 4.08, 4.13, 4.08, 4.14],
    ["2021-09-28", 4.13, 4.18, 4.11, 4.2],
    ["2021-09-29", 4.17, 4.17, 4.16, 4.22],
    ["2021-09-30", 4.16, 4.15, 4.14, 4.22],
    ["2021-10-10", 4.31, 4.36, 4.26, 4.38],
    ["2021-10-11", 4.35, 4.8, 4.32, 4.8],
    ["2021-10-12", 4.9, 4.73, 4.68, 4.93],
    ["2021-10-13", 4.71, 4.72, 4.66, 4.8],
    ["2021-10-14", 4.71, 5.17, 4.66, 5.19],
    ["2021-10-17", 5.03, 5.06, 5.0, 5.25],
    ["2021-10-18", 5.02, 5.11, 4.98, 5.24],
    ["2021-10-19", 5.12, 5.3, 5.1, 5.59],
    ["2021-10-20", 5.26, 5.3, 5.22, 5.41],
    ["2021-10-21", 5.25, 5.36, 5.22, 5.45],
    ["2021-10-24", 5.36, 5.33, 5.26, 5.41],
    ["2021-10-25", 5.33, 5.27, 5.18, 5.36],
    ["2021-10-26", 5.23, 5.34, 5.19, 5.36],
    ["2021-10-27", 5.3, 5.18, 5.15, 5.32],
    ["2021-10-28", 5.17, 5.13, 5.12, 5.24],
    ["2021-10-31", 5.12, 5.13, 5.1, 5.16],
    ["2021-11-01", 5.13, 5.19, 5.11, 5.26],
    ["2021-11-02", 5.17, 5.09, 5.07, 5.18],
    ["2021-11-03", 5.18, 5.27, 5.05, 5.31],
    ["2021-11-04", 5.25, 5.4, 5.23, 5.65],
    ["2021-11-07", 5.35, 5.39, 5.27, 5.44],
    ["2021-11-08", 5.4, 5.31, 5.28, 5.42],
    ["2021-11-09", 5.3, 5.18, 5.1, 5.33],
    ["2021-11-10", 5.24, 5.22, 5.17, 5.29],
    ["2021-11-11", 5.19, 5.3, 5.14, 5.37],
    ["2021-11-14", 5.49, 5.55, 5.32, 5.67],
    ["2021-11-15", 5.5, 5.42, 5.38, 5.53],
    ["2021-11-16", 5.43, 5.71, 5.32, 5.8],
    ["2021-11-17", 5.64, 5.97, 5.61, 6.08],
    ["2021-11-18", 5.91, 5.93, 5.85, 6.03],
    ["2021-11-21", 5.95, 5.93, 5.86, 6.01],
    ["2021-11-22", 5.93, 5.98, 5.9, 6.19],
    ["2021-11-23", 5.93, 5.8, 5.77, 5.95],
    ["2021-11-24", 5.8, 5.82, 5.75, 5.85],
    ["2021-11-25", 5.8, 5.93, 5.77, 5.93],
    ["2021-11-28", 5.96, 6.05, 5.92, 6.15],
    ["2021-11-29", 6.02, 6.15, 5.97, 6.29],
    ["2021-11-30", 6.07, 6.66, 6.05, 6.77],
    ["2021-12-01", 6.76, 7.33, 6.6, 7.33],
    ["2021-12-02", 7.3, 6.84, 6.79, 7.37],
    ["2021-12-05", 6.55, 6.78, 6.45, 7.06],
    ["2021-12-06", 6.78, 6.64, 6.5, 6.89],
    ["2021-12-07", 6.6, 6.56, 6.38, 6.63],
    ["2021-12-08", 6.65, 7.01, 6.6, 7.07],
    ["2021-12-09", 6.94, 7.01, 6.75, 7.08],
    ["2021-12-12", 7.0, 6.81, 6.73, 7.28],
    ["2021-12-13", 6.72, 7.23, 6.68, 7.26],
    ["2021-12-14", 7.13, 6.85, 6.83, 7.42],
    ["2021-12-15", 6.65, 6.74, 6.56, 6.84],
    ["2021-12-16", 6.7, 6.79, 6.7, 6.95],
    ["2021-12-19", 6.94, 6.86, 6.82, 7.09],
    ["2021-12-20", 6.87, 7.1, 6.7, 7.12],
    ["2021-12-21", 7.15, 7.37, 7.07, 7.7],
    ["2021-12-22", 7.32, 7.68, 7.26, 7.7],
    ["2021-12-23", 7.7, 7.81, 7.6, 8.05],
    ["2021-12-26", 7.7, 7.81, 7.61, 7.96],
    ["2021-12-27", 7.84, 7.55, 7.44, 7.91],
    ["2021-12-28", 7.51, 7.69, 7.4, 7.7],
    ["2021-12-29", 7.62, 7.54, 7.47, 7.72],
    ["2021-12-30", 7.6, 7.31, 7.22, 7.6],
    ["2022-01-03", 7.25, 7.44, 7.22, 7.56],
    ["2022-01-04", 7.4, 7.43, 7.3, 7.48],
    ["2022-01-05", 7.39, 7.84, 7.37, 7.86],
    ["2022-01-06", 7.75, 7.68, 7.62, 7.87],
    ["2022-01-09", 7.66, 7.71, 7.51, 7.78],
    ["2022-01-10", 7.67, 7.54, 7.52, 7.8],
    ["2022-01-11", 7.48, 6.9, 6.79, 7.52],
    ["2022-01-12", 6.78, 6.67, 6.53, 6.87],
    ["2022-01-13", 6.6, 6.63, 6.58, 6.8],
    ["2022-01-16", 6.59, 6.59, 6.2, 6.68],
    ["2022-01-17", 6.5, 6.56, 6.41, 6.6],
    ["2022-01-18", 6.58, 6.62, 6.57, 6.74],
    ["2022-01-19", 6.55, 6.27, 6.22, 6.6],
    ["2022-01-20", 6.25, 6.31, 6.15, 6.39],
    ["2022-01-23", 6.3, 6.35, 6.28, 6.39],
    ["2022-01-24", 6.34, 6.32, 6.3, 6.39],
    ["2022-01-25", 6.3, 6.59, 6.25, 6.63],
    ["2022-01-26", 6.5, 6.54, 6.45, 6.61],
    ["2022-02-03", 6.51, 6.52, 6.51, 6.62],
    ["2022-02-06", 6.51, 6.52, 6.35, 6.54],
    ["2022-02-07", 6.48, 6.5, 6.42, 6.6],
    ["2022-02-08", 6.49, 6.79, 6.45, 6.84],
    ["2022-02-09", 6.75, 6.79, 6.72, 6.82],
    ["2022-02-10", 6.78, 6.78, 6.74, 6.95],
    ["2022-02-13", 6.72, 6.84, 6.7, 6.87],
    ["2022-02-14", 6.83, 6.82, 6.75, 6.88],
    ["2022-02-15", 6.83, 6.73, 6.71, 6.83],
    ["2022-02-16", 6.74, 6.73, 6.66, 6.78],
    ["2022-02-17", 6.69, 6.5, 6.48, 6.71],
    ["2022-02-20", 6.45, 6.54, 6.41, 6.59],
    ["2022-02-21", 6.52, 6.59, 6.5, 6.68],
    ["2022-02-22", 6.57, 6.59, 6.53, 6.64],
    ["2022-02-23", 6.58, 6.55, 6.52, 6.61],
    ["2022-02-24", 6.55, 7.08, 6.53, 7.2],
    ["2022-02-27", 7.0, 7.03, 6.93, 7.13],
    ["2022-02-28", 7.03, 7.03, 6.84, 7.06],
    ["2022-03-01", 6.99, 7.19, 6.97, 7.4],
    ["2022-03-02", 7.19, 7.12, 7.08, 7.34],
    ["2022-03-03", 7.06, 7.08, 6.98, 7.18],
    ["2022-03-06", 7.05, 7.21, 6.99, 7.29],
    ["2022-03-07", 7.37, 7.16, 7.14, 7.55],
    ["2022-03-08", 7.17, 7.7, 7.11, 7.88],
    ["2022-03-09", 7.61, 7.75, 7.59, 7.85],
    ["2022-03-10", 7.75, 7.78, 7.55, 7.84],
    ["2022-03-13", 7.73, 7.41, 7.35, 7.74],
    ["2022-03-14", 7.36, 7.38, 7.36, 7.48],
    ["2022-03-15", 7.38, 7.48, 7.32, 7.57],
    ["2022-03-16", 7.5, 7.69, 7.45, 7.74],

  ]
});

Mock.mock("/chartData", "get", config => {
  const type = config.body;
  let cd = null;
  if (type === "ssec") {
    cd = data.chart_data;
  } else if (type === "szec") {
    cd = data.chart_data2;
  } else if (type === "gei") {
    cd = data.chart_data3;
  }
  return {
    code: 20000,
    data: {
      total: cd.length,
      chart_data: cd
    }
  };
});
Mock.mock("/example/stock", "get", config => {
  const { sid } = config.body;
  const cd = data.chart_data4;
  return {
    code: 20000,
    data: {
      total: cd.length,
      chart_data: cd,
      code: sid,
      name: "stock-code: "
    }
  };
});