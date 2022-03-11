const Mock = require('mockjs')
const data = Mock.mock({
  chart_data: [
    ['2022/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
    ['2022/1/25', 2300, 2291.3, 2288.26, 2308.38],
    ['2022/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
    ['2022/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
    ['2022/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
    ['2022/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
    ['2022/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
    ['2022/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
    ['2022/2/5', 2411, 2433.13, 2403.3, 2437.42],
    ['2022/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
    ['2022/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
    ['2022/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
    ['2022/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
    ['2022/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
    ['2022/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
    ['2022/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
    ['2022/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
    ['2022/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
    ['2022/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
    ['2022/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
    ['2022/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
    ['2022/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
    ['2022/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
    ['2022/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
    ['2022/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
    ['2022/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
    ['2022/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
    ['2022/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
    ['2022/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
    ['2022/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
    ['2022/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
    ['2022/3/15', 2269.31, 2278.4, 2250, 2312.08],
    ['2022/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
    ['2022/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
    ['2022/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
    ['2022/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
    ['2022/3/22', 2321.4, 2328.28, 2314.97, 2332],
    ['2022/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
    ['2022/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
    ['2022/3/27', 2299.38, 2301.26, 2289, 2323.48],
    ['2022/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
    ['2022/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
    ['2022/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
    ['2022/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
    ['2022/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
    ['2022/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
    ['2022/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
    ['2022/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
    ['2022/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
    ['2022/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
    ['2022/4/15', 2199.91, 2181.94, 2177.39, 2204.99],
    ['2022/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
    ['2022/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
    ['2022/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
    ['2022/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
    ['2022/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
    ['2022/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
    ['2022/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
    ['2022/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
    ['2022/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
    ['2022/5/2', 2170.78, 2174.12, 2161.14, 2179.65],
    ['2022/5/3', 2179.05, 2205.5, 2179.05, 2222.81],
    ['2022/5/6', 2212.5, 2231.17, 2212.5, 2236.07],
    ['2022/5/7', 2227.86, 2235.57, 2219.44, 2240.26],
    ['2022/5/8', 2242.39, 2246.3, 2235.42, 2255.21],
    ['2022/5/9', 2246.96, 2232.97, 2221.38, 2247.86],
    ['2022/5/10', 2228.82, 2246.83, 2225.81, 2247.67],
    ['2022/5/13', 2247.68, 2241.92, 2231.36, 2250.85],
    ['2022/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
    ['2022/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
    ['2022/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
    ['2022/5/17', 2249.81, 2282.87, 2248.41, 2288.09],
    ['2022/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
    ['2022/5/21', 2297.11, 2305.11, 2290.12, 2305.3],
    ['2022/5/22', 2303.75, 2302.4, 2292.43, 2314.18],
    ['2022/5/23', 2293.81, 2275.67, 2274.1, 2304.95],
    ['2022/5/24', 2281.45, 2288.53, 2270.25, 2292.59],
    ['2022/5/27', 2286.66, 2293.08, 2283.94, 2301.7],
    ['2022/5/28', 2293.4, 2321.32, 2281.47, 2322.1],
    ['2022/5/29', 2323.54, 2324.02, 2321.17, 2334.33],
    ['2022/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
    ['2022/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
    ['2022/6/3', 2300.21, 2299.25, 2294.11, 2313.43],
    ['2022/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
    ['2022/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
    ['2022/6/6', 2264.43, 2242.11, 2240.07, 2266.69],
    ['2022/6/7', 2242.26, 2210.9, 2205.07, 2250.63],
    ['2022/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
  ],
  chart_data2: [
    ['2021/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
    ['2021/1/25', 2300, 2291.3, 2288.26, 2308.38],
    ['2021/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
    ['2021/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
    ['2021/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
    ['2021/2/5', 2411, 2433.13, 2403.3, 2437.42],
    ['2021/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
    ['2021/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
    ['2021/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
    ['2021/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
    ['2021/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
    ['2021/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
    ['2021/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
    ['2021/2/22', 2322.94, 2314.16, 2308.76, 2230.88],
    ['2021/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
    ['2021/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
    ['2021/2/27', 2297.77, 2353.22, 2212.03, 2224.63],
    ['2021/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
    ['2021/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
    ['2021/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
    ['2021/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
    ['2021/3/12', 2309.16, 2216.6, 2264.83, 2333.29],
    ['2021/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
    ['2021/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
    ['2021/3/15', 2269.31, 2238.4, 2150, 2312.08],
    ['2021/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
    ['2021/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
    ['2021/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
    ['2021/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
    ['2021/4/1', 2229.46, 2234.4, 2127.31, 2243.95],
    ['2021/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
    ['2021/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
    ['2021/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
    ['2021/4/9', 2215.47, 2235.77, 2115.47, 2234.73],
    ['2021/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
    ['2021/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
    ['2021/4/12', 2218.09, 2306.78, 2204.44, 2226.26],
    ['2021/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
    ['2021/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
    ['2021/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
    ['2021/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
    ['2021/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
    ['2021/5/10', 2228.82, 2346.83, 2225.81, 2247.67],
    ['2021/5/13', 2347.68, 2341.92, 2231.36, 2250.85],
    ['2021/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
    ['2021/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
    ['2021/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
    ['2021/5/17', 2199.81, 2322.87, 2248.41, 2288.09],
    ['2021/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
    ['2021/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
    ['2021/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
    ['2021/6/3', 2200.21, 2199.25, 2294.11, 2313.43],
    ['2021/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
    ['2021/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
    ['2021/6/6', 2264.43, 2342.11, 2240.07, 2266.69],
    ['2021/6/7', 2192.26, 2270.9, 2205.07, 2250.63],
    ['2021/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
  ],
  chart_data3: [
    [
      '2021/1/24',
      2378.82,
      2440.38,
      2282.17,
      2250.11
    ],
    [
      '2021/1/25',
      2181.82,
      2224.63,
      2217.25,
      2217.26
    ],
    [
      '2021/1/28',
      2261.31,
      2297.77,
      2224.93,
      2270.9
    ],
    [
      '2021/2/1',
      2318.21,
      2224.8,
      2430.69,
      2197.6
    ],
    [
      '2021/2/4',
      2236.98,
      2418.53,
      2306.78,
      2230.88
    ],
    [
      '2021/2/5',
      2205.07,
      2342.11,
      2317.75,
      2310.59
    ],
    [
      '2021/2/6',
      2309.17,
      2420.26,
      2295.35,
      2226.26
    ],
    [
      '2021/2/7',
      2253.42,
      2289.89,
      2217.09,
      2248.41
    ],
    [
      '2021/2/8',
      2225.19,
      2211.59,
      2295.35,
      2347.68
    ],
    [
      '2021/2/18',
      2397.18,
      2218.32,
      2200.58,
      2243.95
    ],
    [
      '2021/2/19',
      2115.47,
      2272.42,
      2346.83,
      2313.74
    ],
    [
      '2021/2/20',
      2257.42,
      2428.15,
      2286.33,
      2352.02
    ],
    [
      '2021/2/21',
      2227.74,
      2234.4,
      2427.07,
      2308.92
    ],
    [
      '2021/2/22',
      2322.32,
      2234.73,
      2234.9,
      2421.15
    ],
    [
      '2021/2/25',
      2325.82,
      2192.26,
      2264.76,
      2286.33
    ],
    [
      '2021/2/26',
      2231.36,
      2196.24,
      2416.62,
      2365.59
    ],
    [
      '2021/2/27',
      2244.64,
      2190.1,
      2397.94,
      2257.43
    ],
    [
      '2021/2/28',
      2419.02,
      2313.43,
      2215.47,
      2320.74
    ],
    [
      '2021/3/7',
      2276.05,
      2206.03,
      2216.6,
      2299.37
    ],
    [
      '2021/3/8',
      2304.27,
      2205.87,
      2383.49,
      2182.81
    ],
    [
      '2021/3/11',
      2421.56,
      2225.29,
      2239.93,
      2190.1
    ],
    [
      '2021/3/12',
      2240.07,
      2441.91,
      2324.24,
      2320.26
    ],
    [
      '2021/3/13',
      2326.42,
      2373.53,
      2270.71,
      2239.21
    ],
    [
      '2021/3/14',
      2296.58,
      2353.22,
      2126.22,
      2382.91
    ],
    [
      '2021/3/15',
      2212.56,
      2263.97,
      2325.95,
      2225.81
    ],
    [
      '2021/3/18',
      2433.13,
      2281.9,
      2180.67,
      2378.82
    ],
    [
      '2021/3/19',
      2199.81,
      2325.72,
      2253.31,
      2411
    ],
    [
      '2021/3/20',
      2276.22,
      2250.63,
      2255.77,
      2309.16
    ],
    [
      '2021/3/21',
      2270.28,
      2201.12,
      2415.43,
      2341.92
    ],
    [
      '2021/4/1',
      2311.6,
      2242.17,
      2213.58,
      2270.93
    ],
    [
      '2021/4/2',
      2276.86,
      2233.04,
      2333.67,
      2242.48
    ],
    [
      '2021/4/3',
      2312.08,
      2240.02,
      2293.34,
      2241.34
    ],
    [
      '2021/4/8',
      2229.46,
      2297.1,
      2244.26,
      2318.61
    ],
    [
      '2021/4/9',
      2184.11,
      2340.71,
      2200.21,
      2269.31
    ],
    [
      '2021/4/10',
      2260.87,
      2314.16,
      2252.87,
      2204.44
    ],
    [
      '2021/4/11',
      2294.11,
      2414.4,
      2212.59,
      2291.3
    ],
    [
      '2021/4/12',
      2257.74,
      2300,
      2308.38,
      2437.42
    ],
    [
      '2021/4/18',
      2324.29,
      2338.78,
      2346.5,
      2417.58
    ],
    [
      '2021/4/19',
      2314.68,
      2226.13,
      2433.89,
      2320.26
    ],
    [
      '2021/4/22',
      2187.35,
      2150,
      2228.82,
      2226.12
    ],
    [
      '2021/4/23',
      2297.1,
      2299.99,
      2242.62,
      2232.02
    ],
    [
      '2021/4/24',
      2362.94,
      2330.81,
      2232.69,
      2245.12
    ],
    [
      '2021/5/10',
      2235.77,
      2199.25,
      2322.94,
      2394.22
    ],
    [
      '2021/5/13',
      2443.03,
      2444.8,
      2175.44,
      2403.3
    ],
    [
      '2021/5/14',
      2288.09,
      2300.59,
      2432.68,
      2264.43
    ],
    [
      '2021/5/15',
      2232.26,
      2434.48,
      2427.7,
      2238.9
    ],
    [
      '2021/5/16',
      2308.76,
      2148.35,
      2441.73,
      2218.09
    ],
    [
      '2021/5/17',
      2320.62,
      2267.29,
      2322.87,
      2210.77
    ],
    [
      '2021/5/20',
      2251.81,
      2236.4,
      2247.67,
      2317.86
    ],
    [
      '2021/5/30',
      2220.44,
      2250.85,
      2309.39,
      2310.49
    ],
    [
      '2021/5/31',
      2184.54,
      2325.53,
      2221.34,
      2425.92
    ],
    [
      '2021/6/3',
      2264.83,
      2340.44,
      2288.26,
      2315.01
    ],
    [
      '2021/6/4',
      2219.55,
      2287.3,
      2242.62,
      2266.69
    ],
    [
      '2021/6/5',
      2369.57,
      2127.31,
      2377.41,
      2346.92
    ],
    [
      '2021/6/6',
      2317.37,
      2320.96,
      2333.29,
      2212.03
    ],
    [
      '2021/6/7',
      2238.4,
      2432.4,
      2253.25,
      2370.61
    ],
    [
      '2021/6/13',
      2316.25,
      2314.59,
      2366.16,
      2217.01
    ]
  ]
})

module.exports = [
  {
    url: '/chartData',
    type: 'get',
    response: config => {
      const { type } = config.query
      let cd = null
      if (type === 'ssec') {
        cd = data.chart_data
      } else if (type === 'szec') {
        cd = data.chart_data2
      } else if (type === 'gei') {
        cd = data.chart_data3
      }
      return {
        code: 20000,
        data: {
          total: cd.length,
          chart_data: cd
        }
      }
    }
  }
]

