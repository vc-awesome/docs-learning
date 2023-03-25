
```md
# Add your own additional hosts here!
# Supports blacklist, whitelist and map to custom IP

# WARNING! You must not add huge lists here!
# This is only for overruling the configured filter.

# Format for blacklist: 1 host name per line (sample below).
# Wildcard Character "*" can be used for host blocking.
# Host name and all sub domains will be blocked,
# unless there is a more specific rule.

sample4711.justasample.com
sample4712.justasample.com

# In order to white list a specific host, use "!" prefix.
# Wildcard Character "*" can be used for whitelisting.
# Host name and all sub domains will be whitelisted,
# unless there is a more specific rule.

!whitelistsample.justasample.com

# PRIORITIES in case of conflicting entries
# 1. Explicit entries without wildcards
# 2. Wildcard entries prioritized along the sequence in this file
# 3. Downloaded blocklist

# In order to forward to custom ip add a ">" in front of the host,
# followed by whitespace and mapped IP.

>router.home 192.168.2.1

>www.lukswapd.test 45.115.243.144

>www.baidu.com 127.0.0.1

>translate.googleapis.com 142.250.101.90
>translate.google.com 203.208.40.66
```



