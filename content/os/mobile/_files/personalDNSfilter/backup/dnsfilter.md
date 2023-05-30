
```markdown

#############################################
#        WARNING! FOR EXPERTS ONLY!         #
#  This is personalDNSfilter configuration! #
# Only edit this file if you are an expert! #
#############################################

# detectDNS = true|false.
# if true, the DNS servers will be detected if possible.
# if false, the DNS Servers will be taken from the fallbackDNS setting below.
detectDNS = false

# fallbackDNS - list of DNS servers seperated by ";".
# Used in case DNS servers are not detected automatically (either switched off or not possible).
# Format: <IP>::<PORT>::<PROTOCOL>::<URL END POINT>
# The secure DNS Servers as default below are libredns.gr Nixnet.services uncensoreddns.org
# Examples below
# 116.202.176.26::443::DoH::https://doh.libredns.gr/dns-query (Example of DNS-over-HTTPS)
# 1.1.1.1::853::DoT::cloudflare-dns.com (DNS over TLS, domain name is optional)
# 176.103.130.130::53::UDP

# Fallbacks are from libredns.gr, uncensoreddns.org, nixnet.services, and also adguard.com
# adguard1 (UDP); adguard2 (UDP); uncensoreddns.org (Dot); libredns.gr (DoT); libredns.gr (DoH)
fallbackDNS = 223.5.5.5 ;101.226.4.6 ;94.140.14.140 ;94.140.14.141 ;89.233.43.71::853::DoT::unicast.censurfridns.dk ;116.202.176.26::853::DoT::dot.libredns.gr ;116.202.176.26::443::DoH::https://doh.libredns.gr/dns-query

# passcode - can be set in order to force a passcode on android based dnsfilter before getting access
# default is empty string
passcode = 

# IP Version Support
ipVersionSupport = 4,6

# Returned IP for resolving blocked host
ipV4BlockedHost = 0.0.0.0
ipV6BlockedHost = ::

# Maximum number of parallel DNS Resolver Connections
maxResolverCount = 100

# enableLocalResolver = true|false
# when enabled, up stream DNS will only be called in case IP cannot be resolved locally,
# either via filter or custom IP mapping (via ">host" entries in additionalHosts file).
# Custom IP mapping requires "enableLocalResolver = true".
enableLocalResolver = true

# localResolverTTL - TTL for locally produced DNS Response
localResolverTTL = 60

# HTTP Proxy for tunneling DNS TCP connections via Proxy
# Note: httpProxyIP is mandatory, httpProxyHost is optional
# In case proxy requires authentication, the auth string for basic auth can optionally be provided
resolveOverHttpProxy = false
httpProxyHost = my.proxy
httpProxyIP = 10.0.2.2
httpProxyPort = 8080
httpProxyBasicAuthStr = 

# routeUnderlyingDNS - Only for Android VPN based version
# Routes all detected dns servers of the underlying network to the dummy VPN created on Android.
# Might be needed when using Google chrome as it might use the underlying DNS servers directly
routeUnderlyingDNS = true

# routeIPs - Only for Android VPN based version.
# List of IPs routed in addition to the (virtual) DNS (configured by the VPN) to the DNSFilter.
# This might be usefull in case applications ignore the VPN's DNS and just use an own DNS Server,
# such as the Googles DNS Servers.
# Uncomment setting below for using this option.
# As an example below the list of Google DNS servers for IPV4 and IPV6.
# This should avoid hardcoded usage of Google DNS Servers, bypassing system DNS settings.
# e.g. routeIPs = 8.8.8.8; 8.8.4.4; 2001:4860:4860::8888; 2001:4860:4860::8844
routeIPs = 

# AUTOSTART = true|false - used only by Android version.
# if true android app is started automatically on device boot completed.
AUTOSTART = true

# androidAppWhiteList - Only for Android VPN based version (requires at least Android 5.1).
# List of applications seperated by "," which should bypass the VPN
androidAppWhiteList = 

# dnsProxyOnAndroid = true|false - used  by Android version.
# if true, on Android, instead a local VPN, a DNS Proxy is started on port 5300
# In case root mode is also enabled, port 53 will be opened as well and local DNS traffic will be routed.
# In root mode could also act as DNS filter Proxy within the local network.
# Without root mode it could be used by openVPN for pDNSf as local filter while connected to a real VPN
dnsProxyOnAndroid = false

# DNS proxy port used on non android version (e.g. on linux or windows computer)
# Note: On Android allways port 5300 is used and port 53 is forwarded in root mode
dnsProxyPortNonAndroid = 53

# dnsProxyOnlyLocalRequests = true | false
# when true only local requests are accepted
dnsProxyOnlyLocalRequests = true

# rootModeOnAndroid = true|false - used  by Android version.
# When dnsProxyOnAndroid is enabled, root mode will also open port 53 and route local DNS traffic to this.
# In root mode could also act as DNS filter Proxy within the local network.
# NOTE! this mode does not allow port 53 for upstream DNS Server
rootModeOnAndroid = false

# vpnInAdditionToProxyMode = true|false - used  by Android version.
# When dnsProxyOnAndroid is enabled, the local VPN by default will not be started.
# With setting 'vpnInAdditionToProxyMode = true' a local VPN will be started in addition.
vpnInAdditionToProxyMode = false

# androidKeepAwake - Only for Android version.
# When switched on, Android device won't go to sleep mode (e.g. when running proxy mode)
androidKeepAwake = false

# manageDNSCryptProxy - Only for Android version
# if true, an installed DNScryptProxy will be started and stopped together with DNSFilter (requires root!)
manageDNSCryptProxy = false

# options for starting DNSCryptProxy
dnsCryptProxyStartOptions = -config /system/etc/dnscrypt-proxy/dnscrypt-proxy.toml

# traffic log configuration for a rotating traffic log (trafficlog_0.log, trafficlog_1.log, ...)
# enableTrafficLog = true|false - true: trafficlog enabled, false: trafficlog is OFF
# trafficLogSize -  max size of a log slot file in bytes / default 1 MB
# trafficLogName -  the name of the log /default trafficlog
# trafficLogSlotCount - number of log slots for log rotation / default 2

enableTrafficLog = true
trafficLogName = trafficlog
trafficLogSize = 1048576
trafficLogSlotCount = 2

# Remote host configuration for remote control client
client_remote_ctrl_host = 192.168.31.105
client_remote_ctrl_keyphrase = Change This Default Keyphrase!
client_remote_ctrl_port = 3333

# Remote host configuration for remote control server
server_remote_ctrl_keyphrase = Change This Default Keyphrase!
server_remote_ctrl_port = -1

# Switch for debug logging
debug = false

# DNS request timeout in milliseconds
dnsRequestTimeout = 15000

# the size of the cache for filtered hosts
filterHostsCacheSize = 1000

# the size of the cache for allowed hosts
allowedHostsCacheSize = 1000

# check resolved IP against filter
checkResolvedIP = false

# check CNAME (handle CNAME cloaking)
checkCNAME = true

# filterHostsFile - file path of filter hosts text file containing hosts which are filtered.
# comment in case you want to disable filtering!
filterHostsFile = FILTERHOSTS.TXT

# filterActive = true|false
# when false, filtering is disabled
filterActive = true

# filterAutoUpdateURL - the URL from were the filterHostsFile gets automatically updated.
# You can specify different URLs seperated by ';' for an concatenated filterHostsFile.
# Comment in case you want to disable the automatic update of the filter host file!
filterAutoUpdateURL = https://adaway.org/hosts.txt; https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext; https://block.energized.pro/spark/formats/domains.txt; https://block.energized.pro/bluGo/formats/domains.txt; https://block.energized.pro/blu/formats/domains.txt; https://block.energized.pro/basic/formats/domains.txt; https://block.energized.pro/ultimate/formats/domains.txt; https://block.energized.pro/unified/formats/domains.txt; https://block.energized.pro/porn/formats/domains.txt; https://block.energized.pro/extensions/porn-lite/formats/domains.txt; https://block.energized.pro/extensions/social/formats/domains.txt; https://block.energized.pro/extensions/xtreme/formats/domains.txt; https://block.energized.pro/extensions/regional/formats/domains.txt; https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts; https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews/hosts; https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/gambling/hosts; https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/porn/hosts; https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/social/hosts; https://raw.hellogithub.com/hosts

# filterAutoUpdateURL_IDs - Sequence of short names for above URLs seperated by ";" in same
# sequence as URLs above. When not specified, the URL host will be taken
filterAutoUpdateURL_IDs = adaway; pgl.yoyo.org; Spark; BluGo; Blu; Basic; Ultimate; Unified; Porn; Porn Lite; Social; Xtreme; Regional; ad&malware; fakenews; gambling; porn; social; raw.hellogithub.com

# filterAutoUpdateURL_categories - Sequence of categories for above URLs seperated by ";" in same
# sequence as URLs above. When not specified, the URL host will be taken
filterAutoUpdateURL_categories = adaway; pgl.yoyo.org; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; EnergizedProtection; StevenBlack; StevenBlack; StevenBlack; StevenBlack; StevenBlack; Github

# filterAutoUpdateURL_switchs - Sequence of boolean values (true|false) for above URLs seperated by ";"
# in same sequence as URLs above. When not specified, the value "true" is taken.
# Value "true" means that the URL is active and thus taken for filter download, when false the URL
# is inactive
filterAutoUpdateURL_switchs = true; false; false; false; false; false; false; false; false; false; false; false; false; false; false; false; false; false; true

# previousAutoUpdateURL - the URL from were the last filterHostsFile was automatically updated .
# DO NOT CHANGE! - will be set internally!
previousAutoUpdateURL = https://adaway.org/hosts.txt

# reloadIntervalDays - specifies the number of days, after the filter gets updated when configured.
reloadIntervalDays = 1

# live log settings (Android only) colors, text size
filterLogFormat = <font color='#E53935'>($CONTENT)</font>
acceptLogFormat = <font color='#43A047'>($CONTENT)</font>
fwdLogFormat = <font color='#FFB300'>($CONTENT)</font>
normalLogFormat = ($CONTENT)
logTextSize = 14

# repeatingLogSuppressTime - time in milliseconds in which repeating logs are suppressed
repeatingLogSuppressTime = 2000

# live log timestamp settings
addLiveLogTimestamp = true
liveLogTimeStampFormat = '<font color=''#8c8c8c''><strong>'HH:mm:ss'</strong></font>'

# Text and Link for the footer bar
footerLink = <font color='#ffffff'><strong><a href='https://www.zenz-solutions.de/personaldnsfilter-wp/'>WEBSITE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://www.zenz-solutions.de/donations'>DONATE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://www.zenz-solutions.de/personaldnsfilter-privacy/'>PRIVACY</a></strong></font>

# Initial info PopUp
showInitialInfoPopUp = true
initialInfoPopUpTitle = Consider your rating!
initialInfoPopUpText = Thanks for using our free app personalDNSfilter! Sometimes we get bad ratings due to misunderstanding. Therefore, before rating, please check our <a href='https://www.zenz-home.com/personaldnsfilter/help/faq.php'>FAQ</a></strong>, or ask our <a href='https://telegram.me/pdnsf'>Telegram group</a></strong>.

# dumpDNSPerfInfo - dump DNS speed test result into live log when testing DNS speed
dumpDNSPerfInfo = false

# useActionMenuFallback - set this to true in case your device does not support custom action menus (e.g. Xiaomi)
useActionMenuFallback = false

# forceAndroidDisplayMode = none|portrait|landscape
forceAndroidDisplayMode = none

```
