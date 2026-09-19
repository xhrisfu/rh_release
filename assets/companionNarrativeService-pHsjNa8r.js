import{a as M,$ as b}from"./aiService-Cj40ulS9.js";import{f as j,c as I,K as z,H as J,pt as W,w as m,x as A,y as Q,E as G,L as U,hi as V,V as H,tj as K,aU as C}from"./main-BLsvJD4Q.js";function N(e){return e.worldPackId==="ruthless-heavens"||e.cultivation!=null}function B(e){return e?e.trim().replace(/[（(][^）)]*[）)]/g,"").replace(/["'“”‘’`]/g,"").replace(/[·•・\-—_]/g,"").replace(/\s+/g,"").toLowerCase():""}function P(e){return typeof e!="string"?"":e.replace(/\r\n/g,`
`).trim()}function T(e){const t=e||"",n=t.indexOf("{");if(n<0)return null;let s=0,r=!1,a=!1;for(let o=n;o<t.length;o++){const i=t[o];if(a){a=!1;continue}if(i==="\\"){a=!0;continue}if(i==='"'){r=!r;continue}if(!r){if(i==="{"){s+=1;continue}if(i==="}"){if(s-=1,s===0)return t.slice(n,o+1);continue}}}return null}function _(e){const t=P(e).replace(/^```(?:json|JSON)?\s*/i,"").replace(/\s*```$/,"").trim();if(!t)return null;const n=[t,T(t)].filter(s=>!!s);for(const s of n)try{const r=JSON.parse(s);if(r&&typeof r=="object"&&!Array.isArray(r))return r}catch{}return null}function E(e,t){for(const n of t){const s=e[n];if(s&&typeof s=="object"&&!Array.isArray(s))return s}return null}function S(e,t){for(const n of t){const s=e[n];if(typeof s=="string"&&s.trim())return s.trim()}return""}function O(e,t){const n=P(e);if(!n)return!1;if(/^\s*\{[\s\S]*"text"\s*:/.test(n))return!0;const s=/(清晨|晨光|客栈|酒馆|窗外|床头|海风|苏醒|第一缕阳光|新的一天)/.test(n),r=(n.match(/你/g)||[]).length,a=!!t&&n.includes(t);return s&&r>=6&&!a}function D(e,t){return z(t)?/(相识之初|与[^，。；\n]{1,16}相识后|初识|结识后|初次见面|第一次见面)/.test(e):!1}function q(e,t){if(!e)return!0;const n=(e.name||"").trim(),s=(e.description||"").trim();return!!(!n||!s||n===`${t}的未竟之事`||/追查一条与.+相关的线索/.test(s))}function X(e,t,n){return N(t)?{backstory:C(e.backstory,n),personalQuest:{name:C(e.personalQuest.name,n),description:C(e.personalQuest.description,n),maxStage:e.personalQuest.maxStage}}:e}function Y(e,t,n){const s=_(e);if(!s)return null;const r=S(s,["backstory","backgroundStory","background","story","个人背景故事"]),a=P(r);if(a.length<80||O(a,t)||D(a,n))return null;const o=E(s,["personalQuest","quest","任务","个人任务"]),i=o?S(o,["name","title","任务名"]):"",f=o?S(o,["description","desc","任务描述"]):"",g=(o==null?void 0:o.maxStage)??(o==null?void 0:o.max_stage)??4,d=Math.max(2,Math.min(5,Math.floor(Number(g)||4)));return i.length<2||f.length<12?null:{backstory:a.slice(0,420),personalQuest:{name:i.slice(0,42),description:f.slice(0,220),maxStage:d}}}function Z(e,t,n,s){var v,w;const r=N(e),a=r?"ruthless-heavens":e.worldPackId,o=J(a,t.relationship),i=r?`与主角羁绊：${o.displayName}（系统键：${t.relationship}）`:`与主角关系：${t.relationship}`,f=W(e,{heading:"## 主角身份契约（持续生效）",includeContinuityRules:!0,compact:!0}),g=r?`${m(a,e.race).displayName} / ${A(a,e.class).displayName}`:`${e.race} ${e.class}`,d=r&&e.background?Q(a,e.background).displayName:e.background||"未知",p=[`姓名：${e.name}`,`性别：${e.gender}`,r?`血脉/根本法：${g}`:`种族/职业：${g}`,r?`凡尘履历：${d}`:`背景：${d}`,`阵营：${e.alignment||"未知"}`,r?`祖地/落点：${e.birthplace||"未知"}`:`出生地：${e.birthplace||"未知"}`,`外貌：${e.appearance||"未设定"}`,r?`主角入道前尘：${(e.backstory||"").trim()||"无"}`:`主角背景故事：${(e.backstory||"").trim()||"无"}`],y=r?`${m(a,t.race).displayName} / ${A(a,t.class).displayName}`:`${t.race} ${t.class}`,h=r&&t.background?Q(a,t.background).displayName:(t.background||"").trim()||"未设定",u=(t.daoPathId||((v=s==null?void 0:s.cultivation)==null?void 0:v.daoPathId)||(s==null?void 0:s.daoPathId)||"").trim(),$=u?((w=G(u))==null?void 0:w.name)||u:"未择道途",l=(t.rhDaoPathOriginNote||(s==null?void 0:s.rhDaoPathOriginNote)||"").trim(),k=[`姓名：${t.name}`,`性别：${t.gender||"未知"}`,r?`血脉/根本法：${y}`:`种族/职业：${y}`,r?`凡尘履历：${h}`:`背景：${h}`,...r?[`道途：${$}`]:[],...r&&l?[`择道注记：${l}`]:[],i,`外貌：${(t.appearance||"").trim()||"未设定"}`,`设定简介：${t.description||"无"}`,`性格：${(t.personality||"").trim()||"无"}`,`喜好：${Array.isArray(t.likes)&&t.likes.length?t.likes.join("、"):"无"}`,`厌恶：${Array.isArray(t.dislikes)&&t.dislikes.length?t.dislikes.join("、"):"无"}`,r?`已有入道前尘：${(t.backstory||"").trim()||"无"}`:`已有关联故事：${(t.backstory||"").trim()||"无"}`,`当前任务（若有）：${n?`${n.name} - ${n.description}`:"无"}`],c=r?"同道":"队友",R=r?U(t.relationship):"",x=[`请基于以下主角与${c}设定，生成${c}「${t.name}」的个人背景故事和个人任务。`,"","【主角信息】",...p,...f?["",f]:[],"",`【${c}信息：${t.name}】`,...k,...R?["",R]:[]].join(`
`),F=r?`你是修仙 CRPG 编剧，负责写「同道入道前尘 + 个人未竟之事」。
必须只输出一个JSON对象，不要输出代码块、注释、解释文本。
输出格式：
{
  "backstory": "中文正文，180-320字，第三人称",
  "personalQuest": {
    "name": "任务名（8-20字）",
    "description": "任务描述（40-120字）",
    "maxStage": 4
  }
}
硬性规则：
1) 必须严格符合「与主角羁绊」策略表；凡禁止初识的羁绊不得写相识/初识/第一次见面；义亲、血亲禁止情色与双修。
2) 前尘与任务须体现 userPrompt 中列出的 3 个叙事情节点梗概；任务描述对齐第一阶段目标。
3) 禁止写开局场景描写（如清晨、客栈醒来、你睁开眼等）。
4) 禁止第二人称叙事（不要用「你」作为主叙述对象）。
5) 同道对主角的称呼、第一印象、护道心、轻视、依赖或戒备，必须体现「主角身份契约」中的外貌与背景锚点。
6) 任务必须可推进、可落地，围绕因果、宗门、劫数、灵脉等修仙语境，不要空泛口号。
7) ${H()}

