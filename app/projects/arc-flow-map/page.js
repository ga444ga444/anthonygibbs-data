'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

export default function ArcFlowPage() {
  const mapRef = useRef(null)
  const canvasRef = useRef(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    // Load Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    // Load Leaflet JS then initialise
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => initMap()
    document.head.appendChild(script)

    function initMap() {
      const L = window.L

      const isMobile = window.innerWidth < 768
      const initialZoom = isMobile ? 3 : 4
      const initialCenter = isMobile ? [37.5, -96] : [38.5, -95]

      const map = L.map(mapRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        zoomControl: false,
        attributionControl: false,
      })

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map)

      const canvas = canvasRef.current
      let animFrameId = null

      function resizeCanvas() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)

      // ── DATA ──────────────────────────────────────────────────────────────
      const ARC_DATA = [{"lat":40.8,"lng":-73.95,"count":5688,"dist_mi":713},{"lat":40.65,"lng":-73.95,"count":5722,"dist_mi":715},{"lat":40.65,"lng":-73.8,"count":2835,"dist_mi":722},{"lat":40.8,"lng":-73.8,"count":3140,"dist_mi":721},{"lat":41.85,"lng":-87.75,"count":2461,"dist_mi":6},{"lat":34.05,"lng":-118.35,"count":2836,"dist_mi":1748},{"lat":33.9,"lng":-118.2,"count":2538,"dist_mi":1745},{"lat":34.05,"lng":-118.2,"count":3165,"dist_mi":1740},{"lat":25.8,"lng":-80.25,"count":1652,"dist_mi":1188},{"lat":33.9,"lng":-118.35,"count":1890,"dist_mi":1753},{"lat":40.05,"lng":-75.15,"count":1924,"dist_mi":663},{"lat":42.0,"lng":-87.75,"count":1659,"dist_mi":10},{"lat":42.3,"lng":-71.1,"count":1656,"dist_mi":847},{"lat":40.8,"lng":-74.1,"count":1345,"dist_mi":705},{"lat":41.85,"lng":-87.6,"count":2358,"dist_mi":2},{"lat":40.65,"lng":-74.1,"count":1331,"dist_mi":707},{"lat":25.95,"lng":-80.25,"count":1260,"dist_mi":1178},{"lat":40.95,"lng":-73.8,"count":1267,"dist_mi":719},{"lat":38.85,"lng":-77.1,"count":1930,"dist_mi":592},{"lat":33.75,"lng":-117.9,"count":1860,"dist_mi":1734},{"lat":33.75,"lng":-118.05,"count":1649,"dist_mi":1742},{"lat":37.35,"lng":-121.95,"count":1064,"dist_mi":1841},{"lat":34.2,"lng":-118.5,"count":1356,"dist_mi":1751},{"lat":29.7,"lng":-95.55,"count":1116,"dist_mi":950},{"lat":34.2,"lng":-118.35,"count":1281,"dist_mi":1743},{"lat":39.3,"lng":-76.65,"count":1591,"dist_mi":603},{"lat":40.65,"lng":-74.25,"count":1297,"dist_mi":699},{"lat":42.45,"lng":-71.1,"count":1934,"dist_mi":846},{"lat":40.65,"lng":-73.65,"count":1388,"dist_mi":730},{"lat":37.8,"lng":-122.25,"count":1492,"dist_mi":1845},{"lat":37.8,"lng":-122.4,"count":1209,"dist_mi":1853},{"lat":33.9,"lng":-118.05,"count":1725,"dist_mi":1737},{"lat":39.0,"lng":-76.95,"count":1096,"dist_mi":595},{"lat":34.05,"lng":-118.05,"count":980,"dist_mi":1733},{"lat":38.85,"lng":-76.95,"count":1678,"dist_mi":599},{"lat":40.95,"lng":-74.1,"count":1326,"dist_mi":703},{"lat":39.9,"lng":-75.15,"count":1503,"dist_mi":665},{"lat":34.05,"lng":-117.9,"count":1017,"dist_mi":1725},{"lat":33.9,"lng":-117.9,"count":1722,"dist_mi":1730},{"lat":39.9,"lng":-75.3,"count":1277,"dist_mi":658},{"lat":33.6,"lng":-112.2,"count":929,"dist_mi":1453},{"lat":32.85,"lng":-96.75,"count":1204,"dist_mi":799},{"lat":26.1,"lng":-80.25,"count":1377,"dist_mi":1168},{"lat":40.8,"lng":-74.25,"count":895,"dist_mi":697},{"lat":26.25,"lng":-80.25,"count":937,"dist_mi":1158},{"lat":32.7,"lng":-117.15,"count":1131,"dist_mi":1732},{"lat":40.95,"lng":-73.95,"count":1262,"dist_mi":711},{"lat":29.7,"lng":-95.4,"count":867,"dist_mi":946},{"lat":39.75,"lng":-105.0,"count":1513,"dist_mi":919},{"lat":45.0,"lng":-93.3,"count":1550,"dist_mi":357},{"lat":39.0,"lng":-77.1,"count":821,"dist_mi":588},{"lat":40.05,"lng":-75.0,"count":1500,"dist_mi":670},{"lat":33.45,"lng":-112.05,"count":1015,"dist_mi":1451},{"lat":36.15,"lng":-115.2,"count":1200,"dist_mi":1525},{"lat":41.85,"lng":-71.4,"count":1454,"dist_mi":834},{"lat":29.7,"lng":-95.7,"count":805,"dist_mi":954},{"lat":40.65,"lng":-111.9,"count":1312,"dist_mi":1259},{"lat":36.15,"lng":-115.05,"count":1230,"dist_mi":1517},{"lat":41.7,"lng":-87.6,"count":906,"dist_mi":12},{"lat":32.7,"lng":-117.0,"count":1211,"dist_mi":1724},{"lat":33.75,"lng":-118.2,"count":1117,"dist_mi":1750},{"lat":29.85,"lng":-95.4,"count":875,"dist_mi":937},{"lat":37.65,"lng":-122.1,"count":1222,"dist_mi":1841},{"lat":34.05,"lng":-118.5,"count":1113,"dist_mi":1755},{"lat":47.7,"lng":-122.25,"count":936,"dist_mi":1729},{"lat":42.45,"lng":-83.1,"count":969,"dist_mi":235},{"lat":42.3,"lng":-83.25,"count":1044,"dist_mi":226},{"lat":29.4,"lng":-98.55,"count":914,"dist_mi":1056},{"lat":47.85,"lng":-122.25,"count":963,"dist_mi":1729},{"lat":33.6,"lng":-117.75,"count":819,"dist_mi":1732},{"lat":42.45,"lng":-82.95,"count":1133,"dist_mi":243},{"lat":39.9,"lng":-105.0,"count":706,"dist_mi":916},{"lat":33.45,"lng":-112.2,"count":789,"dist_mi":1458},{"lat":37.35,"lng":-121.8,"count":944,"dist_mi":1833},{"lat":32.7,"lng":-97.2,"count":1024,"dist_mi":823},{"lat":25.65,"lng":-80.4,"count":711,"dist_mi":1195},{"lat":40.05,"lng":-82.95,"count":687,"dist_mi":275},{"lat":33.75,"lng":-117.75,"count":653,"dist_mi":1727},{"lat":29.85,"lng":-95.55,"count":660,"dist_mi":941},{"lat":33.15,"lng":-96.75,"count":1033,"dist_mi":782},{"lat":33.0,"lng":-96.6,"count":1208,"dist_mi":785},{"lat":34.2,"lng":-118.2,"count":844,"dist_mi":1735},{"lat":30.45,"lng":-97.65,"count":1012,"dist_mi":966},{"lat":32.85,"lng":-96.9,"count":693,"dist_mi":804},{"lat":42.45,"lng":-83.25,"count":975,"dist_mi":228},{"lat":34.05,"lng":-117.6,"count":659,"dist_mi":1710},{"lat":34.05,"lng":-117.75,"count":643,"dist_mi":1717},{"lat":39.75,"lng":-104.85,"count":1034,"dist_mi":911},{"lat":33.0,"lng":-96.75,"count":1040,"dist_mi":791},{"lat":29.55,"lng":-98.55,"count":1053,"dist_mi":1047},{"lat":38.55,"lng":-121.5,"count":702,"dist_mi":1790},{"lat":40.5,"lng":-74.4,"count":969,"dist_mi":694},{"lat":38.85,"lng":-77.25,"count":868,"dist_mi":585},{"lat":45.0,"lng":-93.15,"count":730,"dist_mi":351},{"lat":26.55,"lng":-80.1,"count":773,"dist_mi":1142},{"lat":30.0,"lng":-95.4,"count":1068,"dist_mi":928},{"lat":45.45,"lng":-122.55,"count":885,"dist_mi":1749},{"lat":34.05,"lng":-117.45,"count":1115,"dist_mi":1702},{"lat":33.3,"lng":-111.75,"count":587,"dist_mi":1441},{"lat":33.45,"lng":-111.9,"count":812,"dist_mi":1443},{"lat":37.5,"lng":-122.25,"count":1085,"dist_mi":1853},{"lat":38.7,"lng":-121.35,"count":778,"dist_mi":1779},{"lat":33.75,"lng":-84.45,"count":727,"dist_mi":588},{"lat":32.7,"lng":-97.05,"count":760,"dist_mi":818},{"lat":41.25,"lng":-96.0,"count":803,"dist_mi":435},{"lat":41.85,"lng":-87.9,"count":562,"dist_mi":14},{"lat":47.55,"lng":-122.25,"count":848,"dist_mi":1729},{"lat":28.05,"lng":-82.5,"count":1008,"dist_mi":998},{"lat":41.7,"lng":-87.75,"count":705,"dist_mi":14},{"lat":33.75,"lng":-84.3,"count":922,"dist_mi":590},{"lat":26.25,"lng":-80.1,"count":805,"dist_mi":1161},{"lat":33.9,"lng":-117.3,"count":612,"dist_mi":1699},{"lat":29.85,"lng":-95.7,"count":915,"dist_mi":945},{"lat":42.0,"lng":-88.05,"count":791,"dist_mi":23},{"lat":40.5,"lng":-74.25,"count":587,"dist_mi":701},{"lat":29.7,"lng":-95.25,"count":882,"dist_mi":943},{"lat":41.4,"lng":-81.75,"count":873,"dist_mi":305},{"lat":28.65,"lng":-81.45,"count":882,"dist_mi":978},{"lat":33.9,"lng":-84.3,"count":820,"dist_mi":580},{"lat":33.6,"lng":-112.05,"count":769,"dist_mi":1445},{"lat":42.6,"lng":-82.95,"count":964,"dist_mi":244},{"lat":30.0,"lng":-90.15,"count":783,"dist_mi":833},{"lat":37.5,"lng":-121.95,"count":722,"dist_mi":1837},{"lat":25.8,"lng":-80.4,"count":772,"dist_mi":1185},{"lat":37.65,"lng":-122.4,"count":1012,"dist_mi":1857},{"lat":37.35,"lng":-122.1,"count":828,"dist_mi":1848},{"lat":32.55,"lng":-117.0,"count":675,"dist_mi":1729},{"lat":43.05,"lng":-88.05,"count":986,"dist_mi":84},{"lat":32.85,"lng":-117.15,"count":657,"dist_mi":1726},{"lat":39.6,"lng":-105.0,"count":508,"dist_mi":921},{"lat":39.6,"lng":-104.85,"count":515,"dist_mi":914},{"lat":40.8,"lng":-73.5,"count":904,"dist_mi":736},{"lat":28.65,"lng":-81.3,"count":662,"dist_mi":981},{"lat":29.55,"lng":-98.4,"count":853,"dist_mi":1042},{"lat":43.05,"lng":-87.9,"count":502,"dist_mi":82},{"lat":40.8,"lng":-73.65,"count":924,"dist_mi":728},{"lat":36.75,"lng":-119.7,"count":655,"dist_mi":1740},{"lat":38.7,"lng":-90.3,"count":536,"dist_mi":261},{"lat":33.15,"lng":-96.9,"count":654,"dist_mi":788},{"lat":32.7,"lng":-97.35,"count":660,"dist_mi":828},{"lat":42.0,"lng":-87.6,"count":657,"dist_mi":9},{"lat":32.7,"lng":-96.75,"count":804,"dist_mi":807},{"lat":44.85,"lng":-93.3,"count":604,"dist_mi":351},{"lat":38.55,"lng":-121.35,"count":797,"dist_mi":1782},{"lat":26.4,"lng":-80.1,"count":768,"dist_mi":1152},{"lat":33.3,"lng":-111.9,"count":921,"dist_mi":1448},{"lat":32.7,"lng":-96.9,"count":512,"dist_mi":812},{"lat":45.6,"lng":-122.55,"count":627,"dist_mi":1748},{"lat":39.15,"lng":-77.25,"count":642,"dist_mi":576},{"lat":30.15,"lng":-97.8,"count":488,"dist_mi":988},{"lat":42.9,"lng":-78.75,"count":632,"dist_mi":458},{"lat":47.7,"lng":-122.4,"count":692,"dist_mi":1736},{"lat":28.5,"lng":-81.3,"count":881,"dist_mi":990},{"lat":39.3,"lng":-76.5,"count":740,"dist_mi":610},{"lat":40.5,"lng":-79.95,"count":898,"dist_mi":410},{"lat":33.15,"lng":-117.3,"count":597,"dist_mi":1724},{"lat":42.0,"lng":-87.9,"count":796,"dist_mi":16},{"lat":41.85,"lng":-88.05,"count":745,"dist_mi":22},{"lat":42.45,"lng":-70.95,"count":932,"dist_mi":854},{"lat":36.9,"lng":-76.2,"count":643,"dist_mi":700},{"lat":26.7,"lng":-80.1,"count":648,"dist_mi":1132},{"lat":40.8,"lng":-73.05,"count":731,"dist_mi":759},{"lat":38.55,"lng":-90.3,"count":837,"dist_mi":270},{"lat":39.15,"lng":-84.6,"count":508,"dist_mi":247},{"lat":40.05,"lng":-75.3,"count":771,"dist_mi":655},{"lat":35.4,"lng":-97.5,"count":614,"dist_mi":695},{"lat":39.75,"lng":-86.1,"count":690,"dist_mi":167},{"lat":40.65,"lng":-74.4,"count":807,"dist_mi":692},{"lat":39.15,"lng":-84.45,"count":612,"dist_mi":252},{"lat":38.7,"lng":-121.2,"count":734,"dist_mi":1771},{"lat":39.9,"lng":-75.0,"count":618,"dist_mi":673},{"lat":39.0,"lng":-94.65,"count":648,"dist_mi":419},{"lat":32.85,"lng":-97.2,"count":676,"dist_mi":815},{"lat":33.9,"lng":-84.45,"count":831,"dist_mi":578},{"lat":33.9,"lng":-84.0,"count":789,"dist_mi":586},{"lat":33.0,"lng":-97.05,"count":810,"dist_mi":801},{"lat":30.0,"lng":-95.55,"count":675,"dist_mi":932},{"lat":30.0,"lng":-95.7,"count":564,"dist_mi":936},{"lat":42.3,"lng":-71.25,"count":456,"dist_mi":839},{"lat":41.25,"lng":-73.2,"count":866,"dist_mi":746},{"lat":45.6,"lng":-122.7,"count":608,"dist_mi":1755},{"lat":29.7,"lng":-95.85,"count":531,"dist_mi":958},{"lat":32.85,"lng":-117.0,"count":752,"dist_mi":1719},{"lat":34.05,"lng":-84.45,"count":469,"dist_mi":568},{"lat":27.9,"lng":-82.8,"count":790,"dist_mi":1003},{"lat":34.05,"lng":-84.15,"count":468,"dist_mi":573},{"lat":42.9,"lng":-85.65,"count":566,"dist_mi":123},{"lat":45.45,"lng":-122.85,"count":451,"dist_mi":1763},{"lat":35.25,"lng":-80.85,"count":761,"dist_mi":586},{"lat":42.15,"lng":-72.6,"count":621,"dist_mi":771},{"lat":30.45,"lng":-97.8,"count":510,"dist_mi":971},{"lat":45.45,"lng":-122.7,"count":756,"dist_mi":1756},{"lat":35.55,"lng":-97.5,"count":694,"dist_mi":688},{"lat":36.15,"lng":-115.35,"count":546,"dist_mi":1532},{"lat":30.3,"lng":-97.65,"count":756,"dist_mi":975},{"lat":41.1,"lng":-73.5,"count":599,"dist_mi":732},{"lat":41.7,"lng":-88.05,"count":643,"dist_mi":25},{"lat":35.1,"lng":-90.0,"count":500,"dist_mi":485},{"lat":35.25,"lng":-80.7,"count":584,"dist_mi":591},{"lat":25.95,"lng":-80.4,"count":674,"dist_mi":1175},{"lat":29.55,"lng":-95.25,"count":603,"dist_mi":952},{"lat":32.25,"lng":-110.85,"count":730,"dist_mi":1436},{"lat":35.1,"lng":-80.85,"count":487,"dist_mi":594},{"lat":34.2,"lng":-117.45,"count":420,"dist_mi":1697},{"lat":30.3,"lng":-97.8,"count":699,"dist_mi":979},{"lat":33.9,"lng":-117.6,"count":762,"dist_mi":1714},{"lat":38.25,"lng":-85.65,"count":644,"dist_mi":272},{"lat":40.65,"lng":-73.5,"count":494,"dist_mi":738},{"lat":33.6,"lng":-112.35,"count":797,"dist_mi":1460},{"lat":38.85,"lng":-77.4,"count":705,"dist_mi":577},{"lat":38.25,"lng":-85.8,"count":593,"dist_mi":269},{"lat":39.9,"lng":-82.8,"count":782,"dist_mi":287},{"lat":29.55,"lng":-95.4,"count":617,"dist_mi":956},{"lat":30.0,"lng":-95.25,"count":650,"dist_mi":924},{"lat":32.85,"lng":-96.6,"count":711,"dist_mi":794},{"lat":34.2,"lng":-118.65,"count":566,"dist_mi":1758},{"lat":37.95,"lng":-121.95,"count":615,"dist_mi":1827},{"lat":36.0,"lng":-115.2,"count":638,"dist_mi":1529},{"lat":42.3,"lng":-87.9,"count":595,"dist_mi":32},{"lat":28.5,"lng":-81.45,"count":532,"dist_mi":987},{"lat":28.2,"lng":-82.35,"count":445,"dist_mi":991},{"lat":36.0,"lng":-115.05,"count":445,"dist_mi":1521},{"lat":47.4,"lng":-122.25,"count":652,"dist_mi":1729},{"lat":33.15,"lng":-117.15,"count":502,"dist_mi":1716},{"lat":33.6,"lng":-117.9,"count":551,"dist_mi":1739},{"lat":33.6,"lng":-117.15,"count":505,"dist_mi":1701},{"lat":27.9,"lng":-82.35,"count":701,"dist_mi":1011},{"lat":43.2,"lng":-77.7,"count":408,"dist_mi":513},{"lat":33.45,"lng":-111.75,"count":461,"dist_mi":1436},{"lat":30.3,"lng":-81.45,"count":538,"dist_mi":871},{"lat":29.4,"lng":-98.7,"count":694,"dist_mi":1061},{"lat":40.05,"lng":-83.1,"count":627,"dist_mi":268},{"lat":33.0,"lng":-96.9,"count":476,"dist_mi":796},{"lat":38.4,"lng":-121.5,"count":604,"dist_mi":1793},{"lat":25.95,"lng":-80.1,"count":529,"dist_mi":1181},{"lat":41.55,"lng":-81.6,"count":418,"dist_mi":312},{"lat":42.9,"lng":-78.9,"count":447,"dist_mi":451},{"lat":40.95,"lng":-74.25,"count":467,"dist_mi":696},{"lat":29.55,"lng":-95.1,"count":685,"dist_mi":948},{"lat":39.0,"lng":-94.5,"count":545,"dist_mi":412},{"lat":33.75,"lng":-84.15,"count":580,"dist_mi":593},{"lat":47.55,"lng":-122.1,"count":533,"dist_mi":1722},{"lat":33.45,"lng":-86.85,"count":606,"dist_mi":584},{"lat":33.9,"lng":-117.75,"count":379,"dist_mi":1722},{"lat":40.2,"lng":-74.85,"count":422,"dist_mi":675},{"lat":42.15,"lng":-70.95,"count":413,"dist_mi":855},{"lat":27.75,"lng":-82.65,"count":456,"dist_mi":1016},{"lat":36.3,"lng":-115.2,"count":650,"dist_mi":1521},{"lat":39.9,"lng":-86.1,"count":597,"dist_mi":158},{"lat":35.85,"lng":-78.6,"count":422,"dist_mi":639},{"lat":31.8,"lng":-106.35,"count":663,"dist_mi":1243},{"lat":41.7,"lng":-72.75,"count":703,"dist_mi":766},{"lat":40.35,"lng":-79.95,"count":532,"dist_mi":413},{"lat":40.65,"lng":-75.45,"count":364,"dist_mi":638},{"lat":31.8,"lng":-106.5,"count":664,"dist_mi":1250},{"lat":30.0,"lng":-90.0,"count":387,"dist_mi":831},{"lat":34.05,"lng":-117.3,"count":570,"dist_mi":1694},{"lat":36.0,"lng":-86.7,"count":662,"dist_mi":409},{"lat":41.1,"lng":-74.1,"count":674,"dist_mi":702},{"lat":41.1,"lng":-112.05,"count":497,"dist_mi":1261},{"lat":47.25,"lng":-122.25,"count":479,"dist_mi":1729},{"lat":39.0,"lng":-77.55,"count":582,"dist_mi":566},{"lat":26.25,"lng":-98.25,"count":383,"dist_mi":1237},{"lat":42.45,"lng":-83.4,"count":682,"dist_mi":220},{"lat":43.2,"lng":-77.55,"count":602,"dist_mi":521},{"lat":39.9,"lng":-83.1,"count":398,"dist_mi":273},{"lat":39.0,"lng":-77.4,"count":386,"dist_mi":573},{"lat":27.3,"lng":-82.5,"count":601,"dist_mi":1048},{"lat":42.6,"lng":-83.25,"count":669,"dist_mi":229},{"lat":42.3,"lng":-71.85,"count":526,"dist_mi":808},{"lat":35.7,"lng":-78.6,"count":632,"dist_mi":646},{"lat":41.7,"lng":-83.55,"count":672,"dist_mi":211},{"lat":47.25,"lng":-122.4,"count":665,"dist_mi":1736},{"lat":39.75,"lng":-84.15,"count":431,"dist_mi":234},{"lat":38.85,"lng":-104.7,"count":649,"dist_mi":921},{"lat":40.8,"lng":-73.35,"count":426,"dist_mi":744},{"lat":42.6,"lng":-83.1,"count":386,"dist_mi":237},{"lat":41.25,"lng":-96.15,"count":620,"dist_mi":442},{"lat":41.4,"lng":-81.6,"count":456,"dist_mi":313},{"lat":37.95,"lng":-122.25,"count":542,"dist_mi":1842},{"lat":33.9,"lng":-117.45,"count":476,"dist_mi":1707},{"lat":34.2,"lng":-119.1,"count":596,"dist_mi":1781},{"lat":41.25,"lng":-72.9,"count":421,"dist_mi":762},{"lat":37.65,"lng":-77.55,"count":485,"dist_mi":609},{"lat":25.5,"lng":-80.4,"count":389,"dist_mi":1204},{"lat":37.8,"lng":-121.95,"count":397,"dist_mi":1830},{"lat":39.15,"lng":-77.1,"count":664,"dist_mi":584},{"lat":30.3,"lng":-81.6,"count":485,"dist_mi":867},{"lat":32.25,"lng":-111.0,"count":422,"dist_mi":1444},{"lat":37.95,"lng":-122.1,"count":535,"dist_mi":1834},{"lat":35.1,"lng":-89.85,"count":501,"dist_mi":483},{"lat":39.9,"lng":-85.95,"count":462,"dist_mi":162},{"lat":41.7,"lng":-88.2,"count":649,"dist_mi":32},{"lat":30.15,"lng":-95.55,"count":437,"dist_mi":922},{"lat":30.45,"lng":-91.05,"count":470,"dist_mi":812},{"lat":41.55,"lng":-87.6,"count":555,"dist_mi":23},{"lat":37.2,"lng":-121.8,"count":647,"dist_mi":1837},{"lat":39.75,"lng":-105.15,"count":617,"dist_mi":926},{"lat":36.75,"lng":-119.85,"count":631,"dist_mi":1748},{"lat":42.15,"lng":-87.9,"count":442,"dist_mi":23},{"lat":40.05,"lng":-74.1,"count":557,"dist_mi":716},{"lat":27.9,"lng":-82.5,"count":591,"dist_mi":1008},{"lat":39.15,"lng":-76.65,"count":330,"dist_mi":606},{"lat":39.0,"lng":-84.6,"count":634,"dist_mi":255},{"lat":42.0,"lng":-88.2,"count":517,"dist_mi":30},{"lat":32.85,"lng":-97.05,"count":593,"dist_mi":809},{"lat":32.85,"lng":-97.35,"count":536,"dist_mi":820},{"lat":27.3,"lng":-80.4,"count":624,"dist_mi":1087},{"lat":40.35,"lng":-75.9,"count":542,"dist_mi":619},{"lat":41.55,"lng":-73.05,"count":574,"dist_mi":751},{"lat":34.2,"lng":-118.05,"count":396,"dist_mi":1728},{"lat":37.65,"lng":-97.35,"count":495,"dist_mi":593},{"lat":28.35,"lng":-81.3,"count":416,"dist_mi":1000},{"lat":37.5,"lng":-77.4,"count":619,"dist_mi":622},{"lat":45.0,"lng":-93.45,"count":430,"dist_mi":363},{"lat":37.65,"lng":-121.05,"count":571,"dist_mi":1787},{"lat":39.3,"lng":-84.3,"count":354,"dist_mi":249},{"lat":26.55,"lng":-81.9,"count":587,"dist_mi":1108},{"lat":47.55,"lng":-122.4,"count":582,"dist_mi":1736},{"lat":36.0,"lng":-95.85,"count":434,"dist_mi":600},{"lat":39.75,"lng":-75.6,"count":597,"dist_mi":645},{"lat":32.85,"lng":-97.5,"count":435,"dist_mi":825},{"lat":43.05,"lng":-76.2,"count":617,"dist_mi":588},{"lat":30.6,"lng":-96.3,"count":391,"dist_mi":916},{"lat":41.7,"lng":-88.35,"count":339,"dist_mi":39},{"lat":33.9,"lng":-84.15,"count":566,"dist_mi":583},{"lat":39.15,"lng":-94.5,"count":384,"dist_mi":407},{"lat":30.15,"lng":-81.75,"count":376,"dist_mi":874},{"lat":39.15,"lng":-76.8,"count":587,"dist_mi":599},{"lat":45.15,"lng":-93.3,"count":595,"dist_mi":363},{"lat":33.45,"lng":-111.6,"count":504,"dist_mi":1428},{"lat":40.65,"lng":-112.05,"count":580,"dist_mi":1267},{"lat":42.3,"lng":-83.55,"count":542,"dist_mi":211},{"lat":29.7,"lng":-95.1,"count":429,"dist_mi":939},{"lat":29.55,"lng":-98.7,"count":315,"dist_mi":1052},{"lat":29.55,"lng":-98.25,"count":568,"dist_mi":1038},{"lat":39.9,"lng":-82.95,"count":555,"dist_mi":280},{"lat":33.9,"lng":-84.6,"count":589,"dist_mi":575},{"lat":38.7,"lng":-77.25,"count":445,"dist_mi":589},{"lat":35.1,"lng":-106.65,"count":428,"dist_mi":1127},{"lat":37.95,"lng":-121.35,"count":557,"dist_mi":1796},{"lat":40.65,"lng":-73.35,"count":518,"dist_mi":746},{"lat":40.8,"lng":-96.6,"count":563,"dist_mi":471},{"lat":41.55,"lng":-87.75,"count":545,"dist_mi":24},{"lat":28.05,"lng":-82.65,"count":545,"dist_mi":996},{"lat":45.0,"lng":-93.0,"count":507,"dist_mi":345},{"lat":28.05,"lng":-81.75,"count":449,"dist_mi":1011},{"lat":33.0,"lng":-117.15,"count":403,"dist_mi":1721},{"lat":40.2,"lng":-74.7,"count":477,"dist_mi":683},{"lat":40.2,"lng":-75.0,"count":539,"dist_mi":668},{"lat":41.55,"lng":-87.45,"count":516,"dist_mi":24},{"lat":33.75,"lng":-118.35,"count":431,"dist_mi":1757},{"lat":26.1,"lng":-80.1,"count":304,"dist_mi":1171},{"lat":30.6,"lng":-97.65,"count":310,"dist_mi":957},{"lat":41.55,"lng":-88.2,"count":483,"dist_mi":37},{"lat":42.15,"lng":-88.05,"count":479,"dist_mi":29},{"lat":35.85,"lng":-78.9,"count":523,"dist_mi":627},{"lat":33.45,"lng":-112.35,"count":332,"dist_mi":1465},{"lat":36.15,"lng":-86.85,"count":408,"dist_mi":398},{"lat":40.05,"lng":-74.25,"count":473,"dist_mi":709},{"lat":26.25,"lng":-81.75,"count":381,"dist_mi":1130},{"lat":41.55,"lng":-87.9,"count":312,"dist_mi":27},{"lat":28.05,"lng":-82.8,"count":333,"dist_mi":993},{"lat":40.5,"lng":-111.9,"count":436,"dist_mi":1261},{"lat":33.6,"lng":-117.6,"count":566,"dist_mi":1724},{"lat":36.15,"lng":-95.85,"count":526,"dist_mi":592},{"lat":34.05,"lng":-84.3,"count":507,"dist_mi":570},{"lat":41.85,"lng":-88.2,"count":527,"dist_mi":29},{"lat":28.35,"lng":-81.45,"count":480,"dist_mi":997},{"lat":40.8,"lng":-73.2,"count":510,"dist_mi":751},{"lat":47.1,"lng":-122.4,"count":374,"dist_mi":1736},{"lat":38.55,"lng":-90.45,"count":418,"dist_mi":274},{"lat":37.95,"lng":-122.55,"count":490,"dist_mi":1857},{"lat":40.35,"lng":-80.1,"count":356,"dist_mi":406},{"lat":39.45,"lng":-76.8,"count":476,"dist_mi":591},{"lat":38.85,"lng":-77.55,"count":514,"dist_mi":570},{"lat":43.05,"lng":-89.4,"count":506,"dist_mi":121},{"lat":29.55,"lng":-95.55,"count":337,"dist_mi":960},{"lat":39.75,"lng":-86.25,"count":397,"dist_mi":164},{"lat":42.15,"lng":-71.1,"count":331,"dist_mi":847},{"lat":42.75,"lng":-73.8,"count":525,"dist_mi":708},{"lat":37.05,"lng":-76.35,"count":544,"dist_mi":687},{"lat":39.9,"lng":-104.85,"count":526,"dist_mi":908}]

      const ORIGIN = { lat: 41.85, lng: -87.65 }
      const maxCount = Math.max(...ARC_DATA.map(d => d.count))

      // ── ANIMATION STATE ────────────────────────────────────────────────────
      let arcs = []
      let arcIdx = 0
      let animating = false
      let startTime = null
      const TOTAL_DURATION = 18000
      const FADE_DURATION = 3000

      function latLngToCanvas(lat, lng) {
        const pt = map.latLngToContainerPoint([lat, lng])
        return { x: pt.x, y: pt.y }
      }

      function drawArc(ctx, from, to, progress, alpha, color) {
        const mx = (from.x + to.x) / 2
        const my = (from.y + to.y) / 2
        const dx = to.x - from.x
        const dy = to.y - from.y
        const len = Math.sqrt(dx * dx + dy * dy)
        const cx = mx - dy * 0.35
        const cy = my + dx * 0.35

        ctx.beginPath()
        ctx.globalAlpha = alpha

        // Draw partial bezier up to progress
        const steps = Math.max(20, Math.floor(len / 8))
        const end = Math.floor(progress * steps)
        if (end < 1) return

        let px = from.x, py = from.y
        ctx.moveTo(px, py)
        for (let i = 1; i <= end; i++) {
          const t = i / steps
          const nx = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x
          const ny = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y
          ctx.lineTo(nx, ny)
          px = nx; py = ny
        }
        ctx.strokeStyle = color
        ctx.lineWidth = 1.2
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      function drawDot(ctx, pt, alpha, color) {
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = alpha * 0.9
        ctx.fill()
        ctx.globalAlpha = 1
      }

      function render(timestamp) {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const globalProgress = Math.min(elapsed / TOTAL_DURATION, 1)

        // How many arcs to show
        const totalArcs = ARC_DATA.length
        const targetIdx = Math.floor(globalProgress * totalArcs)

        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const originPt = latLngToCanvas(ORIGIN.lat, ORIGIN.lng)

        // Draw origin pulse
        const pulse = (Math.sin(timestamp / 400) + 1) / 2
        ctx.beginPath()
        ctx.arc(originPt.x, originPt.y, 6 + pulse * 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,166,35,${0.3 + pulse * 0.3})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(originPt.x, originPt.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = '#f5a623'
        ctx.fill()

        // Draw all arcs up to targetIdx
        for (let i = 0; i < Math.min(targetIdx + 1, totalArcs); i++) {
          const d = ARC_DATA[i]
          const from = originPt
          const to = latLngToCanvas(d.lat, d.lng)
          const intensity = d.count / maxCount
          const color = `rgba(245,${Math.floor(100 + intensity * 66)},35`

          const arcProgress = i < targetIdx ? 1 : (globalProgress * totalArcs - targetIdx)

          // Fade in based on age
          let alpha = intensity * 0.6 + 0.15
          if (elapsed > TOTAL_DURATION - FADE_DURATION) {
            const fadeProgress = (elapsed - (TOTAL_DURATION - FADE_DURATION)) / FADE_DURATION
            alpha *= (1 - fadeProgress * 0.7)
          }

          drawArc(ctx, from, to, arcProgress, alpha, `${color},${alpha})`)
          if (arcProgress >= 1) {
            drawDot(ctx, to, alpha, `${color},${alpha * 1.5})`)
          }
        }

        // Update stats
        document.getElementById('stat-arcs').textContent = Math.min(targetIdx, totalArcs).toLocaleString()

        if (elapsed < TOTAL_DURATION + 1000) {
          animFrameId = requestAnimationFrame(render)
        } else {
          // Loop
          startTime = null
          animFrameId = requestAnimationFrame(render)
        }
      }

      function startAnimation() {
        if (animFrameId) cancelAnimationFrame(animFrameId)
        startTime = null
        animFrameId = requestAnimationFrame(render)
      }

      // Start after map tiles load
      map.once('load', startAnimation)
      setTimeout(startAnimation, 1200)

      document.getElementById('replay-btn').addEventListener('click', startAnimation)
    }

    return () => {
      // Cleanup on unmount
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#0a0a0f', overflow: 'hidden' }}>

      {/* Map */}
      <div ref={mapRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Arc Canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 400 }}
      />

      {/* Header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 600,
        padding: '16px 28px 14px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 65%, transparent)',
        display: 'flex', flexDirection: 'column', gap: 5
      }}>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif", fontWeight: 900,
          fontSize: 'clamp(13px, 1.7vw, 22px)', letterSpacing: '0.12em',
          color: '#f5a623', textShadow: '0 0 18px rgba(245,166,35,0.35)',
          whiteSpace: 'nowrap', margin: 0
        }}>
          AG · ARC FLOW VISUALIZATION
        </h1>
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif", fontWeight: 700,
          fontSize: 'clamp(10px, 1.25vw, 16px)', letterSpacing: '0.10em',
          color: '#e8dcc8', opacity: 0.82, whiteSpace: 'nowrap', margin: 0
        }}>
          SAMPLE E-COMMERCE FULFILLMENT NETWORK
        </h2>
      </div>

      {/* Replay button */}
      <button id="replay-btn" style={{
        position: 'absolute', top: 20, right: 24, zIndex: 600,
        background: 'transparent', border: '1px solid rgba(245,166,35,0.4)',
        color: '#f5a623', fontFamily: "'Share Tech Mono', monospace",
        fontSize: 11, letterSpacing: '0.12em', padding: '7px 16px',
        cursor: 'pointer'
      }}>
        [ REPLAY ]
      </button>

      {/* Stats panel */}
      <div style={{
        position: 'absolute', bottom: 36, left: 24, zIndex: 600,
        background: 'rgba(10,10,20,0.88)', border: '1px solid rgba(245,166,35,0.2)',
        borderLeft: '3px solid #f5a623', padding: '16px 20px', minWidth: 210,
        backdropFilter: 'blur(6px)'
      }}>
        {[
          { label: 'Data Points', value: '749,978', id: 'stat-total' },
          { label: 'Locations Plotted', value: '0', id: 'stat-arcs' },
          { label: 'Origin', value: 'Chicago IL', id: 'stat-origin' },
        ].map(s => (
          <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20, marginBottom: 9 }}>
            <span style={{ fontSize: 9, letterSpacing: '0.14em', color: '#7a7060', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>
              {s.label}
            </span>
            <span id={s.id} style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 14, fontWeight: 700, color: '#f5a623', textShadow: '0 0 8px rgba(245,166,35,0.35)' }}>
              {s.value}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{
        position: 'absolute', bottom: 36, right: 24, zIndex: 600,
        background: 'rgba(10,10,20,0.88)', border: '1px solid rgba(245,166,35,0.15)',
        padding: '14px 18px', backdropFilter: 'blur(6px)',
        fontSize: 10, letterSpacing: '0.08em', color: '#7a7060',
        fontFamily: "'Share Tech Mono', monospace"
      }}>
        <div style={{ color: '#e8dcc8', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Arc Intensity</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
          <div style={{ width: 32, height: 3, borderRadius: 1, background: 'rgba(245,166,35,0.95)' }} />
          <span>High-density cluster</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
          <div style={{ width: 32, height: 2, borderRadius: 1, background: 'rgba(245,166,35,0.25)' }} />
          <span>Sparse area</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f5a623', boxShadow: '0 0 6px #f5a623', flexShrink: 0 }} />
          <span>Origin · Chicago IL</span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 700, height: 2, background: 'rgba(255,255,255,0.04)' }}>
        <div id="progress-bar" style={{ height: '100%', width: '0%', background: '#f5a623', boxShadow: '0 0 8px rgba(245,166,35,0.35)', transition: 'width 0.08s linear' }} />
      </div>

      {/* Google Fonts for Orbitron + Share Tech Mono */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        .leaflet-control-attribution { display: none !important; }
        .leaflet-control-zoom { display: none !important; }
      `}</style>
    </div>
  )
}