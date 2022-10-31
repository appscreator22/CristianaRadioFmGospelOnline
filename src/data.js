import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio eternidad",
            artist: "Radioeternidad",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://ss.redradios.net:8001/stream?type=.mp3%3Fver%3D395244 ",
            active: true,
        },
        {
            name:"Kyrios Radio",
            artist: "KyriosRadio",
            cover: "https://img.freepik.com/vector-gratis/concepto-marco-neon-aire_52683-52393.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://radiolatina.info/9946/stream",
            active: false,
        },
        {
            name:"Dynamis Radio",
            artist: "DynamisRadio",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://control.streaming-pro.com:8014/stream",
            active: false,
        },
        {
            name:"VCOnline",
            artist: "VCOnline",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://sonic.streamingchilenos.com/9954/;",
            active: false,
        },
        {
            name:"Radio Adventista",
            artist: "RadioAdventista",
            cover: "https://img.freepik.com/foto-gratis/fondo-musica-o-podcast-auriculares-taza-cafe-mesa-azul-plana-vista-superior-plana_501050-983.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://n06.radiojar.com/aesy2chkb?rj-ttl=5&rj-tok=AAABhCt6vtMAETr2pybiKA2G9A",
            active: false,
        },
        {
            name:"Radio Amistad",
            artist: "Radio Amistad",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://srv7031.dns-lcinternet.com/8010/stream",
            active: false,
        },
        {
            name:"Radio 31",
            artist: "Radio31",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://streams.radio.co/se2fe41ec1/listen",
            active: false,
        },
        {
            name:"Pura Vida",
            artist: "PuraVida",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://turbo.2cdn.eu/s1/9778/stream/1/",
            active: false,
        },
        {
            name:"Nuevo Tiempo",
            artist: "Nuevotiempo",
            cover: "https://img.freepik.com/vector-gratis/marco-neon-vivo-aire_23-2148758076.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://n06.radiojar.com/aesy2chkb?rj-ttl=5&rj-tok=AAABg_feqrgA7T41P_KWhE8jBQ",
            active: false,
        },
    ];
}

export default chillHop;


