import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.8a24d2e4.js";const h=JSON.parse('{"title":"陆运查询","description":"","frontmatter":{},"headers":[],"relativePath":"query/transport.md","filePath":"query/transport.md"}'),l={name:"query/transport.md"},o=p(`<h1 id="陆运查询" tabindex="-1">陆运查询 <a class="header-anchor" href="#陆运查询" aria-label="Permalink to &quot;陆运查询&quot;">​</a></h1><p>接口</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">baseurl</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://pactl.shedi.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">apiurl</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/mobile/interfaces.php&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;POST&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;getCarTrans&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">billNo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;总运单号&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">baseurl</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://pactl.shedi.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apiurl</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/mobile/interfaces.php&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;POST&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;getCarTrans&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">billNo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;总运单号&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),t=[o];function e(c,r,E,y,i,u){return a(),n("div",null,t)}const F=s(l,[["render",e]]);export{h as __pageData,F as default};
