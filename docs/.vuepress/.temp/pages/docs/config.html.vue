<template><div><h1 id="配置详解" tabindex="-1"><a class="header-anchor" href="#配置详解"><span>配置详解</span></a></h1>
<p>你可以在这里看到Frozen各项配置的解释</p>
<h2 id="应用设置" tabindex="-1"><a class="header-anchor" href="#应用设置"><span>应用设置</span></a></h2>
<p>对应Frozen的应用页，你可以在那里对各个应用进行自定义</p>
<table>
<thead>
<tr>
<th>配置项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>自由后台🍀️</td>
<td>白名单，该应用可在前、后台自由运行，任何情况下都不会被冻结。</td>
</tr>
<tr>
<td>杀死后台⚔️</td>
<td>该应用进入后台超时后将被直接杀死，而不是冻结。该选项适合那些用完就丢、不用留后台的应用，冻它自动帮你杀掉。</td>
</tr>
<tr>
<td>SIGSTOP冻结🧊️</td>
<td>使用SIGSTOP信号进行冻结，冻结效果很好，但冻结状态的进程有概率异常终结，其他应用也有权限发送SIGCONT信号进行解冻。</td>
</tr>
<tr>
<td>SIGSTOP断网🧊️</td>
<td>同上SIGSTOP冻结，但冻结后会额外进行应用断网</td>
</tr>
<tr>
<td>Freezer冻结❄️</td>
<td>使用cgroup的Freezer子系统进行冻结，使用的冻结方式（FreezerV1/FreezerV2）可在全局选项中自行调整</td>
</tr>
<tr>
<td>Freezer断网❄️</td>
<td>同上Freezer冻结，但冻结后会额外进行应用断网</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你开启自由后台的应用被冻结了，请排查是否存在类似Millet/Hans的OEM冻结机制未被禁用</p>
</div>
<h3 id="前台等级" tabindex="-1"><a class="header-anchor" href="#前台等级"><span>前台等级</span></a></h3>
<table>
<thead>
<tr>
<th>前台等级</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>严格</td>
<td>仅当存在音频播放、前台应用或小窗应用时不冻结</td>
</tr>
<tr>
<td>宽松</td>
<td>在严格的基础上，存在悬浮窗、常驻通知栏、下载、开启VPN时不会被冻结</td>
</tr>
</tbody>
</table>
<h2 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置"><span>全局设置</span></a></h2>
<p>全局设置决定了你的大部分体验，请按照说明合理选择</p>
<h3 id="关于冻结方式" tabindex="-1"><a class="header-anchor" href="#关于冻结方式"><span>关于冻结方式</span></a></h3>
<table>
<thead>
<tr>
<th>Freezer类型</th>
<th>解释</th>
<th>补充</th>
</tr>
</thead>
<tbody>
<tr>
<td>FreezerV2(FROZEN)</td>
<td>使用 FROZEN 和 UNFROZEN 目录内的 cgroup.procs 文件来冻结和解冻进程</td>
<td>推荐用于5.4+内核</td>
</tr>
<tr>
<td>FreezerV2(UID)</td>
<td>使用 uid_(AppUID)/pid_(ProcessID) 内的 cgroup.freeze 文件来冻结和解冻进程</td>
<td>推荐用于5.4+内核</td>
</tr>
<tr>
<td>FreezerV1(FROZEN)</td>
<td>调用内核中的 cgroup v1 冻结器来对应用实施冻结</td>
<td>当你的内核版本≤5.4时使用</td>
</tr>
<tr>
<td>全局SIGSTOP</td>
<td>向内核发送 SIGSTOP 信号暂停进程</td>
<td>若选定全局SIGSTOP，设为Freezer冻结的应用将实际使用SIGSTOP冻结</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>以上冻结设置需重启后生效</p>
</div>
<h3 id="余下配置项" tabindex="-1"><a class="header-anchor" href="#余下配置项"><span>余下配置项</span></a></h3>
<p>此为剩余的配置项，可参照说明与你的需求自行修改，如果你想开箱即用，请参照<a href="https://icebook.shrairo.top/config.html#%E6%8E%A8%E8%8D%90%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">推荐配置</a></p>
<table>
<thead>
<tr>
<th>配置项</th>
<th>解释</th>
<th>补充</th>
</tr>
</thead>
<tbody>
<tr>
<td>定时压制</td>
<td>定时检查后台活动，重新冻结被关联唤醒的后台进程，以及压制开机自启动的后台进程</td>
<td></td>
</tr>
<tr>
<td>定时解冻</td>
<td>定时解冻被冻结的后台应用</td>
<td></td>
</tr>
<tr>
<td>超时冻结</td>
<td>应用切到后台之后，延迟冻结的时间</td>
<td></td>
</tr>
<tr>
<td>超时杀死</td>
<td>设为<code v-pre>杀死后台</code>的应用切入后台之后，延迟杀死的时间</td>
<td></td>
</tr>
<tr>
<td>电池监控</td>
<td>在日志中记录电池充/放电时长、功率、温度等</td>
<td></td>
</tr>
<tr>
<td>双电芯</td>
<td>双电芯电池，用于校准电流或功率数值</td>
<td></td>
</tr>
<tr>
<td>开机冻结</td>
<td>在开机10秒后自动冻结自启动应用</td>
<td></td>
</tr>
<tr>
<td>Binder冻结</td>
<td>通过阻断应用和其他应用进行Binder通信，来避免闪退重启，重载等情况</td>
<td>仅建议内核版本≥6.1使用</td>
</tr>
<tr>
<td>内存回收</td>
<td>通过Android压缩进程接口来压缩进程而降低内存用量</td>
<td></td>
</tr>
<tr>
<td>清理电池优化白名单</td>
<td>通过清理电池优化白名单，让更多应用进入电池优化</td>
<td></td>
</tr>
<tr>
<td>临时解冻</td>
<td>通过捕获Binder意图，进行临时解冻，避免应用闪退，重载，无法进入下一个Activity</td>
<td>优先识别Rekernel</td>
</tr>
<tr>
<td>后台优化</td>
<td>调整lmk参数，尽量保留更多应用后台</td>
<td>修改后需重启</td>
</tr>
<tr>
<td>息屏Doze</td>
<td>开启该选项可在息屏几分钟后快速进入深度Doze</td>
<td></td>
</tr>
<tr>
<td>调试日志</td>
<td>日志记录更加详细运行状况</td>
<td></td>
</tr>
</tbody>
</table>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>Binder对于墓碑的体验至关重要，所以Binder冻结和临时解冻必须二选一，也就是说必须且仅能启用一个，如果你选择临时解冻，那你需要刷入Rekernel/Nkbinder模块。具体请参照<a href="https://icebook.shrairo.top/docs/get-started.html#%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E" target="_blank" rel="noopener noreferrer">快速开始</a></p>
</div>
<h2 id="推荐配置" tabindex="-1"><a class="header-anchor" href="#推荐配置"><span>推荐配置</span></a></h2>
<p>如果你不懂该如何配置，请参照下图</p>
<p><img src="https://imgs-cf.shrairo.top/Frozen/Frozen-Globalsettings.jpg" alt="Frozen Global"></p>
</div></template>


