// language: lang-js
const{token:token,trigger:trigger,nickname:nickname}=require("./config.json"),request=require("request"),colors=require("colors"),{Client:Client}=require("discordjs-selfv11"),client=new Client;function iniciarScript(){function e(){const e=`${function(){const e=(new Date).getHours();return e>=6&&e<12?"Bom dia":e>=12&&e<18?"Boa tarde":"Boa noite"}()}, ${client.user.tag}!`;console.log(`\n        \n        ${"██████╗  ██████╗  ██████╗██╗  ██╗███████╗████████╗ ██████╗  ██████╗ ██╗     ███████╗".brightGreen}\n        ${"██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝".brightGreen}\n        ${"██████╔╝██║   ██║██║     █████╔╝ █████╗     ██║   ██║   ██║██║   ██║██║     ███████╗".brightGreen}\n        ${"██╔══██╗██║   ██║██║     ██╔═██╗ ██╔══╝     ██║   ██║   ██║██║   ██║██║     ╚════██║".brightGreen}\n        ${"██║  ██║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║   ╚██████╔╝╚██████╔╝███████╗███████║".brightGreen}\n        ${"╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝".brightGreen}\n        \n        ${"Version 2.0 Stable | https://github.com/myersdc | Application Free | Clear DM".brightYellow}\n        \n        ────────────────────────────────────────────────────────────────────────────────────\n        \n        [✨] ${e.green} | Digite: '${trigger}' em uma DM para começar o processo. [✨]\n        `.brightYellow)}console.clear(),client.on("ready",(async()=>{console.clear(),process.title="\n    Rocketools | DM Clear",e()})),client.on("message",(async n=>{n.author.id==client.user.id&&n.content.trim()===trigger&&(n.delete(),function(n,o,r){const t=async e=>new Promise((n=>setTimeout(n,e))),i={Authorization:n},s=n=>{request({url:`https://discord.com/api/v9/channels/${r}/messages${n?`?before=${n}`:""}`,headers:i,json:!0},(async(c,a,l)=>{if(void 0===a)return s(n);if(202===a.statusCode){const e=a.retry_after;return console.log(`Channel not indexed. Waiting ${e}ms to index messages.`),await t(e),s(n)}if(200!==a.statusCode)return console.log("Waiting for API response!",l);for(let e in l){let n=l[e];n.author.id===o&&3!==n.type&&await new Promise((e=>{const o=()=>{request.delete({url:`https://discord.com/api/v9/channels/${r}/messages/${n.id}`,headers:i,json:!0},(async(n,r,i)=>{if(n)return o();if(i&&void 0!==i.retry_after){const e=i.retry_after;return console.log(`⏳ Limit Exceeded: Waiting ${e}ms before continuing...`.brightGreen),await t(1e3*e),o()}e()}))};o()}))}0===l.length?(console.clear(),e(),console.log("Trash emptied!!")):s(l[l.length-1].id)}))};s()}(token,client.user.id,n.channel.id),console.log("Trigger detected successfully ✅"))})),client.on("warn",(()=>{})),client.on("error",(()=>{})),client.login(token)}process.on("unhandledRejection",(()=>{})),process.on("uncaughtException",(()=>{})),process.on("uncaughtRejection",(()=>{})),process.warn=()=>{},client.on("error",(()=>{})),client.on("warn",(()=>{})),console.log("Carregando script..."),setTimeout((()=>{console.log("Carregando API..."),setTimeout((()=>{console.log("Buscando por atualizações..."),iniciarScript()}),2e3)}),2e3);
