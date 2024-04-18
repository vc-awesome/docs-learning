# 互联网

## 互联网协议

1. https://www.runoob.com/w3cnote/summary-of-network.html - *计算机网络基础知识总结 | 菜鸟教程*

2. https://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html - *互联网协议入门（一） - 阮一峰的网络日志*

3. https://www.ruanyifeng.com/blog/2012/06/internet_protocol_suite_part_ii.html - *互联网协议入门（二） - 阮一峰的网络日志*

## OSI参考模型

> [OSI](https://baike.baidu.com/item/OSI%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B/708028)（Open System Interconnect，开放式系统互连）

The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven distinct layers. Each layer serves a specific purpose and interacts with adjacent layers, enabling interoperability and standardization in network communication. Here's a brief overview of each OSI model layer:

1. **Physical Layer**: This is the lowest layer of the OSI model and deals with the physical transmission of data over a physical medium. It defines characteristics such as voltage levels, cable types, and physical connectors.

2. **Data Link Layer**: The data link layer provides error-free transfer of data frames between nodes over a physical link. It handles framing, error detection and correction, flow control, and access to the physical medium.

3. **Network Layer**: The network layer manages routing and forwarding of data packets between different networks. It determines the optimal path for data transmission based on network conditions, addressing, and logical network topology.

4. **Transport Layer**: The transport layer ensures reliable data transfer between end systems. It segments data from the session layer into smaller packets, provides error recovery and flow control, and establishes end-to-end connections (e.g., TCP in the TCP/IP model).

5. **Session Layer**: The session layer establishes, manages, and terminates sessions between applications. It handles synchronization, checkpointing, and recovery of data exchange sessions.

6. **Presentation Layer**: The presentation layer ensures that data exchanged between systems is in a format that both applications can understand. It handles data encryption, compression, and translation between different data formats.

7. **Application Layer**: The application layer provides a user interface and services to applications for network communication. It enables communication between applications and network services (e.g., HTTP, FTP, SMTP).

The OSI model serves as a guideline for understanding and implementing network protocols and interactions, though the TCP/IP model is more commonly referenced in practical network implementations today. Each layer in the OSI model encapsulates and adds specific functionalities to data as it moves through the network from the source to the destination.

OSI（开放系统互连）模型是一个概念框架，它将电信或计算机系统的功能标准化为七个不同的层。 每一层都有特定的目的，并与相邻层交互，从而实现网络通信的互操作性和标准化。 以下是 OSI 模型各层的简要概述：

1. **物理层**： 这是 OSI 模型的最底层，处理数据在物理介质上的物理传输。 它定义了电压等级、电缆类型和物理连接器等特性。

2. **数据链路层**： 数据链路层通过物理链路在节点之间提供无差错的数据帧传输。 它处理成帧、错误检测和纠正、流量控制以及访问物理介质。

3. **网络层**： 网络层管理不同网络之间数据包的路由选择和转发。 它根据网络条件、地址和逻辑网络拓扑确定数据传输的最佳路径。

4. **传输层**： 传输层确保终端系统之间可靠的数据传输。 它将会话层的数据分割成较小的数据包，提供错误恢复和流量控制，并建立端到端连接（如 TCP/IP 模型中的 TCP）。

5. **会话层**： 会话层建立、管理和终止应用程序之间的会话。 它处理数据交换会话的同步、检查点和恢复。

6. **呈现层**： 呈现层确保系统间交换的数据采用两个应用程序都能理解的格式。 它处理数据加密、压缩和不同数据格式之间的转换。

7. **应用层**： 应用层为应用程序提供用户界面和网络通信服务。 它实现了应用程序与网络服务（如 HTTP、FTP、SMTP）之间的通信。

OSI 模型是理解和实施网络协议及交互的指导原则，但目前在实际网络实施中更多地参考 TCP/IP 模型。 OSI 模型中的每一层都对数据进行封装，并在数据通过网络从源传输到目的地时添加特定功能。

### 实体层（Physical Layer）

暂无

### 链接层（Link Layer）

暂无

#### 以太网协议

暂无

#### ARP协议

ARP (Address Resolution Protocol) is a protocol used to map a known IP address to a MAC (Media Access Control) address in a local network segment. Here's an overview of ARP and its key aspects:

1. **Purpose**: ARP is used to determine the MAC address of a device (usually a host or a router) on the same network when only its IP address is known.

2. **Operation**: When a device needs to send data to another device within the same subnet, it checks its ARP cache (a table storing recently resolved IP-to-MAC address mappings). If the IP-to-MAC address mapping is not found in the ARP cache, the device sends an ARP request broadcast packet onto the local network. The request includes the IP address it wants to resolve to a MAC address.

3. **ARP Request**: The ARP request packet is broadcast to all devices on the local network. The device with the specified IP address responds with an ARP reply packet containing its MAC address.

4. **ARP Reply**: Upon receiving the ARP reply, the requesting device updates its ARP cache with the resolved IP-to-MAC address mapping. Subsequent communications to that IP address can then directly use the MAC address without needing another ARP request.

5. **Cache Timeout**: ARP cache entries have a timeout period after which they expire. The cache is periodically updated to reflect changes in the network, such as devices moving or IP addresses being reassigned.

6. **ARP Table**: Devices maintain an ARP table (or ARP cache) that stores the mappings of IP addresses to MAC addresses. This table is crucial for efficient network communication within the same subnet.

7. **Proxy ARP**: In some configurations, routers can respond to ARP requests on behalf of other devices, especially in cases where devices are on different subnets but need to communicate.

ARP operates at the Data Link layer (Layer 2) of the OSI model, interacting closely with Ethernet frames and providing a mechanism for resolving IP addresses to MAC addresses within a local network. It is essential for the functioning of IPv4 networks and is widely used in Ethernet-based LANs.

ARP（地址解析协议）是一种协议，用于将已知 IP 地址映射到本地网段中的 MAC（媒体访问控制）地址。 下面是 ARP 及其主要方面的概述：

1. **目的**： ARP 用于在只知道 IP 地址的情况下确定同一网络中设备（通常是主机或路由器）的 MAC 地址。

2. **操作**： 当一台设备需要向同一子网内的另一台设备发送数据时，它会检查其 ARP 缓存（存储最近解析的 IP-MAC 地址映射的表格）。 如果在 ARP 缓存中找不到 IP-MAC 地址映射，设备就会向本地网络发送一个 ARP 请求广播数据包。 请求中包括要解析为 MAC 地址的 IP 地址。

3. **ARP请求**： 向本地网络上的所有设备广播 ARP 请求数据包。 具有指定 IP 地址的设备会响应包含其 MAC 地址的 ARP 回复数据包。

4. **ARP 回复**： 收到 ARP 回复后，请求设备会用已解析的 IP-MAC 地址映射更新其 ARP 缓存。 随后与该 IP 地址的通信可直接使用该 MAC 地址，而无需再次发出 ARP 请求。

5. **缓存超时**： ARP 缓存条目有一个超时时间段，超时后就会过期。 缓存会定期更新，以反映网络中的变化，如设备移动或 IP 地址重新分配。

6. **ARP 表**： 设备维护一个 ARP 表（或 ARP 缓存），存储 IP 地址到 MAC 地址的映射。 该表对于同一子网内的高效网络通信至关重要。

7. **代理 ARP**： 在某些配置中，路由器可以代表其他设备响应 ARP 请求，特别是在设备位于不同子网但需要通信的情况下。

ARP 在 OSI 模型的数据链路层（第 2 层）运行，与以太网帧密切交互，并提供一种将本地网络中的 IP 地址解析为 MAC 地址的机制。 它对 IPv4 网络的运行至关重要，被广泛应用于基于以太网的局域网中。

### 网络层（Network Layer）

暂无

#### IP协议

> IP（Internet Protocol，网际协议）

IP (Internet Protocol) is a fundamental protocol in the Internet Protocol Suite, which is the foundational set of protocols used for communication over the internet and most local networks. Here are the key aspects of IP:

1. **Addressing**: IP provides a unique numerical address called an IP address to each device connected to a network. These addresses are used for identifying and locating devices in a network.

2. **Routing**: IP enables packets of data to be routed between devices and networks. It determines the best path for data transmission from the source to the destination based on network conditions and routing tables.

3. **Packet Switching**: IP uses packet switching, where data is divided into packets that are independently routed across a network and reassembled at the destination.

4. **Versions**: There are two primary versions of IP in use today: IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6). IPv4 addresses are 32-bit numerical addresses written in decimal form (e.g., 192.168.1.1), while IPv6 addresses are 128-bit addresses written in hexadecimal notation (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

5. **Connectionless**: IP is a connectionless protocol, meaning it does not establish a direct connection between the sender and receiver before sending data. Each packet is transmitted independently and may follow different paths to reach the destination.

6. **Reliability**: IP itself does not guarantee reliable delivery of data. It relies on higher-level protocols such as TCP (Transmission Control Protocol) to provide error-checking, sequencing, and flow control.

7. **Header Structure**: Each IP packet contains a header that includes information such as source and destination IP addresses, packet length, and other control information necessary for routing and delivery.

IP is integral to the functioning of the internet and is used in conjunction with other protocols such as TCP, UDP, and ICMP (Internet Control Message Protocol) to enable communication between devices and networks. It forms the basis for addressing and routing in both local area networks (LANs) and wide area networks (WANs), facilitating global connectivity and data exchange.

IP（互联网协议）是互联网协议套件（Internet Protocol Suite）中的一个基本协议，是互联网和大多数本地网络通信的基础协议集。 以下是 IP 的主要方面：

1. **地址**： IP 为每个连接到网络的设备提供一个唯一的数字地址，称为 IP 地址。 这些地址用于识别和定位网络中的设备。

2. **路由**： IP 使数据包能够在设备和网络之间路由。 它根据网络条件和路由表确定从源到目的地的最佳数据传输路径。

3. **数据包交换**： IP 使用数据包交换，将数据分成数据包，这些数据包在网络中独立路由，并在目的地重新组装。

4. **版本**： 目前使用的 IP 有两个主要版本： IPv4（互联网协议版本 4）和 IPv6（互联网协议版本 6）。 IPv4 地址是以十进制形式书写的 32 位数字地址（如 192.168.1.1），而 IPv6 地址是以十六进制形式书写的 128 位地址（如 2001:0db8:85a3:0000:0000:8a2e:0370:7334）。

5. **无连接**： IP 是一种无连接协议，这意味着它在发送数据之前不会在发送方和接收方之间建立直接连接。 每个数据包都是独立传输的，可以通过不同的路径到达目的地。

6. **可靠性**： IP 本身并不保证数据的可靠传输。 它依赖于更高级别的协议，如 TCP（传输控制协议）来提供错误检查、排序和流量控制。

7. **报头结构**： 每个 IP 数据包都包含一个报头，其中包括源 IP 地址和目标 IP 地址、数据包长度等信息，以及路由选择和传输所需的其他控制信息。

IP 是互联网运行不可或缺的部分，它与 TCP、UDP 和 ICMP（互联网控制报文协议）等其他协议一起使用，实现设备和网络之间的通信。 它构成了局域网（LAN）和广域网（WAN）中寻址和路由选择的基础，促进了全球连接和数据交换。

#### ICMP协议

ICMP (Internet Control Message Protocol) is a supporting protocol in the Internet Protocol Suite, primarily used for diagnostic and control purposes within IP networks. Here are the key features and uses of ICMP:

1. **Error Reporting**: ICMP is used by network devices, routers, and hosts to report errors encountered during packet processing. For example, if a router cannot forward a packet due to a network congestion or an unreachable destination, it sends an ICMP message back to the source host.

2. **Network Reachability**: ICMP is used to check the reachability of a destination host or network. This is typically done using ICMP Echo Request and Echo Reply messages, commonly known as "ping". A host sends an Echo Request to another host and waits for an Echo Reply to determine if the destination is reachable and responsive.

3. **Route Change Notification**: ICMP messages can inform routers and hosts about changes in network conditions, such as a change in route availability or a change in network topology.

4. **Redirect Messages**: Routers can use ICMP Redirect messages to inform hosts about a better route to a particular destination. This helps in optimizing traffic flow within a network.

5. **Fragmentation Control**: ICMP includes messages related to fragmentation and reassembly of IP packets. This allows hosts and routers to exchange information about the maximum packet size that can be transmitted without fragmentation.

6. **Router Discovery**: ICMP Router Discovery messages are used by hosts to discover and maintain information about routers on a local network segment.

7. **Security Considerations**: ICMP can also be used maliciously for network attacks, such as ICMP Flood attacks (often part of Denial-of-Service attacks), where an overwhelming number of ICMP messages are sent to disrupt network operations.

ICMP operates at the network layer (Layer 3) of the OSI model and is an integral part of IP networking. It provides essential mechanisms for diagnosing network issues, managing network traffic, and maintaining efficient communication between devices in IP networks.

ICMP（互联网控制消息协议）是互联网协议套件中的一个支持协议，主要用于 IP 网络中的诊断和控制目的。 以下是 ICMP 的主要特点和用途：

1. **错误报告**： 网络设备、路由器和主机使用 ICMP 报告数据包处理过程中遇到的错误。 例如，如果路由器因网络拥塞或目的地不可达而无法转发数据包，它会向源主机发送 ICMP 消息。

2. **网络可达性**： ICMP 用于检查目标主机或网络的可达性。 通常使用 ICMP Echo Request 和 Echo Reply 报文（通常称为 "ping"）来完成。 一台主机向另一台主机发送回声请求，并等待回声回复，以确定目标是否可以到达并做出响应。

3. **路由更改通知**： ICMP 报文可通知路由器和主机网络条件的变化，如路由可用性的变化或网络拓扑结构的变化。

4. **重定向报文**： 路由器可使用 ICMP 重定向报文通知主机前往特定目的地的更好路由。 这有助于优化网络内的流量。

5. **碎片控制**： ICMP 包括与分片和重新组装 IP 数据包有关的报文。 这允许主机和路由器交换关于不分片情况下可传输的最大数据包大小的信息。

6. **路由器发现**： 主机使用 ICMP 路由器发现报文来发现和维护本地网段上的路由器信息。

7. **安全考虑因素**： ICMP 也可被恶意用于网络攻击，如 ICMP Flood 攻击（通常是拒绝服务攻击的一部分），即发送大量 ICMP 报文以破坏网络运行。

ICMP 在 OSI 模型的网络层（第 3 层）运行，是 IP 网络不可分割的一部分。 它为诊断网络问题、管理网络流量和保持 IP 网络设备之间的高效通信提供了重要机制。

### 传输层（Transport Layer）

#### UDP协议

> UDP（User Datagram Protocol，用户数据报协议）

UDP (User Datagram Protocol) is a connectionless and lightweight transport layer protocol in the Internet Protocol Suite. It provides a way for applications to send datagrams (packets of data) to one another without establishing a formal connection. Here are some key points about UDP:

1. **Connectionless**: Unlike TCP (Transmission Control Protocol), UDP does not establish a connection before sending data and does not guarantee delivery of packets.

2. **Unreliable**: UDP does not provide mechanisms for error-checking or retransmission of lost packets. It is up to the application layer to handle any errors that may occur.

3. **Low Overhead**: UDP has less overhead and therefore is faster than TCP. It is suitable for applications where speed and efficiency are more critical than reliability, such as real-time multimedia streaming or online gaming.

4. **Usage**: UDP is used in scenarios where occasional packet loss is acceptable and where a fast transmission of data is desired. Examples include DNS (Domain Name System) queries, VoIP (Voice over IP) applications, and streaming media.

5. **Datagram Structure**: Each UDP datagram consists of a header and a payload. The header contains source and destination port numbers to identify sending and receiving applications, along with a checksum field for error detection.

6. **Stateless**: UDP does not maintain any state information between communications. Each datagram is handled independently.

In summary, UDP is a simple and efficient protocol for sending data over IP networks when reliability and congestion control are less critical compared to speed and minimal latency.

UDP（用户数据报协议）是互联网协议套件中的一种无连接、轻量级传输层协议。 它为应用程序相互发送数据报（数据包）提供了一种无需建立正式连接的方式。 以下是有关 UDP 的一些要点：

1. **无连接**： 与 TCP（传输控制协议）不同，UDP 在发送数据前不建立连接，也不保证数据包的交付。

2. **不可靠**： UDP 不提供错误检查机制或丢失数据包的重传机制。 任何可能发生的错误都要由应用层来处理。

3. **低开销**： UDP 的开销较小，因此比 TCP 更快。 它适用于速度和效率比可靠性更重要的应用，如实时多媒体流或在线游戏。

4. **用途**： UDP 适用于可接受偶尔丢包但需要快速传输数据的情况。 例如 DNS（域名系统）查询、VoIP（IP 语音）应用和流媒体。

5. **数据报结构**： 每个 UDP 数据报由报头和有效载荷组成。 报头包含用于识别发送和接收应用程序的源端口号和目的端口号，以及用于错误检测的校验和字段。

6. **无状态**： UDP 在通信之间不维护任何状态信息。 每个数据报都是独立处理的。

总之，当可靠性和拥塞控制比速度和最小延迟更不重要时，UDP 是一种通过 IP 网络发送数据的简单而高效的协议。

#### TCP协议

> TCP（Transmission Control Protocol，传输控制协议）

TCP (Transmission Control Protocol) is a core protocol of the Internet Protocol Suite, responsible for establishing and maintaining a connection between applications over a network. Here are the key aspects of TCP:

1. **Connection-Oriented**: TCP establishes a connection between two devices before transmitting data. This connection is maintained throughout the session and ensures reliable, ordered delivery of data.

2. **Reliable**: TCP ensures reliable delivery of data by using acknowledgments and retransmissions. It guarantees that data arrives in the correct order and without errors.

3. **Flow Control**: TCP includes mechanisms for flow control, where the receiver can inform the sender to slow down data transmission if the receiver's buffers are full. This prevents overwhelming the receiver with data.

4. **Congestion Control**: TCP also implements congestion control to manage network congestion. It adjusts the transmission rate based on network conditions, helping to prevent packet loss and optimize network performance.

5. **Byte-Oriented**: TCP sends data as a stream of bytes and handles segmentation and reassembly of data packets at the endpoints.

6. **Header Structure**: Each TCP segment includes a header with information such as source and destination port numbers, sequence numbers for ordered delivery, acknowledgment numbers for reliable delivery, and control flags.

7. **Usage**: TCP is widely used by applications that require reliable and ordered delivery of data, such as web browsing, email, file transfer (FTP), and remote terminal access (SSH).

Overall, TCP provides a robust and dependable way for applications to communicate over IP networks, ensuring data integrity, sequencing, and flow control. It is a fundamental protocol for many internet applications and services.

TCP（传输控制协议）是互联网协议套件的核心协议，负责在网络上建立和维护应用程序之间的连接。 以下是 TCP 的主要方面：

1. **面向连接**： 在传输数据之前，TCP 会在两个设备之间建立连接。 该连接在整个会话期间保持不变，并确保可靠、有序地传输数据。

2. **可靠**： TCP 通过使用确认和重传来确保数据的可靠传输。 它能保证数据按正确顺序无误地到达。

3. **流量控制**： TCP 包括流量控制机制，如果接收方的缓冲区已满，接收方可通知发送方放慢数据传输。 这可以防止接收方被数据淹没。

4. **拥塞控制**： TCP 还实现了拥塞控制，以管理网络拥塞。 它根据网络状况调整传输速率，有助于防止数据包丢失并优化网络性能。

5. **面向字节**： TCP 以字节流的形式发送数据，并在端点处理数据包的分段和重新组装。

6. **报头结构**： 每个 TCP 数据段都包含一个报头，其中包含源端口号和目的端口号、有序传输的序列号、可靠传输的确认号以及控制标志等信息。

7. **使用**： TCP 广泛应用于需要可靠有序传输数据的应用程序，如网页浏览、电子邮件、文件传输（FTP）和远程终端访问（SSH）。

总的来说，TCP 为应用程序在 IP 网络上通信提供了一种稳健可靠的方式，确保了数据的完整性、有序性和流量控制。 它是许多互联网应用和服务的基本协议。

### 应用层（Application Layer）

#### DHCP协议

> DHCP（Dynamic Host Configuration Protocol，动态主机配置协议）

DHCP (Dynamic Host Configuration Protocol) is a network management protocol used on IP networks, typically in local area networks (LANs), to automatically assign IP addresses and other network configuration information to devices. Here are the key aspects of DHCP:

1. **Automatic IP Address Allocation**: DHCP automates the process of IP address assignment to devices (such as computers, smartphones, printers) on a network. Instead of manually configuring IP addresses for each device, DHCP dynamically assigns and manages IP addresses from a pool of available addresses.

2. **IP Address Lease**: When a device connects to a network, it sends a DHCP request. A DHCP server on the network responds with an IP address lease, which includes the assigned IP address, subnet mask, default gateway, DNS server addresses, and other configuration parameters. The lease typically has a finite duration (lease time), after which the device must renew its lease.

3. **DHCP Server**: A DHCP server is responsible for managing and allocating IP addresses within its scope (range of IP addresses available for assignment). It maintains a database of leased IP addresses and configuration parameters, handles DHCP requests from clients, and ensures efficient utilization of IP addresses.

4. **DHCP Client**: Devices that request IP configuration information from a DHCP server are DHCP clients. When a client connects to a network, it sends a DHCP Discover message to discover available DHCP servers. Upon receiving offers from servers, the client selects one and sends a DHCP Request message to request the offered IP configuration.

5. **Renewal and Rebinding**: DHCP clients periodically renew their lease by sending a DHCP Request to the DHCP server that originally assigned the lease. If the original server does not respond (due to network issues), the client can try to renew with any DHCP server on the network, a process known as rebinding.

6. **Dynamic IP Configuration**: DHCP allows for flexibility in managing IP addresses. Devices can move between networks and obtain appropriate IP configurations dynamically without manual intervention.

7. **Scalability and Management**: DHCP simplifies network administration by centralizing IP address management and reducing the likelihood of IP address conflicts. It supports efficient use of IP addresses through lease management and reuse.

DHCP operates at the application layer (Layer 7) of the OSI model and is a fundamental protocol in modern IP networks, enabling seamless connectivity and efficient resource management.

DHCP（动态主机配置协议）是 IP 网络上使用的一种网络管理协议，通常用于局域网（LAN），为设备自动分配 IP 地址和其他网络配置信息。 以下是 DHCP 的主要方面：

1. **自动分配 IP 地址**： DHCP 自动为网络上的设备（如电脑、智能手机、打印机）分配 IP 地址。 DHCP 无需为每台设备手动配置 IP 地址，而是从可用地址池中动态分配和管理 IP 地址。

2. **IP 地址租用**： 当设备连接到网络时，它会发送一个 DHCP 请求。 网络上的 DHCP 服务器会回应一个 IP 地址租约，其中包括分配的 IP 地址、子网掩码、默认网关、DNS 服务器地址和其他配置参数。 租期通常有一定的期限（租期时间），之后设备必须更新其租期。

3. **DHCP 服务器**： DHCP 服务器负责管理和分配其范围（可分配的 IP 地址范围）内的 IP 地址。 它维护租用 IP 地址和配置参数的数据库，处理客户端的 DHCP 请求，并确保 IP 地址的有效利用。

4. **DHCP 客户端**： 从 DHCP 服务器请求 IP 配置信息的设备是 DHCP 客户端。 当客户端连接到网络时，它会发送 DHCP 发现消息，以发现可用的 DHCP 服务器。 在收到服务器的请求后，客户端会选择其中一个，并发送 DHCP 请求信息，以请求所提供的 IP 配置。

5. **续订和重新绑定**： DHCP 客户端通过向最初分配租约的 DHCP 服务器发送 DHCP 请求，定期更新租约。 如果最初的服务器没有响应（由于网络问题），客户端可以尝试与网络上的任何 DHCP 服务器续约，这一过程称为重新绑定。

6. **动态 IP 配置**： DHCP 允许灵活管理 IP 地址。 设备可以在网络之间移动，并动态获得适当的 IP 配置，而无需人工干预。

7. **可扩展性和管理**： DHCP 可集中管理 IP 地址，减少 IP 地址冲突的可能性，从而简化网络管理。 它支持通过租期管理和重复使用来有效利用 IP 地址。

DHCP 在 OSI 模型的应用层（第 7 层）运行，是现代 IP 网络的基本协议，可实现无缝连接和高效资源管理。

#### DNS协议

暂无

#### HTTP协议

暂无

#### FTP协议

暂无

#### Telnet协议

Telnet is a network protocol used on the Internet or local area networks to provide a bidirectional interactive text-oriented communication facility using a virtual terminal connection. Here are the key aspects of Telnet:

1. **Purpose**: Telnet allows a user to establish a remote connection to another device over a network, typically to access a command-line interface (CLI) or run applications on the remote host as if they were directly connected.

2. **Protocol**: Telnet operates using the Telnet protocol, which is defined in RFC 854. It uses TCP (Transmission Control Protocol) as the underlying transport protocol and typically operates on port 23.

3. **Text-based Communication**: Telnet sessions are text-based, meaning that data exchanged between the client (local machine) and the server (remote host) is in the form of plain text. This includes commands, responses, and any other text-based interaction.

4. **Client-Server Model**: Telnet follows a client-server architecture where the client initiates a connection to the server. Once connected, the user can interact with the remote system as if they were physically present at the remote terminal.

5. **Authentication**: Telnet sessions may require authentication depending on the configuration of the remote server. This can involve username and password credentials to gain access to the system.

6. **Insecurity**: Telnet is considered insecure for modern network environments because it transmits data, including passwords, in plaintext format. This makes it vulnerable to eavesdropping and interception by malicious actors on the network.

7. **Usage**: Telnet was widely used in the early days of the internet and local networks for remote administration, troubleshooting, and accessing command-line interfaces of servers and networking devices. However, its usage has decreased significantly due to security concerns.

8. **Alternatives**: Secure Shell (SSH) has largely replaced Telnet in modern networks for remote access due to its encryption and enhanced security features, providing a safer method for remote administration and terminal access.

In summary, Telnet provides a straightforward way to establish remote terminal sessions over a network, but its lack of encryption and security vulnerabilities have limited its use in favor of more secure protocols like SSH.

Telnet 是一种网络协议，用于互联网或局域网，通过虚拟终端连接提供双向交互式文本通信设施。 以下是 Telnet 的主要方面：

1. **目的**： Telnet 允许用户通过网络与另一台设备建立远程连接，通常是为了访问命令行界面（CLI）或在远程主机上运行应用程序，就像直接连接一样。

2. **协议**： Telnet 使用 RFC 854 中定义的 Telnet 协议运行。 它使用 TCP（传输控制协议）作为底层传输协议，通常在端口 23 上运行。

3. **基于文本的通信**： Telnet 会话是基于文本的，这意味着客户端（本地机器）和服务器（远程主机）之间交换的数据是纯文本形式的。 这包括命令、响应和任何其他基于文本的交互。

4. **客户机-服务器模式**： Telnet 采用客户端-服务器架构，由客户端发起与服务器的连接。 一旦连接成功，用户就可以与远程系统进行交互，就像他们亲临远程终端一样。

5. **验证**： Telnet 会话可能需要身份验证，具体取决于远程服务器的配置。 这可能需要用户名和密码凭证才能访问系统。

6. **不安全**： Telnet 在现代网络环境中被认为是不安全的，因为它以明文格式传输数据（包括密码）。 这使得它很容易被网络上的恶意行为者窃听和拦截。

7. **使用**： Telnet 在互联网和本地网络发展初期被广泛用于远程管理、故障排除以及访问服务器和网络设备的命令行界面。 然而，出于安全考虑，其使用率已大幅下降。

8. **替代方案**： 安全外壳（SSH）因其加密和增强的安全功能，在现代网络远程访问中已在很大程度上取代了 Telnet，为远程管理和终端访问提供了更安全的方法。

总之，Telnet 提供了一种通过网络建立远程终端会话的直接方法，但其缺乏加密和安全漏洞限制了它的使用，而更安全的协议（如 SSH）则更受青睐。

## TCP/IP模型

TCP/IP (Transmission Control Protocol/Internet Protocol) is a suite of protocols that forms the basis for internet and network communication. Here are the key components and aspects of TCP/IP:

1. **Protocol Suite**: TCP/IP is a comprehensive suite of protocols, originally developed for ARPANET (the precursor to the modern internet), and standardized by the Internet Engineering Task Force (IETF). It includes a set of protocols that operate at different layers of the OSI model.

2. **Transmission Control Protocol (TCP)**:
   - **Connection-oriented**: TCP establishes a connection between two devices before transmitting data. It ensures reliable, ordered delivery of data by using acknowledgments, retransmissions, and error-checking mechanisms.
   - **Features**: TCP handles segmentation, flow control, congestion control, and error recovery. It guarantees delivery of data packets and ensures they arrive in the correct order.

3. **Internet Protocol (IP)**:
   - **Connectionless**: IP operates at the network layer (Layer 3) of the OSI model. It provides the basic addressing and routing mechanism that allows packets to be routed across networks.
   - **Packet Switching**: IP divides data into packets, each containing source and destination addresses. These packets are independently routed across various networks and reassembled at the destination.

4. **Other TCP/IP Protocols**:
   - **UDP (User Datagram Protocol)**: Provides a connectionless protocol for sending datagrams in a network. It is faster but less reliable than TCP, commonly used for real-time applications.
   - **ICMP (Internet Control Message Protocol)**: Used for error reporting, diagnostics, and management functions in IP networks.
   - **ARP (Address Resolution Protocol)**: Maps IP addresses to MAC addresses on a local network segment.

5. **Addressing**:
   - IP addresses (IPv4 and IPv6) are used to uniquely identify devices on a network. IPv4 addresses are 32-bit numerical addresses, while IPv6 addresses are 128-bit hexadecimal addresses.
   - IPv4 addresses are typically written in dotted-decimal notation (e.g., 192.168.1.1), and IPv6 addresses are written in hexadecimal notation (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

6. **Application Layer**: TCP/IP also encompasses protocols at the application layer (Layer 7), such as HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), and DNS (Domain Name System), which enable specific services and applications to operate over the internet.

7. **Use in Modern Networks**: TCP/IP is the foundational protocol suite used in virtually all modern networks, including the internet. It enables devices and networks to communicate, ensures data integrity, supports a variety of applications, and facilitates global connectivity.

Overall, TCP/IP is crucial for the interoperability and functioning of the internet and modern networks, providing standardized protocols for reliable, efficient, and scalable communication between devices and systems worldwide.

TCP/IP（传输控制协议/互联网协议）是一套协议，是互联网和网络通信的基础。 以下是 TCP/IP 的主要组成部分和方面：

1. **协议套件**： TCP/IP 是一套全面的协议，最初是为 ARPANET（现代互联网的前身）开发的，并由互联网工程任务组（IETF）标准化。 它包括一套在 OSI 模型不同层次上运行的协议。

2. **传输控制协议（TCP）**：
   - **面向连接**： TCP 在传输数据前在两个设备之间建立连接。 它通过使用确认、重传和错误检查机制，确保可靠、有序地传输数据。
   - **特点**： TCP 处理分段、流量控制、拥塞控制和错误恢复。 它保证数据包的传送，并确保数据包以正确的顺序到达。

3. **互联网协议（IP）**：
   - **无连接**： IP 在 OSI 模型的网络层（第 3 层）运行。 它提供基本的寻址和路由机制，允许数据包在网络间路由。
   - **数据包交换**： IP 将数据分为数据包，每个数据包都包含源地址和目标地址。 这些数据包在不同网络中独立路由，并在目的地重新组装。

4. **其他 TCP/IP 协议**：
   - **UDP（用户数据报协议）**： 为在网络中发送数据报提供了一种无连接协议。 它比 TCP 更快，但可靠性较低，常用于实时应用。
   - **ICMP （互联网控制报文协议）**： 用于 IP 网络中的错误报告、诊断和管理功能。
   - **ARP（地址解析协议）**： 将 IP 地址映射到本地网段上的 MAC 地址。

5. **地址**：
   - IP 地址（IPv4 和 IPv6）用于唯一标识网络上的设备。 IPv4 地址是 32 位数字地址，而 IPv6 地址是 128 位十六进制地址。
   - IPv4 地址通常用点十进制表示（如 192.168.1.1），IPv6 地址用十六进制表示（如 2001:0db8:85a3:0000:0000:8a2e:0370:7334）。

6. **应用层**： TCP/IP 还包括应用层（第 7 层）的协议，如 HTTP（超文本传输协议）、FTP（文件传输协议）、SMTP（简单邮件传输协议）和 DNS（域名系统），这些协议使特定服务和应用程序能够在互联网上运行。

7. **在现代网络中的应用**： TCP/IP 是几乎所有现代网络（包括互联网）使用的基础协议套件。 它使设备和网络能够通信，确保数据完整性，支持各种应用，并促进全球连接。

总之，TCP/IP 对于互联网和现代网络的互操作性和运行至关重要，它为全球设备和系统之间可靠、高效和可扩展的通信提供了标准化协议。

参考：

1. https://www.ruanyifeng.com/blog/2009/03/tcp-ip_model.html - *TCP/IP模型的一个简单解释 - 阮一峰的网络日志*
2. https://www.runoob.com/tcpip/tcpip-tutorial.html - *TCP/IP 教程 | 菜鸟教程*
3. https://baijiahao.baidu.com/s?id=1739517958748188465 - *什么是TCP？什么是UDP？它们有什么区别？*

### 链接层（Link Layer）

暂无

### 网络层（Network Layer）

暂无

### 传输层（Transport Layer）

暂无

### 应用层（Application Layer）

暂无

## 传输协议

应用层：

- HTTP
- [SSL/TLS](essential/http.md#ssltls)
- DNS
- FTP
- SMTP
- Bittorrent

传输层：

- TCP/UDP

其他：

- TCP/IP
- ICMP（Internet Control Message Protocol，因特网控制报文协议）
    - https://mp.weixin.qq.com/s/9zx1eRh_OiYu_gP8bgo_fw - *关于 Ping 的过程，你真的了解吗？*
- MAC地址（Media Access Control Address）

## 宽带速率

https://cloud.tencent.com/developer/article/1678884 - *99%的人都不知道内网、外网、宽带、带宽、流量、网速之间的区别与联系-腾讯云开发者社区-腾讯云*\
\> _via [articles/2024/we/20240201-科技爱好者周刊（第 306 期）.md at d0dbaf48884e15405342bb620a0a650edaf42089 · ruanyf/articles · GitHub](https://github.com/ruanyf/articles/blob/d0dbaf48884e15405342bb620a0a650edaf42089/2024/we/20240201-%E7%A7%91%E6%8A%80%E7%88%B1%E5%A5%BD%E8%80%85%E5%91%A8%E5%88%8A%EF%BC%88%E7%AC%AC%20306%20%E6%9C%9F%EF%BC%89.md)_

// TODO: 完善内容

计算方式：

1Mbps 属于的是 3G 网速，1Mbps = 128Kb/s，意思是 1M bit/s，而 1字节是 8bit，所以 1Mbps 换算成字节计算的理想通信速率是 `1 / 8 = 0.125 MB/s`，也就是 `0.125 * 1024 = 128 KB/s`。

bps = M bit/s
Bps = M Byte/s

1Byte/s = 8bit/s

Mbps 💱 KB/s

MBps 💱 MB/s



Mbps 是 Million bits per second 的缩写，Mbps = Mbit/s 即兆比特每秒，它的意思是时间内传输数据的平均比特数。

换算单位关系为：

1. 1Mbps = 1024Kbps

2. 1Kbps = 1,024bps

3. 1Mbps = 1,024 * 1,024 = 1,048,576bps

有时为了计算简单记作

1. 1Mbps = 1,000bps

2. 1Kbps = 1,000bps

3. 1Mbps = 1,000 * 1,000 = 1,000,000bps

> 在实际书写规范和应用中，大写 B 表示字节，小写 b 表示位，他们之间的换算关系为：1字节 = 8位，即 1Byte = 8bit，简写为 1B = 8b。
> 
> 示例：
> 
> 带宽为：1Mbps 时（运营商标称的带宽）
> 
> 实际网速为：1Mbps * 1024 / 8 = 128KBps（手机状态栏显示的网速：128K/s，即实际上网时的下载速度）
> 
> 参考：
> 1. https://baijiahao.baidu.com/s?id=1738193399054969334 - *一文读懂宽带、带宽、网速之间的区别与关系*
> 2. https://www.sohu.com/a/518052884_121107021 - *带宽是什么？_手机搜狐网*

开启手机应用 Shadowsocks 时：

- 手机状态栏显示当前下载网速：539KB/s
- 通知栏显示当前下载网速：108kB/s

参考：

1. https://baijiahao.baidu.com/s?id=1726067004455310126 - *1mbps是多少网速能干什么*

2. https://zhidao.baidu.com/question/249629492048758604/answer/4171572506.html - *1Mbps是多少兆的网络*

3. https://product.pconline.com.cn/itbk/top/1901/12271445.html - *1mbps什么意思-太平洋IT百科手机版*

4. https://baike.baidu.com/item/网络带宽/6120475 - *网络带宽_百度百科*

5. https://itc.jnmc.edu.cn/2021/1020/c1949a124583/pagem.htm - *一文读懂内网、外网、宽带、带宽、流量、网速之间的区别与联系！*

6. https://baijiahao.baidu.com/s?id=1761710048834795021 - *带宽与网速究竟有啥差别？其实是两个不同概念，很多人都分不清！*

## 术语表

- VPS（*Virtual Private Server*，虚拟专用服务器）
- ISP（*Internet Service Provider*，因特网服务提供商）
- ASN（*Autonomous System Number*，自治系统编号）
