import{a as P,e as W,f as V}from"./aiService-Cj40ulS9.js";import{hB as O,c as E,hC as Z,J as q,bT as m,hD as Q,hy as K,u as H,w as R,x as C,y as ee,hE as te,f as se,hr as ne,hi as L,a as oe,b as ie,g0 as ae,hF as re,hG as ce,d6 as ue,hH as le}from"./main-BLsvJD4Q.js";import{u as fe}from"./sessionRecapStore-tw6_aY_F.js";import{n as de}from"./rhRelationshipSettlementService-DHuNu7GE.js";const M=["npcText","npc_text","npc","dialogueText","responseText","NPCTEXT"],X=["choices","dialogueChoices","options","CHOICES","OPTIONS"],z=["isEnd","is_end","end","ISEND","END"],ge=["reactionText","reaction_text","reaction","REACTIONTEXT","REACTION"],he=["approvalChange","approval_change","approvalDelta","approval","approvalChance","APPROVALCHANGE","APPROVALCHANCE"],pe=["nextNodeId","next_node_id","nextDialogueHint","next_dialogue_hint","nextHint","NEXTNODEID","NEXTDIALOGUEHINT","NEXTHINT"],$e=["id","choiceId","choice_id","ID","CHOICEID"],Se=["text","label","content","TEXT","LABEL"],Ie=["relationshipIntent","relationship_intent","relationIntent","intent","RELATIONSHIPINTENT"],w=`## 世界观硬约束
- 默认场景为被遗忘国度的剑湾，时间锚点为 1496 DR。
- 对话语汇必须贴合 D&D / 剑湾语境；优先使用“烈焰拳、城门守卫、领主联盟、竖琴手、赞塔林、酒保、旅店老板、商队、教团、派系”等世界内称呼。
- 禁止混入武侠/仙侠/古风官场词，如“官府、衙门、江湖、宗门、掌门、朝廷、飞升”等，除非当前上下文已经明确出现该词。
- 禁止出现现代网络口语、跳出角色的说明、AI 自我声明或任何 OOC 表达。
- 如果世界上下文没有明确给出某个阵营、制度、地名或历史，不要临时脑补。`,G=`## 世界观硬约束
- 默认场景为残曜天边陲修仙世界（宗门、坊市、灵脉、秘境、散修、妖兽、灵石、灵晶）。
- 对话语汇须贴合修仙玄幻：道友、前辈、执事、师承、境界、道号、论道、闭关、机缘、妖核、宗门规矩、护山大阵等。
- 勿称玩家为“冒险者”；可用散修、外门弟子、行脚修士等。
- 禁止使用剑湾/费伦专有地名与组织（博德之门、深水城、竖琴手、赞塔林、1496 DR、PHB branding 等）。
- 禁止现代网络口语、跳出角色的说明、AI 自我声明或任何 OOC 表达。
- 若上下文未明确给出势力、地名或历史，不要临时脑补。
- 对血脉/根本法的歧视或巴结须有利益理由（血脉谱系、师承门第、旧恩怨、兽潮立场）；禁止 FR 式种族政治默认。`;function Ne(e,n){return m(e,n)?G:w}function F(e,n){const i=E(),s=e.worldPackId!=null?e:(n==null?void 0:n.worldPackId)!=null?n:null;return Ne(i.gameSettings,s)}function xe(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function _(e,n=""){return typeof e=="string"?e:n}function Ee(e,n=0){const i=Number(e);return Number.isFinite(i)?i:n}function Te(e,n=!1){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const i=b(e);if(["true","1","yes","y"].includes(i))return!0;if(["false","0","no","n"].includes(i))return!1}return n}function b(e){return e.replace(/[\s_-]/g,"").toLowerCase()}function j(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function T(e,n){for(const s of n)if(e[s]!==void 0&&e[s]!==null)return e[s];const i=new Map;Object.entries(e).forEach(([s,t])=>{i.set(b(s),t)});for(const s of n){const t=i.get(b(s));if(t!=null)return t}}function me(e,n,i,s){if(n<0||e[n]!==i)return null;let t=0,a=!1,r=!1;for(let o=n;o<e.length;o+=1){const c=e[o];if(r){r=!1;continue}if(c==="\\"){r=!0;continue}if(c==='"'){a=!a;continue}if(!a){if(c===i){t+=1;continue}if(c===s&&(t-=1,t===0))return e.slice(n,o+1)}}return null}function B(e,n){const i=n.map(t=>j(t)).join("|"),s=e.match(new RegExp(`["']?(?:${i})["']?\\s*[:：]\\s*"((?:\\\\.|[^"\\\\])*)"`,"i"));if(!(s!=null&&s[1]))return"";try{return JSON.parse(`"${s[1]}"`)}catch{return s[1]}}function Re(e,n){const i=n.map(a=>j(a)).join("|"),s=e.match(new RegExp(`["']?(?:${i})["']?\\s*[:：]\\s*(true|false|1|0|"true"|"false")`,"i"));if(!(s!=null&&s[1]))return;const t=s[1].replace(/"/g,"").toLowerCase();return t==="true"||t==="1"}function _e(e,n){const i=n.map(o=>j(o)).join("|"),s=new RegExp(`["']?(?:${i})["']?\\s*[:：]\\s*\\[`,"i").exec(e);if(!s)return null;const t=e.indexOf("[",s.index);if(t<0)return null;const a=me(e,t,"[","]");if(!a)return null;const r=V(a);return Array.isArray(r)?r:null}function D(e){const n=W(e);if(n)return n;const i=B(e,M),s=B(e,ge),t=_e(e,X),a=Re(e,z);return!i&&!s&&!t&&a===void 0?null:{...i?{npcText:i}:{},...s?{reactionText:s}:{},...t?{choices:t}:{},...a!==void 0?{isEnd:a}:{}}}function Pe(e,n){if(!Array.isArray(e))return[];const i=[];return e.forEach((s,t)=>{const a=xe(s);if(!a)return;const r=_(T(a,Se),"").trim();if(!r)return;const o=n?_(T(a,pe),"").trim():"",c=Ee(T(a,he),0),f=T(a,Ie),g=typeof f=="string"?de(f,c):void 0;i.push({id:_(T(a,$e),`choice_${t+1}`),text:r,nextNodeId:o,effects:{approvalChange:c,...g?{relationshipIntent:g}:{}}})}),i}function y(e){return _(T(e,M),"").trim()}function A(e,n){return Pe(T(e,X),n)}function De(e){return Te(T(e,z),!1)}function v(){const e=oe(),n=ie(),i=fe(),s=e.state,t=[];t.push("# 当前世界状态"),t.push(`位置: ${s.location}`),t.push(`时间: 第${s.day}天 ${s.time}`),t.push(`天气: ${s.weather}`),s.locationDescription&&t.push(`环境描述: ${s.locationDescription}`);const a=s.activeQuests.filter(d=>d.status==="active");a.length>0&&(t.push(`
## 当前任务`),a.forEach(d=>{t.push(`- ${d.title}: ${d.description}`)}));const r=n.getContext(5);r&&(t.push(`
## 最近发生的事`),t.push(r)),s.events&&s.events.length>0&&(t.push(`
## 最近系统事件`),s.events.slice(-6).forEach(d=>{t.push(`- ${d}`)})),s.npcsPresent&&s.npcsPresent.length>0&&(t.push(`
## 附近的人物`),t.push(s.npcsPresent.join(", ")));const o=e.getMilestoneSummary(5);o&&(t.push(`
## 重要事件回顾`),t.push(o));const c=sessionStorage.getItem("currentSaveId")||"",f=c?i.getLatestRecap(c):null;f&&(t.push(`
## 上次冒险回顾`),t.push(f.content));const g=E(),u=H().character;return L(t.join(`
`),g.gameSettings,u)}function Y(e,n){var f,g;const s=E().gameSettings,t=n??H().character,a=m(s,t),r=(t==null?void 0:t.worldPackId)??s.activeWorldPackId??"ruthless-heavens",o=[];o.push(`# ${a?"同道":"队友"}信息`),o.push(`姓名: ${e.name}`),o.push(a?`血脉: ${R(r,e.race).displayName}`:`种族: ${e.race}`),o.push(a?`根本法: ${C(r,e.class).displayName}`:`职业: ${e.class}`),o.push(`等级: ${e.level}`),e.personality&&o.push(`性格特点: ${e.personality}`),e.likes&&e.likes.length>0&&o.push(`喜好: ${e.likes.join(", ")}`),e.dislikes&&e.dislikes.length>0&&o.push(`厌恶: ${e.dislikes.join(", ")}`);const c=(e.backstory||e.background||"").trim();if(c){const u=a&&e.background&&!e.backstory?ee(r,e.background).displayName:c;o.push(`${a?"入道前尘":"背景故事"}: ${u}`)}if(e.personalQuest){const u=e.baseRelationship||"伙伴",d=a?te(u,e.personalQuest,e.name):null;o.push(`
## 个人任务`),o.push(`任务名称: ${e.personalQuest.name}`),o.push(`任务描述: ${(d==null?void 0:d.displayDescription)??e.personalQuest.description}`),a&&(d!=null&&d.stageGoal)&&o.push(`当前阶段目标: ${d.stageGoal}`),o.push(`当前进度: ${e.personalQuest.stage}/${e.personalQuest.maxStage}`),o.push(`完成状态: ${e.personalQuest.completed?"已完成":"进行中"}`)}if(o.push(`
## 关系状态`),o.push(`好感度: ${e.approval||0}`),o.push(`好感等级: ${e.approvalLevel||"Neutral"}`),o.push(`基础关系: ${e.baseRelationship||"伙伴"}`),o.push(`关系阶段: ${e.bondStage||e.relationshipStatus||"熟识"}`),o.push("关系约束: 基础关系是既定事实，不可写回陌生或初识。"),e.id){const u=se(),d=a?"同道":"队友",I=u.partyMembers.filter(l=>(l==null?void 0:l.id)&&l.id!==e.id&&l.name);if(I.length>0){o.push(`
## 其他在队${d}（你认得他们，可主动提及/评价/护短）`);for(const l of I.slice(0,5)){const h=a?R(r,l.race).displayName:l.race,p=a?C(r,l.class).displayName:l.class,$=l.id?u.getCompanionRelationRow(e.id,l.id):void 0,S=(g=(f=$==null?void 0:$.stances)==null?void 0:f[e.id])==null?void 0:g.affinity,N=typeof S=="number"?`你对TA观感 ${S>=0?"+":""}${S}`:"观感未定";if(!$)o.push(`- ${l.name}（${h} / ${p}）`);else if($.secret)o.push(`- ${l.name}（${h} / ${p}）：${N}（暗藏关系，勿当面挑破那一侧）`);else{const x=ne($);o.push(`- ${l.name}（${h} / ${p}）：${N}${x?`；${x}`:""}`)}}o.push("互知约束: 你只知亲历与已公开之事；勿透露你不可能知道的他人隐私或后台心念。")}}return n&&(o.push(`
## 玩家角色`),o.push(`姓名: ${n.name}`),o.push(a?`血脉: ${R(r,n.race).displayName}`:`种族: ${n.race}`),o.push(a?`根本法: ${C(r,n.class).displayName}`:`职业: ${n.class}`)),L(o.join(`
`),s,t)}function k(e,n,i){const s=E(),t=i??H().character;return L(e,s.gameSettings,t)}async function Ce(e,n,i,s){const t=Y(e,i),a=v();let r="";switch(n){case"greeting":r=`生成一段${e.name}在营地中与玩家的问候对话。可以自然地提及当前的任务或最近发生的事。`;break;case"personal":r=`生成一段${e.name}与玩家分享个人经历或想法的对话。可以结合当前的处境和任务。`;break;case"quest":e.personalQuest?r=`生成一段关于${e.name}的个人任务"${e.personalQuest.name}"的对话。当前进度: ${e.personalQuest.stage}/${e.personalQuest.maxStage}`:r=`生成一段${e.name}与玩家讨论当前冒险任务的对话。`;break;case"romance":{const h=e.approval||0,p=e.bondStage||e.relationshipStatus||"",$=O(E().gameSettings,e),S=e.baseRelationship||"伙伴",N=q(S);if($&&N){const x=Z(S);N.forbidIncestRomance||N.intimacyTier==="none"?r=`生成一段${e.name}与玩家在营地中的对话。${x}`:h>=75||p==="亲密"?r=`生成一段${e.name}与玩家在营地中的亲密向对话。${x} 玩家选项可含进一步亲密或克制距离。`:h>=40?r=`生成一段${e.name}与玩家的暧昧对话。${x}`:r=`生成一段${e.name}与玩家的试探对话。仅眼神与礼数暧昧，勿越界肢体。`}else h>=75?r=`生成一段${e.name}与玩家之间带有浪漫氛围的对话。注意:好感度很高,可以有更亲密的互动。`:r=`生成一段${e.name}与玩家之间略带暧昧的对话。注意:好感度还不够高,保持适当距离。`;break}case"casual":r=`生成一段${e.name}与玩家的日常闲聊对话。可以聊聊当前的处境、天气或最近的冒险。`;break}const o=E(),c=O(o.gameSettings,e),f=m(o.gameSettings,e),g=c?Q("dialogue",!0,f):"",u=c&&f?"你是残曜天修仙世界的营地对话生成器。":"你是一个D&D游戏的对话生成器。",d=c&&f?`4. 好感 < 40：仅暧昧试探；40–74：可亲吻，勿直写床笫；≥75 或关系阶段「亲密」：可深度亲密与双修话题（须玩家选项承接）
5. 好感度低时(<20),对话应该更谨慎、更疏远`:`4. 好感度高时(>=75),对话可以更亲密、更深入
5. 好感度低时(<20),对话应该更谨慎、更疏远`,I=`${u}你需要根据队友的性格、背景、当前关系状态以及游戏世界的当前状态,生成自然、符合角色设定的对话内容。
${g?`
${g}
`:""}
## 重要：结合当前情境
- 队友应该知道当前的位置、时间和正在进行的任务
- 对话中可以自然地提及最近发生的事件
- 根据当前任务的紧迫程度调整对话语气

${F(e,i)}

${a}

## 输出格式要求
你必须输出一个JSON对象,格式如下:
\`\`\`json
{
  "npcText": "NPC说的话",
  "choices": [
    {
      "id": "choice_1",
      "text": "玩家选项1的文本",
      "relationshipIntent": "support",
      "nextDialogueHint": "继续深入话题"
    },
    {
      "id": "choice_2",
      "text": "玩家选项2的文本",
      "relationshipIntent": "offend",
      "nextDialogueHint": "转移话题"
    },
    {
      "id": "choice_3",
      "text": "玩家选项3的文本",
      "relationshipIntent": "neutral",
      "nextDialogueHint": "结束对话"
    }
  ]
}
\`\`\`

## 对话生成规则
1. NPC的对话要符合其性格特点、背景故事和当前好感度
2. 提供3-4个玩家选项,每个选项应该有不同的态度和方向
3. relationshipIntent 只能是 strong_support/support/neutral/offend/strong_offense；具体好感数值由本地规则结算
${d}
6. 考虑NPC的likes和dislikes,相关话题会影响好感度变化
7. 如果有个人任务,可以在对话中自然地提及任务进展
8. nextDialogueHint用于指示这个选项会引导对话走向何方
9. 结合当前世界状态,让对话更有沉浸感

## 对话风格
- 使用第一人称(NPC视角)
- 语言要生动、有个性
- 避免过于正式或书面化的表达
- 可以使用适当的语气词和口头禅
- 根据种族和职业特点调整用词风格

${t}`;let l=r;s&&s.length>0&&(l+=`

## 对话历史
${s.join(`
`)}`),l=k(l,e,i);try{const h=await P.generate(l,"dialogue",I,{skipUndoSnapshot:!0}),p=D(h);if(p){const $=y(p),S=A(p,!0);return $||S.length>0?{npcText:$,choices:S}:{npcText:h,choices:[{id:"choice_1",text:"继续交谈",nextNodeId:"",effects:{approvalChange:1}},{id:"choice_2",text:"结束对话",nextNodeId:"",effects:{approvalChange:0}}]}}return{npcText:h,choices:[{id:"choice_1",text:"继续交谈",nextNodeId:"",effects:{approvalChange:1}},{id:"choice_2",text:"结束对话",nextNodeId:"",effects:{approvalChange:0}}]}}catch(h){throw console.error("[对话AI] 生成对话失败:",h),h}}async function Oe(e,n,i,s,t){const a=Y(e,t),r=v(),o=`你是一个D&D游戏的对话生成器。根据玩家的选择,生成NPC的后续回应。

${F(e,t)}

${r}

## 输出格式要求
你必须输出一个JSON对象,格式如下:
\`\`\`json
{
  "npcText": "NPC的回应",
  "choices": [
    {
      "id": "choice_1",
      "text": "玩家选项1",
      "relationshipIntent": "neutral"
    }
  ],
  "isEnd": false
}
\`\`\`

如果对话应该结束,设置 "isEnd": true 并且 choices 可以为空数组。

${a}`,c=`## 之前的对话
NPC: ${i}

## 玩家选择
${n}

## 对话历史
${s.join(`
`)}

请生成NPC对这个选择的回应,以及新的玩家选项(如果对话继续)。`,f=k(c,e,t);try{const g=await P.generate(f,"dialogue",o,{skipUndoSnapshot:!0}),u=D(g);if(u){const d=y(u),I=A(u,!1);return{npcText:d,choices:I,isEnd:De(u)}}return{npcText:g,choices:[],isEnd:!0}}catch(g){throw console.error("[对话AI] 生成后续对话失败:",g),g}}function J(e,n){var I,l;const i=E(),s=m(i.gameSettings,n),t=(n==null?void 0:n.worldPackId)??i.gameSettings.activeWorldPackId,a=s&&e.race?R(t,e.race).displayName:e.race||"未知",r=e.affinity??0,o=e.romanceStage??K(r),c=s?ae(((I=e.stubNpcId)==null?void 0:I.trim())||e.id)??re(e.name,{locationId:ce(e.locationId)}):void 0,f=c!=null&&c.summary?`
- 来历执念: ${c.summary}`:"",g=(l=c==null?void 0:c.attitudeNotes)!=null&&l.length&&ue(e)?`
- 暧昧推进阶梯（由浅入深，循序勿跳；按当前好感阶段择最贴近的一档自然演绎，勿强行跳档或提前兑现最深一档）: ${c.attitudeNotes.map((h,p)=>`${p+1})${h}`).join(" ")}`:"",u=s?le(c==null?void 0:c.factionId,n==null?void 0:n.affiliationId):null,d=u==="same"?`
- 与玩家门第: 同门（见面应认，以门规礼数相待，勿演成陌生人）`:u==="rival"?`
- 与玩家门第: 敌门（对玩家门第身份自有戒备忌惮）`:"";return`## 场景 NPC
- 名字: ${e.name}
- 血脉: ${a}
- 身份: ${e.occupation||e.identityTag||"未知"}
- 性格: ${e.personality||(c==null?void 0:c.personalityHint)||"未详"}
- 好感: ${r}（阶段: ${o}）
- 外貌: ${e.description||(c==null?void 0:c.appearanceHint)||"未详"}${f}${d}${g}`}async function be(e,n,i,s){const t=E(),a=m(t.gameSettings,i),r=O(t.gameSettings,i),o=e.affinity??0,c=e.romanceStage??K(o);let f=n==="romance"?`生成${e.name}与玩家在坊市/户外的私下对话。当前好感阶段「${c}」。`:`生成${e.name}与玩家的论道寒暄，保持修仙语汇。`;r&&a&&n==="romance"&&(o>=75||c==="bonded"?f+=" 可含双修邀请或同寝暗示，须玩家选项承接。":o>=40||c==="close"?f+=" 可牵手或短暂亲吻，勿直写床笫。":f+=" 仅礼数暧昧与眼神试探。");const g=r&&a?"你是残曜天修仙世界的场景 NPC 对话生成器。":"你是一个D&D游戏的对话生成器。",u=r?Q("dialogue",!0,a):"",d=a?G:w,I=`${g}
${u?`
${u}
`:""}
${d}

${v()}

${J(e,i)}

## 输出 JSON
\`\`\`json
{
  "npcText": "NPC说的话",
  "choices": [
    { "id": "choice_1", "text": "玩家选项", "relationshipIntent": "support" }
  ]
}
\`\`\`
- relationshipIntent 只能是 strong_support/support/neutral/offend/strong_offense；具体缘分数值由本地规则结算
- 提供 3-4 个选项，含结束对话选项`;let l=f;i&&(l=k(l,i,i));const h=await P.generate(l,"dialogue",I,{skipUndoSnapshot:!0}),p=D(h);if(p){const $=y(p),S=A(p,!0).map(N=>{var x,U;return{...N,effects:{...N.effects,affinityChange:((x=N.effects)==null?void 0:x.affinityChange)??((U=N.effects)==null?void 0:U.approvalChange)}}});if($||S.length)return{npcText:$,choices:S}}return{npcText:h,choices:[{id:"choice_1",text:"继续叙话",nextNodeId:"",effects:{affinityChange:1}},{id:"choice_2",text:"告辞",nextNodeId:"",effects:{affinityChange:0}}]}}async function He(e,n,i,s,t){const a=E(),c=`你是场景 NPC 对话生成器。
${m(a.gameSettings,t)?G:w}
${v()}
${J(e,t)}

输出 JSON：{ "npcText", "choices", "isEnd" }`;let f=`NPC: ${i}
玩家: ${n}
历史:
${s.join(`
`)}`;t&&(f=k(f,t,t));const g=await P.generate(f,"dialogue",c,{skipUndoSnapshot:!0}),u=D(g);return u?{npcText:y(u),choices:A(u,!0),isEnd:!!(u.isEnd??u.is_end)}:{npcText:g,choices:[],isEnd:!0}}export{Oe as a,be as b,He as c,Ce as g};
