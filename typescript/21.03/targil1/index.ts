import YouTube from "./cls/YouTube";
import axios from "axios";

console.log("testing the youtube class");
let mySongs = new YouTube();

mySongs.addSong("https://www.youtube.com/watch?v=R0ebIzABQm0");
mySongs.addSong("https://www.youtube.com/watch?v=W3q8Od5qJio");

// console.log(mySongs.getSongList());
// console.log("========================================================");
// console.log(mySongs.getShortList("ABQ"));

let mySongs2 = new YouTube();

//cloning
mySongs.getSongList().map((item) => mySongs2.addSong(item));

mySongs2.addSong("Tiz mena pidmanula, Tiz mena pidvila");

console.log("\n\n mySongs");
console.log(mySongs.getSongList());
console.log("=======================");
console.log("mySongs2");
console.log(mySongs2.getSongList());

const apiKey = "AIzaSyCTV38_t5fqYC5joDmQZdE_fhB8n7O4zxQ";
const songIdentifier = "R0ebIzABQm0";
const url=`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`