${K()}`:`你是CRPG编剧，负责写“队友个人背景故事 + 个人任务”。
必须只输出一个JSON对象，不要输出代码块、注释、解释文本。
输出格式：
{
  "backstory": "中文正文，180-320字，第三人称",
  "personalQuest": {
    "name": "任务名（8-20字）",
    "description": "任务描述（40-120字）",
    "maxStage": 3
  }
}
硬性规则：
1) 必须严格符合“与主角关系”。若关系是血亲或恋人，禁止写“相识/初识/第一次见面”。
2) 禁止写开局场景描写（如清晨、客栈醒来、你睁开眼等）。
3) 禁止第二人称叙事（不要用“你”作为主叙述对象）。
4) 队友对主角的称呼、第一印象、保护欲、轻视、依赖或戒备，必须体现“主角身份契约”中的外貌与背景锚点。
5) 任务必须可推进、可落地，不要空泛口号。`,L=I();return{userPrompt:r?V(x,L.gameSettings,e):x,systemPrompt:F}}async function tt(e,t,n,s={}){const r=P(t.backstory),a=!!r&&!O(r,t.name)&&!D(r,t.relationship),o=s.forceBackstoryRegeneration?!0:!a,i=s.forceQuestRegeneration?!0:!(n!=null&&n.personalQuest);if(!o&&!i)return!1;const{userPrompt:f,systemPrompt:g}=Z(e,t,n==null?void 0:n.personalQuest,n),d=s.logPrefix||"[队友叙事]";let p=null,y="";for(let l=0;l<2&&!p;l++){const k=l===0?"":`

上一次输出不符合格式。请这次严格只输出合法 JSON 对象，不要任何额外文本。`;try{const c=await M.generateFromMessages(b({systemPrompt:g,includeCharacterContext:!1,includeRecentContext:!1,userMessage:`${f}${k}`}),"creation",{skipUndoSnapshot:!0});y=c,p=Y(c,t.name,t.relationship)}catch(c){console.warn(`${d} ${t.name} 生成失败:`,c)}}if(!p)return y&&console.warn(`${d} ${t.name} 输出解析失败，保留现有内容。原始输出片段:`,y.slice(0,220)),!1;const h=I(),u=X(p,e,h.gameSettings);let $=!1;if(o&&(t.backstory=u.backstory,$=!0,n&&(n.backstory=u.backstory,n.updatedAt=new Date)),n&&i){const l=n.personalQuest,k=N(e);n.personalQuest={id:(l==null?void 0:l.id)||`quest-${n.id}`,name:u.personalQuest.name,description:u.personalQuest.description,stage:(l==null?void 0:l.stage)??0,maxStage:k?4:p.personalQuest.maxStage,completed:(l==null?void 0:l.completed)??!1},n.updatedAt=new Date,$=!0}return $&&(e.updatedAt=new Date),$}async function rt(e,t={}){const n=e.startingCompanions||[];if(n.length===0)return;const s=j(),r=new Map;for(const a of[...s.partyMembers,...s.campMembers])r.set(B(a.name),a);for(const a of n){const o=B(a.name);if(!o)continue;const i=r.get(o);await tt(e,a,i,{forceQuestRegeneration:t.forceQuestRegeneration?!(i!=null&&i.personalQuest)||q(i.personalQuest,a.name):!1,logPrefix:"[开局队友叙事]"})}}export{rt as e,tt as s};
