import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.19f61efe.js";const h=JSON.parse('{"title":"新闻查询","description":"","frontmatter":{},"headers":[],"relativePath":"query/news.md","filePath":"query/news.md"}'),l={name:"query/news.md"},o=p(`<h1 id="新闻查询" tabindex="-1">新闻查询 <a class="header-anchor" href="#新闻查询" aria-label="Permalink to &quot;新闻查询&quot;">​</a></h1><p>接口</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">baseurl</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://pactl.shedi.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">apiurl</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/mobile/interfaces.php&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;POST&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;findAnn&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">annType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 0新闻查询 / 1消息查询 / 2服务价格查询</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">baseurl</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://pactl.shedi.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apiurl</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/mobile/interfaces.php&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;POST&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;findAnn&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">annType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 0新闻查询 / 1消息查询 / 2服务价格查询</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),e=[o];function t(c,r,E,y,i,u){return a(),n("div",null,e)}const F=s(l,[["render",t]]);export{h as __pageData,F as default};
