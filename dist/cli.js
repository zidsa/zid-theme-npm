!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("archiver")):"function"==typeof define&&define.amd?define(["archiver"],o):"object"==typeof exports?exports.cli=o(require("archiver")):e.cli=o(e.archiver)}(global,(function(e){return o={739:(e,o,r)=>{const t=r(798),l=r(254),n=r(647),a=r(596);e.exports=e=>{let o=e.slice(2);o.length<1&&(l.log(),l.log("no argument passed\n","red"),l.log("available commands:\n"),a(),process.exit(9)),t[o[0]]||(l.log(),l.log(`Invalid argument ${o[0]}\n`,"red"),l.log("available commands:\n"),a(),process.exit(9)),"build"==o[0]?(build_args=n(o),t.build(build_args.build_name,build_args.build_path)):"help"==o[0]&&t.help()}},674:e=>{e.exports={red:"[1;31m ",green:"[1;32m ",yellow:"[1;33m ",blue:"[1;34m ",purple:"[1;35m ",cyan:"[1;36m "}},254:(e,o,r)=>{const t=r(674),l=(e="",o="green")=>{let r=t[o]+`  ${e}`;console.log(r)},n={log:l,error:e=>{l(),l(`${e}\n`,"red"),process.exit(9)}};e.exports=n},234:(e,o,r)=>{const t=r(747),l=r(254);e.exports=e=>{t.unlinkSync(e),l.log(`.DS_Store deleted - path: ${e}\n\n`,"yellow")}},596:(e,o,r)=>{const t=r(254),l=r(798);e.exports=()=>{for(command in l)t.log(`• ${command}`);t.log()}},312:e=>{e.exports={root:["query.json","layout.zid","header.zid","footer.zid","templates","modules","locals","common","assets"],templates:[".zid"],common:[".zid",".html"],modules:[".zid",".html"],assets:[".js",".ts",".css",".scss",".map",".png",".jpg",".jpeg",".gif",".svg",".woff",".woff2",".otf",".ttf",".eot"],locals:[".json"]}},647:(e,o,r)=>{const t=r(622),l=r(254);e.exports=e=>{e[1]&&"--name"!==e[1]&&"--path"!==e[1]&&l.error(`Invalid Argument ${e[1]}`),e[3]&&"--name"!==e[3]&&"--path"!==e[3]&&l.error(`Invalid Argument ${e[3]}`),"--name"!=e[2]&&"--path"!=e[2]||l.error(`Invalid Argument ${e[2]} for ${e[1]}`),"--name"!=e[4]&&"--path"!=e[4]||l.error(`Invalid Argument ${e[4]} for ${e[3]}`);let o=process.cwd(),r=t.basename(process.cwd());for(let l=1;l<e.length;l++)"--name"==e[l]&&e[l+1]?r=e[l+1]:"--path"==e[l]&&e[l+1]&&(o=t.resolve(process.cwd(),e[l+1]||"."),r=t.basename(o));return{build_path:o,build_name:r}}},290:(e,o,r)=>{const t=r(622);e.exports=(e,o)=>{let r=t.extname(e);return!!o.includes(r)||r}},971:e=>{e.exports=(e,o)=>{let r=[];for(let t=0;t<o.length;t++)e.includes(o[t])||r.push(o[t]);return 0===r.length||JSON.stringify(r)}},790:(e,o,r)=>{const t=r(747),l=r(622),n=r(312),a=r(234),s=r(290),i=r(971);r(254),e.exports=e=>new Promise(((o,r)=>{let d=t.readdirSync(e),p=i(d,n.root);if(!0!==p)return r(`Unable to find:\n   ${p}\n\n   - Make sure theme path is correct or add required files\n`);for(const o of d){let i={filename:o,path:l.resolve(e,o)},d=null;if(".DS_Store"==o?a(i.path):d=t.lstatSync(i.path),d&&d.isDirectory()&&n.root.includes(o)){let e=t.readdirSync(i.path);for(const t of e){if(".DS_Store"==t){a(l.resolve(i.path,t));continue}let e=s(t,n[o]);if(!0!==e)return r(`Invalid extension ${e}\n   ${t} in ${o} folder\n`)}}}return o("Theme validated")}))},123:(e,o,r)=>{const t=r(747),l=r(622),n=r(543),a=r(254),s=r(790),i=r(312),d=n("zip");e.exports=async(e,o)=>{try{let e=await s(o);a.log(e)}catch(e){a.error(e)}const r=t.createWriteStream(l.resolve(o,`${e}.zip`));for(folder in r.on("close",(function(){a.log(d.pointer()+" total bytes"),a.log(`${e}.zip successfully created!\n`)})),d.pipe(r),["layout.zid","header.zid","footer.zid"].forEach((e=>{d.append(t.createReadStream(l.resolve(o,e)),{name:e})})),i)if("root"!==folder){let e=t.readdirSync(l.resolve(o,folder));d.append(null,{name:`${folder}/`}),e.forEach((e=>{let r=l.resolve(o,folder,e);d.append(t.createReadStream(r),{name:`${folder}/${e}`})}))}d.finalize()}},373:(e,o,r)=>{const t=r(254),l=r(123);e.exports=(e,o)=>{t.log(),l(e,o).then((e=>t.log(e))).catch((e=>t.error(e)))}},798:(e,o,r)=>{const t=r(373),l=r(371);e.exports={build:t,help:l}},371:(e,o,r)=>{const t=r(254);e.exports=()=>{t.log(),t.log("help:\n","cyan"),t.log("available commands:\n","cyan"),t.log("•  build args[ --name optional => default:cwd name, --path optional => default:cwd ]"),t.log("   example-1: zid-theme build --name omar --path .","yellow"),t.log("   example-2: zid-theme build\n\n","yellow"),t.log("•  help"),t.log("   example: zid-theme help\n","yellow")}},543:o=>{"use strict";o.exports=e},747:e=>{"use strict";e.exports=require("fs")},622:e=>{"use strict";e.exports=require("path")}},r={},function e(t){if(r[t])return r[t].exports;var l=r[t]={exports:{}};return o[t](l,l.exports,e),l.exports}(739);var o,r}));